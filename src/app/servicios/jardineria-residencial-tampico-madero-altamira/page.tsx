import React from 'react';
import Head from 'next/head';
import {FaCheckCircle} from "react-icons/fa";
import ContactButton from "@/components/ContactButton";
import ImageShowcase from "@/components/UI/ImageShowcase";

export const metadata = {
    title: 'Mantenimiento de Jardines Residenciales | Jardinería El Retoño',
    description: 'Servicios de mantenimiento de jardines residenciales con jardineros de confianza. Planes flexibles, facturación disponible y control profesional de plagas. ¡Contáctanos hoy!',
    keywords: [
        'mantenimiento de jardines',
        'jardineria tampico',
        'jardineria altamira',
        'jardinería residencial',
        'jardineros de confianza',
        'mantenimiento áreas verdes',
        'jardinería El Retoño',
        'fumigación de jardines',
        'fertilización de pasto',
        'jardines en perfectas condiciones',
        'jardinero en Tampico',
        'jardinero en Ciudad Madero',
        'jardinero en Altamira',
        'servicio de jardinería en Tampico',
        'mantenimiento de jardines en Madero',
        'jardinería residencial en Altamira',
    ],
    authors: [{ name: 'Jardinería El Retoño', url: 'https://www.elretono.org' }],
    creator: 'Jardinería El Retoño',
    publisher: 'Jardinería El Retoño',
    openGraph: {
        title: 'Mantenimiento de Jardines Residenciales | Jardinería El Retoño',
        description: 'Expertos en mantenimiento de jardines para hogares. Servicio confiable y facturable. Atención personalizada y resultados impecables.',
        url: 'https://www.elretono.org/servicios/jardineria-residencial-tampico-madero-altamira',
        siteName: 'Jardinería El Retoño',
        images: [
            {
                url: 'https://www.elretono.org/servicios-media/mant-residencial.webp',
                width: 1200,
                height: 630,
                alt: 'Mantenimiento de jardines residenciales por Jardinería El Retoño',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mantenimiento de Jardines Residenciales | Jardinería El Retoño',
        description: 'Conserva tu jardín en perfectas condiciones con nuestro equipo profesional. Cotiza sin compromiso.',
        images: ['https://www.elretono.org/servicios-media/mant-residencial.webp'],
    },
};


const featuresList = [
    'Servicios facturables',
    'Jardineros de confianza',
    'Planes de mantenimiento flexibles',
    'Te liberamos del estrés que conlleva mantener un jardín',
]

const imagesGeneral = [
    '/servicios-media/mantenimiento-residencial/1.webp',
    '/servicios-media/mantenimiento-residencial/2.webp',
    '/servicios-media/mantenimiento-residencial/3.webp',
    '/servicios-media/mantenimiento-residencial/4.webp',
    '/servicios-media/mantenimiento-residencial/5.webp',
    '/servicios-media/mantenimiento-residencial/6.webp',
    '/servicios-media/mantenimiento-residencial/7.webp',

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
                            "@id": "https://www.elretono.org/servicios/jardineria-residencial-tampico-madero-altamira"
                        },
                        "priceRange": "$$",
                        "description": "Mantenimiento de jardines residenciales en Tampico, Madero y Altamira. Jardineros de confianza, servicios facturables y atención profesional.",
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
                <div className="flex bg-[url('/servicios-media/mant-residencial.webp')] h-[80vh] w-full relative bg-cover bg-center items-center justify-center">
                    {/*div para opacidad*/}
                    <div className="inset-0 size-full bg-black opacity-40 absolute z-0"/>


                    <div className="absolute w-[80dvw] h-full flex flex-col justify-center items-center text-white space-y-12">
                        <h1 className="text-3xl lg:text-5xl font-semibold text-center">MANTENIMIENTO DE ÁREAS VERDES RESIDENCIAL</h1>
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
                    <p className="text-xl">Nos <span className="font-semibold">comprometemos</span> con <span className="font-semibold">tu jardín.</span></p>
                </div>
                {/*showcase images*/}
                <div className="flex flex-col lg:flex-row h-fit w-full items-center justify-center lg:justify-between max-w-[80vw] space-y-8 py-8 cursor-default">
                    <div className='w-full lg:w-1/2 h-fit flex flex-col items-center justify-center'>
                        <ImageShowcase images={imagesGeneral} />
                    </div>
                    <div className='w-full lg:w-1/3 h-fit flex flex-col items-start justify-start space-y-8 border border-gray-100 p-6 shadow-md hover:shadow-lg active:shadow-lg transition-all duration-200 rounded-lg'>
                        <h3 className="text-3xl text-[#7c924f] font-semibold">Disfruta de tus áreas verdes, sin batallar.</h3>
                        <p className="leading-relaxed">
                            Imagina un jardín que siempre se vea impecable, vibrante y lleno de vida.
                            <br/><br/>
                            En <strong>Jardinería El Retoño</strong>, transformamos esa visión en tu realidad diaria.
                            Nuestro equipo de <strong>jardineros de confianza</strong> se encarga de cada detalle.
                            Ofrecemos <strong>mantenimiento de áreas verdes</strong> con <strong>fertilización</strong>, <strong>fumigación</strong> efectiva y <strong>control de plagas </strong>.
                            <br/><br/>
                            Te garantizamos un jardín bien cuidado, soporte y atención humana, <strong>planes de mantenimiento
                            mensuales</strong> o <strong>quincenales</strong>, y visitas solo cuando estés disponible.
                        </p>
                    </div>
                </div>
                {/*/!*CTA divider*!/*/}
                <div className="h-fit py-4 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-3 cursor-default">
                    <p className="text-3xl font-semibold text-shadow-lg">Tu jardín bien cuidado, a un clic de distancia</p>
                    <ContactButton text={"CONTÁCTANOS"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
                </div>
            </div>
        </>
    );
}

export default Page;