import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata = {
    title: 'Mantenimiento de Jardines Residenciales | Jardinería El Retoño',
    description: 'Servicios de mantenimiento de jardines residenciales con jardineros de confianza. Planes flexibles, facturación disponible y control profesional de plagas. ¡Contáctanos hoy!',
    keywords: [
        'mantenimiento de jardines',
        'jardineria tampico',
        'jardineria altamira',
        'jardinería residencial',
        'jardineros de confianza',
        'mantenimiento áreas verdes',
        'jardinería El Retoño',
        'fumigación de jardines',
        'fertilización de pasto',
        'jardines en perfectas condiciones',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'servicio de jardinería en Tampico',
        'mantenimiento de jardines en Madero',
        'jardinería residencial en Altamira',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Mantenimiento de Jardines Residenciales | Jardinería El Retoño',
        description: 'Expertos en mantenimiento de jardines para hogares. Servicio confiable y facturable. Atención personalizada y resultados impecables.',
        url: 'https://elretono.org/servicios/jardineria-residencial-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [{ url: 'https://elretono.org/servicios-media/mantenimiento-residencial/1.webp', width: 1200, height: 630, alt: 'Mantenimiento de jardines residenciales por Jardinería El Retoño' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mantenimiento de Jardines Residenciales | Jardinería El Retoño',
        description: 'Conserva tu jardín en perfectas condiciones con nuestro equipo profesional. Cotiza sin compromiso.',
        images: ['https://elretono.org/servicios-media/mantenimiento-residencial/1.webp'],
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
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://elretono.org/servicios/jardineria-residencial-tampico-madero-altamira" },
    "priceRange": "$$",
    "description": "Mantenimiento de jardines residenciales en Tampico, Madero y Altamira. Jardineros de confianza, servicios facturables y atención profesional.",
    "areaServed": [{ "@type": "Place", "name": "Tampico" }, { "@type": "Place", "name": "Ciudad Madero" }, { "@type": "Place", "name": "Altamira" }],
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "18:00" },
};

export default function Page() {
    return (
        <ServicePageLayout
            breadcrumbLabel="Jardinería residencial"
            jsonLd={jsonLd}
            heroImage="/servicios-media/mantenimiento-residencial/1.webp"
            heroImageAlt="Mantenimiento de jardines residenciales en Tampico"
            title="Mantenimiento de Jardines Residenciales"
            tagline="Tu jardín siempre impecable, sin que tengas que preocuparte."
            benefits={[
                'Facturamos para empresas y particulares',
                'Jardineros de confianza con años de experiencia',
                'Planes semanales, quincenales o mensuales a tu medida',
                'Te liberamos del estrés que conlleva mantener un jardín',
            ]}
            description={
                <>
                    Imagina un jardín que siempre se vea impecable, vibrante y lleno de vida.
                    <br /><br />
                    En <strong>Jardinería El Retoño</strong>, transformamos esa visión en tu realidad diaria.
                    Nuestro equipo de <strong>jardineros de confianza</strong> se encarga de cada detalle, desde el corte de pasto
                    hasta la poda de setos, limpieza general y el control de malas hierbas.
                    <br /><br />
                    Ofrecemos <strong>mantenimiento de áreas verdes</strong> con <strong>fertilización</strong>, <strong>fumigación</strong> efectiva
                    y <strong>control de plagas</strong> cuando lo necesitas. Te garantizamos un jardín bien cuidado con planes de
                    mantenimiento <strong>mensuales o quincenales</strong>, y visitas solo cuando estés disponible.
                </>
            }
            galleryImages={[
                '/servicios-media/mantenimiento-residencial/1.webp',
                '/servicios-media/mantenimiento-residencial/2.webp',
                '/servicios-media/mantenimiento-residencial/3.webp',
                '/servicios-media/mantenimiento-residencial/4.webp',
                '/servicios-media/mantenimiento-residencial/5.webp',
                '/servicios-media/mantenimiento-residencial/6.webp',
                '/servicios-media/mantenimiento-residencial/7.webp',
            ]}
            ctaTitle="Tu jardín bien cuidado, a un clic de distancia"
        />
    );
}
