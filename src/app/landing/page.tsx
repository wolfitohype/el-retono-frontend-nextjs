import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaPhoneAlt, FaWhatsapp, FaFacebook, FaInstagram, FaUser, FaClock, FaAward, FaUsers, FaBolt, FaSuitcase, FaMoneyBill, FaHandshake } from 'react-icons/fa';
import { BiEnvelope, BiCoinStack } from 'react-icons/bi';
import LandingBServicesCarousel from '@/components/LandingBServicesCarousel';
import LandingBClientsMarquee from '@/components/LandingBClientsMarquee';
import HubSpotForm from '@/components/HubSpotForm';

export const metadata: Metadata = {
  title: 'El Retoño - Expertos en Jardinería',
  description: 'Embellece tus espacios verdes con los expertos en jardinería',
};

export default function LandingBPage() {
  return (
    <div className="overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/landingB/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mt-16 mb-24 sm:mt-10 sm:mb-10">
            <h1 className="text-5xl lg:text-6xl lg:leading-tight xs:text-4xl xs:leading-snug text-white font-semibold mb-8 tracking-tight">
              Embellece tus espacios verdes <span className="font-extrabold">con los expertos en jardinería</span>
            </h1>
            <p className="text-xl leading-relaxed text-white mb-8 lg:w-4/5 md:w-11/12">
              Servicio de Jardinería Corporativo, Industrial y Comercial
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#689a05] to-[#8ab933] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Cotiza Ahora
              <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                <svg className="w-4 h-4 text-[#8ab933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* REPSE Section */}
      <section className="py-12 bg-[#f5f5dc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/4 text-center">
              <Image
                src="/landingB/logos/repse.png"
                alt="REPSE"
                width={180}
                height={80}
                className="mx-auto"
              />
            </div>
            <div className="lg:w-3/4 text-center lg:text-left">
              <h2 className="text-2xl font-medium text-gray-800">
                Somos Proveedores Integrales de Servicios Especializados con registro ante{' '}
                <b>Secretaría de Trabajo y Previsión Social en el REPSE.</b>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col xl:flex-row items-center justify-center gap-12">
            <div className="xl:w-5/12 lg:w-1/2 xl:ps-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Expertos en paisajismo y mantenimiento de áreas verdes
              </h2>

              <div className="flex items-start gap-4 p-6 xs:p-4 bg-white shadow-2xl rounded-lg border border-gray-300 mb-6">
                <div className="flex-shrink-0">
                  <Image src="/landingB/icon-planta.png" alt="Planta" width={30} height={30} />
                </div>
                <p className="text-gray-800">
                  15 años de experiencia ofreciendo soluciones integrales de jardinería
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Nos especializamos en <b>paisajismo, mantenimiento de áreas verdes, poda profesional y recolección de ramas,</b> siempre con un enfoque sostenible, eficiente y de alta calidad, brindamos servicio para clientes residenciales y corporativos.
                <br /><br />
                Nuestro compromiso es brindar servicios personalizados y rentables, diseñados a la medida de cada espacio, cumpliendo con los más altos estándares y normativas, para que disfrutes de áreas verdes que transmitan orden, belleza y confianza.
              </p>
            </div>

            <div className="xl:w-7/12 lg:w-1/2 relative md:mb-12 xs:mb-8">
              <div className="relative w-4/5 md:w-3/4 ms-auto">
                <Image
                  src="/landingB/about.jpg"
                  alt="Jardinería profesional"
                  width={600}
                  height={700}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute left-4 bottom-[-50px] w-1/2 md:w-1/2 xs:w-[55%] overflow-hidden">
                <Image
                  src="/landingB/about2.png"
                  alt="Equipo de trabajo"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#689a05] to-[#8ab933] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Agenda tu primer cita ahora
              <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                <svg className="w-4 h-4 text-[#8ab933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f5f5dc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 sm:mb-8">
            <br /><br />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Conoce nuestras principales<br />soluciones integrales
            </h2>
            <br /><br />
          </div>

          <div className="mb-12">
            <LandingBServicesCarousel />
          </div>

          {/* Clients Section */}
          <div className="mt-20 pt-12">
            <h3 className="text-4xl font-bold text-gray-900 text-center mb-8">
              Las mejores empresas confían en El retoño
            </h3>
            <br />
            <LandingBClientsMarquee />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-2xl mb-14 sm:mb-12">
            <div className="lg:w-1/2 bg-cover bg-center p-16 lg:p-8 sm:p-6 text-center md:text-left relative" style={{ backgroundImage: "url('/landingB/hero.jpg')" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#689a05]/90 to-[#8ab933]/90" />
              <div className="relative z-10">
                <h3 className="text-4xl font-extrabold text-white mb-5 w-11/12 xl:w-full">
                  Renueva tu jardín con nosotros
                </h3>
                <p className="text-white text-lg opacity-90 mb-8 w-11/12 lg:w-full">
                  Contáctanos y recibe una cotización sin compromiso
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#689a05] to-[#8ab933] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Contáctanos
                  <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                    <svg className="w-4 h-4 text-[#8ab933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-80 sm:h-80">
              <Image
                src="/landingB/cta.jpg"
                alt="Jardín renovado"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-12 sm:py-8 bg-[#f5f5dc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 sm:mb-8">
            <h2 className="text-4xl font-bold text-gray-900">¿Por qué elegirnos?</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-8 mb-12 md:mb-16 sm:mb-10">
            {[
              { icon: FaUser, title: 'Servicios Integrales', desc: 'Con un solo proveedor' },
              { icon: FaClock, title: 'Puntualidad Y Eficacia', desc: '.' },
              { icon: FaAward, title: 'Garantía De Satisfacción', desc: '.' },
              { icon: FaUsers, title: 'Personal Especializado', desc: 'Para cada área' },
              { icon: FaBolt, title: 'Disponibilidad Inmediata', desc: '.' },
              { icon: FaSuitcase, title: 'Proveedores Profesionales', desc: 'Con registro REPSE' },
              { icon: FaMoneyBill, title: 'Precios Accesibles', desc: 'En cada servicio' },
              { icon: FaHandshake, title: 'Más de 15 años', desc: 'De experiencia' },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="mt-12 border-r border-gray-300 md:mb-10">
                  <div className="px-10 xl:px-5">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto bg-white shadow-2xl rounded-full flex items-center justify-center">
                        <IconComponent className="text-5xl text-[#689a05]" />
                      </div>
                    </div>
                    <br />
                    <div className="text-center">
                      <h3 className="text-lg font-medium mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gradient-to-b from-[#689a05] to-[#8ab933] relative">
        <div className="absolute left-0 top-0 w-full h-24 lg:h-16 md:h-12 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/landingB/hero.jpg')", backgroundSize: '100%' }}></div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center gap-12">
            <div className="lg:w-5/12 pb-12 sm:pb-12">
              <span className="text-sm font-semibold tracking-wider uppercase text-yellow-300 block mb-3">
                Contacto
              </span>
              <h2 className="text-4xl font-bold text-white mb-12">
                Solicita tu servicio o cotización
              </h2>

              <div className="space-y-8 mt-16 w-4/5 lg:w-full">
                <div className="flex items-start gap-5 pb-6 border-b border-gray-400">
                  <div className="text-white">
                    <FaPhoneAlt className="text-3xl" />
                  </div>
                  <div>
                    <span className="text-white block mb-1">Teléfono</span>
                    <a href="tel:8332916286" className="text-white text-xl font-medium hover:text-yellow-300">
                      833 291 6286
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 pb-6 border-b border-gray-400">
                  <div className="text-white">
                    <BiEnvelope className="text-3xl" />
                  </div>
                  <div>
                    <span className="text-white block mb-1">Whatsapp</span>
                    <a href="https://wa.me/528335374089" className="text-white text-xl font-medium hover:text-yellow-300">
                      833 537 4089
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="text-white">
                    <BiCoinStack className="text-3xl" />
                  </div>
                  <div>
                    <span className="text-white block mb-1">Formas de pago</span>
                    <span className="text-white text-xl font-medium">
                      Aceptamos pagos con Efectivo, transferencia y tarjeta
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white shadow-2xl p-4 lg:p-4 rounded-xl">
                <HubSpotForm
                  portalId="50515278"
                  formId="bfbd4cf6-fc35-401d-807a-903f345f24c4"
                  region="na1"
                />
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1a5f2e]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left md:mb-1">
              <ul className="flex items-center gap-4">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100071794055837" className="text-white hover:text-yellow-300 text-2xl">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/elretono.tampico/" className="text-white hover:text-yellow-300 text-2xl">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://wa.link/l9ejrd" className="text-white hover:text-yellow-300 text-2xl">
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <span className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} Todos los derechos reservados |{' '}
                <a href="#" className="text-white underline hover:text-yellow-300">
                  Políticas de privacidad
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
