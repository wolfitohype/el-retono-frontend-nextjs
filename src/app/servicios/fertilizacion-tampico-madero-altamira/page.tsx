import React from 'react';
import Head from 'next/head';
import {FaCheckCircle} from "react-icons/fa";
import ContactButton from "@/components/ContactButton";
import ImageShowcase from "@/components/UI/ImageShowcase";

export const metadata = {
    title: 'Fertilización Profesional de Jardines | Jardinería El Retoño',
    description: 'Servicio de fertilización profesional para jardines en Tampico, Madero y Altamira. Mejora la salud y apariencia de tu césped con nuestros tratamientos especializados. ¡Contáctanos hoy!',
    keywords: [
        'fertilización de jardines',
        'fertilización de césped',
        'fertilización profesional',
        'jardineria tampico',
        'jardineria altamira',
        'jardinería El Retoño',
        'nutrición de plantas',
        'mejorar césped',
        'tratamiento de suelos',
        'jardines saludables',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'servicio de fertilización en Tampico',
        'fertilización de jardines en Madero',
        'tratamiento de áreas verdes en Altamira',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://www.elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Fertilización Profesional de Jardines | Jardinería El Retoño',
        description: 'Expertos en fertilización de jardines y áreas verdes. Mejoramos la salud y apariencia de tu césped con tratamientos especializados.',
        url: 'https://www.elretono.org/servicios/fertilizacion-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [
            {
                url: 'https://www.elretono.org/servicios-media/fertilizacion/6.webp',
                width: 1200,
                height: 630,
                alt: 'Fertilización profesional de jardines por Jardinería El Retoño',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fertilización Profesional de Jardines | Jardinería El Retoño',
        description: 'Revitaliza tu jardín con nuestros servicios de fertilización profesional. Cotiza sin compromiso.',
        images: ['https://www.elretono.org/servicios-media/fertilizacion/6.webp'],
    },
};


const featuresList = [
    'Fertilizantes de alta calidad',
    'Aplicación profesional y segura',
    'Tratamientos personalizados según tipo de suelo',
    'Mejora visible en la salud y apariencia de tu jardín',
]

const imagesGeneral = [
    '/servicios-media/fertilizacion/6.webp',
    '/servicios-media/mantenimiento-residencial/5.webp',
    '/servicios-media/mantenimiento-residencial/6.webp',
    '/servicios-media/fertilizacion/6.webp',
    '/servicios-media/fertilizacion/9.webp',
    '/servicios-media/fertilizacion/12.webp',
    '/servicios-media/fertilizacion/13.webp',
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
                            "@id": "https://www.elretono.org/servicios/fertilizacion-tampico-madero-altamira"
                        },
                        "priceRange": "$$",
                        "description": "Servicio profesional de fertilización de jardines en Tampico, Madero y Altamira. Mejoramos la salud y apariencia de tu césped con tratamientos especializados.",
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
                <div className="flex bg-[url('/servicios-media/fertilizacion/6.webp')] h-[80vh] w-full relative bg-cover bg-center items-center justify-center">
                    {/*div para opacidad*/}
                    <div className="inset-0 size-full bg-black opacity-50 absolute z-0"/>


                    <div className="absolute w-[80dvw] h-full flex flex-col justify-center items-center text-white space-y-12">
                        <h1 className="text-3xl lg:text-5xl font-semibold text-center">FERTILIZACIÓN PROFESIONAL DE JARDINES</h1>
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
                    <p className="text-xl">Nutrimos <span className="font-semibold">tu jardín</span> para un <span className="font-semibold">crecimiento óptimo.</span></p>
                </div>
                {/*showcase images*/}
                <div className="flex flex-col lg:flex-row h-fit w-full items-center justify-center lg:justify-between max-w-[80vw] space-y-8 py-8 cursor-default">
                    <div className='w-full lg:w-1/2 h-fit flex flex-col items-center justify-center'>
                        <ImageShowcase images={imagesGeneral} />
                    </div>
                    <div className='w-full lg:w-1/3 h-fit flex flex-col items-start justify-start space-y-8 border border-gray-100 p-6 shadow-md hover:shadow-lg active:shadow-lg transition-all duration-200 rounded-lg'>
                        <h3 className="text-3xl text-[#7c924f] font-semibold">Revitaliza tu jardín con nutrientes esenciales.</h3>
                        <p className="leading-relaxed">
                            Un jardín verdaderamente hermoso comienza desde el suelo. La fertilización adecuada es fundamental para mantener un césped vibrante y saludable.
                            <br/><br/>
                            En <strong>Jardinería El Retoño</strong>, ofrecemos servicios de <strong>fertilización profesional</strong> que nutren tu jardín desde la raíz.
                            Nuestros especialistas analizan el tipo de suelo y las necesidades específicas de tu jardín para aplicar los <strong>nutrientes esenciales</strong> que necesita.
                            <br/><br/>
                            Te garantizamos resultados visibles: un césped más verde, plantas más fuertes y un jardín que resistirá mejor las plagas y enfermedades. Nuestros 
                            <strong> tratamientos personalizados</strong> están diseñados para cada estación del año, asegurando que tu jardín luzca espectacular todo el tiempo.
                        </p>
                    </div>
                </div>
                {/*/!*CTA divider*!/*/}
                <div className="h-fit py-4 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-3 cursor-default">
                    <p className="text-3xl font-semibold text-shadow-lg">Pasto siempre verde, a un clic de distancia</p>
                    <ContactButton text={"CONTÁCTANOS"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
                </div>
            </div>
        </>
    );
}

export default Page;