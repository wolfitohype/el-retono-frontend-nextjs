import React from 'react';
import type {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {FaCheckCircle} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa6";
import ContactButton from "@/components/ContactButton";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: "Servicios de Jardinería Profesional | El Retoño | Tampico, Madero y Altamira",
    description: "Conoce todos nuestros servicios de jardinería profesional: poda de árboles, diseño 3D, fumigación, fertilización, venta de pasto y más en Tampico, Madero y Altamira.",
    keywords: [
        "servicios jardinería Tampico",
        "poda de árboles",
        "diseño de jardines",
        "fumigación",
        "fertilización",
        "venta de pasto",
        "mantenimiento áreas verdes",
    ],
    openGraph: {
        title: "Servicios de Jardinería | El Retoño",
        description: "Servicios profesionales de jardinería residencial, comercial e industrial en la zona conurbada de Tampico.",
        url: "https://elretono.org/servicios",
        siteName: "El Retoño Jardinería",
        images: [{
            url: "https://elretono.org/og-image.webp",
            width: 1200,
            height: 630,
            alt: "Servicios de jardinería profesional El Retoño"
        }],
        locale: "es_MX",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Servicios de Jardinería | El Retoño",
        description: "Poda, diseño 3D, fumigación, fertilización y más en Tampico, Madero y Altamira.",
        images: ["https://elretono.org/og-image.webp"],
    },
};

interface Servicio {
    name: string;
    imageUrl: string;
    link: string;
    tagline: string;
    benefits: string[];
}

const servicios: Servicio[] = [
    {
        name: 'Mantenimiento de jardines residenciales',
        imageUrl: '/servicios-media/mant-residencial.webp',
        link: '/servicios/jardineria-residencial-tampico-madero-altamira',
        tagline: 'Tu jardín siempre impecable, sin que tengas que preocuparte.',
        benefits: [
            'Planes semanales, quincenales o mensuales a tu medida',
            'Corte de pasto, poda de setos y limpieza general incluida',
            'Personal de confianza con años de experiencia',
            'Facturamos para empresas y particulares',
        ],
    },
    {
        name: 'Poda de árboles',
        imageUrl: '/servicios-media/poda-arboles.webp',
        link: '/servicios/poda-arboles-tampico-madero-altamira',
        tagline: 'Árboles sanos, controlados y presentables todo el año.',
        benefits: [
            'Podamos árboles grandes y difíciles con seguridad',
            'Retiro de basura generada incluido sin costo extra',
            'Visita sin costo para evaluar tu árbol',
            'Personal capacitado en trabajo en altura',
        ],
    },
    {
        name: 'Venta e instalación de pasto',
        imageUrl: '/servicios-media/pasto.webp',
        link: '/servicios/venta-pasto-tampico-madero-altamira',
        tagline: 'De terreno tierroso a jardín verde en un solo servicio.',
        benefits: [
            'Pasto Japonés y San Agustín de primera calidad',
            'Nivelación de terreno e instalación profesional completa',
            'Visita a domicilio para presupuesto sin compromiso',
            'Facturamos para empresas y particulares',
        ],
    },
    {
        name: 'Fertilización de áreas verdes',
        imageUrl: '/servicios-media/fertilizacion.webp',
        link: '/servicios/fertilizacion-tampico-madero-altamira',
        tagline: 'Dale a tu jardín los nutrientes que necesita para florecer.',
        benefits: [
            'Diagnóstico del suelo antes del tratamiento',
            'Productos de alta calidad, seguros para mascotas y familia',
            'Resultados visibles en pocas semanas',
            'Planes de fertilización periódica disponibles',
        ],
    },
    {
        name: 'Fumigación de áreas verdes',
        imageUrl: '/servicios-media/fumigacion.webp',
        link: '/servicios/fumigacion-tampico-madero-altamira',
        tagline: 'Elimina plagas y protege tus plantas de raíz.',
        benefits: [
            'Control de plagas e insectos dañinos con una sola visita',
            'Productos certificados, seguros para mascotas y niños',
            'Tratamientos preventivos y correctivos disponibles',
            'Atendemos áreas residenciales, comerciales e industriales',
        ],
    },
    {
        name: 'Póliza comercial de mantenimiento periódico',
        imageUrl: '/servicios-media/poliza.webp',
        link: '/servicios/mantenimiento-areas-verdes-tampico-madero-altamira',
        tagline: 'Un contrato, cero preocupaciones. Tu empresa siempre presentable.',
        benefits: [
            'Mantenimiento programado con precio fijo mensual',
            'Equipo y personal asignado exclusivamente para tu empresa',
            'Informes periódicos del estado de tus áreas verdes',
            'Facturación electrónica disponible para tu contabilidad',
        ],
    },
    {
        name: 'Retiro de basura y escombro',
        imageUrl: '/servicios-media/retiro-basura.webp',
        link: '/servicios/retiro-basura-tampico-madero-altamira',
        tagline: 'Dejamos tu propiedad limpia y libre de todo desecho.',
        benefits: [
            'Retiro de escombro, ramas, poda y basura en general',
            'Camiones y equipo propio para carga pesada',
            'Servicio rápido: solicitamos y coordinamos el mismo día',
            'Atendemos proyectos residenciales y comerciales',
        ],
    },
    {
        name: 'Diseño y previsualización 3D de jardines',
        imageUrl: '/servicios-media/3d.webp',
        link: '/servicios/diseno-3d-jardin-tampico-madero-altamira',
        tagline: 'Ve tu jardín terminado antes de invertir un solo peso.',
        benefits: [
            'Diseño completamente personalizado según tu espacio y estilo',
            'Renders realistas para que apruebes antes de construir',
            'Propuesta de plantas, materiales y distribución incluida',
            'Ideal para proyectos residenciales, comerciales y condominios',
        ],
    },
]

