import ServicePageLayout from '@/components/ServicePageLayout';

export const metadata = {
    title: 'Póliza Comercial de Mantenimiento de Áreas Verdes | Jardinería El Retoño',
    description: 'Póliza de mantenimiento periódico de áreas verdes para empresas en Tampico, Madero y Altamira. Precio fijo mensual, facturación electrónica y equipo asignado. ¡Cotiza hoy!',
    keywords: [
        'mantenimiento de áreas verdes comercial',
        'póliza de jardinería empresas',
        'mantenimiento áreas verdes tampico',
        'jardinería para empresas tampico',
        'mantenimiento áreas verdes madero',
        'mantenimiento áreas verdes altamira',
        'jardinería El Retoño',
        'jardinero empresarial',
        'contrato de jardinería',
        'jardinería industrial tampico',
        'mantenimiento periódico jardines',
        'jardinería comercial Tampico',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Póliza Comercial de Mantenimiento de Áreas Verdes | Jardinería El Retoño',
        description: 'Mantenimiento periódico de áreas verdes para empresas. Precio fijo, equipo asignado y facturación electrónica en Tampico, Madero y Altamira.',
        url: 'https://elretono.org/servicios/mantenimiento-areas-verdes-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [{ url: 'https://elretono.org/servicios-media/poliza.webp', width: 1200, height: 630, alt: 'Póliza de mantenimiento de áreas verdes comerciales por Jardinería El Retoño' }],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Póliza Comercial de Áreas Verdes | Jardinería El Retoño',
        description: 'Un contrato, cero preocupaciones. Tu empresa siempre presentable. Cotiza sin compromiso.',
        images: ['https://elretono.org/servicios-media/poliza.webp'],
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
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://elretono.org/servicios/mantenimiento-areas-verdes-tampico-madero-altamira" },
    "priceRange": "$$",
    "description": "Póliza de mantenimiento periódico de áreas verdes para empresas e industrias en Tampico, Madero y Altamira. Precio fijo mensual, equipo asignado y facturación electrónica disponible.",
    "areaServed": [{ "@type": "Place", "name": "Tampico" }, { "@type": "Place", "name": "Ciudad Madero" }, { "@type": "Place", "name": "Altamira" }],
    "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "18:00" },
};

export default function Page() {
    return (
        <ServicePageLayout
            breadcrumbLabel="Póliza comercial de mantenimiento"
            jsonLd={jsonLd}
            heroImage="/servicios-media/poliza.webp"
            heroImageAlt="Mantenimiento de áreas verdes comerciales en Tampico"
            title="Póliza Comercial de Mantenimiento de Áreas Verdes"
            tagline="Un contrato, cero preocupaciones. Tu empresa siempre presentable."
            benefits={[
                'Precio fijo mensual sin costos ocultos',
                'Personal y equipo asignados exclusivamente para tu empresa',
                'Incluye corte de pasto, poda, fumigación y fertilización',
                'Facturación electrónica disponible para tu contabilidad',
                'Informes periódicos del estado de tus áreas verdes',
            ]}
            description={
                <>
                    La imagen de tu empresa empieza desde afuera. Unas áreas verdes descuidadas transmiten
                    abandono; unas bien mantenidas proyectan profesionalismo y cuidado por el detalle.
                    <br /><br />
                    En <strong>Jardinería El Retoño</strong> ofrecemos <strong>pólizas de mantenimiento comercial</strong> diseñadas
                    para empresas, corporativos, condominios e industrias. Con un solo contrato, asignamos un equipo
                    dedicado que visita tus instalaciones de forma programada —semanal, quincenal o mensual— para
                    mantener tus áreas verdes impecables durante todo el año.
                    <br /><br />
                    El servicio incluye <strong>corte de pasto, poda de setos, retiro de basura, fertilización y fumigación</strong>
                    preventiva. Todo con <strong>facturación electrónica</strong> y precio fijo que facilita tu presupuesto mensual.
                    Sin sorpresas, sin complicaciones.
                </>
            }
            galleryImages={[
                '/servicios-media/mantenimiento-residencial/1.webp',
                '/servicios-media/mantenimiento-residencial/2.webp',
                '/servicios-media/mantenimiento-residencial/3.webp',
                '/servicios-media/mantenimiento-residencial/4.webp',
                '/servicios-media/mantenimiento-residencial/5.webp',
                '/servicios-media/mantenimiento-residencial/6.webp',
            ]}
            ctaTitle="Áreas verdes siempre impecables para tu empresa"
        />
    );
}
