import React from 'react';
import Head from 'next/head';
import {FaCheckCircle} from "react-icons/fa";
import ContactButton from "@/components/ContactButton";
import ImageShowcase from "@/components/UI/ImageShowcase";
import CotizadorForm from "@/components/CotizadorForm";

export const metadata = {
    title: 'Poda de árboles | Jardinería El Retoño',
    description: 'Servicio de poda de árboles con retiro de basura incluido. Planes flexibles, facturación disponible. ¡Contáctanos hoy!',
    keywords: [
        'mantenimiento de jardines',
        'jardineria tampico',
        'poda de arboles tampico',
        'poda de arboles madero',
        'poda de arboles altamira',
        'mantenimiento áreas verdes',
        'jardinería El Retoño',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'tala de arboles tampico',
        'retiro de basura tampico',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://www.elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Poda de árboles | Jardinería El Retoño',
        description: 'Expertos en poda de árboles. Servicio confiable y facturable. Atención personalizada y resultados impecables.',
        url: 'https://www.elretono.org/servicios/poda-arboles-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [
            {
                url: 'https://www.elretono.org/servicios-media/poda-arboles/1.webp',
                width: 1200,
                height: 630,
                alt: 'Poda y mantenimiento de árboles por Jardinería El Retoño',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Poda de árboles | Jardinería El Retoño',
        description: 'Mantén a raya el crecimiento de tus árboles con nuestro equipo profesional. Cotiza sin compromiso.',
        images: ['https://www.elretono.org/servicios-media/poda-arboles/1.webp'],
    },
};


const featuresList = [
    'Facturamos para empresas y particulares',
    'Venta de pasto Japonés',
    'Venta de pasto San Agustín',
    'Nivelación de terreno e instalación de pasto',
    'Visita a domicilio sin compromiso para darte un presupuesto',
]

const imagesGeneral = [
    '/servicios-media/venta-pasto/2.webp',
    '/servicios-media/venta-pasto/3.webp',
    '/servicios-media/venta-pasto/4.webp',
    '/servicios-media/venta-pasto/5.webp',
    '/servicios-media/venta-pasto/6.webp',
    '/servicios-media/venta-pasto/7.webp',
    '/servicios-media/venta-pasto/8.webp',
    '/servicios-media/venta-pasto/9.webp',
    '/servicios-media/venta-pasto/10.webp',
    '/servicios-media/venta-pasto/11.webp',
    '/servicios-media/venta-pasto/12.webp',
]

function Page() {
    return (
        <>
            <Head>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Jardinería El Retoño",
                        "image": "https://elretono.org/logo.png",
                        "logo": "https://elretono.org/logo.png",
                        "email":"contacto@elretono.org",
                        "url": "https://www.elretono.org",
                        "telephone": "+52 833 537 4089",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Tampico",
                            "addressRegion": "Tamaulipas",
                            "addressCountry": "MX"
                        },
                        "sameAs":[
                            "https://www.facebook.com/profile.php?id=100071794055837",
                            "https://www.instagram.com/elretono.tampico/",
                            "https://wa.link/l9ejrd",
                        ],
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://www.elretono.org/servicios/poda-arboles-tampico-madero-altamira"
                        },
                        "priceRange": "$$",
                        "description": "Poda de árboles y retiro de basura en Tampico, Madero y Altamira. Jardineros de confianza, servicios facturables y atención profesional.",
                        "areaServed": [
                            { "@type": "Place", "name": "Tampico" },
                            { "@type": "Place", "name": "Ciudad Madero" },
                            { "@type": "Place", "name": "Altamira" }
                        ],
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                            ],
                            "opens": "08:00",
                            "closes": "18:00"
                        }
                    }) }} />
            </Head>
            <div className="w-full h-fit flex flex-col items-center justify-center">
                {/*hero*/}
                <div
                    className="relative flex w-full items-center justify-center bg-cover bg-center text-white"
                    style={{
                        backgroundImage: "url('/servicios-media/venta-pasto/1.webp')",
                        minHeight: '50dvh', /* Smallest possible viewport height on mobile, ensuring content fits */
                    }}
                >
                    {/* Overlay div */}
                    <div className="absolute inset-0 size-full bg-black opacity-40 z-0"></div>
                    {/* Content div */}
                    <div className="relative z-10 mx-auto flex w-[80dvw] flex-col items-center justify-center space-y-6 py-10 text-center md:w-[80dvw] md:space-y-12 md:py-20">
                        <h1 className="text-3xl font-semibold lg:text-5xl">VENTA E INSTALACIÓN DE PASTO</h1>
                        {/* Separation line */}
                        <div className="w-full border-white border-[1px]"></div>
                        {/* Services list */}
                        <ul className="flex flex-col w-full justify-start space-y-4 text-start text-[16px] sm:text-[18px] md:text-[20px]">
                            {featuresList.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-4 font-medium">
                                    {/* Assuming FaCheckCircle is imported and working */}
                                    <FaCheckCircle className="size-5 flex-shrink-0 sm:size-6"/>
                                    <p className="flex-grow break-words">{feature}</p>
                                </li>
                            ))}
                        </ul>
                        <ContactButton text={"CONTÁCTANOS"} className="rounded-lg bg-white px-6 py-3 font-semibold text-[#4f5d32] sm:px-8 sm:py-4"/>
                        <CotizadorForm/>
                    </div>
                </div>
                {/*frase divider*/}
                <div className="h-fit py-4 bg-[#7c924f] flex items-center justify-center text-center w-full z-20 shadow-lg text-white cursor-default">
                    <p className="text-xl">Terreno <b>tierroso y aburrido?</b> Nosotros <b>lo pintamos de verde</b>.</p>
                </div>
                {/*showcase images*/}
                <div className="flex flex-col lg:flex-row h-fit w-full items-center justify-center lg:justify-between max-w-[80vw] space-y-8 py-8 cursor-default">
                    <div className='w-full lg:w-1/2 h-fit flex flex-col items-center justify-center'>
                        <ImageShowcase images={imagesGeneral} />
                    </div>
                    <div className='w-full lg:w-1/3 h-fit flex flex-col items-start justify-start space-y-8 border border-gray-100 p-6 shadow-md hover:shadow-lg active:shadow-lg transition-all duration-200 rounded-lg'>
                        <h3 className="text-3xl text-[#7c924f] font-semibold">Instala pasto hoy, disfruta mañana.</h3>
                        <p className="leading-relaxed">
                            ¿Sueñas con poder caminar descalzo en un pasto suave y verde?
                            <br/><br/>
                            En Jardinería El Retoño, convertimos ese sueño en una realidad.
                            Sabemos que un buen pasto es la base de un jardín espectacular,
                            por eso ofrecemos la <strong>venta de pasto en rollo</strong> de la más alta calidad,
                            ya sea <strong>San Agustín o Japonés</strong>, los más aguantadores.
                            <br/><br/>
                            No solo vendemos el pasto, te brindamos la solución completa:
                            desde la <strong>preparación del terreno</strong> hasta la <strong>instalación profesional de pasto</strong>,
                            para que tenga un crecimiento sano y una apariencia de lujo desde el primer día.
                        </p>
                    </div>
                </div>
                <CotizadorForm/>
                {/*/!*CTA divider*!/*/}
                <div className="h-fit py-4 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-3 cursor-default">
                    <p className="text-3xl font-semibold text-shadow-lg">Patio siempre verde y vibrante, a un clic de distancia</p>
                    <ContactButton text={"CONTÁCTANOS"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
                </div>
            </div>
        </>
    );
}

export default Page;