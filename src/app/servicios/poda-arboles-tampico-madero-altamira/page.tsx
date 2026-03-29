import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata = {
    title: 'Poda de árboles | Jardinería El Retoño',
    description: 'Servicio de poda de árboles con retiro de basura incluido. Planes flexibles, facturación disponible. ¡Contáctanos hoy!',
    keywords: [
        'mantenimiento de jardines',
        'jardineria tampico',
        'poda de arboles tampico',
        'poda de arboles madero',
        'poda de arboles altamira',
        'mantenimiento áreas verdes',
        'jardinería El Retoño',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'tala de arboles tampico',
        'retiro de basura tampico',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Poda de árboles | Jardinería El Retoño',
        description: 'Expertos en poda de árboles. Servicio confiable y facturable. Atención personalizada y resultados impecables.',
        url: 'https://elretono.org/servicios/poda-arboles-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [{ url: 'https://elretono.org/servicios-media/poda-arboles/1.webp', width: 1200, height: 630, alt: 'Poda y mantenimiento de árboles por Jardinería El Retoño' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Poda de árboles | Jardinería El Retoño',
        description: 'Mantén a raya el crecimiento de tus árboles con nuestro equipo profesional. Cotiza sin compromiso.',
        images: ['https://elretono.org/servicios-media/poda-arboles/1.webp'],
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
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://elretono.org/servicios/poda-arboles-tampico-madero-altamira" },
    "priceRange": "$$",
    "description": "Poda de árboles y retiro de basura en Tampico, Madero y Altamira. Jardineros de confianza, servicios facturables y atención profesional.",
    "areaServed": [{ "@type": "Place", "name": "Tampico" }, { "@type": "Place", "name": "Ciudad Madero" }, { "@type": "Place", "name": "Altamira" }],
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "18:00" },
};

export default function Page() {
    return (
        <ServicePageLayout
            breadcrumbLabel="Poda de árboles"
            jsonLd={jsonLd}
            heroImage="/servicios-media/poda-arboles/4.webp"
            heroImageAlt="Poda de árboles en Tampico, Madero y Altamira"
            title="Poda de Árboles y Retiro de Basura"
            tagline="Árbol crecido? Nosotros nos encargamos."
            benefits={[
                'Facturamos para empresas y particulares',
                'Retiro de basura generada incluido sin costo extra',
                'Visita sin costo para evaluar tu árbol',
                'Podamos árboles grandes y difíciles con seguridad',
                'Personal capacitado en altura y manejo de herramientas',
            ]}
            description={
                <>
                    ¿Listo para darle a tus árboles el cuidado que merecen?
                    <br /><br />
                    En El Retoño somos tus aliados para la <strong>poda de árboles</strong>.
                    Ofrecemos planes flexibles, adaptándonos a tus necesidades, ya sean podas de temporada,
                    <strong> podas correctivas</strong> o un programa de poda continuo.
                    <br /><br />
                    No busques más un <strong>jardinero confiable</strong>; te garantizamos un servicio transparente,
                    atención personalizada y resultados que <strong>potenciarán el aspecto de tu propiedad y aumentarán su valor</strong>.
                    <br /><br />
                    Contáctanos y descubre cómo podemos transformar tus árboles en elementos dignos de admirar en tu jardín.
                </>
            }
            galleryImages={[
                '/servicios-media/poda-arboles/4.webp',
                '/servicios-media/poda-arboles/1.webp',
                '/servicios-media/poda-arboles/2.webp',
                '/servicios-media/poda-arboles/3.webp',
                '/servicios-media/poda-arboles/6.webp',
                '/servicios-media/poda-arboles/7.webp',
                '/servicios-media/poda-arboles/8.webp',
                '/servicios-media/poda-arboles/9.webp',
                '/servicios-media/poda-arboles/10.webp',
            ]}
            ctaTitle="Árboles limpios y presentables, a un clic de distancia"
        />
    );
}
