import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata = {
    title: 'Fertilización Profesional de Jardines | Jardinería El Retoño',
    description: 'Servicio de fertilización profesional para jardines en Tampico, Madero y Altamira. Mejora la salud y apariencia de tu césped con nuestros tratamientos especializados. ¡Contáctanos hoy!',
    keywords: [
        'fertilización de jardines',
        'fertilización de césped',
        'fertilización profesional',
        'jardineria tampico',
        'jardineria altamira',
        'jardinería El Retoño',
        'nutrición de plantas',
        'mejorar césped',
        'tratamiento de suelos',
        'jardines saludables',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'servicio de fertilización en Tampico',
        'fertilización de jardines en Madero',
        'tratamiento de áreas verdes en Altamira',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Fertilización Profesional de Jardines | Jardinería El Retoño',
        description: 'Expertos en fertilización de jardines y áreas verdes. Mejoramos la salud y apariencia de tu césped con tratamientos especializados.',
        url: 'https://elretono.org/servicios/fertilizacion-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [{ url: 'https://elretono.org/servicios-media/fertilizacion/6.webp', width: 1200, height: 630, alt: 'Fertilización profesional de jardines por Jardinería El Retoño' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fertilización Profesional de Jardines | Jardinería El Retoño',
        description: 'Revitaliza tu jardín con nuestros servicios de fertilización profesional. Cotiza sin compromiso.',
        images: ['https://elretono.org/servicios-media/fertilizacion/6.webp'],
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
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://elretono.org/servicios/fertilizacion-tampico-madero-altamira" },
    "priceRange": "$$",
    "description": "Servicio profesional de fertilización de jardines en Tampico, Madero y Altamira. Mejoramos la salud y apariencia de tu césped con tratamientos especializados.",
    "areaServed": [{ "@type": "Place", "name": "Tampico" }, { "@type": "Place", "name": "Ciudad Madero" }, { "@type": "Place", "name": "Altamira" }],
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "18:00" },
};

export default function Page() {
    return (
        <ServicePageLayout
            breadcrumbLabel="Fertilización"
            jsonLd={jsonLd}
            heroImage="/servicios-media/fertilizacion/6.webp"
            heroImageAlt="Fertilización profesional de jardines en Tampico"
            title="Fertilización Profesional de Jardines"
            tagline="Dale a tu jardín los nutrientes que necesita para florecer."
            benefits={[
                'Fertilizantes de alta calidad y seguros',
                'Tratamientos personalizados según tipo de suelo',
                'Mejora visible en la salud y apariencia de tu jardín',
                'Planes de fertilización periódica disponibles',
            ]}
            description={
                <>
                    Un jardín verdaderamente hermoso comienza desde el suelo. La fertilización adecuada es fundamental
                    para mantener un césped vibrante y saludable.
                    <br /><br />
                    En <strong>Jardinería El Retoño</strong>, ofrecemos servicios de <strong>fertilización profesional</strong> que
                    nutren tu jardín desde la raíz. Nuestros especialistas analizan el tipo de suelo y las necesidades
                    específicas de tu jardín para aplicar los <strong>nutrientes esenciales</strong> que necesita.
                    <br /><br />
                    Te garantizamos resultados visibles: un césped más verde, plantas más fuertes y un jardín que resistirá
                    mejor las plagas y enfermedades. Nuestros <strong>tratamientos personalizados</strong> están diseñados para cada
                    estación del año, asegurando que tu jardín luzca espectacular todo el tiempo.
                </>
            }
            galleryImages={[
                '/servicios-media/fertilizacion/6.webp',
                '/servicios-media/mantenimiento-residencial/5.webp',
                '/servicios-media/mantenimiento-residencial/6.webp',
                '/servicios-media/fertilizacion/9.webp',
                '/servicios-media/fertilizacion/12.webp',
                '/servicios-media/fertilizacion/13.webp',
            ]}
            ctaTitle="Pasto siempre verde y saludable, a un clic de distancia"
        />
    );
}
