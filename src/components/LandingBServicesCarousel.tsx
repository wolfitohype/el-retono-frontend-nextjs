'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

const services = [
  {
    id: 1,
    image: '/landingB/servicios/1.jpg',
    title: 'Mantenimiento de áreas verdes',
    subtitle: 'Residenciales e industriales'
  },
  {
    id: 2,
    image: '/landingB/servicios/2.jpg',
    title: 'Poda y desrame de árboles',
    subtitle: ''
  },
  {
    id: 3,
    image: '/landingB/servicios/3.jpg',
    title: 'Diseño 3D de jardines',
    subtitle: ''
  },
  {
    id: 4,
    image: '/landingB/servicios/4.jpg',
    title: 'Limpieza de terrenos enmontados',
    subtitle: ''
  },
  {
    id: 5,
    image: '/landingB/servicios/5.jpg',
    title: 'Fertilización de áreas verdes',
    subtitle: ''
  },
  {
    id: 6,
    image: '/landingB/servicios/6.jpg',
    title: 'Fumigación para prevención de plagas',
    subtitle: ''
  },
  {
    id: 7,
    image: '/landingB/servicios/7.jpg',
    title: 'Tratamiento de plantas con enfermedad',
    subtitle: ''
  }
];

export default function LandingBServicesCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 30,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 30 },
      },
      '(min-width: 992px)': {
        slides: { perView: 2, spacing: 30 },
      },
      '(min-width: 1200px)': {
        slides: { perView: 2, spacing: 30 },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {services.map((service) => (
        <div key={service.id} className="keen-slider__slide">
          <div className="flex flex-col sm:flex-row h-full rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full sm:w-1/2 relative h-64 sm:h-auto">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full sm:w-1/2 bg-white p-8 xl:p-5 md:p-5 flex flex-col justify-center items-start">
              <span className="inline-block px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-[#689a05] to-[#8ab933] rounded-full mb-12 sm:mb-10">
                Jardinería
              </span>
              <h3 className="text-gray-900 font-bold text-lg md:text-base mb-3">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-gray-600">{service.subtitle}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
