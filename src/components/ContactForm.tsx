'use client'
import React, {useState} from 'react';
import Portal from '@/components/Portal'
import { FaTimes } from 'react-icons/fa';
import cn from '@/utils/cn'

interface ContactFormProps {
    isOpen: boolean;
    setIsFormOpen: (isOpen: boolean) => void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;

function ContactForm({ isOpen, setIsFormOpen }: ContactFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [servicio, setServicio] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
        servicio: false,
    });
    const [isValidForm, setValidForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (isSubmitting) return;
        setIsSubmitted(true);

        const newErrors = {
            name: name.trim() === '',
            email: !emailRegex.test(email),
            phone: !phoneRegex.test(phone),
            servicio: servicio.trim() === '',
        }
        setErrors(newErrors);

        if (newErrors.name || newErrors.email || newErrors.phone || newErrors.servicio) {

            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        nombre: name.toUpperCase(),
                        correo_electronico: email,
                        telefono: phone,
                        servicio: servicio,
                        fuente: "WEB",
                        user_agent: navigator.userAgent,
                    }
                )
            })

            if (!response.ok) {
                const errorText = await response.text(); // <-- intenta leer el mensaje de error del backend
                throw new Error(`Error al guardar solicitud: ${errorText}`);
            }
            setValidForm(true);
            setName('');
            setEmail('');
            setPhone('');
            setServicio('');
        }catch (error: any) {
            setErrors(prev => ({...prev}));
            setIsSubmitting(false);
            setValidForm(false);
            setErrorMessage(error.message || 'Ocurrió un error al enviar. Intenta de nuevo.');
        }
    }

    const closeForm = () => {
        setIsFormOpen(false);

        setIsSubmitted(false);
        setIsSubmitting(false);
        setValidForm(false);
        setErrors({
            name: false,
            email: false,
            phone: false,
            servicio: false,
        })
        setName('');
        setEmail('');
        setPhone('');
        setServicio('');
    }

    if (!isOpen) return null;

    return (
        <Portal>
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Formulario de contacto"
                onClick={() => setIsFormOpen(false)}
                className="fixed inset-0 size-full bg-black/60 flex justify-center items-center z-80"
            >
                <form
                    onSubmit={onSubmit}
                    onClick={e => e.stopPropagation()}
                    className="bg-[#e5e0d4] flex flex-col items-center justify-center space-y-8 px-8 py-12 rounded-lg shadow-lg w-full max-w-[600px]"
                > 
                    <div className="flex flex-col space-y-4 w-full text-black">
                        <div className="flex justify-between items-start w-full">
                            <h2 className="lg:text-5xl text-start font-bold">Estamos aquí para servirte</h2>
                            <button
                                type="button"
                                onClick={() => closeForm()}
                                className="text-black hover:text-red-500"
                            >
                                <FaTimes className="size-6 cursor-pointer" />
                            </button>
                        </div>
                        <p className="lg:text-2xl text-start">Rellena el formulario con tus datos y uno de nuestros asesores te contactará</p>
                    </div>

                    <div className="w-full flex flex-col space-y-1">
                        <label htmlFor="contact-name" className="text-sm font-medium text-gray-700">Nombre <span className="text-red-500">*</span></label>
                        <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Tu nombre completo"
                        aria-required="true"
                        aria-invalid={isSubmitted && errors.name}
                        className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c924f] bg-gray-100 text-black border border-gray-300 transition-all duration-200"
                    />
                        {isSubmitted && errors.name && (
                            <p className="text-red-500 text-sm" role="alert">Nombre es obligatorio</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col space-y-1">
                        <label htmlFor="contact-email" className="text-sm font-medium text-gray-700">Correo electrónico <span className="text-red-500">*</span></label>
                        <input
                            id="contact-email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                const cleaned = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
                                setEmail(cleaned);
                            }}
                            placeholder="tu@correo.com"
                            aria-required="true"
                            aria-invalid={isSubmitted && errors.email}
                            className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c924f] bg-gray-100 text-black border border-gray-300 transition-all duration-200"
                        />
                        {isSubmitted && errors.email && (
                            <p className="text-red-500 text-sm" role="alert">Correo electrónico inválido</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col space-y-1">
                        <label htmlFor="contact-phone" className="text-sm font-medium text-gray-700">Teléfono (10 dígitos) <span className="text-red-500">*</span></label>
                        <input
                            id="contact-phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => {
                                const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
                                setPhone(cleaned);
                            }}
                            placeholder="8331234567"
                            aria-required="true"
                            aria-invalid={isSubmitted && errors.phone}
                            className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c924f] bg-gray-100 text-black border border-gray-300 transition-all duration-200"
                        />
                        {isSubmitted && errors.phone && (
                            <p className="text-red-500 text-sm" role="alert">Número telefónico inválido (10 dígitos)</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col space-y-1">
                        <label htmlFor="contact-servicio" className="text-sm font-medium text-gray-700">Servicio de interés <span className="text-red-500">*</span></label>
                        <input
                            id="contact-servicio"
                            type="text"
                            value={servicio}
                            onChange={(e) => setServicio(e.target.value)}
                            placeholder="Ej: Poda de árboles, diseño de jardín..."
                            aria-required="true"
                            aria-invalid={isSubmitted && errors.servicio}
                            className="w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c924f] bg-gray-100 text-black border border-gray-300 transition-all duration-200"
                        />
                        {isSubmitted && errors.servicio && (
                            <p className="text-red-500 text-sm" role="alert">Campo es obligatorio</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting || isSubmitted}
                        className={cn(
                            "w-fit transition-all duration-300 font-semibold text-white py-4 px-24 rounded flex items-center justify-center gap-2",
                            "bg-[#4f5d32] hover:bg-[#29301A] active:bg-[#29301A] focus:outline-none focus:ring-2 focus:ring-[#7c924f] focus:ring-offset-2",
                            (isSubmitting || isSubmitted) && "opacity-50 cursor-not-allowed pointer-events-none"
                        )}
                    >
                        {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            "ENVIAR"
                        )}
                    </button>
                    {errorMessage && (
                        <p className="text-red-600 text-center text-sm bg-red-50 p-3 rounded-md" role="alert">{errorMessage}</p>
                    )}
                    { isSubmitted && isValidForm && (
                        <p className="text-green-700 text-center text-sm bg-green-50 p-3 rounded-md" role="status">Mensaje enviado exitosamente. Serás contactado en los siguientes minutos.</p>
                    )}
                </form>
            </div>
        </Portal>
    );
}

export default ContactForm;
