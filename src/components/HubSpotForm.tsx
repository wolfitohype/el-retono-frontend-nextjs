'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
  redirectUrl?: string;
}

export default function HubSpotForm({
  portalId,
  formId,
  region = 'na1',
  redirectUrl = '/landing/gracias'
}: HubSpotFormProps) {
  const formRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Cargar el script principal de HubSpot
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/50515278.js';
    script.defer = true;

    script.onload = () => {
      // Esperar a que el formulario se cargue y agregar listener
      const checkFormLoaded = setInterval(() => {
        const form = document.querySelector('.hs-form');
        if (form) {
          clearInterval(checkFormLoaded);

          // Escuchar el evento de envío del formulario
          form.addEventListener('submit', (e) => {
            // Esperar a que HubSpot procese el formulario
            setTimeout(() => {
              // Intentar capturar el GUID de la URL de redirección que HubSpot genera
              const currentUrl = window.location.href;
              const urlParams = new URLSearchParams(window.location.search);
              const submissionGuid = urlParams.get('submissionGuid');

              // Si hay GUID, redirigir con él
              if (submissionGuid) {
                router.push(`${redirectUrl}?submissionGuid=${submissionGuid}`);
              } else {
                // Si no hay GUID todavía, escuchar el evento de HubSpot
                window.addEventListener('message', (event) => {
                  if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
                    // Redirigir después de 1 segundo para dar tiempo a HubSpot
                    setTimeout(() => {
                      router.push(redirectUrl);
                    }, 1000);
                  }
                });
              }
            }, 500);
          });
        }
      }, 100);

      // Limpiar el interval después de 10 segundos si no se encuentra el form
      setTimeout(() => clearInterval(checkFormLoaded), 10000);
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [portalId, formId, redirectUrl, router]);

  return (
    <div
      ref={formRef}
      className="hs-form-frame"
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
    />
  );
}

// Declaración de tipo para window
declare global {
  interface Window {
    hbspt: any;
  }
}
