import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import CountUpDividerClient from "@/components/CountUpDividerClient";
import ItemCarousel from "@/components/ItemCarousel";
import ReviewCard from "@/components/ReviewCard";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const WA_URL = "https://api.whatsapp.com/send?phone=528335374089&text=Estoy%20interesado%20en%20sus%20servicios%20%F0%9F%8C%B1";

const servicios = [
    {
        name: 'Mantenimiento Residencial',
        image: '/servicios-media/mant-residencial.webp',
        imageAlt: 'Mantenimiento de jardines residenciales en Tampico, Madero y Altamira',
        link: '/servicios/jardineria-residencial-tampico-madero-altamira',
        tagline: 'Tu jardín siempre impecable',
    },
    {
        name: 'Poda de Árboles',
        image: '/servicios-media/poda-arboles.webp',
        imageAlt: 'Poda profesional de árboles en Tampico, Madero y Altamira',
        link: '/servicios/poda-arboles-tampico-madero-altamira',
        tagline: 'Control profesional y seguro',
    },
    {
        name: 'Venta e Instalación de Pasto',
        image: '/servicios-media/pasto.webp',
        imageAlt: 'Venta e instalación de pasto japonés y San Agustín en Tampico',
        link: '/servicios/venta-pasto-tampico-madero-altamira',
        tagline: 'De tierra a jardín verde',
    },
    {
        name: 'Fertilización de Áreas Verdes',
        image: '/servicios-media/fertilizacion.webp',
        imageAlt: 'Fertilización de áreas verdes y jardines en Tampico',
        link: '/servicios/fertilizacion-tampico-madero-altamira',
        tagline: 'Plantas sanas y vibrantes',
    },
    {
        name: 'Fumigación',
        image: '/servicios-media/fumigacion.webp',
        imageAlt: 'Fumigación de jardines y áreas verdes en Tampico y Altamira',
        link: '/servicios/fumigacion-tampico-madero-altamira',
        tagline: 'Sin plagas, sin preocupaciones',
    },
    {
        name: 'Póliza Comercial',
        image: '/servicios-media/poliza.webp',
        imageAlt: 'Póliza de mantenimiento de áreas verdes comerciales en Tampico',
        link: '/servicios/mantenimiento-areas-verdes-tampico-madero-altamira',
        tagline: 'Tu empresa siempre presentable',
    },
    {
        name: 'Retiro de Basura',
        image: '/servicios-media/retiro-basura.webp',
        imageAlt: 'Retiro de basura y escombro en jardines de Tampico y Madero',
        link: '/servicios/retiro-basura-tampico-madero-altamira',
        tagline: 'Limpieza total garantizada',
    },
    {
        name: 'Diseño 3D de Jardines',
        image: '/servicios-media/3d.webp',
        imageAlt: 'Diseño y previsualización 3D de jardines en Tampico',
        link: '/servicios/diseno-3d-jardin-tampico-madero-altamira',
        tagline: 'Tu jardín ideal antes de construirlo',
    },
];

const clientes = [
    { src: '/clientes/potosi.webp', alt: 'Seguros El Potosí — cliente de El Retoño Jardinería' },
    { src: '/clientes/oxxo.png', alt: 'OXXO — cliente de El Retoño Jardinería' },
    { src: '/clientes/azulejos.webp', alt: 'Gigante de Azulejos — cliente de El Retoño Jardinería' },
    { src: '/clientes/bancario.webp', alt: 'Fraccionamiento Bancario — cliente de El Retoño Jardinería' },
    { src: '/clientes/floresta.webp', alt: 'Fraccionamiento Floresta — cliente de El Retoño Jardinería' },
    { src: '/clientes/kenworth.webp', alt: 'Kenworth de la Huasteca — cliente de El Retoño Jardinería' },
    { src: '/clientes/tampiquenos.webp', alt: 'Tampiquenos — cliente de El Retoño Jardinería' },
    { src: '/clientes/esperanza.webp', alt: 'Grupo Esperanza — cliente de El Retoño Jardinería' },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://elretono.org/#webpage",
    name: "El Retoño Jardinería | Tampico, Madero y Altamira",
    url: "https://elretono.org",
    description: "Jardinería profesional residencial y empresarial en Tampico, Madero y Altamira. Más de 15 años de experiencia.",
    inLanguage: "es-MX",
    isPartOf: { "@id": "https://elretono.org/#website" },
    about: { "@id": "https://elretono.org/#business" },
    review: [
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Amaite Solis" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "Excelente servicio, calidad y trato",
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Marco Trejo" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "Excelente servicio, 100% recomendado",
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "David Humberto" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "Muy puntuales y excelente trabajo",
        },
        {
            "@type": "Review",
            author: { "@type": "Person", name: "Ivonne Chavez" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "100% recomendados, muy bonitos trabajos los que hacen",
        },
    ],
};

