import React from 'react';
import Head from 'next/head';
import {FaCheckCircle} from "react-icons/fa";
import ContactButton from "@/components/ContactButton";
import ImageShowcase from "@/components/UI/ImageShowcase";

export const metadata = {
    title: 'Fumigación Profesional de Jardines | Jardinería El Retoño',
    description: 'Servicio de fumigación profesional para jardines en Tampico, Madero y Altamira. Control efectivo de plagas y protección para tus áreas verdes con métodos seguros. ¡Contáctanos hoy!',
    keywords: [
        'fumigación de jardines',
        'control de plagas',
        'fumigación profesional',
        'jardineria tampico',
        'jardineria altamira',
        'jardinería El Retoño',
        'eliminación de insectos',
        'protección de plantas',
        'tratamiento contra plagas',
        'jardines saludables',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'servicio de fumigación en Tampico',
        'fumigación de jardines en Madero',
        'control de plagas en Altamira',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://www.elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Fumigación Profesional de Jardines | Jardinería El Retoño',
        description: 'Expertos en fumigación de jardines y control de plagas. Protegemos tus áreas verdes con métodos seguros y efectivos.',
        url: 'https://www.elretono.org/servicios/fumigacion-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [
            {
                url: 'https://www.elretono.org/servicios-media/fumigacion/1.webp',
                width: 1200,
                height: 630,
                alt: 'Fumigación profesional de jardines por Jardinería El Retoño',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fumigación Profesional de Jardines | Jardinería El Retoño',
        description: 'Protege tu jardín contra plagas con nuestros servicios de fumigación profesional. Cotiza sin compromiso.',
        images: ['https://www.elretono.org/servicios-media/fumigacion/1.webp'],
    },
};


const featuresList = [
    'Productos de fumigación seguros y efectivos',
    'Aplicación profesional por personal capacitado',
    'Control integral de plagas y prevención',
    'Protección para tu familia, mascotas y plantas',
]

const imagesGeneral = [
    '/servicios-media/fumigacion/1.webp',
    '/servicios-media/fumigacion/2.webp',
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
                            "@id": "https://www.elretono.org/servicios/fumigacion-tampico-madero-altamira"
                        },
                        "priceRange": "$$",
                        "description": "Servicio profesional de fumigación de jardines en Tampico, Madero y Altamira. Control efectivo de plagas y protección para tus áreas verdes con métodos seguros.",
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
                <div className="flex bg-[url('/servicios-media/fumigacion/1.webp')] h-[80vh] w-full relative bg-cover bg-center items-center justify-center">
                    {/*div para opacidad*/}
                    <div className="inset-0 size-full bg-black opacity-50 absolute z-0"/>


                    <div className="absolute w-[80dvw] h-full flex flex-col justify-center items-center text-white space-y-12">
                        <h1 className="text-3xl lg:text-5xl font-semibold text-center">FUMIGACIÓN PROFESIONAL DE JARDINES</h1>
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
                    <p className="text-xl">Protegemos <span className="font-semibold">tu jardín</span> contra <span className="font-semibold">plagas e insectos.</span></p>
                </div>
                {/*showcase images*/}
                <div className="flex flex-col lg:flex-row h-fit w-full items-center justify-center lg:justify-between max-w-[80vw] space-y-8 py-8 cursor-default">
                    <div className='w-full lg:w-1/2 h-fit flex flex-col items-center justify-center'>
                        <ImageShowcase images={imagesGeneral} />
                    </div>
                    <div className='w-full lg:w-1/3 h-fit flex flex-col items-start justify-start space-y-8 border border-gray-100 p-6 shadow-md hover:shadow-lg active:shadow-lg transition-all duration-200 rounded-lg'>
                        <h3 className="text-3xl text-[#7c924f] font-semibold">Protege tu jardín contra plagas e insectos dañinos.</h3>
                        <p className="leading-relaxed">
                            Las plagas pueden destruir rápidamente la belleza y salud de tu jardín. Una fumigación profesional es esencial para mantener tus áreas verdes protegidas.
                            <br/><br/>
                            En <strong>Jardinería El Retoño</strong>, ofrecemos servicios de <strong>fumigación profesional</strong> que eliminan eficazmente las plagas mientras protegen tus plantas.
                            Nuestros especialistas utilizan <strong>productos seguros</strong> y técnicas avanzadas para combatir insectos, hongos y otras amenazas que pueden dañar tu jardín.
                            <br/><br/>
                            Te garantizamos un <strong>control integral de plagas</strong> con métodos que son seguros para tu familia, mascotas y el medio ambiente. Nuestros 
                            <strong> tratamientos preventivos</strong> no solo eliminan las plagas actuales, sino que también ayudan a prevenir futuras infestaciones, manteniendo tu jardín saludable todo el año.
                        </p>
                    </div>
                </div>
                {/*/!*CTA divider*!/*/}
                <div className="h-fit py-4 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-3 cursor-default">
                    <p className="text-3xl font-semibold text-shadow-lg">Protección para tu jardín, a un clic de distancia</p>
                    <ContactButton text={"CONTÁCTANOS"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
                </div>
            </div>
        </>
    );
}

export default Page;