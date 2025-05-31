'use client'

import React from 'react';
import {ReactNode} from 'react'
import {useKeenSlider} from "keen-slider/react";

interface ItemCarouselProps {
    children: React.ReactNode[];
}

const animation = { duration: 120000, easing: (t: any) => t}

function ItemCarousel({children}: ItemCarouselProps) {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            mode: "free-snap",
            slides: {
                perView: 2,
                spacing: 10,
                origin: "center",
            },
            breakpoints: {
                "(max-width: 768px)": {
                    slides: {
                        perView: 1,
                        spacing: 10,
                        origin: "center",
                    },
                },
            },
            created(slide){
                slide.moveToIdx(5, true, animation)
            },
            updated(slide){
                slide.moveToIdx(slide.track.details.abs + 5, true, animation)
            },
            animationEnded(slide){
                slide.moveToIdx(slide.track.details.abs + 5, true, animation)
            }
        }
    );
    return (
        <div ref={sliderRef} className="keen-slider overflow-hidden">
            {children.map((child, i) => (
                <div key={i} className="keen-slider__slide">
                    {child}
                </div>
            ))}
        </div>
    );
}

export default ItemCarousel;