export const metadata = {
    title: "El Retoño Jardinería | Expertos en Jardinería en Tampico, Madero y Altamira",
    description: "Jardinería profesional residencial y empresarial en Tampico, Madero y Altamira. Más de 15 años, registro REPSE y facturación electrónica. Cotiza sin costo.",
    keywords: [
        "jardinería Tampico",
        "servicios de jardinería",
        "poda de árboles Tampico",
        "diseño de jardines 3D",
        "fumigación de jardines",
        "mantenimiento de áreas verdes",
        "El Retoño Jardinería",
        "jardinería Madero",
        "jardinería Altamira",
    ],
    authors: [{ name: "El Retoño Jardinería", url: "https://elretono.org" }],
    creator: "El Retoño Jardinería",
    publisher: "El Retoño Jardinería",
    openGraph: {
        title: "El Retoño Jardinería | Tampico, Madero y Altamira",
        description: "Jardinería profesional para hogares y empresas. 15+ años, facturación electrónica y registro REPSE.",
        url: "https://elretono.org",
        siteName: "El Retoño Jardinería",
        images: [
            {
                url: "https://elretono.org/og-image.webp",
                width: 1200,
                height: 630,
                alt: "El Retoño Jardinería - Jardines Profesionales en Tampico, Madero y Altamira"
            }
        ],
        locale: "es_MX",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "El Retoño Jardinería | Tampico, Madero y Altamira",
        description: "Más de 15 años manteniendo jardines en Tampico, Madero y Altamira. Cotiza sin costo.",
        images: ["https://elretono.org/og-image.webp"],
    },
    metadataBase: new URL("https://elretono.org"),
    alternates: {
        canonical: "/",
        languages: { "es-MX": "/" },
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: { index: true, follow: true, noimageindex: false },
    },
};

