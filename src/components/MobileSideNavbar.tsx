'use client'
import React from 'react';
import cn from '@/utils/cn'
import { FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import ContactButtonNavbar from "@/components/ContactButtonNavbar";

interface SideNavbarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const navLinks = [
    { label: 'Inicio', href: '/', number: '01' },
    { label: 'Servicios', href: '/servicios', number: '02' },
    { label: 'Contacto', href: '/contacto', number: '03' },
]

function MobileSideNavbar({ isOpen, setIsOpen }: SideNavbarProps) {
    return (
        <div
            className={cn(
                "fixed inset-0 z-[80] lg:hidden",
                isOpen ? "pointer-events-auto" : "pointer-events-none"
            )}
        >
            {/* Backdrop */}
            <div
                className={cn(
                    "absolute inset-0 bg-black transition-opacity duration-300",
                    isOpen ? "opacity-70" : "opacity-0"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <div
                className={cn(
                    "fixed right-0 top-0 h-[100dvh] w-4/5 max-w-sm flex flex-col transform transition-transform duration-300 ease-out overflow-hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Fondo base con gradiente */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(160deg, #1e2e10 0%, #2d3a1a 50%, #1a2410 100%)',
                        zIndex: 0,
                    }}
                />

                {/* Orbe decorativo — brillo sutil arriba a la derecha */}
                <div
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(104,154,5,0.18) 0%, transparent 70%)',
                        zIndex: 1,
                    }}
                />

                {/* Orbe decorativo — brillo sutil abajo a la izquierda */}
                <div
                    className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(138,184,42,0.1) 0%, transparent 70%)',
                        zIndex: 1,
                    }}
                />

                {/* Header */}
                <div
                    className="relative flex items-center justify-between px-6 py-5 border-b border-white/10"
                    style={{ zIndex: 10, backgroundColor: 'rgba(15, 22, 6, 0.6)' }}
                >
                    <Link href="/" onClick={() => setIsOpen(false)} className="bg-white rounded-lg px-3 py-1.5 inline-block">
                        <Image src="/logo.png" width={130} height={40} alt="El Retoño Logo" className="h-9 w-auto" />
                    </Link>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Cerrar menú"
                        className="text-white/50 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                    >
                        <FaTimes className="size-4" />
                    </button>
                </div>

                {/* Links */}
                <nav className="relative flex-1 px-5 py-10 flex flex-col justify-center" style={{ zIndex: 10 }}>
                    <ul className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-200 group"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-mono text-[#689a05]/60 group-hover:text-[#8ab82a] transition-colors">
                                            {link.number}
                                        </span>
                                        <span className="text-white/75 group-hover:text-white text-xl font-semibold tracking-wide transition-colors">
                                            {link.label}
                                        </span>
                                    </div>
                                    <span className="w-5 h-px bg-white/0 group-hover:bg-[#689a05] group-hover:w-8 transition-all duration-300" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* CTAs */}
                <div
                    className="relative px-5 py-6 flex flex-col gap-3 border-t border-white/10"
                    style={{ zIndex: 10, backgroundColor: 'rgba(15, 22, 6, 0.5)' }}
                >
                    <a
                        href="https://wa.link/l9ejrd"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb557] text-white font-bold py-3.5 rounded-xl transition-colors w-full shadow-lg shadow-green-900/30"
                    >
                        <FaWhatsapp className="size-5" />
                        WhatsApp
                    </a>
                    <ContactButtonNavbar />
                </div>
            </div>
        </div>
    );
}

export default MobileSideNavbar;
