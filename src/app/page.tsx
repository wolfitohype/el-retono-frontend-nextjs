import React from 'react';
import Image from "next/image";
import ContactButton from "@/components/ContactButton";
import LinkButton from "@/components/LinkButton";
import ImageCard from "@/components/ImageCard";
import ReviewCard from "@/components/ReviewCard";
import ItemCarousel from "@/components/ItemCarousel";
import FeaturesCard from "@/components/FeaturesCard";
import Slideshow from "@/components/Slideshow";
import ShieldIcon from "@/assets/ShieldIcon"
import ToolsIcon from "@/assets/ToolsIcon";
import ExcellenceIcon from "@/assets/ExcellenceIcon";
import {FaCheckCircle} from "react-icons/fa";
import { FaRegCircleCheck, FaStar } from "react-icons/fa6";
import BadgeIcon from "@/assets/BadgeIcon";
import BulbIcon from "@/assets/BulbIcon";
import TopEstandarIcon from "@/assets/TopEstandarIcon";
import PopularIcon from "@/assets/PopularIcon";
import WellnessIcon from "@/assets/WellnessIcon";
import CountUpDividerClient from "@/components/CountUpDividerClient";


const serviciosList = [
    'Mantenimiento de áreas verdes residenciales e industriales',
    'Poda y derrame de árboles',
    'Diseño 3D de jardines',
    'Limpieza de terrenos enmontados',
    'Fertilización de áreas verdes',
    'Fumigación para prevención de plagas',
    'Tratamiento de plantas con enfermedad'
]

const serviciosGenerales = [
    'Limpieza de terrenos',
    'Mantenimiento de jardines residenciales',
    'Poda y derrame de árboles',
    'Instalación de pasto Japonés y San Agustín',
    'Cotizaciones y visita a domicilio sin costo',
]

const garantiasList = [
    'Personal responsable, capacitado y de confianza',
        'Nos ajustamos a su presupuesto',
        'Trabajos impecables y de alta calidad',
        'Productos de alta calidad garantizando los mejores resultados para su jardín',
        'Citas flexibles que se ajustan a su disponibilidad',
        'Ofrecemos factura a todos los servicios en caso de requerirlo',
]

const serviciosEspecializados = [
    'Diseño 3D y construcción de jardín',
        'Fertilización con abonos naturales',
        'Fumigación para prevenir plagas',
        'Tratamiento para enfermedades de plantas',
        'Mantenimiento de áreas verdes comerciales e industriales',
        'Mantenimiento de plazas comerciales y cadenas comerciales',
        'Diseño 3D y construcción de proyectos de paisajismo',
]

const slidesUrl = [
    '/slide1.jpg',
    '/slide2.jpg',
    '/slide3.jpg',
    '/slide4.jpg',
    '/slide5.jpg',
]

export const metadata = {
    title: "El Retoño Jardinería | Expertos en Jardinería en Tampico, Madero y Altamira",
    description: "Transformamos tus áreas verdes en un paraíso. Más de 15 años ofreciendo servicios de jardinería profesional en Tampico, Madero y Altamira.",
    keywords: [
        "jardinería Tampico",
        "servicios de jardinería",
        "poda de árboles",
        "diseño de jardines 3D",
        "fumigación de jardines",
        "mantenimiento de áreas verdes",
        "El Retoño Jardinería"
    ],
    authors: [{ name: "El Retoño Jardinería", url: "https://elretono.org" }],
    creator: "El Retoño Jardinería",
    publisher: "El Retoño Jardinería",
    openGraph: {
        title: "El Retoño Jardinería",
        description: "Expertos en jardinería para hogares y empresas. Calidad, confianza y belleza natural.",
        url: "https://elretono.org",
        siteName: "El Retoño Jardinería",
        images: [
            {
                url: "https://elretono.org/og-image.png",
                width: 1200,
                height: 630,
                alt: "El Retoño Jardinería - Jardines Profesionales en Tampico"
            }
        ],
        locale: "es_MX",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "El Retoño Jardinería",
        description: "Más de 15 años manteniendo jardines en Tampico, Madero y Altamira.",
        images: ["https://elretono.org/og-image.jpg"],
    },
    metadataBase: new URL("https://elretono.org"),
    alternates: {
        canonical: "/",
        languages: {
            "es-MX": "/",
        },
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    }
};

