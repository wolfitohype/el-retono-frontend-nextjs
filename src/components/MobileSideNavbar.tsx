'use client'
import React from 'react';
import cn from '@/utils/cn'
import {FaTimes} from "react-icons/fa";

interface SideNavbarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const navLinks = [
    {label: 'INICIO', href: '#'},
    {label: 'SERVICIOS', href: '#servicios'},
    {label: 'GALERÍA', href: '/galeria'},
]

function MobileSideNavbar({ isOpen, setIsOpen }: SideNavbarProps) {
    return (
        <div className={cn("fixed inset-0 size-full bg-black/60 justify-end items-center z-80 lg:hidden cursor-default", isOpen ? "bg-black/60 opacity-100 pointer-events-auto flex" : "opacity-0 pointer-events-none")}
            onClick={() => setIsOpen(false)}
        >
            <div className={cn(
                "w-3/4 bg-[#eff0d6] h-full min-h-full transform transition-transform duration-300",
                isOpen ? "translate-x-0" : "translate-x-full")}
                onClick={(event) => {event.stopPropagation()}}>
                <div className="h-1/16 bg-[#7c924f] w-full flex items-center justify-between px-6">
                    <p className="text-white text-2xl font-semibold">Menú</p>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="text-white active:text-[#4f5d32] hover:text-[#4f5d32] transition-all duration-300 cursor-pointer"
                    >
                        <FaTimes className="size-6 cursor-pointer" />
                    </button>
                </div>
                <div className="h-full flex items-start justify-start">
                    <ul className="divide-y-0 divide-gray-500 flex flex-col w-full text-black">
                        {navLinks.map((navLink, index) => (
                            <li
                                className="text-xl font-medium py-4 px-6 even:bg-[#7c924f]/20 odd:bg-[#7c924f]/10 active:shadow-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
                                key={index}>{navLink.label}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileSideNavbar;