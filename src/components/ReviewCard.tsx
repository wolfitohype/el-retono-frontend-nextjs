import React from 'react';
import Image from 'next/image';
import {FaFacebook, FaStar} from 'react-icons/fa';

interface ProfileProps {
    profileUrl: string;
    name: string;
    rating: number;
    title: string;
    comments?: string;
}

function ReviewCard({profileUrl, name, rating, title, comments}: ProfileProps) {
    return (
        <div className="h-36 w-90 flex flex-col bg-white rounded-lg space-y-4 cursor-grab  p-4">
            <div className="flex items-start justify-between w-full">
                <div className="flex items-start justify-center space-x-5 font-semibold">
                    <Image src={profileUrl}
                           width={25}
                           height={25}
                           alt={"PROFILE FOTO"}
                           className="rounded-full size-10"/>
                    <div className="flex flex-col">
                        <p className="hover:text-gray-600">{name}</p>
                        <div className="flex text-yellow-400">
                            {Array.from({length: rating}, (_, i) => (<FaStar key={i}/>))}
                        </div>
                        <p className="font-semibold text-gray-500 text-wrap break-words">{`"${title}"`}</p>
                    </div>
                </div>
                <FaFacebook className="text-[#3b5998] size-6"/>
            </div>
            <div className="w-full border-gray-200 border-t pt-2">
                <p className="font-light text-gray-400">{comments}</p>
            </div>
        </div>
    );
}

export default ReviewCard;