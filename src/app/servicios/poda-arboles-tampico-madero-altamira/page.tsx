import React from 'react';
import Head from 'next/head';
import {FaCheckCircle} from "react-icons/fa";
import ContactButton from "@/components/ContactButton";
import ImageShowcase from "@/components/UI/ImageShowcase";

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
    'Retiro de basura generada',
    'Visita sin costo para evaluar tu árbol',
    'Podamos árboles grandes y difíciles con seguridad',
    'Personal capacitado en altura y manejo de herramientas',
]

const imagesGeneral = [
    '/servicios-media/poda-arboles/4.webp',
    '/servicios-media/poda-arboles/1.webp',
    '/servicios-media/poda-arboles/2.webp',
    '/servicios-media/poda-arboles/3.webp',
    '/servicios-media/poda-arboles/6.webp',
    '/servicios-media/poda-arboles/7.webp',
    '/servicios-media/poda-arboles/8.webp',
    '/servicios-media/poda-arboles/9.webp',
    '/servicios-media/poda-arboles/10.webp',
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
                        backgroundImage: "url('/servicios-media/poda-arboles/1.webp')",
                        minHeight: '50dvh', /* Smallest possible viewport height on mobile, ensuring content fits */
                    }}
                >
                    {/* Overlay div */}
                    <div className="absolute inset-0 size-full bg-black opacity-40 z-0"></div>

                    {/* Content div */}
                    <div className="relative z-10 mx-auto flex w-[80dvw] flex-col items-center justify-center space-y-6 py-10 text-center md:w-[80dvw] md:space-y-12 md:py-20">
                        <h1 className="text-3xl font-semibold lg:text-5xl">PODA DE ÁRBOLES Y RETIRO DE BASURA</h1>
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
                    </div>
                </div>
                {/*frase divider*/}
                <div className="h-fit py-4 bg-[#7c924f] flex items-center justify-center text-center w-full z-20 shadow-lg text-white cursor-default">
                    <p className="text-xl">Árbol crecido? Nosotros <b>nos encargamos</b>.</p>
                </div>
                {/*showcase images*/}
                <div className="flex flex-col lg:flex-row h-fit w-full items-center justify-center lg:justify-between max-w-[80vw] space-y-8 py-8 cursor-default">
                    <div className='w-full lg:w-1/2 h-fit flex flex-col items-center justify-center'>
                        <ImageShowcase images={imagesGeneral} />
                    </div>
                    <div className='w-full lg:w-1/3 h-fit flex flex-col items-start justify-start space-y-8 border border-gray-100 p-6 shadow-md hover:shadow-lg active:shadow-lg transition-all duration-200 rounded-lg'>
                        <h3 className="text-3xl text-[#7c924f] font-semibold">Poda de árboles, Tampico, Madero, Altamira.</h3>
                        <p className="leading-relaxed">
                            Listo para darle a tus árboles el cuidado que merecen?
                            <br/><br/>
                            En El Retoño somos tus aliados para la <strong>poda de árboles</strong>.
                            Ofrecemos planes flexibles, adaptándonos a tus necesidades, ya sean podas de temporada,
                            <strong> podas correctivas</strong> o un programa de poda continuo.
                            <br/><br/>
                            No busques más un <strong>jardinero confiable</strong>; te garantizamos un servicio transparente,
                            atención personalizada y resultados que <b>potenciarán el aspecto de tu propiedad y aumentarán su valor</b>.
                            <br/><br/>
                            Contáctanos y descubre cómo podemos transformar tus árboles en elementos dignos de admirar en tu jardín.
                        </p>
                    </div>
                </div>
                {/*/!*CTA divider*!/*/}
                <div className="h-fit py-4 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-3 cursor-default">
                    <p className="text-3xl font-semibold text-shadow-lg">Árboles limpios y presentables, a un clic de distancia</p>
                    <ContactButton text={"CONTÁCTANOS"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
                </div>
            </div>
        </>
    );
}

export default Page;