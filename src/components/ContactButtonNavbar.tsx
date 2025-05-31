'use client';
import React, { useState } from 'react';
import { IoMdMail } from 'react-icons/io';
import ContactForm from '@/components/ContactForm';

function ContactButtonNavbar() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <span
                onClick={() => setIsFormOpen(true)}
                className="flex space-x-4 text-white items-center bg-[#689a05] active:bg-[#3F5D03] hover:bg-[#3F5D03] transition-all duration-300 cursor-pointer rounded-md p-4 hover:shadow-lg"
            >
                <IoMdMail size={28}/>
                <p>Contáctanos</p>
            </span>
            <ContactForm isOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </>
    );
}

export default ContactButtonNavbar;
