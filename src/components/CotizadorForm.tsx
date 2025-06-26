'use client'

import React, {useState, useEffect} from 'react';
// import cn from '@/utils/cn' // Assuming this is not strictly necessary for the core logic, can keep if used elsewhere

function CotizadorForm() {
    const [service, setService] = useState('01'); // Set a default service
    const [metros, setMetros] = useState(0);
    const [costo, setCosto] = useState(0);

    // recalcular cuando inputs cambien
    useEffect(() => {
        let calculatedCosto = 0;
        switch (service) {
            case '01': // Mantenimiento residencial
                calculatedCosto = metros * 5;
                break;
            default:
                calculatedCosto = 0; // Or some default if service isn't recognized
        }
        setCosto(calculatedCosto);
    }, [service, metros]);

    const handleMetrosChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        setMetros(isNaN(value) ? 0 : value); // Set to 0 if not a valid number
    };

    const handleServiceSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setService(event.target.value);
    };

    return (
        <div className="bg-[#7c924f] p-6 text-white">
            <h3 className="text-2xl font-semibold pb-8">COTIZADOR DE SERVICIOS</h3>
            <form className="flex flex-col space-y-2">
                <label htmlFor="servicios" className="text-xl font-medium">Servicio a cotizar: </label>
                <select
                    name="servicios"
                    id="servicios"
                    className="bg-gray-100 text-black rounded-sm focus:outline-none p-2"
                    onChange={handleServiceSelectChange}
                    value={service} // Make the select a controlled component
                >
                    <option value="01">Poda de pasto</option>
                    <option value="02">Poda de árboles</option>
                    <option value="03">Venta de pasto</option>
                    <option value="04">Instalación de pasto</option>
                    <option value="05">Fertilización de áreas verdes</option>
                    <option value="06">Fumigación de áreas verdes</option> {/* Corrected value here */}
                </select>

                {/* Conditional rendering for metros input - only for Mantenimiento residencial (01) */}
                {service === '01' && (
                    <div className="w-full h-fit flex flex-col space-y-2">
                        <label htmlFor="metros">¿Cuántos metros tiene tu área verde? Aprox.</label>
                        <input
                            type="number" // Use type="number" for numerical inputs
                            className="bg-gray-100 w-full p-1 rounded-sm focus:outline-none text-black"
                            id="metros"
                            value={metros} // Make input a controlled component
                            onChange={handleMetrosChange}
                            min="0" // Optional: restrict to positive numbers
                        />
                    </div>
                )}
                {/* You'd add other conditional rendering blocks here for other services if they require different inputs */}

                <div className="w-full h-fit flex flex-col space-y-2">
                    <p>Precio estimado:</p>
                    {/* Displaying the costo with currency formatting */}
                    <p className="bg-gray-100 text-black w-full p-1 rounded-sm">
                        $ {costo.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
            </form>
        </div>
    );
}

export default CotizadorForm;