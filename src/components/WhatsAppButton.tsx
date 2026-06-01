'use client';

import { usePathname } from 'next/navigation';
import { getStoredVisit, postWaClick } from '@/lib/tracking';
import { buildWaUrl } from '@/lib/whatsapp';
import type React from 'react';

interface WhatsAppButtonProps {
    service?: string;
    className?: string;
    children: React.ReactNode;
    ariaLabel?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Boton de WhatsApp con tracking:
// - dispara Lead en el pixel con event_id + service (atribucion por servicio)
// - registra wa-click en backend
// - inyecta el folio en el mensaje si hay visita conocida
// - degrada limpio: si no hay match_code aun, abre wa.me sin folio
export default function WhatsAppButton({
    service,
    className,
    children,
    ariaLabel = 'Contactar a El Retoño por WhatsApp',
    onClick,
}: WhatsAppButtonProps) {
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        onClick?.(e);

        const visit = getStoredVisit();
        const eventId = crypto.randomUUID();

        window.fbq?.(
            'track',
            'Lead',
            { content_name: service ?? null },
            { eventID: eventId },
        );

        if (visit) {
            postWaClick({
                visit_id: visit.visit_id,
                event_id: eventId,
                source_page: pathname || '/',
                service: service ?? null,
            });
            // Sobrescribe el href con la version con folio antes de que el
            // navegador procese la accion default del <a target="_blank">.
            e.currentTarget.href = buildWaUrl(visit.match_code);
        }
    };

    return (
        <a
            href={buildWaUrl(null)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className={className}
            aria-label={ariaLabel}
        >
            {children}
        </a>
    );
}