function Page() {
    return (
        <div className="w-full">
            <Breadcrumbs items={[
                { label: 'Inicio', href: '/' },
                { label: 'Servicios' },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Servicios de Jardinería El Retoño",
                "url": "https://elretono.org/servicios",
                "itemListElement": servicios.map((s, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "name": s.name,
                    "url": `https://elretono.org${s.link}`,
                })),
            })}} />
            {/* Header */}
            <div className="w-full bg-white py-14 px-6 flex flex-col items-center text-center space-y-4 border-b border-gray-100">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#2d3a1a] tracking-wide">
                    Nuestros Servicios
                </h1>
                <div className="w-28 h-[5px] bg-[#689a05] rounded-full"/>
                <p className="text-gray-500 text-lg lg:text-xl font-light max-w-xl">
                    Soluciones profesionales de jardinería para cada necesidad en Tampico, Madero y Altamira.
                </p>
            </div>

            {/* Separator */}
            <div className="w-full h-[6px] bg-[#689a05]"/>

            {/* Alternating sections */}
            {servicios.map((servicio, index) => {
                const isEven = index % 2 === 0;
                return (
                    <section
                        key={servicio.link}
                        className={`flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'} min-h-[420px]`}
                    >
                        {/* Image side */}
                        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto min-h-[280px]">
                            <Image
                                src={servicio.imageUrl}
                                alt={servicio.name}
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Content side */}
                        <div className={`w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-12 space-y-6 ${isEven ? 'bg-white' : 'bg-[#f5f7ee]'}`}>
                            {/* Number accent */}
                            <span className="text-8xl font-black text-[#689a05]/10 leading-none select-none -mb-4">
                                {String(index + 1).padStart(2, '0')}
                            </span>

                            <div className="space-y-2">
                                <h2 className="text-2xl lg:text-3xl font-bold text-[#2d3a1a] leading-tight">
                                    {servicio.name}
                                </h2>
                                <p className="text-[#689a05] font-medium text-lg italic">
                                    {servicio.tagline}
                                </p>
                            </div>

                            <ul className="space-y-3">
                                {servicio.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start space-x-3 text-gray-700">
                                        <FaCheckCircle className="text-[#689a05] mt-[3px] flex-shrink-0 size-4"/>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={servicio.link}
                                className="inline-flex items-center space-x-2 w-fit bg-[#4f5d32] hover:bg-[#29301A] active:bg-[#29301A] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#689a05] focus:ring-offset-2"
                            >
                                <span>Ver servicio completo</span>
                                <FaArrowRight className="size-4"/>
                            </Link>
                        </div>
                    </section>
                );
            })}

            {/* CTA Banner */}
            <div className="h-fit py-8 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-4 cursor-default">
                <p className="text-3xl font-bold">¿Listo para transformar tus áreas verdes?</p>
                <p className="text-lg font-light max-w-lg">Uno de nuestros asesores te contactará en minutos para darte un presupuesto sin compromiso.</p>
                <ContactButton text="CONTÁCTANOS AHORA" className="bg-white rounded-lg text-[#4f5d32] font-bold text-lg px-8 py-4"/>
            </div>
        </div>
    );
}

export default Page;
