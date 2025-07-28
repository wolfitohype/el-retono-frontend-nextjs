'use client'
import React, { useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactFormSection() {
    const [isFormOpen, setIsFormOpen] = useState(true);
    
    return (
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-[#4f5d32]">Envíanos un mensaje</h3>
            <ContactForm isOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </div>
    );
}