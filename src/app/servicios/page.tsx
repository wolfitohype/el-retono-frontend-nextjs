import React from 'react';
import ServiciosCard from "@/components/ServiciosCard";
import ContactButton from "@/components/ContactButton";

interface Servicio {
    imageUrl: string;
    name: string;
    link: string;
}

const servicios: Servicio[] = [
    {name: 'Mantenimiento de jardines residenciales', imageUrl: '/servicios-media/mant-residencial.webp', link: '/jardineria-residencial-tampico-madero-altamira'},
    {name: 'Poda de árboles', imageUrl: '/servicios-media/poda-arboles.webp', link: '/poda-arboles-tampico-madero-altamira'},
    {name: 'Venta e instalación de pasto', imageUrl: '/servicios-media/pasto.webp', link: '/venta-pasto-tampico-madero-altamira'},
    {name: 'Fertilización de áreas verdes', imageUrl: '/servicios-media/fertilizacion.webp', link: '/fertilizacion-tampico-madero-altamira'},
    {name: 'Fumigación de áreas verdes', imageUrl: '/servicios-media/serviciosbg.webp', link: '/fumigacion-tampico-madero-altamira'},
    {name: 'Póliza comercial de mantenimiento periódico', imageUrl: '/servicios-media/poliza.webp', link: '/mantenimiento-areas-verdes-tampico-madero-altamira'},
    {name: 'Retiro de basura', imageUrl: '/servicios-media/serviciosbg.webp', link: '/retiro-basura-tampico-madero-altamira'},
    {name: 'Diseño y previsualización 3D de áreas verdes', imageUrl: '/servicios-media/3d.webp', link: '/diseno-3d-jardin-tampico-madero-altamira'},
]

function Page() {
    return (
        <>
            <div className="h-fit w-dvw">
                <div className="flex flex-col items-center justify-center space-y-8 py-8">
                    <h1 className="font-semibold text-3xl text-white bg-[#4f5d32] py-4 px-8 md:px-12 text-center shadow-md">Nuestros servicios</h1>
                    {/*servicios banners*/}
                    <div className="h-fit w-full flex flex-col md:grid md:grid-cols-2 items-center justify-items-center justify-center space-y-8">
                        {servicios.map((servicio, index) => (
                            <ServiciosCard key={index} servicio={servicio.name} imageUrl={servicio.imageUrl} link={servicio.link}/>
                        ))}
                    </div>
                </div>
                {/*/!*CTA divider*!/*/}
                <div className="h-fit py-4 bg-[#4f5d32] flex items-center justify-center text-center w-full text-white flex-col space-y-3 cursor-default">
                    <p className="text-2xl font-semibold text-shadow-lg">Interesado en algún servicio?</p>
                    <ContactButton text={"CONTÁCTANOS"} className="bg-white rounded-lg text-[#4f5d32] font-semibold"/>
                </div>
            </div>
        </>
    );
}

export default Page;