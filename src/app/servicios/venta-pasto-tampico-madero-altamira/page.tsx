import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata = {
    title: 'Venta e Instalación de Pasto | Jardinería El Retoño',
    description: 'Venta e instalación de pasto japonés y San Agustín en Tampico, Madero y Altamira. Pasto de la mejor calidad con instalación profesional. ¡Cotiza hoy!',
    keywords: [
        'venta de pasto tampico',
        'instalacion de pasto tampico',
        'pasto japonés tampico',
        'pasto san agustín tampico',
        'venta de pasto madero',
        'venta de pasto altamira',
        'jardinería El Retoño',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'pasto natural tampico',
        'césped tampico',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Venta e Instalación de Pasto | Jardinería El Retoño',
        description: 'Venta e instalación de pasto japonés y San Agustín. Servicio confiable y facturable en Tampico, Madero y Altamira.',
        url: 'https://elretono.org/servicios/venta-pasto-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [{ url: 'https://elretono.org/servicios-media/venta-pasto/1.webp', width: 1200, height: 630, alt: 'Venta e instalación de pasto por Jardinería El Retoño' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Venta e Instalación de Pasto | Jardinería El Retoño',
        description: 'Pasto japonés y San Agustín de primera calidad, con instalación profesional. Cotiza sin compromiso.',
        images: ['https://elretono.org/servicios-media/venta-pasto/1.webp'],
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
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://elretono.org/servicios/venta-pasto-tampico-madero-altamira" },
    "priceRange": "$$",
    "description": "Venta e instalación de pasto japonés y San Agustín en Tampico, Madero y Altamira. Pasto de la mejor calidad con instalación profesional.",
    "areaServed": [{ "@type": "Place", "name": "Tampico" }, { "@type": "Place", "name": "Ciudad Madero" }, { "@type": "Place", "name": "Altamira" }],
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "18:00" },
};

export default function Page() {
    return (
        <ServicePageLayout
            breadcrumbLabel="Venta de pasto"
            jsonLd={jsonLd}
            heroImage="/servicios-media/venta-pasto/1.webp"
            heroImageAlt="Venta e instalación de pasto en Tampico"
            title="Venta e Instalación de Pasto"
            tagline="De terreno tierroso a jardín verde en un solo servicio."
            benefits={[
                'Facturamos para empresas y particulares',
                'Venta de pasto Japonés y San Agustín de primera calidad',
                'Nivelación de terreno e instalación profesional completa',
                'Visita a domicilio para presupuesto sin compromiso',
            ]}
            description={
                <>
                    ¿Sueñas con poder caminar descalzo en un pasto suave y verde?
                    <br /><br />
                    En Jardinería El Retoño, convertimos ese sueño en una realidad.
                    Sabemos que un buen pasto es la base de un jardín espectacular,
                    por eso ofrecemos la <strong>venta de pasto en rollo</strong> de la más alta calidad,
                    ya sea <strong>San Agustín o Japonés</strong>, los más resistentes al clima de la zona.
                    <br /><br />
                    No solo vendemos el pasto, te brindamos la solución completa:
                    desde la <strong>preparación y nivelación del terreno</strong> hasta la <strong>instalación profesional</strong>,
                    para que tenga un crecimiento sano y una apariencia de lujo desde el primer día.
                </>
            }
            galleryImages={[
                '/servicios-media/venta-pasto/2.webp',
                '/servicios-media/venta-pasto/3.webp',
                '/servicios-media/venta-pasto/4.webp',
                '/servicios-media/venta-pasto/5.webp',
                '/servicios-media/venta-pasto/6.webp',
                '/servicios-media/venta-pasto/7.webp',
                '/servicios-media/venta-pasto/8.webp',
                '/servicios-media/venta-pasto/9.webp',
                '/servicios-media/venta-pasto/10.webp',
                '/servicios-media/venta-pasto/11.webp',
                '/servicios-media/venta-pasto/12.webp',
            ]}
            ctaTitle="Patio siempre verde y vibrante, a un clic de distancia"
        />
    );
}
