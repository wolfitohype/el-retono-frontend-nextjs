'use client';
import React, { useState } from 'react';
import { IoMdMail } from 'react-icons/io';
import ContactForm from '@/components/ContactForm';

function ContactButtonNavbar() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                aria-label="Abrir formulario de contacto"
                className="flex items-center gap-2 text-white/70 hover:text-white border border-white/15 hover:border-white/40 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30 w-full justify-center"
            >
                <IoMdMail className="size-4"/>
                <span>Contáctanos</span>
            </button>
            <ContactForm isOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    );
}

export default ContactButtonNavbar;
