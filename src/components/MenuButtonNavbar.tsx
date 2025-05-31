'use client'
import React, {useState} from 'react';
import MobileSideNavbar from "@/components/MobileSideNavbar";
import {IoMdMenu} from "react-icons/io";

function MenuButtonNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MobileSideNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <button onClick={() => setIsOpen(true)}>
                <IoMdMenu
                size={44}
                className="bg-[#4f5d32] p-2 rounded-md cursor-pointer hover:shadow-md"/>
            </button>
        </>
    );
}

export default MenuButtonNavbar;