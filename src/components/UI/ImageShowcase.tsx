import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNavigation} from "@/components/motion-primitives/carousel";


interface Props {
    images: string[];
}

function ImageShowcase({images}: Props) {
    return (
        <Carousel className="w-full" initialIndex={0}>
            <CarouselContent>
                {images.map((imageUrl, index) => (
                    <CarouselItem key={index} className="p-4 flex items-center justify-center">
                        <div
                            className='flex items-center justify-center rounded-md bg-cover bg-center shadow-md hover:shadow-lg active:shadow-lg transition-all duration-200'
                            style={{
                                // Use the 'imageUrl' from the map loop
                                backgroundImage: `url('${imageUrl}')`,
                                width: '500px', // Set explicit dimensions
                                height: '500px', // Set explicit dimensions
                            }}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNavigation alwaysShow />
        </Carousel>
    );
}

export default ImageShowcase;