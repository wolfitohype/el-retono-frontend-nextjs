'use client';

import { useEffect, useRef } from 'react';
import {
    captureAttribution,
    getStoredVisit,
    persistFbcCookie,
    postVisit,
    storeVisit,
} from '@/lib/tracking';

// Al primer mount captura fbclid + UTMs + referrer, crea una visita en backend
// y persiste visit_id + match_code en sessionStorage. Idempotente: si ya hay
// una visita en sesion no vuelve a llamar. useRef protege contra el doble
// disparo de StrictMode en dev.
export default function TrackingBootstrap() {
    const started = useRef(false);

    useEffect(() => {
        if (started.current || getStoredVisit()) return;
        started.current = true;

        const attr = captureAttribution();
        postVisit(attr).then((res) => {
            if (!res) return;
            storeVisit({ visit_id: res.visit_id, match_code: res.match_code });
            persistFbcCookie(res.fbc);
        });
    }, []);

    return null;
}
