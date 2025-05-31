'use client'
import React, {useState} from 'react';
import cn from '@/utils/cn'
import ContactForm from "@/components/ContactForm";

interface ContactButtonProps {
    text: string;
    className?: string;
}

function ContactButton({text, className}: ContactButtonProps) {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <ContactForm isOpen={isFormOpen} setIsFormOpen={setIsFormOpen}/>
            <div
                onClick={() => {setIsFormOpen(true)}}
                className={cn("text-[#7c924f] rounded-sm p-4 font-medium cursor-pointer hover:shadow-2xl bg-white active:bg-[#222817] active:text-white hover:bg-[#222817] hover:text-white drop-shadow-2xl transition-all duration-300", className)}>
                <p>{text}</p>
            </div>
        </>
    );
}

export default ContactButton;