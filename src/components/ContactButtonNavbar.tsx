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
                className="flex space-x-4 text-white items-center bg-[#689a05] active:bg-[#3F5D03] hover:bg-[#3F5D03] transition-all duration-300 cursor-pointer rounded-md p-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
                <IoMdMail size={28}/>
                <span>Contáctanos</span>
            </button>
            <ContactForm isOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    );
}

export default ContactButtonNavbar;
