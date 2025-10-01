'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

const logos = [
  { id: 1, src: '/landingB/logos/1.png', alt: 'Cliente 1' },
  { id: 2, src: '/landingB/logos/2.png', alt: 'Cliente 2' },
  { id: 3, src: '/landingB/logos/3.png', alt: 'Cliente 3' },
  { id: 4, src: '/landingB/logos/4.png', alt: 'Cliente 4' },
  { id: 5, src: '/landingB/logos/5.png', alt: 'Cliente 5' },
  { id: 6, src: '/landingB/logos/6.png', alt: 'Cliente 6' },
  { id: 7, src: '/landingB/logos/7.png', alt: 'Cliente 7' },
  { id: 8, src: '/landingB/logos/8.png', alt: 'Cliente 8' },
];

export default function LandingBClientsMarquee() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: {
      perView: 2,
      spacing: 0,
    },
    breakpoints: {
      '(min-width: 576px)': {
        slides: { perView: 2, spacing: 0 },
      },
      '(min-width: 992px)': {
        slides: { perView: 3, spacing: 0 },
      },
      '(min-width: 1200px)': {
        slides: { perView: 5, spacing: 0 },
      },
    },
    created(s) {
      s.moveToIdx(5, true, { duration: 0 });
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, {
        duration: 3000,
      });
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, {
        duration: 3000,
      });
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider text-center">
      {logos.map((logo) => (
        <div key={logo.id} className="keen-slider__slide flex items-center justify-center">
          <div className="relative w-32 h-24">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
