import { getCookie, setCookie } from './cookies';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const SESSION_KEY = 'er_visit';
const FBC_COOKIE_DAYS = 90;
const FBP_COOKIE_DAYS = 90;

const UTM_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
] as const;

type UtmKey = (typeof UTM_KEYS)[number];

export interface Attribution {
    fbclid: string | null;
    fbp: string | null;
    referrer: string | null;
    landing_path: string;
    utm_source: string | null;
    utm_medium: string | null;
    utm_campaign: string | null;
    utm_content: string | null;
    utm_term: string | null;
}

export interface VisitResponse {
    visit_id: string;
    match_code: string;
    fbc: string | null;
    expires_in: number;
}

export interface StoredVisit {
    visit_id: string;
    match_code: string;
}

export function captureAttribution(): Attribution {
    if (typeof window === 'undefined') {
        return {
            fbclid: null,
            fbp: null,
            referrer: null,
            landing_path: '/',
            utm_source: null,
            utm_medium: null,
            utm_campaign: null,
            utm_content: null,
            utm_term: null,
        };
    }

    const params = new URLSearchParams(window.location.search);
    const fbclid = params.get('fbclid') || getCookieFbclid();

    const utms = UTM_KEYS.reduce<Record<UtmKey, string | null>>((acc, key) => {
        acc[key] = params.get(key);
        return acc;
    }, {} as Record<UtmKey, string | null>);

    return {
        fbclid,
        fbp: ensureFbp(),
        referrer: document.referrer || null,
        landing_path: window.location.pathname,
        ...utms,
    };
}

// Genera _fbp con formato Meta si aun no existe. El pixel respeta cookies
// _fbp pre-existentes, asi que no hay conflicto cuando carga despues.
// Resuelve la race condition entre TrackingBootstrap (useEffect) y el
// script del pixel (afterInteractive) en la primera visita.
function ensureFbp(): string {
    const existing = getCookie('_fbp');
    if (existing) return existing;
    const fbp = `fb.1.${Date.now()}.${randomDigits(10)}`;
    setCookie('_fbp', fbp, FBP_COOKIE_DAYS);
    return fbp;
}

function randomDigits(length: number): string {
    let out = '';
    while (out.length < length) {
        out += Math.floor(Math.random() * 1e9).toString();
    }
    return out.slice(0, length);
}

// Si el pixel ya escribio _fbc en una visita anterior, extraemos el fbclid.
// Formato Meta: "fb.1.<ms>.<fbclid>"
function getCookieFbclid(): string | null {
    const fbc = getCookie('_fbc');
    if (!fbc) return null;
    const parts = fbc.split('.');
    return parts.length === 4 ? parts[3] : null;
}

export async function postVisit(attr: Attribution): Promise<VisitResponse | null> {
    if (!API_URL) return null;
    try {
        const res = await fetch(`${API_URL}/tracking/visit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fbclid: attr.fbclid,
                fbp: attr.fbp,
                utm_source: attr.utm_source,
                utm_medium: attr.utm_medium,
                utm_campaign: attr.utm_campaign,
                utm_content: attr.utm_content,
                utm_term: attr.utm_term,
                referrer: attr.referrer,
                landing_path: attr.landing_path,
                client_event_time: Date.now(),
            }),
        });
        if (!res.ok) return null;
        return (await res.json()) as VisitResponse;
    } catch {
        return null;
    }
}

export interface WaClickPayload {
    visit_id: string;
    event_id: string;
    source_page: string;
    service?: string | null;
}

// Fire-and-forget. keepalive permite que la peticion sobreviva la navegacion
// a wa.me sin que el navegador la cancele.
export function postWaClick(payload: WaClickPayload): void {
    if (!API_URL) return;
    try {
        void fetch(`${API_URL}/tracking/wa-click`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            keepalive: true,
            body: JSON.stringify({
                ...payload,
                client_event_time: Date.now(),
            }),
        });
    } catch {
        // tracking nunca debe bloquear la apertura de WhatsApp
    }
}

export function storeVisit(visit: StoredVisit): void {
    if (typeof sessionStorage === 'undefined') return;
    try {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(visit));
    } catch {
        // sessionStorage puede fallar en modo privado o cuotas; silenciar
    }
}

export function getStoredVisit(): StoredVisit | null {
    if (typeof sessionStorage === 'undefined') return null;
    try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as StoredVisit;
        return parsed.visit_id && parsed.match_code ? parsed : null;
    } catch {
        return null;
    }
}

export function persistFbcCookie(fbc: string | null): void {
    if (!fbc) return;
    setCookie('_fbc', fbc, FBC_COOKIE_DAYS);
}
