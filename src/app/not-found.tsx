import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6 px-4 text-center">
            <h1 className="text-6xl font-bold text-[#4f5d32]">404</h1>
            <h2 className="text-2xl font-semibold">Página no encontrada</h2>
            <p className="text-gray-600 max-w-md">
                Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="bg-[#4f5d32] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#29301A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7c924f] focus:ring-offset-2"
                >
                    Ir al inicio
                </Link>
                <Link
                    href="/servicios"
                    className="border-2 border-[#4f5d32] text-[#4f5d32] px-8 py-3 rounded-md font-semibold hover:bg-[#4f5d32] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7c924f] focus:ring-offset-2"
                >
                    Ver servicios
                </Link>
            </div>
        </div>
    );
}
