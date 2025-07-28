import React from 'react';
import Head from 'next/head';
import {FaCheckCircle} from "react-icons/fa";
import ContactButton from "@/components/ContactButton";
import ImageShowcase from "@/components/UI/ImageShowcase";

export const metadata = {
    title: 'Retiro de Basura Profesional | Jardinería El Retoño',
    description: 'Servicio de retiro de basura y limpieza de jardines en Tampico, Madero y Altamira. Mantenemos tu espacio libre de desechos con recolección eficiente y responsable. ¡Contáctanos hoy!',
    keywords: [
        'retiro de basura',
        'limpieza de jardines',
        'recolección de desechos',
        'jardineria tampico',
        'jardineria altamira',
        'jardinería El Retoño',
        'limpieza de áreas verdes',
        'manejo de residuos',
        'limpieza de terrenos',
        'jardines limpios',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'servicio de limpieza en Tampico',
        'retiro de basura en Madero',
        'limpieza de jardines en Altamira',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://www.elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Retiro de Basura Profesional | Jardinería El Retoño',
        description: 'Expertos en retiro de basura y limpieza de jardines. Mantenemos tu espacio libre de desechos con recolección eficiente y responsable.',
        url: 'https://www.elretono.org/servicios/retiro-basura-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [
            {
                url: 'https://www.elretono.org/servicios-media/retiro-basura/1.jpg',
                width: 1200,
                height: 630,
                alt: 'Retiro de basura profesional por Jardinería El Retoño',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Retiro de Basura Profesional | Jardinería El Retoño',
        description: 'Mantén tu jardín limpio y ordenado con nuestros servicios de retiro de basura profesional. Cotiza sin compromiso.',
        images: ['https://www.elretono.org/servicios-media/retiro-basura/1.jpg'],
    },
};


const featuresList = [
    'Recolección rápida y eficiente',
    'Manejo responsable de residuos',
    'Limpieza completa de áreas verdes',
    'Servicio puntual y confiable',
]

const imagesGeneral = [
    '/servicios-media/retiro-basura/1.webp',
    '/servicios-media/retiro-basura/2.webp',
    '/servicios-media/retiro-basura/3.webp',
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
                            "@id": "https://www.elretono.org/servicios/retiro-basura-tampico-madero-altamira"
                        },
                        "priceRange": "$$",
                        "description": "Servicio profesional de retiro de basura y limpieza de jardines en Tampico, Madero y Altamira. Mantenemos tu espacio libre de desechos con recolección eficiente y responsable.",
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
                <div className="flex bg-[url('/servicios-media/retiro-basura/1.jpg')] h-[80vh] w-full relative bg-cover bg-center items-center justify-center">
                    {/*div para opacidad*/}
                    <div className="inset-0 size-full bg-black opacity-50 absolute z-0"/>


                    <div className="absolute w-[80dvw] h-full flex flex-col justify-center items-center text-white space-y-12">
                        <h1 className="text-3xl lg:text-5xl font-semibold text-center">RETIRO DE BASURA PROFESIONAL</h1>
                        {/*linea separacion*/}
                        <div className="w-full border-white border-[1px] -mt-8 mb-5"/>
                        {/*lista de servicios*/}
                        <ul className="flex flex-col w-full justify-start space-y-6 sm:space-y-8 z-10 text-white">
                            {featuresList.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-4 text-[18px] sm:text-[20px] font-medium text-wrap">
                                    <FaCheckCircle className="size-6 flex-shrink-0"/>
                                    <p className="flex-grow break-words">{feature}</p>
                                </li>
                            ))}
                        </ul>
                        <ContactButton text={"CONTÁCTANOS"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
                    </div>
                </div>
                {/*frase divider*/}
                <div className="h-fit py-4 bg-[#7c924f] flex items-center justify-center text-center w-full z-20 shadow-lg text-white cursor-default">
                    <p className="text-xl">Mantenemos <span className="font-semibold">tu jardín</span> limpio y <span className="font-semibold">libre de desechos.</span></p>
                </div>
                {/*showcase images*/}
                <div className="flex flex-col lg:flex-row h-fit w-full items-center justify-center lg:justify-between max-w-[80vw] space-y-8 py-8 cursor-default">
                    <div className='w-full lg:w-1/2 h-fit flex flex-col items-center justify-center'>
                        <ImageShowcase images={imagesGeneral} />
                    </div>
                    <div className='w-full lg:w-1/3 h-fit flex flex-col items-start justify-start space-y-8 border border-gray-100 p-6 shadow-md hover:shadow-lg active:shadow-lg transition-all duration-200 rounded-lg'>
                        <h3 className="text-3xl text-[#7c924f] font-semibold">Mantén tu jardín limpio y ordenado.</h3>
                        <p className="leading-relaxed">
                            Un jardín hermoso requiere estar libre de basura y desechos. La acumulación de residuos no solo afecta la estética, sino también la salud de tus plantas y el medio ambiente.
                            <br/><br/>
                            En <strong>Jardinería El Retoño</strong>, ofrecemos servicios de <strong>retiro de basura profesional</strong> que mantienen tu espacio limpio y ordenado.
                            Nuestro equipo se encarga de la <strong>recolección eficiente</strong> de todo tipo de desechos de jardín, desde hojas y ramas hasta materiales más pesados.
                            <br/><br/>
                            Te garantizamos un <strong>manejo responsable</strong> de los residuos, con prácticas respetuosas con el medio ambiente. Nuestro 
                            <strong> servicio puntual y confiable</strong> te libera de preocupaciones, permitiéndote disfrutar de un jardín impecable en todo momento.
                        </p>
                    </div>
                </div>
                {/*/!*CTA divider*!/*/}
                <div className="h-fit py-4 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-3 cursor-default">
                    <p className="text-3xl font-semibold text-shadow-lg">Jardín limpio y ordenado, a un clic de distancia</p>
                    <ContactButton text={"CONTÁCTANOS"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
                </div>
            </div>
        </>
    );
}

export default Page;