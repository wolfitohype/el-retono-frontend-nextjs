import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import ContactButton from '@/components/ContactButton';
import Breadcrumbs from '@/components/Breadcrumbs';

interface ServicePageLayoutProps {
    breadcrumbLabel: string;
    jsonLd: Record<string, unknown>;
    heroImage: string;
    heroImageAlt: string;
    title: string;
    tagline: string;
    benefits: string[];
    description: React.ReactNode;
    galleryImages: string[];
    ctaTitle: string;
}

export default function ServicePageLayout({
    breadcrumbLabel,
    jsonLd,
    heroImage,
    heroImageAlt,
    title,
    tagline,
    benefits,
    description,
    galleryImages,
    ctaTitle,
}: ServicePageLayoutProps) {
    return (
        <>
            <Breadcrumbs items={[
                { label: 'Inicio', href: '/' },
                { label: 'Servicios', href: '/servicios' },
                { label: breadcrumbLabel },
            ]} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Split hero */}
            <section className="flex flex-col lg:flex-row min-h-[520px]">
                {/* Image side */}
                <div className="relative w-full lg:w-1/2 h-72 lg:h-auto min-h-[300px]">
                    <Image
                        src={heroImage}
                        alt={heroImageAlt}
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                {/* Content side */}
                <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 lg:px-16 py-12 space-y-6">
                    <div className="space-y-3">
                        <h1 className="text-2xl lg:text-4xl font-bold text-[#2d3a1a] leading-tight">
                            {title}
                        </h1>
                        <div className="w-16 h-[4px] bg-[#689a05] rounded-full" />
                        <p className="text-[#689a05] font-medium text-lg italic">{tagline}</p>
                    </div>
                    <ul className="space-y-3">
                        {benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start space-x-3 text-gray-700">
                                <FaCheckCircle className="text-[#689a05] mt-[3px] flex-shrink-0 size-4" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                    <ContactButton
                        text="CONTÁCTANOS"
                        className="w-fit !bg-[#4f5d32] !text-white hover:!bg-[#29301A] rounded-lg px-8 py-3 font-semibold"
                    />
                </div>
            </section>

            {/* Trust bar */}
            <div className="bg-[#7c924f] w-full py-6 px-4">
                <div className="max-w-3xl mx-auto grid grid-cols-3 text-white text-center">
                    <div className="px-4 py-2">
                        <p className="text-3xl font-bold">15+</p>
                        <p className="text-sm mt-1 opacity-90">Años de experiencia</p>
                    </div>
                    <div className="px-4 py-2 border-x border-white/30">
                        <p className="text-3xl font-bold">+500</p>
                        <p className="text-sm mt-1 opacity-90">Clientes satisfechos</p>
                    </div>
                    <div className="px-4 py-2">
                        <p className="text-3xl font-bold">✓</p>
                        <p className="text-sm mt-1 opacity-90">Facturación disponible</p>
                    </div>
                </div>
            </div>

            {/* Editorial description */}
            <div className="w-full bg-[#f5f7ee] py-14 px-6">
                <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-[17px]">
                    {description}
                </div>
            </div>

            {/* Photo grid */}
            {galleryImages.length > 0 && (
                <div className="w-full bg-white py-14 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#2d3a1a] mb-2 text-center">
                            Nuestro trabajo
                        </h2>
                        <div className="w-16 h-[4px] bg-[#689a05] rounded-full mx-auto mb-10" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {galleryImages.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative aspect-[4/3] overflow-hidden rounded-lg group shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <Image
                                        src={img}
                                        alt={`${title} - foto ${i + 1}`}
                                        fill
                                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* CTA banner */}
            <div className="bg-[#4f5d32] w-full py-12 px-6 flex flex-col items-center text-center text-white space-y-3">
                <p className="text-2xl lg:text-3xl font-bold max-w-xl">{ctaTitle}</p>
                <p className="font-light text-lg opacity-90">
                    Uno de nuestros asesores te contactará en minutos.
                </p>
                <ContactButton
                    text="CONTÁCTANOS AHORA"
                    className="!bg-white !text-[#4f5d32] rounded-lg font-bold px-8 py-4 text-lg mt-2"
                />
            </div>
        </>
    );
}
