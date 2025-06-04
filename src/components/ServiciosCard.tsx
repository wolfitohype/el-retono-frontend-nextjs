import React from 'react';
import Link from "next/link";

interface ServiciosCardProps {
    imageUrl: string;
    servicio: string;
    link: string;
}

function ServiciosCard({imageUrl, servicio, link}: ServiciosCardProps) {
    return (
        <div className="border-gray-100 border overflow-hidden rounded-md shadow-md hover:shadow-xl active:shadow-xl cursor-pointer transition-all duration-300 flex relative h-64 w-3/4 md:h-70">
            <div className="bg-cover absolute inset-0 bg-center  z-0" style = {{
                backgroundImage: `url(${imageUrl})`
            }}>
                {/*div para opacidad*/}
                <div className="inset-0 size-full bg-black opacity-30 absolute z-0"/>
            </div>
            <div className="bg-white w-full bottom-0 absolute text-xl z-10 py-2 px-3 space-y-2">
                <p className="font-semibold">{servicio}</p>
                <Link href={`/servicios${link}`}>
                    <p className="text-[#689a05] text-[18px] inline cursor-pointer font-semibold hover:brightness-130 active:brightness-130 transition-all duration-150">Ver más...</p>
                </Link>
            </div>
        </div>
    );
}

export default ServiciosCard;