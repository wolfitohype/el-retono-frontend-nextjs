import React from 'react';
import Link from 'next/link'
import cn from '@/utils/cn'

interface LinkButtonProps {
    text: string;
    link: string;
    className?: string;
}

function LinkButton({ text, link, className }: LinkButtonProps) {
    return (
        <Link className={cn("text-[#7c924f] rounded-sm p-4 font-medium cursor-pointer hover:shadow-sm hover:scale-105 transition-all duration-300", className)}
        href={link}>
            <p>{text}</p>
        </Link>
    );
}

export default LinkButton;