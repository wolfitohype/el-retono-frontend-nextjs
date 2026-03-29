import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata = {
    title: 'Diseño 3D de Jardines | Jardinería El Retoño',
    description: 'Servicio de diseño y previsualización 3D de jardines en Tampico, Madero y Altamira. Visualiza tu proyecto antes de implementarlo con nuestras representaciones digitales profesionales. ¡Contáctanos hoy!',
    keywords: [
        'diseño 3D de jardines',
        'previsualización de áreas verdes',
        'diseño digital de jardines',
        'jardineria tampico',
        'jardineria altamira',
        'jardinería El Retoño',
        'modelado 3D de exteriores',
        'planificación de jardines',
        'visualización de proyectos',
        'diseño paisajístico',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'servicio de diseño en Tampico',
        'diseño de jardines en Madero',
        'previsualización 3D en Altamira',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Diseño 3D de Jardines | Jardinería El Retoño',
        description: 'Expertos en diseño y previsualización 3D de jardines. Visualiza tu proyecto antes de implementarlo con nuestras representaciones digitales profesionales.',
        url: 'https://elretono.org/servicios/diseno-3d-jardin-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [{ url: 'https://elretono.org/servicios-media/diseno-3d/1.webp', width: 1200, height: 630, alt: 'Diseño 3D de jardines por Jardinería El Retoño' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Diseño 3D de Jardines | Jardinería El Retoño',
        description: 'Visualiza tu jardín ideal antes de crearlo con nuestros servicios de diseño 3D profesional. Cotiza sin compromiso.',
        images: ['https://elretono.org/servicios-media/diseno-3d/1.webp'],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jardinería El Retoño",
    "image": "https://elretono.org/logo.png",
    "logo": "https://elretono.org/logo.png",
    "email": "contacto@elretono.org",
    "url": "https://elretono.org",
    "telephone": "+52 833 537 4089",
    "address": { "@type": "PostalAddress", "addressLocality": "Tampico", "addressRegion": "Tamaulipas", "addressCountry": "MX" },
    "sameAs": ["https://www.facebook.com/profile.php?id=100071794055837", "https://www.instagram.com/elretono.tampico/", "https://wa.link/l9ejrd"],
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://elretono.org/servicios/diseno-3d-jardin-tampico-madero-altamira" },
    "priceRange": "$$",
    "description": "Servicio profesional de diseño y previsualización 3D de jardines en Tampico, Madero y Altamira. Visualiza tu proyecto antes de implementarlo con nuestras representaciones digitales profesionales.",
    "areaServed": [{ "@type": "Place", "name": "Tampico" }, { "@type": "Place", "name": "Ciudad Madero" }, { "@type": "Place", "name": "Altamira" }],
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "18:00" },
};

export default function Page() {
    return (
        <ServicePageLayout
            breadcrumbLabel="Diseño 3D de jardín"
            jsonLd={jsonLd}
            heroImage="/servicios-media/diseno-3d/1.webp"
            heroImageAlt="Diseño 3D de jardines en Tampico, Madero y Altamira"
            title="Diseño y Previsualización 3D de Jardines"
            tagline="Ve tu jardín terminado antes de invertir un solo peso."
            benefits={[
                'Renders realistas para que apruebes antes de construir',
                'Diseño personalizado según tu espacio y estilo',
                'Propuesta de plantas, materiales y distribución incluida',
                'Ajustes y modificaciones sin costo adicional',
            ]}
            description={
                <>
                    ¿Te has preguntado cómo se vería tu jardín ideal antes de invertir en su creación?
                    Nuestro servicio de diseño 3D te permite exactamente eso.
                    <br /><br />
                    En <strong>Jardinería El Retoño</strong>, ofrecemos <strong>diseño y previsualización 3D</strong> de áreas verdes
                    que te permiten ver tu proyecto desde todos los ángulos antes de implementarlo. Nuestros diseñadores
                    crean <strong>representaciones digitales realistas</strong> que muestran cómo se verá tu espacio con diferentes
                    plantas, elementos decorativos y distribuciones.
                    <br /><br />
                    Te garantizamos una <strong>planificación detallada</strong> que minimiza errores y maximiza la satisfacción con
                    el resultado final. Nuestras <strong>visualizaciones 3D</strong> te permiten hacer ajustes y modificaciones
                    antes de comenzar el trabajo físico, ahorrándote tiempo y recursos.
                </>
            }
            galleryImages={[
                '/servicios-media/diseno-3d/1.webp',
                '/servicios-media/diseno-3d/2.webp',
                '/servicios-media/diseno-3d/4.webp',
                '/servicios-media/diseno-3d/5.webp',
                '/servicios-media/diseno-3d/6.webp',
            ]}
            ctaTitle="Tu jardín ideal, visualizado antes de crearlo"
        />
    );
}
