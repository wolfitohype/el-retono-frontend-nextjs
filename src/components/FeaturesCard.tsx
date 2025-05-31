import React from 'react';
import cn from '@/utils/cn'

interface FeaturesCardProps {
    className?: string;
    textClassName?: string;
    icon: React.ElementType;
    title: string;
    features: string[];

}

function FeaturesCard({className, textClassName, icon: IconComponent, title, features}: FeaturesCardProps) {
    return (
        <div
            className={cn("h-fit md:w-110 w-90 space-y-4 px-6 py-8 flex flex-col items-center justify-between rounded-xl border border-gray-100 shadow-md hover:shadow-2xl active:shadow-2xl transition-shadow duration-300", className)}>
            <p className="text-xl font-semibold text-center break-words">{title}</p>
            <ul className="divide-y divide-gray-200 flex flex-col">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-4 py-2 text-sm">
                        <IconComponent className="size-6 flex-shrink-0 text-[#7c924f]" />
                        <p className={cn("flex-grow break-words", textClassName)}>{feature}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FeaturesCard;