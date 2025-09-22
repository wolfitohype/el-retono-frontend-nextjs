
import type {Metadata} from "next";
import {Montserrat} from 'next/font/google';
import CashIcon from "@/assets/CashIcon"
import {FaWhatsapp, FaFacebook, FaInstagram, FaMoneyBillTransfer, FaCreditCard  } from "react-icons/fa6";
import ContactButtonNavbar from "@/components/ContactButtonNavbar";
import Head from "next/head";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import React from "react";
import MenuButtonNavbar from "@/components/MenuButtonNavbar";


const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-montserrat', // Define a CSS variable
});

export const metadata: Metadata = {
    title: "Servicios de Jardineria Tampico Madero Altamira - El Retoño",
    description: "Servicios de Jardineria Tampico Madero Altamira Residencial Comercial Industrial",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const navLinks = [
        {label: 'INICIO', href: '/'},
        {label: 'SERVICIOS', href: '/servicios'},
        {label: 'CONTACTO', href: '/contacto'},
    ]

    return (
        <html lang="en">
        <Head>
            <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NSXRRPHW');</script>
<!-- End Google Tag Manager -->

            <title>Servicios de Jardinería Tampico Madero Altamira - El Retoño</title>
            <meta
                name="description"
                content="Servicios de Jardinería residencial, comercial e industrial en Tampico, Madero y Altamira. Más de 15 años transformando exteriores."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="theme-color" content="#689a05" />

            {/* OpenGraph */}
            <meta property="og:title" content="El Retoño - Jardinería Profesional en Tampico" />
            <meta property="og:description" content="Servicios de jardinería residencial, comercial e industrial en Tampico, Madero y Altamira." />
            <meta property="og:image" content="/og-image.webp" />
            <meta property="og:url" content="https://elretono.org" />
            <meta property="og:type" content="business.business" />

            {/* JSON-LD de negocio local */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "El Retoño",
                        description: "Servicios de jardinería profesional en Tampico, Madero y Altamira.",
                        url: "https://elretono.org",
                        telephone: "+52 833 123 4567",
                        email: "contacto@elretono.org",
                        image: "https://elretono.org/logo.png",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Tampico",
                            addressRegion: "Tamaulipas",
                            addressCountry: "MX",
                        },
                        openingHours: ["Mo-Su 08:00-20:00"],
                        sameAs: [
                            "https://www.facebook.com/profile.php?id=100071794055837",
                            "https://www.instagram.com/elretono.tampico/",
                            "https://wa.link/l9ejrd"
                        ]
                    })
                }}
            />
        </Head>
        <body className={montserrat.variable + " overflow-x-hidden"}>
            <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NSXRRPHW"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
        <nav
            className="bg-[#eff0d6] w-full h-24 items-center justify-around sticky top-0 z-40 shadow-md hidden lg:flex">
            <Link href="/">
                <Image src="/logo.png" width={250} height={250} alt="EL RETOÑO LOGO"
                       className="h-[56px] w-auto cursor-pointer"/>
            </Link>
            <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                    <Link key={link.label} href={link.href} replace>
                            <span className="flex flex-col justify-center cursor-pointer group">
                                <p className="group-hover:brightness-120 transition-colors duration-300">{link.label}</p>
                                <div
                                    className="h-[2px] w-full origin-center scale-x-0 bg-[#232323] transition-transform duration-300 group-hover:scale-x-100"/>
                            </span>
                    </Link>
                ))}
            </ul>
            <div className="flex items-center space-x-8 transition-colors duration-200">
                <ContactButtonNavbar/>
                <span
                    className="p-4 bg-[#689a05] active:bg-[#3F5D03] hover:bg-[#3F5D03] transition-all duration-300 rounded-md text-white cursor-pointer hover:shadow-lg">
                    <a href="https://wa.link/l9ejrd" target="_blank" rel="noreferrer">
                        <FaWhatsapp size={28}/>
                    </a>
                </span>
            </div>
        </nav>

        {/*mobile navbar*/}
        <div className="bg-[#7c924f] h-12 w-full items-center justify-center flex md:hidden">
            <p className="text-white text-center text-sm">
                Servicios de jardineria residencial y empresarial a todo <span className="font-semibold">Tampico</span>, <span className="font-semibold">Madero</span> y <span className="font-semibold">Altamira</span>.
            </p>
        </div>
        <nav className="bg-[#eff0d6] w-full h-24 flex items-center justify-between px-8 sticky top-0 z-40 shadow-md lg:hidden overflow-hidden">
            <Link href="/">
                <Image src="/logo.png" width={250} height={250} alt="EL RETOÑO LOGO"
                       className="h-[56px] w-auto cursor-pointer"/>
            </Link>
            <div className="flex items-center space-x-4 text-white">
                <Link href="https://wa.link/l9ejrd">
                    <FaWhatsapp size={44} className="bg-[#689a05] p-2 rounded-md cursor-pointer hover:shadow-md"/>
                </Link>
                <MenuButtonNavbar/>
            </div>
        </nav>
        <div id="portal-root"/>
        {children}
        {/*footer medium breakpoint*/}
        <footer className="bg-[url('/footer.webp')] w-full h-[60vh] hidden lg:flex items-center justify-center bg-cover bg-center cursor-default relative z-0">
            {/*div para opacidad*/}
            <div className="inset-0 size-full bg-black opacity-55 absolute z-10"/>
            {/*contenedor principal*/}
            <div className="w-[85%] flex md:flex-row flex-col items-center md:space-x-18 justify-center text-white">
                {/*logo y horario*/}
                <div className="flex flex-col text-center justify-center items-center h-full space-y-8 z-20 w-[20%]">
                    <Image src="/logo.png" width={250} height={250} alt="EL RETOÑO LOGO"
                           className="h-full w-auto cursor-pointer bg-white rounded-2xl z-20"/>
                    <p className="font-semibold">
                        Horario de atención:
                        <br/>
                        <span className="font-normal">8:00 a 20:00 hrs</span>
                    </p>
                </div>
                {/*center info*/}
                <div className="flex flex-col justify-center items-center h-full text-center space-y-6 z-20">
                    <p className="text-xl">Transformando exteriores en impresionantes jardines durante más de 15 años.</p>
                    <div className="h-[1px] bg-white w-[80%]"/>
                    <p className="text-3xl font-semibold">Formas de pago</p>
                    <div className="flex space-x-8 justify-around text-white font-medium">
                        <div className="flex flex-col items-center justify-around space-y-2">
                            <CashIcon className="size-14 md:size-16"/>
                            <p>EFECTIVO</p>
                        </div>
                        <div className="flex flex-col items-center justify-around space-y-2">
                            <FaMoneyBillTransfer className="size-14 md:size-14"/>
                            <p>TRANSFERENCIA</p>
                        </div>
                        <div className="flex flex-col items-center justify-around space-y-2">
                            <FaCreditCard className="size-14 md:size-12"/>
                            <p>TARJETA</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center space-y-4 text-xl font-semibold z-20 h-full w-[20%]">
                    <div className="flex flex-col space-y-4">
                        <p>Síguenos</p>
                        <div className="flex items-center justify-start space-x-4">
                            <Link href="https://wa.link/l9ejrd">
                                <FaWhatsapp className="bg-green-400 p-1 size-10 rounded-full"/>
                            </Link>
                            <Link href="https://www.facebook.com/profile.php?id=100071794055837">
                                <FaFacebook className="bg-blue-400 p-1 size-10 rounded-full"/>
                            </Link>
                            <Link href="https://www.instagram.com/elretono.tampico/">
                                <FaInstagram className="bg-pink-400 p-1 size-10 rounded-full"/>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <p>Contáctanos</p>
                        <p className="font-normal">contacto@elretono.org</p>
                    </div>
                </div>
            </div>
        </footer>

        {/*footer mobile*/}
        <footer className="bg-[url('/footer.webp')] w-full lg:hidden h-[120vh] flex items-center justify-center bg-cover bg-center cursor-default relative z-0">
            {/*div para opacidad*/}
            <div className="inset-0 size-full bg-black opacity-55 absolute z-10"/>
            {/*contenedor principal*/}
            <div className="w-full flex flex-col items-center space-y-6 justify-center text-white">
                {/*logo y horario*/}
                <div className="flex flex-col text-center justify-center items-center h-full space-y-8 z-20 w-full">
                    <Link href="/">
                        <Image src="/logo.png" width={250} height={250} alt="EL RETOÑO LOGO"
                              className="h-auto w-[260px] cursor-pointer bg-white rounded-2xl z-20"/>
                    </Link>
                    <p className="font-semibold">
                        Horario de atención:
                        <br/>
                        <span className="font-normal">8:00 a 20:00 hrs</span>
                    </p>
                </div>
                <div className="h-[2px] bg-white w-[70%] z-20"/>
                {/*center info*/}
                <div className="flex flex-col justify-center items-center h-full text-center space-y-6 z-20">
                    <p className="text-xl w-[70%]">Transformando exteriores en impresionantes jardines durante más de 15 años.</p>
                    <div className="h-[2px] bg-white w-[70%]"/>
                    <p className="text-3xl font-semibold">Formas de pago</p>
                    <div className="flex space-x-8 justify-around text-white font-medium">
                        <div className="flex flex-col items-center justify-around space-y-2">
                            <CashIcon className="size-14 md:size-16"/>
                            <p>EFECTIVO</p>
                        </div>
                        <div className="flex flex-col items-center justify-around space-y-2">
                            <FaMoneyBillTransfer className="size-14 md:size-14"/>
                            <p>TRANSFERENCIA</p>
                        </div>
                        <div className="flex flex-col items-center justify-around space-y-2">
                            <FaCreditCard className="size-14 md:size-12"/>
                            <p>TARJETA</p>
                        </div>
                    </div>
                    <div className="h-[2px] bg-white w-[70%]"/>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 font-semibold z-20 h-full w-[20%]">
                    <div className="flex flex-col items-center space-y-4">
                        <p className="text-3xl">Síguenos</p>
                        <div className="flex items-center justify-start space-x-4">
                            <Link href="https://wa.link/l9ejrd">
                                <FaWhatsapp className="bg-green-400 p-1 size-10 rounded-full"/>
                            </Link>
                            <Link href="https://www.facebook.com/profile.php?id=100071794055837">
                                <FaFacebook className="bg-blue-400 p-1 size-10 rounded-full"/>
                            </Link>
                            <Link href="https://www.instagram.com/elretono.tampico/">
                                <FaInstagram className="bg-pink-400 p-1 size-10 rounded-full"/>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <p className="text-3xl">Contáctanos</p>
                        <p className="font-normal text-lg">contacto@elretono.org</p>
                    </div>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
