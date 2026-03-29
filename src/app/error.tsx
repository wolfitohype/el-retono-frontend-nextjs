'use client';

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6 px-4 text-center">
            <h1 className="text-6xl font-bold text-[#4f5d32]">500</h1>
            <h2 className="text-2xl font-semibold">Algo salió mal</h2>
            <p className="text-gray-600 max-w-md">
                Ocurrió un error inesperado. Por favor intenta de nuevo.
            </p>
            <button
                onClick={() => reset()}
                className="bg-[#4f5d32] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#29301A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7c924f] focus:ring-offset-2"
            >
                Intentar de nuevo
            </button>
        </div>
    );
}