function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* ── HERO ────────────────────────────────────────────── */}
            <section aria-label="Bienvenida" className="relative min-h-screen flex items-center overflow-hidden">
                <Image
                    src="/hero.webp"
                    fill
                    priority
                    alt="Jardín profesional con palmera diseñado por El Retoño Jardinería en Tampico"
                    className="object-cover object-[center_80%]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-32 flex flex-col items-start">

                    <div className="flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-10">
                        <span className="w-2 h-2 rounded-full bg-[#8ab82a] flex-shrink-0" />
                        <span className="text-white/80 text-xs tracking-[0.2em] uppercase font-medium">
                            Tampico · Madero · Altamira
                        </span>
                    </div>

                    <h1 className="leading-none mb-8">
                        <span className="block text-white font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight">
                            JARDINERÍA
                        </span>
                        <span className="block text-[#8ab82a] font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight">
                            PROFESIONAL
                        </span>
                        <span className="block text-white/70 font-light text-2xl sm:text-3xl lg:text-4xl mt-3 tracking-normal">
                            para tu hogar y empresa.
                        </span>
                    </h1>

                    <p className="text-white/60 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
                        Más de 15 años transformando áreas verdes con calidad, confianza y resultados reales. Cotización sin costo, mismo día.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-14">
                        <a
                            href={WA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Cotizar por WhatsApp con El Retoño Jardinería"
                            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb557] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/40 hover:-translate-y-0.5 text-base sm:text-lg"
                        >
                            <FaWhatsapp className="size-5" />
                            Cotiza por WhatsApp
                        </a>
                        <ContactButton
                            text="Solicitar información"
                            className="!bg-white/10 !text-white border border-white/30 hover:!border-white/60 !rounded-xl !px-8 !py-4 text-base sm:text-lg !font-semibold !shadow-none hover:!bg-white/20 hover:!text-white"
                        />
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/50 text-sm">
                        {[
                            '15+ años de experiencia',
                            '500+ clientes satisfechos',
                            'Facturación electrónica',
                            'Registro REPSE',
                        ].map((item) => (
                            <span key={item} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#689a05] flex-shrink-0" />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
                    <div className="w-px h-14 bg-gradient-to-b from-transparent to-white" />
                </div>
            </section>

            {/* ── CLIENTES ────────────────────────────────────────── */}
            <section aria-label="Clientes que confían en El Retoño" className="bg-white py-14 px-6 border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-xs tracking-[0.3em] uppercase text-gray-400 font-medium mb-10">
                        Empresas que confían en nosotros
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-8 items-center justify-items-center">
                        {clientes.map((cliente) => (
                            <div
                                key={cliente.alt}
                                className="relative w-28 h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                            >
                                <Image
                                    src={cliente.src}
                                    alt={cliente.alt}
                                    fill
                                    className="object-contain"
                                    sizes="112px"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THIN SEPARATOR ──────────────────────────────────── */}
            <div className="w-full h-[4px] bg-[#689a05]" role="separator" />

            {/* ── SERVICIOS ───────────────────────────────────────── */}
            <section aria-label="Nuestros servicios de jardinería" className="bg-[#f5f7ee] py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <header className="flex flex-col items-center text-center mb-16">
                        <p className="text-xs tracking-[0.3em] uppercase text-[#689a05] font-semibold mb-3">
                            Lo que hacemos
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-black text-[#2d3a1a] leading-tight">
                            Nuestros Servicios
                        </h2>
                        <div className="w-16 h-1 bg-[#689a05] rounded-full mt-5" />
                        <p className="text-gray-500 mt-4 max-w-lg text-sm leading-relaxed">
                            Soluciones integrales de jardinería para hogares, empresas e industrias en Tampico, Madero y Altamira.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {servicios.map((s) => (
                            <Link
                                key={s.link}
                                href={s.link}
                                title={s.imageAlt}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                            >
                                <div className="relative h-48 overflow-hidden flex-shrink-0">
                                    <Image
                                        src={s.image}
                                        alt={s.imageAlt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="w-8 h-0.5 bg-[#689a05] mb-3" />
                                    <h3 className="font-bold text-[#2d3a1a] text-sm leading-snug mb-1 flex-1">
                                        {s.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 italic mb-4">{s.tagline}</p>
                                    <span className="flex items-center gap-1.5 text-[#689a05] text-xs font-bold group-hover:gap-3 transition-all duration-300">
                                        Ver servicio <FaArrowRight className="size-3" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <Link
                            href="/servicios"
                            title="Ver todos los servicios de jardinería de El Retoño"
                            className="flex items-center gap-2 bg-[#4f5d32] hover:bg-[#2d3a1a] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                        >
                            Ver todos los servicios
                            <FaArrowRight className="size-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── ESTADÍSTICAS ────────────────────────────────────── */}
            <CountUpDividerClient />

            {/* ── REVIEWS ─────────────────────────────────────────── */}
            <section aria-label="Opiniones de clientes de El Retoño Jardinería" className="bg-[#1a2410] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center text-center mb-12">
                        <p className="text-xs tracking-[0.3em] uppercase text-[#8ab82a] font-semibold mb-3">
                            Testimonios
                        </p>
                        <h2 className="text-4xl font-black text-white">
                            Lo que dicen nuestros clientes
                        </h2>
                        <div className="w-16 h-1 bg-[#689a05] rounded-full mt-4" />
                    </div>
                    <ItemCarousel>
                        <ReviewCard rating={5} title="Excelente servicio" comments="Excelente servicio, calidad y trato" name="Amaite Solis" profileUrl="/reviews/AS.jpg" />
                        <ReviewCard rating={5} title="Excelente servicio" comments="Excelente servicio, 100% recomendado" name="Marco Trejo" profileUrl="/reviews/MT.jpg" />
                        <ReviewCard rating={5} title="Muy buen servicio" comments="Muy puntuales y excelente trabajo" name="David Humberto" profileUrl="/reviews/DM.jpg" />
                        <ReviewCard rating={5} title="100% recomendados, muy bonitos trabajos los que hacen" comments="" name="Ivonne Chavez" profileUrl="/reviews/IC.jpg" />
                    </ItemCarousel>
                </div>
            </section>

            {/* ── FINAL CTA ───────────────────────────────────────── */}
            <section aria-label="Contacto" className="grid grid-cols-1 lg:grid-cols-2">
                <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contactar a El Retoño Jardinería por WhatsApp"
                    className="group bg-[#25D366] hover:bg-[#1fb557] transition-colors duration-300 flex flex-col items-center justify-center gap-5 py-20 px-8 text-center"
                >
                    <FaWhatsapp className="size-16 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div>
                        <h2 className="text-white font-black text-2xl lg:text-3xl leading-snug">
                            Escríbenos por WhatsApp
                        </h2>
                        <p className="text-white/70 text-sm mt-1">
                            Respuesta en minutos · Cotización gratis
                        </p>
                    </div>
                    <span className="flex items-center gap-2 bg-white/20 group-hover:bg-white/30 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm">
                        Abrir WhatsApp <FaArrowRight className="size-3.5" />
                    </span>
                </a>

                <div className="bg-[#2d3a1a] flex flex-col items-center justify-center gap-5 py-20 px-8 text-center">
                    <p className="text-white/30 text-xs tracking-[0.25em] uppercase">O si prefieres</p>
                    <div>
                        <h2 className="text-white font-black text-2xl lg:text-3xl leading-snug">
                            Déjanos tus datos
                        </h2>
                        <p className="text-white/50 text-sm mt-1">
                            Te contactamos a la brevedad
                        </p>
                    </div>
                    <ContactButton
                        text="Enviar mensaje"
                        className="!bg-[#689a05] hover:!bg-[#7aad06] !text-white !rounded-xl !px-10 !py-4 !font-bold !text-base !shadow-none hover:!text-white"
                    />
                </div>
            </section>
        </>
    );
}

export default Page;
