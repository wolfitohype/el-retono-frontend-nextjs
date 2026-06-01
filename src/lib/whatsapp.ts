export const WA_PHONE = '528335374089';

// Mensaje generico unico. El servicio NO se incluye en el texto visible
// (la gente del anuncio de un servicio puede preguntar por otro).
// La atribucion por servicio se registra solo en backend (wa_service) y en
// el content_name del evento Lead del pixel.
function buildMessage(matchCode: string | null): string {
    return matchCode
        ? `Estoy interesado en sus servicios 🌱 . Folio (${matchCode})`
        : 'Estoy interesado en sus servicios 🌱';
}

export function buildWaUrl(matchCode: string | null): string {
    const text = encodeURIComponent(buildMessage(matchCode));
    return `https://api.whatsapp.com/send?phone=${WA_PHONE}&text=${text}`;
}
