
import type {Metadata} from "next";
import {Montserrat} from 'next/font/google';
import CashIcon from "@/assets/CashIcon"
import { FaWhatsapp, FaFacebook, FaInstagram, FaMoneyBillTransfer, FaCreditCard, FaEnvelope, FaPhone, FaClock, FaLocationDot } from "react-icons/fa6";
import { SiBitcoin, SiEthereum, SiSolana } from "react-icons/si";
import ContactButtonNavbar from "@/components/ContactButtonNavbar";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";
import React from "react";
import MenuButtonNavbar from "@/components/MenuButtonNavbar";

const WA_URL = "https://api.whatsapp.com/send?phone=528335374089&text=Estoy%20interesado%20en%20sus%20servicios%20%F0%9F%8C%B1";

const montserrat = Montserrat({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: "El Retoño Jardinería | Tampico, Madero y Altamira",
        template: "%s | El Retoño Jardinería",
    },
    description: "Jardinería profesional residencial y empresarial en Tampico, Madero y Altamira. Más de 15 años de experiencia, facturación electrónica y registro REPSE.",
    metadataBase: new URL("https://elretono.org"),
};

const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Contacto', href: '/contacto' },
];

const footerServicios = [
    { label: 'Mantenimiento Residencial', href: '/servicios/jardineria-residencial-tampico-madero-altamira', title: 'Mantenimiento de jardines residenciales en Tampico, Madero y Altamira' },
    { label: 'Poda de Árboles', href: '/servicios/poda-arboles-tampico-madero-altamira', title: 'Poda profesional de árboles en Tampico, Madero y Altamira' },
    { label: 'Venta de Pasto', href: '/servicios/venta-pasto-tampico-madero-altamira', title: 'Venta e instalación de pasto japonés y San Agustín en Tampico' },
    { label: 'Fertilización', href: '/servicios/fertilizacion-tampico-madero-altamira', title: 'Fertilización de áreas verdes en Tampico, Madero y Altamira' },
    { label: 'Fumigación', href: '/servicios/fumigacion-tampico-madero-altamira', title: 'Fumigación de jardines y áreas verdes en Tampico' },
    { label: 'Póliza Comercial', href: '/servicios/mantenimiento-areas-verdes-tampico-madero-altamira', title: 'Póliza de mantenimiento de áreas verdes para empresas en Tampico' },
    { label: 'Retiro de Basura', href: '/servicios/retiro-basura-tampico-madero-altamira', title: 'Retiro de basura y escombro en Tampico, Madero y Altamira' },
    { label: 'Diseño 3D de Jardines', href: '/servicios/diseno-3d-jardin-tampico-madero-altamira', title: 'Diseño y previsualización 3D de jardines en Tampico' },
];

const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://elretono.org/#business",
    name: "El Retoño Jardinería",
    description: "Servicios de jardinería profesional residencial, comercial e industrial en Tampico, Madero y Altamira.",
    url: "https://elretono.org",
    telephone: "+52 833 537 4089",
    email: "contacto@elretono.org",
    priceRange: "$$",
    image: {
        "@type": "ImageObject",
        url: "https://elretono.org/logo.png",
        width: 500,
        height: 500,
    },
    logo: {
        "@type": "ImageObject",
        url: "https://elretono.org/logo.png",
        width: 500,
        height: 500,
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Tampico",
        addressRegion: "Tamaulipas",
        addressCountry: "MX",
    },
    areaServed: [
        { "@type": "Place", name: "Tampico" },
        { "@type": "Place", name: "Ciudad Madero" },
        { "@type": "Place", name: "Altamira" },
    ],
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
    },
    sameAs: [
        "https://www.facebook.com/profile.php?id=100071794055837",
        "https://www.instagram.com/elretono.tampico/",
    ],
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "4",
        bestRating: "5",
        worstRating: "1",
    },
};

