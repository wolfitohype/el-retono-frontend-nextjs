'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function GraciasContent() {
  const searchParams = useSearchParams();
  const submissionGuid = searchParams.get('submissionGuid');

  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col">
      {/* Hero Section - Thank You */}
      <section
        className="relative flex-1 flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/landingB/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl my-28 sm:my-20">
            <h1 className="text-6xl lg:text-7xl lg:leading-tight xs:text-5xl xs:leading-snug text-white font-normal mb-8 tracking-tight">
              ¡Gracias!<span className="font-medium"></span>
            </h1>
            <p className="text-xl leading-relaxed text-white mb-8 lg:w-4/5 md:w-11/12">
              Nos pondremos en contacto contigo a la brevedad
            </p>
            <Link
              href="/landing"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#689a05] to-[#8ab933] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Volver al inicio
              <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                <svg className="w-4 h-4 text-[#8ab933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Debug info - solo visible en desarrollo */}
            {process.env.NODE_ENV === 'development' && submissionGuid && (
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-white text-sm">
                  Submission GUID: <code className="bg-white/20 px-2 py-1 rounded">{submissionGuid}</code>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function GraciasPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Cargando...</div>
      </div>
    }>
      <GraciasContent />
    </Suspense>
  );
}
