import React from 'react';
import Head from 'next/head';
import {FaCheckCircle} from "react-icons/fa";
import ContactButton from "@/components/ContactButton";
import ImageShowcase from "@/components/UI/ImageShowcase";

export const metadata = {
    title: 'Diseño 3D de Jardines | Jardinería El Retoño',
    description: 'Servicio de diseño y previsualización 3D de jardines en Tampico, Madero y Altamira. Visualiza tu proyecto antes de implementarlo con nuestras representaciones digitales profesionales. ¡Contáctanos hoy!',
    keywords: [
        'diseño 3D de jardines',
        'previsualización de áreas verdes',
        'diseño digital de jardines',
        'jardineria tampico',
        'jardineria altamira',
        'jardinería El Retoño',
        'modelado 3D de exteriores',
        'planificación de jardines',
        'visualización de proyectos',
        'diseño paisajístico',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'servicio de diseño en Tampico',
        'diseño de jardines en Madero',
        'previsualización 3D en Altamira',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://www.elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Diseño 3D de Jardines | Jardinería El Retoño',
        description: 'Expertos en diseño y previsualización 3D de jardines. Visualiza tu proyecto antes de implementarlo con nuestras representaciones digitales profesionales.',
        url: 'https://www.elretono.org/servicios/diseno-3d-jardin-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [
            {
                url: 'https://www.elretono.org/servicios-media/diseno-3d/1.webp',
                width: 1200,
                height: 630,
                alt: 'Diseño 3D de jardines por Jardinería El Retoño',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Diseño 3D de Jardines | Jardinería El Retoño',
        description: 'Visualiza tu jardín ideal antes de crearlo con nuestros servicios de diseño 3D profesional. Cotiza sin compromiso.',
        images: ['https://www.elretono.org/servicios-media/diseno-3d/1.webp'],
    },
};


const featuresList = [
    'Visualización realista de tu proyecto',
    'Planificación detallada de espacios',
    'Múltiples propuestas de diseño',
    'Ajustes y modificaciones antes de la implementación',
]

const imagesGeneral = [
    '/servicios-media/diseno-3d/1.webp',
    '/servicios-media/diseno-3d/2.webp',
    '/servicios-media/diseno-3d/4.webp',
    '/servicios-media/diseno-3d/5.webp',
    '/servicios-media/diseno-3d/6.webp',
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
                            "@id": "https://www.elretono.org/servicios/diseno-3d-jardin-tampico-madero-altamira"
                        },
                        "priceRange": "$$",
                        "description": "Servicio profesional de diseño y previsualización 3D de jardines en Tampico, Madero y Altamira. Visualiza tu proyecto antes de implementarlo con nuestras representaciones digitales profesionales.",
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
                <div className="flex bg-[url('/servicios-media/diseno-3d/1.webp')] h-[80vh] w-full relative bg-cover bg-center items-center justify-center">
                    {/*div para opacidad*/}
                    <div className="inset-0 size-full bg-black opacity-50 absolute z-0"/>


                    <div className="absolute w-[80dvw] h-full flex flex-col justify-center items-center text-white space-y-12">
                        <h1 className="text-3xl lg:text-5xl font-semibold text-center">DISEÑO Y PREVISUALIZACIÓN 3D DE JARDINES</h1>
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
                    <p className="text-xl">Visualiza <span className="font-semibold">tu jardín ideal</span> antes de <span className="font-semibold">hacerlo realidad.</span></p>
                </div>
                {/*showcase images*/}
                <div className="flex flex-col lg:flex-row h-fit w-full items-center justify-center lg:justify-between max-w-[80vw] space-y-8 py-8 cursor-default">
                    <div className='w-full lg:w-1/2 h-fit flex flex-col items-center justify-center'>
                        <ImageShowcase images={imagesGeneral} />
                    </div>
                    <div className='w-full lg:w-1/3 h-fit flex flex-col items-start justify-start space-y-8 border border-gray-100 p-6 shadow-md hover:shadow-lg active:shadow-lg transition-all duration-200 rounded-lg'>
                        <h3 className="text-3xl text-[#7c924f] font-semibold">Visualiza tu jardín antes de crearlo.</h3>
                        <p className="leading-relaxed">
                            ¿Te has preguntado cómo se vería tu jardín ideal antes de invertir en su creación? Nuestro servicio de diseño 3D te permite exactamente eso.
                            <br/><br/>
                            En <strong>Jardinería El Retoño</strong>, ofrecemos <strong>diseño y previsualización 3D</strong> de áreas verdes que te permiten ver tu proyecto de jardín desde todos los ángulos antes de implementarlo.
                            Nuestros diseñadores crean <strong>representaciones digitales realistas</strong> que muestran cómo se verá tu espacio con diferentes plantas, elementos decorativos y distribuciones.
                            <br/><br/>
                            Te garantizamos una <strong>planificación detallada</strong> que minimiza errores y maximiza la satisfacción con el resultado final. Nuestras 
                            <strong> visualizaciones 3D</strong> te permiten hacer ajustes y modificaciones antes de comenzar el trabajo físico, ahorrándote tiempo y recursos.
                        </p>
                    </div>
                </div>
                {/*/!*CTA divider*!/*/}
                <div className="h-fit py-4 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-3 cursor-default">
                    <p className="text-3xl font-semibold text-shadow-lg">Tu jardín ideal, visualizado antes de crearlo</p>
                    <ContactButton text={"CONTÁCTANOS"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
                </div>
            </div>
        </>
    );
}

export default Page;