function Page() {
    return (
        <>
            {/*thin bar header*/}
            <div className="bg-[#7c924f] h-8 w-dvw items-center justify-center z-10 hidden md:flex cursor-default">
                <p className="text-white text-sm text-shadow-lg">
                    Servicios de jardineria residencial y empresarial a todo <span
                    className="font-semibold">Tampico</span>, <span className="font-semibold">Madero</span> y <span
                    className="font-semibold">Altamira</span>.
                </p>
            </div>
            {/*hero section*/}
            <div className="h-130 md:h-[70vh] w-auto flex items-center justify-center relative z-20 cursor-default">
                <Image src="/hero.jpg" fill
                       alt="ARREGLO DE JARDIN CON PALMA EN MEDIO EL RETOÑO"
                       className="absolute object-cover object-[center_90%] brightness-50"/>
                <div className="text-white absolute inset-0 items-center flex flex-col justify-center space-y-6">
                    <p className="font-semibold text-4xl md:text-6xl text-center">SERVICIOS DE JARDINERIA
                        PROFESIONAL</p>
                    <p className="bg-[#F2F3E7] text-[#4f5d32] rounded-sm p-2 font-medium text-center w-[80dvw] md:w-auto">Convierte
                        tus áreas verdes en un paraíso con su belleza natural</p>
                    <ContactButton text="COTIZA YA" className="bg-[#7c924f] text-white px-6"/>
                </div>
            </div>
            {/*divider*/}
            <div
                className="h-16 md:h-20 text-white bg-[#7c924f] flex items-center justify-center font-semibold text-4xl md:text-5xl shadow text-shadow-lg cursor-default">
                <p>SERVICIOS</p>
            </div>
            {/*servicios section medium breakpoint*/}
            <div className="md:h-[90dvh] lg:h-[80dvh] flex flex-col items-center justify-center relative z-0 overflow-hidden md:flex hidden  cursor-default">
                {/*imagen de fondo*/}
                <Image src="/serviciosbg.jpg" fill alt="ARREGLO DE JARDIN INDUSTRIAL TAMPICO"
                       className="object-cover object-center brightness-50"/>
                {/*corte diagonal*/}
                <div className="absolute inset-0 z-10"
                    style={{
                        clipPath: 'polygon(0 0, 50% 0, 35% 100%, 0% 100%)',
                        backgroundColor: 'white'
                    }}
                />
                {/*contenedor de contenido*/}
                <div className="w-full flex items-center justify-between absolute inset-0 text-white z-20 pt-6 pb-12 px-4">
                    {/*lado izquierdo*/}
                    <div
                        className="flex flex-col items-center justify-center space-y-5 w-[30dvw] text-black text-center">
                        <ShieldIcon className="size-80 text-[#7c924f] -mb-3"/>
                        <h3 className="text-3xl font-semibold">Más de 15 años de experiencia.</h3>
                        <p>
                            Haciendo realidad los jardines soñados por nuestros clientes, con nuestra experiencia en
                            jardinería desde hace más de 15 años.
                        </p>
                    </div>
                    {/*lado derecho*/}
                    <div className="flex flex-col items-center justify-center space-y-6 w-[45dvw] text-white">
                        <ul className="flex flex-col justify-center space-y-5">
                            {serviciosList.map((servicio, index) => (
                                <li key={index} className="flex items-center space-x-6 text-[20px] text-wrap">
                                    <FaCheckCircle className="size-8 flex-shrink-0"/>
                                    <p className="flex-grow break-words">{servicio}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/*boton navegador*/}
                <LinkButton text="CONOCE NUESTROS SERVICIOS" link="#servicios"
                className="z-20 absolute bottom-2 bg-white font-semibold text-[#4f5d32] shadow-lg hover:shadow-2xl mb-5"/>
            </div>

            {/*servicios section mobile*/}
            <div className="h-250 flex flex-col items-center justify-around relative z-0 md:hidden  cursor-default">
                {/* Sección superior */}
                <div
                    className="flex flex-col items-center justify-center space-y-5 w-[80dvw] text-black text-center pt-10 pb-5"> {/* Ajusta pt y pb según necesites */}
                    <ShieldIcon className="size-80 text-[#7c924f] -mb-3 -mt-25"/>
                    <h3 className="text-2xl font-semibold">Más de 15 años de experiencia.</h3>
                </div>

                {/* Sección inferior con imagen de fondo*/}
                <div
                    className="w-full h-[100%] bg-[url('/serviciosbg.jpg')] bg-cover bg-center flex flex-col space-y-12 justify-center items-center relative z-0"> {/* Contenedor para la imagen y el contenido */}
                    {/*div para opacidad*/}
                    <div className="inset-0 size-full bg-black opacity-50 absolute"/>
                    {/*lista de servicios*/}
                    <ul className="flex flex-col justify-center space-y-6 sm:space-y-8 z-10 text-white w-[80dvw]">
                        {serviciosList.map((servicio, index) => (
                            <li key={index} className="flex items-center space-x-6 text-[18px] sm:text-[20px] font-semibold text-wrap">
                                <FaCheckCircle className="size-8 flex-shrink-0"/>
                                <p className="flex-grow break-words">{servicio}</p>
                            </li>
                        ))}
                    </ul>
                    <LinkButton
                        className="bg-white font-semibold text-[#4f5d32] text-center w-[80dvw] shadow-md z-20"
                        text="CONOCE NUESTROS SERVICIOS"
                        link="#servicios" />
                </div>
            </div>
            <CountUpDividerClient/>
            {/*por que elegirnos section*/}
            <div className="h-fit md:flex w-full bg-[#f2f3e7]">
                {/*div imagen fondo*/}
                <div className="bg-[url('/serviciosbg.jpg')] w-1/2 absolute bg-cover bg-center relative z-0 hidden lg:flex">
                    {/*div para opacidad*/}
                    <div className="inset-0 size-full bg-black opacity-15 absolute"/>
                </div>
                <div className="w-full lg:w-1/2 h-full py-10 xl:p-6 flex flex-col items-center xl:items-start justify-center md:p-12 space-y-8 md:space-y-12 cursor-default">
                    <p className="text-4xl font-semibold">Por qué elegirnos?</p>
                    <ImageCard image={ToolsIcon} text="Contamos con las herramientas necesarias para todo tipo de proyectos."/>
                    <ImageCard iconClassName="md:size-20" image={BadgeIcon} text="Hemos ganado la confianza de nuestros clientes, y somos recomendados por nuestra excelencia y compromiso."/>
                    <ImageCard image={BulbIcon} text="Damos lo mejor en cada proyecto, brindando gran creatividad para la creación de áreas verdes."/>
                </div>
            </div>
            {/*frase divider*/}
            <div className="h-fit py-4 bg-[#7c924f] flex items-center justify-center text-center w-full z-20 shadow-lg text-white cursor-default">
                <p className="text-xl">Creamos el espacio de <span className="font-semibold">paz y tranquilidad que tanto mereces.</span></p>
            </div>
            {/*nuestro proposito section*/}
            <div className="h-fit flex w-full bg-[#f2f3e7]">
                <div className="lg:w-1/2 w-full h-full py-10 xl:p-6 flex flex-col items-center xl:items-start justify-center md:p-12 space-y-8 md:space-y-12 cursor-default">
                    <p className="text-4xl font-semibold">Nuestro propósito</p>
                    <ImageCard
                        image={PopularIcon}
                        text="Ser los principales provedores de mantenimiento a las áreas verdes en la zona conurbada, ofreciendo servicios rápidos, de calidad, y con precios justos."/>
                    <ImageCard
                        iconClassName="size-20"
                        image={TopEstandarIcon}
                        text="Ser el estándar de calidad de la zona, manteniendo nuestro servicio de primera, y nuestra excelente atención al cliente."/>
                    <ImageCard
                        iconClassName="size-20"
                        image={WellnessIcon}
                        text="Promover el cuidado de áreas verdes, pues creemos que un jardín bien cuidado, brinda paz, alegría y bienestar con tan solo mirarlo."/>
                </div>
                <div className="bg-[url('/industrialbg.jpg')] w-1/2 absolute bg-cover bg-center relative z-0 hidden lg:flex">
                    {/*div para opacidad*/}
                    <div className="inset-0 size-full bg-black opacity-35 absolute"/>
                </div>
            </div>
            {/*/!*CTA divider*!/*/}
            <div className="h-fit py-4 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-3 cursor-default">
                <p className="text-3xl font-semibold text-shadow-lg">¡Renueva tu jardín con nosotros!</p>
                <ContactButton text={"SÍ QUIERO"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
            </div>
            {/*reviews section medium breakpoint*/}
            <div className="h-[60vh] hidden md:flex w-full items-center justify-start cursor-default">
                <div className="w-full h-full bg-[url('/industrialbg.jpg')] bg-cover bg-center flex items-center justify-between pr-8 relative z-0">
                    {/*div para opacidad*/}
                    <div className="inset-0 h-full bg-black opacity-35 absolute"/>
                    <div className="w-4/6">
                        <ItemCarousel>
                            <ReviewCard rating={5} title="Excelente servicio" comments="Excelente servicio, calidad y trato"
                                        name="Amaite Solis" profileUrl={"/reviews/AS.jpg"}/>
                            <ReviewCard rating={5} title="Excelente servicio" comments="Excelente servicio, 100% recomendado"
                                        name="Marco Trejo" profileUrl={"/reviews/MT.jpg"}/>
                            <ReviewCard rating={5} title="Muy buen servicio" comments="Muy puntuales y excelente trabajo"
                                        name="David Humberto" profileUrl={"/reviews/DM.jpg"}/>
                            <ReviewCard rating={5} title="100% recomendados, muy bonitos trabajos los que hacen" comments={""}
                                        name="Ivonne Chavez" profileUrl={"/reviews/IC.jpg"}/>
                        </ItemCarousel>
                    </div>
                    {/*corte diagonal*/}
                    <div className="absolute inset-0 z-10"
                         style={{
                             clipPath: 'polygon(45% 0, 100% 0%, 100% 100%, 65% 100%)',
                             backgroundColor: 'white'
                         }}
                    />
                    <div className="z-20 flex flex-col items-center text-center space-y-12">
                        <ExcellenceIcon className="size-32 text-[#7c924f]"/>
                        <h2 className="text-2xl font-bold">Clientes que nos recomiendan</h2>
                        <p className="hidden md:block">Clientes residenciales y comerciales, que realmente nos recomiendan.</p>
                    </div>
                </div>
            </div>
            {/*reviews section medium breakpoint*/}
            <div className="h-[75vh] flex flex-col md:hidden w-full items-center justify-start">
                <div className="h-h-1/2 z-20 flex flex-col items-center justify-center text-center space-y-6 py-6 max-w-[80%]">
                    <ExcellenceIcon className="size-32 text-[#7c924f]"/>
                    <h2 className="text-2xl font-bold">Clientes que nos recomiendan</h2>
                    <p className="block">Clientes residenciales y comerciales, que realmente nos recomiendan.</p>
                </div>
                <div className="w-full h-1/2 bg-[url('/industrialbg.jpg')] bg-cover bg-center flex items-center justify-between relative z-0">
                    {/*div para opacidad*/}
                    <div className="inset-0 size-full bg-black opacity-35 absolute"/>
                    <div className="w-full">
                        <ItemCarousel>
                            <ReviewCard rating={5} title="Excelente servicio" comments="Excelente servicio, calidad y trato"
                                        name="Amaite Solis" profileUrl={"/reviews/AS.jpg"}/>
                            <ReviewCard rating={5} title="Excelente servicio" comments="Excelente servicio, 100% recomendado"
                                        name="Marco Trejo" profileUrl={"/reviews/MT.jpg"}/>
                            <ReviewCard rating={5} title="Muy buen servicio" comments="Muy puntuales y excelente trabajo"
                                        name="David Humberto" profileUrl={"/reviews/DM.jpg"}/>
                            <ReviewCard rating={5} title="100% recomendados, muy bonitos trabajos los que hacen" comments={""}
                                        name="Ivonne Chavez" profileUrl={"/reviews/IC.jpg"}/>
                        </ItemCarousel>
                    </div>
                </div>
            </div>
            {/*servicios section*/}
            <div
                id="servicios"
                className="xl:h-[80dvh] h-fit scroll-mt-24 w-full flex flex-col items-center justify-center space-y-6 cursor-default p-12 bg-[#f2f3e7]">
                <p className="font-semibold text-3xl text-white bg-[#4f5d32] py-2 px-12 text-center shadow-md">LO QUE OFRECEMOS</p>
                <div className="w-full h-full flex lg:flex-row flex-col items-center justify-center lg:items-start lg:space-x-18 space-y-12">
                    <FeaturesCard icon={FaRegCircleCheck} features={serviciosGenerales} title={"SERVICIOS GENERALES"} className="bg-[#FFFFFA]"/>
                    <FeaturesCard icon={FaStar} features={garantiasList} title={"NUESTRA GARANTÍA"} className="bg-white"/>
                    <FeaturesCard icon={FaRegCircleCheck} features={serviciosEspecializados} title={"SERVICIOS ESPECIALIZADOS"} className="bg-[#FFFFFA]"/>
                </div>
            </div>
            {/*/!*CTA divider*!/*/}
            <div className="h-fit py-4 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-3  cursor-default">
                <p className="text-3xl font-semibold text-shadow-lg">Recuerda que estamos para servirte</p>
                <ContactButton text={"CONTÁCTANOS"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
            </div>
            {/*portafolio clientes section*/}
            <div className="h-fit py-8 w-full flex flex-col items-center justify-center space-y-4  cursor-default">
                <p className="font-semibold text-3xl text-white bg-[#4f5d32] py-2 px-8 md:px-12 text-center shadow-md">NUESTROS CLIENTES</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-5 lg:gap-y-12 p-6 place-items-center w-[80%]">
                    <Image src="/clientes/potosi.webp"
                           width={300} height={0} alt="SEGUROS EL POTOSI LOGO"
                           className="w-full rounded-xl sm:w-[65%] lg:size-auto rounded-xl"/>
                    <Image src="/clientes/oxxo.png"
                           width={250} height={0} alt="OXXO LOGO"
                           className="w-full rounded-xl sm:w-[65%] lg:size-auto rounded-xl"/>
                    <Image src="/clientes/azulejos.webp"
                           width={250} height={0} alt="GIGANTE DE AZULEJOS LOGO"
                           className="w-full rounded-xl sm:w-[65%] lg:size-auto rounded-xl"/>
                    <Image src="/clientes/bancario.webp"
                           width={250} height={0} alt="FRACC BANCARIO LOGO"
                           className="w-full rounded-xl sm:w-[65%] lg:size-auto rounded-xl"/>
                    <Image src="/clientes/floresta.webp"
                           width={250} height={0} alt="FRACC FLORESTA LOGO"
                           className="w-full rounded-xl sm:w-[65%] lg:size-auto rounded-xl"/>
                    <Image src="/clientes/kenworth.webp"
                           width={250} height={0} alt="KENWORTH DE LA HUASTECA LOGO"
                           className="w-full rounded-xl sm:w-[65%] lg:size-auto rounded-xl"/>
                    <Image src="/clientes/tampiquenos.webp"
                           width={250} height={0} alt="TAMPIQUENOS LOGO"
                           className="w-full rounded-xl sm:w-[65%] lg:size-auto rounded-xl"/>
                    <Image src="/clientes/esperanza.webp"
                           width={250} height={0} alt="GRUPO ESPERANZA LOGO"
                           className="w-full rounded-xl sm:w-[65%] lg:size-auto rounded-xl"/>
                </div>
            </div>
            {/*/!*CTA divider*!/*/}
            <div className="h-fit py-4 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-3 cursor-default">
                <p className="text-3xl font-medium text-shadow-lg">No esperes más y agenda tu primer cita <span className="font-semibold">ahora</span></p>
                <ContactButton text={"CONTÁCTANOS"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
            </div>
            <div className="h-[30vh] w-full">
                <Slideshow slidesUrl={slidesUrl}>
                    <p className="font-semibold text-xl max-w-3/4 text-center sm:text-2xl text-white  cursor-default">Un jardín bien cuidado es fuente de belleza, tranquilidad y relajación en casa.</p>
                </Slideshow>
            </div>
        </>
    );
}

export default Page;