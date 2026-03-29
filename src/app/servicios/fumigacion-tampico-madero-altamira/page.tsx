import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata = {
    title: 'Fumigación Profesional de Jardines | Jardinería El Retoño',
    description: 'Servicio de fumigación profesional para jardines en Tampico, Madero y Altamira. Control efectivo de plagas y protección para tus áreas verdes con métodos seguros. ¡Contáctanos hoy!',
    keywords: [
        'fumigación de jardines',
        'control de plagas',
        'fumigación profesional',
        'jardineria tampico',
        'jardineria altamira',
        'jardinería El Retoño',
        'eliminación de insectos',
        'protección de plantas',
        'tratamiento contra plagas',
        'jardines saludables',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'servicio de fumigación en Tampico',
        'fumigación de jardines en Madero',
        'control de plagas en Altamira',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Fumigación Profesional de Jardines | Jardinería El Retoño',
        description: 'Expertos en fumigación de jardines y control de plagas. Protegemos tus áreas verdes con métodos seguros y efectivos.',
        url: 'https://elretono.org/servicios/fumigacion-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [{ url: 'https://elretono.org/servicios-media/fumigacion/1.webp', width: 1200, height: 630, alt: 'Fumigación profesional de jardines por Jardinería El Retoño' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fumigación Profesional de Jardines | Jardinería El Retoño',
        description: 'Protege tu jardín contra plagas con nuestros servicios de fumigación profesional. Cotiza sin compromiso.',
        images: ['https://elretono.org/servicios-media/fumigacion/1.webp'],
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
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://elretono.org/servicios/fumigacion-tampico-madero-altamira" },
    "priceRange": "$$",
    "description": "Servicio profesional de fumigación de jardines en Tampico, Madero y Altamira. Control efectivo de plagas y protección para tus áreas verdes con métodos seguros.",
    "areaServed": [{ "@type": "Place", "name": "Tampico" }, { "@type": "Place", "name": "Ciudad Madero" }, { "@type": "Place", "name": "Altamira" }],
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "18:00" },
};

export default function Page() {
    return (
        <ServicePageLayout
            breadcrumbLabel="Fumigación"
            jsonLd={jsonLd}
            heroImage="/servicios-media/fumigacion/1.webp"
            heroImageAlt="Fumigación profesional de jardines en Tampico"
            title="Fumigación Profesional de Jardines"
            tagline="Elimina plagas y protege tus plantas de raíz."
            benefits={[
                'Productos de fumigación certificados y seguros',
                'Control integral de plagas e insectos dañinos',
                'Seguro para tu familia, mascotas y plantas',
                'Tratamientos preventivos y correctivos disponibles',
            ]}
            description={
                <>
                    Las plagas pueden destruir rápidamente la belleza y salud de tu jardín. Una fumigación
                    profesional es esencial para mantener tus áreas verdes protegidas.
                    <br /><br />
                    En <strong>Jardinería El Retoño</strong>, ofrecemos servicios de <strong>fumigación profesional</strong> que
                    eliminan eficazmente las plagas mientras protegen tus plantas. Nuestros especialistas utilizan
                    <strong> productos seguros</strong> y técnicas avanzadas para combatir insectos, hongos y otras amenazas
                    que pueden dañar tu jardín.
                    <br /><br />
                    Te garantizamos un <strong>control integral de plagas</strong> con métodos seguros para tu familia,
                    mascotas y el medio ambiente. Nuestros <strong>tratamientos preventivos</strong> no solo eliminan las
                    plagas actuales, sino que también ayudan a prevenir futuras infestaciones, manteniendo tu jardín
                    saludable todo el año.
                </>
            }
            galleryImages={[
                '/servicios-media/fumigacion/1.webp',
                '/servicios-media/fumigacion/2.webp',
            ]}
            ctaTitle="Protección para tu jardín, a un clic de distancia"
        />
    );
}
