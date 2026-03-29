'use client'
import React, {useState} from 'react';
import MobileSideNavbar from "@/components/MobileSideNavbar";
import {IoMdMenu} from "react-icons/io";

function MenuButtonNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MobileSideNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <button
                onClick={() => setIsOpen(true)}
                aria-label="Abrir menú"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
            >
                <IoMdMenu className="size-5"/>
            </button>
        </>
    );
}

export default MenuButtonNavbar;