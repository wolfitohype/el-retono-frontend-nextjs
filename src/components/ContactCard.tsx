'use client'
import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import cn from '@/utils/cn'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;

function ContactCard() {
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
                        nombre: name,
                        email: email,
                        telefono: phone,
                        servicio: servicio,
                        fuente: "Web",
                    }
                )
            })

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error al guardar solicitud: ${errorText}`);
            }
            setValidForm(true);
            setName('');
            setEmail('');
            setPhone('');
            setServicio('');
        } catch (error: any) {
            alert(error.message);
            setIsSubmitting(false);
        }
    }

    return (
        <form
            onSubmit={onSubmit}
            onClick={e => e.stopPropagation()}
            className="bg-[#e5e0d4] flex flex-col items-center h-fit justify-center space-y-8 px-8 py-12 rounded-lg shadow-lg w-full max-w-[600px]"
        >
            <div className="flex flex-col space-y-4 w-full text-black">
                <div className="flex justify-between items-start w-full">
                    <h2 className="lg:text-3xl text-start font-bold">Déjanos un mensaje</h2>
                </div>
                <p className="lg:text-xl text-start">Rellena el formulario con tus datos y uno de nuestros asesores te contactará</p>
            </div>

            <div className="w-full flex flex-col space-y-1">
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
                className="w-full p-2 rounded-lg focus:outline-none focus:shadow-2xl bg-gray-100 text-black border border-gray-300 transition-all duration-200"
            />
                {isSubmitted && errors.name && (
                    <p className="text-red-400 text-sm">Nombre inválido</p>
                )}
            </div>
            <div className="w-full flex flex-col space-y-1">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        const cleaned = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
                        setEmail(cleaned);
                    }}
                    placeholder="Correo electrónico"
                    className="w-full p-2 rounded-lg focus:outline-none focus:shadow-2xl bg-gray-100 text-black border border-gray-300 transition-all duration-200"
                />
                {isSubmitted && errors.email && (
                    <p className="text-red-400 text-sm">Correo electrónico inválido</p>
                )}
            </div>
            <div className="w-full flex flex-col space-y-1">
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                        const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setPhone(cleaned);
                    }}
                    placeholder="Número telefónico"
                    className="w-full p-2 rounded-lg focus:outline-none focus:shadow-2xl bg-gray-100 text-black border border-gray-300 transition-all duration-200"
                />
                {isSubmitted && errors.phone && (
                    <p className="text-red-400 text-sm">Número telefónico inválido</p>
                )}
            </div>
            <div className="w-full flex flex-col space-y-1">
                <input
                    type="text"
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    placeholder="Servicio que te interesa"
                    className="w-full p-2 rounded-lg focus:outline-none focus:shadow-2xl bg-gray-100 text-black border border-gray-300 transition-all duration-200"
                />
                {isSubmitted && errors.servicio && (
                    <p className="text-red-400 text-sm">Campo es obligatorio</p>
                )}
            </div>
            <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={cn(
                    "w-fit transition-all duration-300 font-semibold text-white py-4 px-24 rounded flex items-center justify-center gap-2",
                    "bg-[#4f5d32] hover:bg-[#29301A] active:bg-[#29301A]",
                    (isSubmitting || isSubmitted) && "opacity-50 cursor-not-allowed pointer-events-none"
                )}
            >
                {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                    "ENVIAR"
                )}
            </button>
            { isSubmitted && isValidForm && (
                <p className="text-green-700 text-center text-sm">Mensaje enviado exitosamente, <br/>serás contactado en
                los siguientes minutos.</p>
            )}
        </form>
    );
}

export default ContactCard;