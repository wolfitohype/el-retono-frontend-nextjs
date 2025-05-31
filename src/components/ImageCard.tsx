import React from 'react';
import cn from '@/utils/cn'

interface ImageCardProps {
    image: React.ElementType;
    text: string;
    className?: string;
    iconClassName?: string;
}

function ImageCard({ image: IconComponent, text, className, iconClassName }: ImageCardProps) {
    return (
        <div className={cn("bg-white flex flex-col md:flex-row items-center justify-center w-[90%] p-4 md:space-x-4 space-y-4 md:space-y-2 border-1 border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300", className)}>
            <IconComponent className={cn("text-[#4f5d32] size-16 md:size-24 flex-shrink-0", iconClassName)} />
            <p className="flex-grow break-words text-wrap md:text-start text-center">{text}</p>
        </div>
    );
}

export default ImageCard;