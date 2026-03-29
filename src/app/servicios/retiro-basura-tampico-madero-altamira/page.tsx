import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata = {
    title: 'Retiro de Basura Profesional | Jardinería El Retoño',
    description: 'Servicio de retiro de basura y limpieza de jardines en Tampico, Madero y Altamira. Mantenemos tu espacio libre de desechos con recolección eficiente y responsable. ¡Contáctanos hoy!',
    keywords: [
        'retiro de basura',
        'limpieza de jardines',
        'recolección de desechos',
        'jardineria tampico',
        'jardineria altamira',
        'jardinería El Retoño',
        'limpieza de áreas verdes',
        'manejo de residuos',
        'limpieza de terrenos',
        'jardines limpios',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'servicio de limpieza en Tampico',
        'retiro de basura en Madero',
        'limpieza de jardines en Altamira',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Retiro de Basura Profesional | Jardinería El Retoño',
        description: 'Expertos en retiro de basura y limpieza de jardines. Mantenemos tu espacio libre de desechos con recolección eficiente y responsable.',
        url: 'https://elretono.org/servicios/retiro-basura-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [{ url: 'https://elretono.org/servicios-media/retiro-basura/1.webp', width: 1200, height: 630, alt: 'Retiro de basura profesional por Jardinería El Retoño' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Retiro de Basura Profesional | Jardinería El Retoño',
        description: 'Mantén tu jardín limpio y ordenado con nuestros servicios de retiro de basura profesional. Cotiza sin compromiso.',
        images: ['https://elretono.org/servicios-media/retiro-basura/1.webp'],
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
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://elretono.org/servicios/retiro-basura-tampico-madero-altamira" },
    "priceRange": "$$",
    "description": "Servicio profesional de retiro de basura y limpieza de jardines en Tampico, Madero y Altamira. Mantenemos tu espacio libre de desechos con recolección eficiente y responsable.",
    "areaServed": [{ "@type": "Place", "name": "Tampico" }, { "@type": "Place", "name": "Ciudad Madero" }, { "@type": "Place", "name": "Altamira" }],
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "18:00" },
};

export default function Page() {
    return (
        <ServicePageLayout
            breadcrumbLabel="Retiro de basura"
            jsonLd={jsonLd}
            heroImage="/servicios-media/retiro-basura/1.webp"
            heroImageAlt="Retiro de basura y limpieza de jardines en Tampico"
            title="Retiro de Basura y Limpieza de Jardines"
            tagline="Dejamos tu propiedad limpia y libre de todo desecho."
            benefits={[
                'Retiro de escombro, ramas, poda y basura en general',
                'Camiones y equipo propio para carga pesada',
                'Recolección rápida y eficiente, mismo día',
                'Manejo responsable y respetuoso con el medio ambiente',
            ]}
            description={
                <>
                    Un jardín hermoso requiere estar libre de basura y desechos. La acumulación de residuos no solo
                    afecta la estética, sino también la salud de tus plantas y el medio ambiente.
                    <br /><br />
                    En <strong>Jardinería El Retoño</strong>, ofrecemos servicios de <strong>retiro de basura profesional</strong> que
                    mantienen tu espacio limpio y ordenado. Nuestro equipo se encarga de la <strong>recolección eficiente</strong> de
                    todo tipo de desechos de jardín, desde hojas y ramas hasta materiales más pesados.
                    <br /><br />
                    Te garantizamos un <strong>manejo responsable</strong> de los residuos, con prácticas respetuosas con el
                    medio ambiente. Nuestro <strong>servicio puntual y confiable</strong> te libera de preocupaciones, permitiéndote
                    disfrutar de un jardín impecable en todo momento.
                </>
            }
            galleryImages={[
                '/servicios-media/retiro-basura/1.webp',
                '/servicios-media/retiro-basura/2.webp',
                '/servicios-media/retiro-basura/3.webp',
            ]}
            ctaTitle="Jardín limpio y ordenado, a un clic de distancia"
        />
    );
}