const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://elretono.org/#website",
    name: "El Retoño Jardinería",
    url: "https://elretono.org",
    inLanguage: "es-MX",
    publisher: { "@id": "https://elretono.org/#business" },
};

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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }} />
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
                <Link href="/" aria-label="El Retoño Jardinería — Ir al inicio" className="flex-shrink-0 bg-white rounded-xl px-4 py-2 inline-block">
                    <Image
                        src="/logo.png"
                        width={200}
                        height={60}
                        alt="El Retoño Jardinería — Logo"
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
                        href={WA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contactar a El Retoño por WhatsApp"
                        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb557] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30 text-sm"
                    >
                        <FaWhatsapp className="size-4" />
                        WhatsApp
                    </a>
                </div>

                {/* Mobile: WA + hamburger */}
                <div className="flex lg:hidden items-center gap-3">
                    <a
                        href={WA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contactar a El Retoño por WhatsApp"
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
                    <Link href="/" aria-label="El Retoño Jardinería — Ir al inicio" className="inline-block bg-white rounded-xl px-4 py-2">
                        <Image src="/logo.png" width={160} height={50} alt="El Retoño Jardinería — Logo" className="h-10 w-auto" />
                    </Link>
                    <p className="text-white/40 text-sm leading-relaxed">
                        Transformando áreas verdes en paraísos naturales desde hace más de 15 años en la zona conurbada de Tampico.
                    </p>
                    <div className="flex items-center gap-3">
                        <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de El Retoño Jardinería" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] text-white/50 hover:text-white transition-all duration-300">
                            <FaWhatsapp className="size-4" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100071794055837" target="_blank" rel="noopener noreferrer" aria-label="Facebook de El Retoño Jardinería" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#1877f2] text-white/50 hover:text-white transition-all duration-300">
                            <FaFacebook className="size-4" />
                        </a>
                        <a href="https://www.instagram.com/elretono.tampico/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de El Retoño Jardinería" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#e1306c] text-white/50 hover:text-white transition-all duration-300">
                            <FaInstagram className="size-4" />
                        </a>
                    </div>
                </div>

                {/* Col 2 — Servicios */}
                <nav aria-label="Servicios de jardinería">
                    <p className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-4">Servicios</p>
                    <ul className="flex flex-col gap-2.5">
                        {footerServicios.map((s) => (
                            <li key={s.href}>
                                <Link
                                    href={s.href}
                                    title={s.title}
                                    className="text-white/40 hover:text-[#8ab82a] text-sm transition-colors duration-200"
                                >
                                    {s.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Col 3 — Contacto */}
                <div className="flex flex-col gap-4">
                    <p className="text-white text-sm font-semibold tracking-[0.15em] uppercase">Contacto</p>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a href="tel:+528335374089" className="flex items-start gap-3 text-white/40 hover:text-white text-sm transition-colors group" aria-label="Llamar a El Retoño Jardinería">
                                <FaPhone className="size-3.5 mt-0.5 flex-shrink-0 text-[#689a05] group-hover:text-[#8ab82a]" />
                                +52 833 537 4089
                            </a>
                        </li>
                        <li>
                            <a href="mailto:contacto@elretono.org" className="flex items-start gap-3 text-white/40 hover:text-white text-sm transition-colors group" aria-label="Enviar correo a El Retoño Jardinería">
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
                    <div className="flex flex-col gap-3">
                        {[
                            { Icon: CashIcon, label: 'Efectivo', color: 'text-[#689a05]' },
                            { Icon: FaMoneyBillTransfer, label: 'Transferencia', color: 'text-[#689a05]' },
                            { Icon: FaCreditCard, label: 'Tarjeta', color: 'text-[#689a05]' },
                        ].map(({ Icon, label, color }) => (
                            <div key={label} className="flex items-center gap-3 text-white/40 text-sm">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 flex-shrink-0">
                                    <Icon className={`size-4 ${color}`} />
                                </div>
                                {label}
                            </div>
                        ))}
                        <div className="my-1 border-t border-white/10" />
                        <p className="text-white/20 text-xs tracking-widest uppercase">Criptomonedas</p>
                        {[
                            { Icon: SiBitcoin, label: 'Bitcoin (BTC)', color: 'text-[#f7931a]' },
                            { Icon: SiEthereum, label: 'Ethereum (ETH)', color: 'text-[#627eea]' },
                            { Icon: SiSolana, label: 'Solana (SOL)', color: 'text-[#9945ff]' },
                        ].map(({ Icon, label, color }) => (
                            <div key={label} className="flex items-center gap-3 text-white/40 text-sm">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 flex-shrink-0">
                                    <Icon className={`size-4 ${color}`} />
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
                    <nav aria-label="Navegación secundaria" className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-white/25 hover:text-white/60 text-xs transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>

        </body>
        </html>
    );
}
