
import type {Metadata} from "next";
import {Montserrat} from 'next/font/google';
import CashIcon from "@/assets/CashIcon"
import { FaWhatsapp, FaFacebook, FaInstagram, FaMoneyBillTransfer, FaCreditCard, FaEnvelope, FaPhone, FaClock, FaLocationDot } from "react-icons/fa6";
import ContactButtonNavbar from "@/components/ContactButtonNavbar";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";
import React from "react";
import MenuButtonNavbar from "@/components/MenuButtonNavbar";


const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
    title: "Servicios de Jardineria Tampico Madero Altamira - El Retoño",
    description: "Servicios de Jardineria Tampico Madero Altamira Residencial Comercial Industrial",
};

const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Contacto', href: '/contacto' },
];

const footerServicios = [
    { label: 'Mantenimiento Residencial', href: '/servicios/jardineria-residencial-tampico-madero-altamira' },
    { label: 'Poda de Árboles', href: '/servicios/poda-arboles-tampico-madero-altamira' },
    { label: 'Venta de Pasto', href: '/servicios/venta-pasto-tampico-madero-altamira' },
    { label: 'Fertilización', href: '/servicios/fertilizacion-tampico-madero-altamira' },
    { label: 'Fumigación', href: '/servicios/fumigacion-tampico-madero-altamira' },
    { label: 'Póliza Comercial', href: '/servicios/mantenimiento-areas-verdes-tampico-madero-altamira' },
    { label: 'Retiro de Basura', href: '/servicios/retiro-basura-tampico-madero-altamira' },
    { label: 'Diseño 3D de Jardines', href: '/servicios/diseno-3d-jardin-tampico-madero-altamira' },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es-MX">
        <head>
            <Script id="gtm-script" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NSXRRPHW');`}
            </Script>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "El Retoño",
                        description: "Servicios de jardinería profesional en Tampico, Madero y Altamira.",
                        url: "https://elretono.org",
                        telephone: "+52 833 537 4089",
                        email: "contacto@elretono.org",
                        image: "https://elretono.org/logo.png",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Tampico",
                            addressRegion: "Tamaulipas",
                            addressCountry: "MX",
                        },
                        openingHours: ["Mo-Sa 08:00-18:00"],
                        sameAs: [
                            "https://www.facebook.com/profile.php?id=100071794055837",
                            "https://www.instagram.com/elretono.tampico/",
                            "https://wa.link/l9ejrd"
                        ]
                    })
                }}
            />
        </head>
        <body className={montserrat.variable + " overflow-x-hidden font-[var(--font-montserrat)]"}>

        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>

        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-NSXRRPHW"
                height="0" width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>

        {/* ── NAVBAR ──────────────────────────────────────────────── */}
        <header className="sticky top-0 z-40 bg-[#0f1a08]/95 backdrop-blur-md border-b border-white/5">
            <nav
                aria-label="Navegación principal"
                className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between"
            >
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 bg-white rounded-xl px-4 py-2 inline-block">
                    <Image
                        src="/logo.png"
                        width={200}
                        height={60}
                        alt="El Retoño Jardinería"
                        className="h-10 w-auto"
                        priority
                    />
                </Link>

                {/* Links desktop */}
                <ul className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="relative text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 group py-1"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#8ab82a] group-hover:w-full transition-all duration-300" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTAs desktop */}
                <div className="hidden lg:flex items-center gap-3">
                    <ContactButtonNavbar />
                    <a
                        href="https://wa.link/l9ejrd"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contactar por WhatsApp"
                        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb557] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30 text-sm"
                    >
                        <FaWhatsapp className="size-4" />
                        WhatsApp
                    </a>
                </div>

                {/* Mobile: WA + hamburger */}
                <div className="flex lg:hidden items-center gap-3">
                    <a
                        href="https://wa.link/l9ejrd"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contactar por WhatsApp"
                        className="flex items-center justify-center bg-[#25D366] hover:bg-[#1fb557] text-white p-2.5 rounded-xl transition-colors"
                    >
                        <FaWhatsapp className="size-5" />
                    </a>
                    <MenuButtonNavbar />
                </div>
            </nav>
        </header>

        <div id="portal-root" />
        <main id="main-content">
            {children}
        </main>

        {/* ── FOOTER ──────────────────────────────────────────────── */}
        <footer aria-label="Pie de página" className="bg-[#0a1206] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Col 1 — Marca */}
                <div className="flex flex-col gap-6">
                    <Link href="/" className="inline-block bg-white rounded-xl px-4 py-2">
                        <Image src="/logo.png" width={160} height={50} alt="El Retoño Jardinería" className="h-10 w-auto" />
                    </Link>
                    <p className="text-white/40 text-sm leading-relaxed">
                        Transformando áreas verdes en paraísos naturales desde hace más de 15 años en la zona conurbada de Tampico.
                    </p>
                    <div className="flex items-center gap-3">
                        <a href="https://wa.link/l9ejrd" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] text-white/50 hover:text-white transition-all duration-300">
                            <FaWhatsapp className="size-4" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100071794055837" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#1877f2] text-white/50 hover:text-white transition-all duration-300">
                            <FaFacebook className="size-4" />
                        </a>
                        <a href="https://www.instagram.com/elretono.tampico/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#e1306c] text-white/50 hover:text-white transition-all duration-300">
                            <FaInstagram className="size-4" />
                        </a>
                    </div>
                </div>

                {/* Col 2 — Servicios */}
                <div className="flex flex-col gap-4">
                    <p className="text-white text-sm font-semibold tracking-[0.15em] uppercase">Servicios</p>
                    <ul className="flex flex-col gap-2.5">
                        {footerServicios.map((s) => (
                            <li key={s.href}>
                                <Link href={s.href} className="text-white/40 hover:text-[#8ab82a] text-sm transition-colors duration-200">
                                    {s.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 3 — Contacto */}
                <div className="flex flex-col gap-4">
                    <p className="text-white text-sm font-semibold tracking-[0.15em] uppercase">Contacto</p>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a href="tel:+528335374089" className="flex items-start gap-3 text-white/40 hover:text-white text-sm transition-colors group">
                                <FaPhone className="size-3.5 mt-0.5 flex-shrink-0 text-[#689a05] group-hover:text-[#8ab82a]" />
                                +52 833 537 4089
                            </a>
                        </li>
                        <li>
                            <a href="mailto:contacto@elretono.org" className="flex items-start gap-3 text-white/40 hover:text-white text-sm transition-colors group">
                                <FaEnvelope className="size-3.5 mt-0.5 flex-shrink-0 text-[#689a05] group-hover:text-[#8ab82a]" />
                                contacto@elretono.org
                            </a>
                        </li>
                        <li className="flex items-start gap-3 text-white/40 text-sm">
                            <FaLocationDot className="size-3.5 mt-0.5 flex-shrink-0 text-[#689a05]" />
                            Tampico, Tamaulipas, México
                        </li>
                        <li className="flex items-start gap-3 text-white/40 text-sm">
                            <FaClock className="size-3.5 mt-0.5 flex-shrink-0 text-[#689a05]" />
                            Lun – Sáb · 8:00 a 18:00 hrs
                        </li>
                    </ul>
                </div>

                {/* Col 4 — Formas de pago */}
                <div className="flex flex-col gap-4">
                    <p className="text-white text-sm font-semibold tracking-[0.15em] uppercase">Formas de pago</p>
                    <div className="flex flex-col gap-4">
                        {[
                            { Icon: CashIcon, label: 'Efectivo' },
                            { Icon: FaMoneyBillTransfer, label: 'Transferencia' },
                            { Icon: FaCreditCard, label: 'Tarjeta' },
                        ].map(({ Icon, label }) => (
                            <div key={label} className="flex items-center gap-3 text-white/40 text-sm">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 flex-shrink-0">
                                    <Icon className="size-4 text-[#689a05]" />
                                </div>
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white/25 text-xs">
                        © {new Date().getFullYear()} El Retoño Jardinería · Todos los derechos reservados
                    </p>
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-white/25 hover:text-white/60 text-xs transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>

        </body>
        </html>
    );
}
