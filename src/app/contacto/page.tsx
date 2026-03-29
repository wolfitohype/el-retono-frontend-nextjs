import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaLocationDot, FaClock } from 'react-icons/fa6';
import ContactCard from '@/components/ContactCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
    title: "Contacto | El Retoño Jardinería | Tampico, Madero y Altamira",
    description: "Contáctanos para transformar tus áreas verdes. Servicios de jardinería profesional en Tampico, Madero y Altamira.",
    keywords: [
        "contacto jardinería Tampico",
        "servicios de jardinería",
        "contactar El Retoño",
        "jardinería profesional",
        "mantenimiento de jardines",
        "áreas verdes Tampico"
    ],
    openGraph: {
        title: "Contacto | El Retoño Jardinería",
        description: "Contáctanos para transformar tus áreas verdes en espacios de belleza y tranquilidad.",
        url: "https://elretono.org/contacto",
        siteName: "El Retoño Jardinería",
        images: [{ url: "https://elretono.org/og-image.webp", width: 1200, height: 630, alt: "El Retoño Jardinería - Contacto" }],
        locale: "es_MX",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contacto | El Retoño Jardinería",
        description: "Contáctanos para servicios de jardinería profesional en Tampico, Madero y Altamira.",
        images: ["https://elretono.org/og-image.webp"],
    },
};

export default function ContactPage() {
    return (
        <>
            <Breadcrumbs items={[
                { label: 'Inicio', href: '/' },
                { label: 'Contacto' },
            ]} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Jardinería El Retoño",
                "image": "https://elretono.org/logo.png",
                "logo": "https://elretono.org/logo.png",
                "url": "https://elretono.org",
                "telephone": "+52 833 537 4089",
                "email": "contacto@elretono.org",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Tampico",
                    "addressRegion": "Tamaulipas",
                    "addressCountry": "MX"
                },
                "areaServed": [
                    { "@type": "Place", "name": "Tampico" },
                    { "@type": "Place", "name": "Ciudad Madero" },
                    { "@type": "Place", "name": "Altamira" }
                ],
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                    "opens": "08:00",
                    "closes": "20:00"
                },
                "sameAs": [
                    "https://www.facebook.com/profile.php?id=100071794055837",
                    "https://www.instagram.com/elretono.tampico/",
                    "https://wa.link/l9ejrd"
                ],
                "mainEntityOfPage": {
                    "@type": "ContactPage",
                    "@id": "https://elretono.org/contacto"
                }
            })}} />

            <div className="flex flex-col lg:flex-row min-h-[85vh]">

                {/* Left — Brand info panel */}
                <div className="w-full lg:w-2/5 bg-[#4f5d32] flex flex-col justify-center px-10 py-14 space-y-8 text-white">

                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="El Retoño Jardinería"
                            width={200}
                            height={80}
                            className="bg-white rounded-xl p-3 w-44 h-auto"
                        />
                    </Link>

                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold">Contáctanos</h1>
                        <p className="text-white/75 text-base">
                            Estamos listos para transformar tus áreas verdes.
                        </p>
                    </div>

                    <div className="w-12 h-[3px] bg-[#689a05] rounded-full" />

                    {/* Contact details */}
                    <ul className="space-y-5">
                        <li>
                            <a
                                href="https://wa.link/l9ejrd"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center space-x-4 group"
                            >
                                <span className="bg-[#689a05] p-2.5 rounded-lg group-hover:bg-[#7dab07] transition-colors">
                                    <FaWhatsapp className="size-5" />
                                </span>
                                <div>
                                    <p className="text-xs text-white/60 uppercase tracking-wider">WhatsApp</p>
                                    <p className="font-semibold group-hover:text-[#a8d44a] transition-colors">833 537 4089</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+528335374089"
                                className="flex items-center space-x-4 group"
                            >
                                <span className="bg-white/10 p-2.5 rounded-lg group-hover:bg-white/20 transition-colors">
                                    <FaPhone className="size-5" />
                                </span>
                                <div>
                                    <p className="text-xs text-white/60 uppercase tracking-wider">Teléfono</p>
                                    <p className="font-semibold group-hover:text-[#a8d44a] transition-colors">833 537 4089</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:contacto@elretono.org"
                                className="flex items-center space-x-4 group"
                            >
                                <span className="bg-white/10 p-2.5 rounded-lg group-hover:bg-white/20 transition-colors">
                                    <FaEnvelope className="size-5" />
                                </span>
                                <div>
                                    <p className="text-xs text-white/60 uppercase tracking-wider">Correo</p>
                                    <p className="font-semibold group-hover:text-[#a8d44a] transition-colors">contacto@elretono.org</p>
                                </div>
                            </a>
                        </li>
                        <li className="flex items-center space-x-4">
                            <span className="bg-white/10 p-2.5 rounded-lg">
                                <FaLocationDot className="size-5" />
                            </span>
                            <div>
                                <p className="text-xs text-white/60 uppercase tracking-wider">Zona de servicio</p>
                                <p className="font-semibold">Tampico, Madero y Altamira</p>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <span className="bg-white/10 p-2.5 rounded-lg">
                                <FaClock className="size-5" />
                            </span>
                            <div>
                                <p className="text-xs text-white/60 uppercase tracking-wider">Horario</p>
                                <p className="font-semibold">Lunes a Sábado · 8:00 – 20:00</p>
                            </div>
                        </li>
                    </ul>

                    <div className="w-full h-px bg-white/15" />

                    {/* Social links */}
                    <div className="space-y-3">
                        <p className="text-xs text-white/60 uppercase tracking-wider">Síguenos</p>
                        <div className="flex items-center space-x-3">
                            <a
                                href="https://wa.link/l9ejrd"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp de El Retoño"
                                className="bg-white/10 hover:bg-[#689a05] p-2.5 rounded-lg transition-colors"
                            >
                                <FaWhatsapp className="size-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100071794055837"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook de El Retoño"
                                className="bg-white/10 hover:bg-blue-500 p-2.5 rounded-lg transition-colors"
                            >
                                <FaFacebook className="size-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/elretono.tampico/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram de El Retoño"
                                className="bg-white/10 hover:bg-pink-500 p-2.5 rounded-lg transition-colors"
                            >
                                <FaInstagram className="size-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right — WhatsApp + Form */}
                <div className="w-full lg:w-3/5 bg-[#f5f7ee] flex flex-col items-center justify-center px-6 py-14 space-y-6">

                    {/* WhatsApp card */}
                    <a
                        href="https://wa.link/l9ejrd"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full max-w-[600px] bg-[#25D366] hover:bg-[#1ebe5a] active:bg-[#18a84e] transition-all duration-300 rounded-lg shadow-md hover:shadow-xl px-8 py-6 flex items-center justify-between text-white group"
                    >
                        <div className="space-y-1">
                            <p className="text-xs uppercase tracking-widest opacity-80">Canal directo</p>
                            <p className="text-2xl font-bold">Escríbenos por WhatsApp</p>
                            <p className="text-sm opacity-80">Respondemos en minutos · Sin formularios</p>
                        </div>
                        <FaWhatsapp className="size-14 opacity-90 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    </a>

                    {/* Separator */}
                    <div className="flex items-center w-full max-w-[600px] space-x-4 text-gray-400 text-sm">
                        <div className="flex-1 h-px bg-gray-300" />
                        <span>o déjanos un mensaje</span>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    {/* Form */}
                    <ContactCard />
                </div>

            </div>
        </>
    );
}
