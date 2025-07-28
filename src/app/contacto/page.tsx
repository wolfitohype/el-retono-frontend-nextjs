import React from 'react';
import Image from 'next/image';
import {FaCheckCircle} from 'react-icons/fa';
import ContactCard from '@/components/ContactCard';

export const metadata = {
    title: "Contacto | El Retoño Jardinería | Tampico, Madero y Altamira",
    description: "Contáctanos para transformar tus áreas verdes. Servicios de jardinería profesional en Tampico, Madero y Altamira.",
    keywords: [
        "contacto jardinería Tampico",
        "servicios de jardinería",
        "contactar El Retoño",
        "jardinería profesional",
        "mantenimiento de jardines",
        "áreas verdes Tampico"
    ],
    openGraph: {
        title: "Contacto | El Retoño Jardinería",
        description: "Contáctanos para transformar tus áreas verdes en espacios de belleza y tranquilidad.",
        url: "https://elretono.org/contacto",
        siteName: "El Retoño Jardinería",
        images: [
            {
                url: "https://elretono.org/og-image.png",
                width: 1200,
                height: 630,
                alt: "El Retoño Jardinería - Contacto"
            }
        ],
        locale: "es_MX",
        type: "website",
    },
};

// Contact information items
const contactInfo = [
    'Servicio en toda la zona conurbada: Tampico, Madero y Altamira',
    'Atención personalizada y profesional',
    'Respuesta rápida a tus necesidades',
    'Presupuestos sin compromiso',
    'Más de 15 años de experiencia'
];

export default function ContactPage() {

    return (
        <>
            {/* Hero section with background image */}
            <div className="h-[50vh] md:h-[60vh] w-auto flex items-center justify-center relative z-20">
                <Image 
                    src="/servicios-media/diseno-3d/5.webp" 
                    fill
                    alt="Jardín profesional El Retoño"
                    className="absolute object-cover brightness-50"
                />
                <div className="text-white absolute inset-0 items-center flex flex-col justify-center space-y-6 px-4">
                    <h1 className="font-semibold text-4xl md:text-6xl text-center">CONTÁCTANOS</h1>
                    <p className="bg-[#F2F3E7] text-[#4f5d32] rounded-sm p-2 font-medium text-center w-[90%] md:w-auto max-w-2xl">
                        Estamos listos para transformar tus áreas verdes en espacios de belleza y tranquilidad
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="h-16 md:h-20 text-white bg-[#7c924f] flex items-center justify-center font-semibold text-4xl md:text-5xl shadow text-shadow-lg">
                <p>CONTACTO</p>
            </div>

            {/* Contact section */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">

                        {/* Left side - Contact info */}
                        <div className="w-full md:w-1/2 flex flex-col space-y-8">
                            <h2 className="text-3xl font-semibold text-[#4f5d32]">Estamos aquí para servirte</h2>
                            <p className="text-lg">
                                En El Retoño Jardinería nos especializamos en crear y mantener espacios verdes 
                                que reflejen belleza y armonía. Contáctanos para transformar tu jardín.
                            </p>

                            <div className="mt-6">
                                <ul className="flex flex-col justify-center space-y-5">
                                    {contactInfo.map((info, index) => (
                                        <li key={index} className="flex items-center space-x-4 text-[18px] text-wrap">
                                            <FaCheckCircle className="size-6 flex-shrink-0 text-[#7c924f]"/>
                                            <p className="flex-grow break-words">{info}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right side - Contact form */}
                        <ContactCard />
                    </div>
                </div>
            </div>
        </>
    );
}
