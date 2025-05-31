'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import wait from "waait"

interface SlideshowProps {
    slidesUrl: string[]
    children?: React.ReactNode
}

export default function Slideshow({ slidesUrl, children }: SlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fadeIn, setFadeIn] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [loadedImage, setLoadedImage] = useState(slidesUrl[0])

    useEffect(() => {
        setLoaded(false)
        setFadeIn(true)
    }, [currentIndex])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % slidesUrl.length)
        }, 4000)
        return () => clearTimeout(timeout)
    }, [currentIndex, slidesUrl.length])

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Imagen entrante */}
            {fadeIn && (
                <Image
                    src={slidesUrl[currentIndex]}
                    alt=""
                    priority
                    fill
                    sizes="100vw"
                    className={`absolute top-0 left-0 z-30 transition-opacity duration-1000
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    onLoad={() => {
                        setLoaded(true)
                        wait(1100).then(() => {
                            setLoadedImage(slidesUrl[currentIndex])
                        })
                    }}
                />
            )}

            {/* Imagen anterior */}
            {loadedImage && (
                <Image
                    src={loadedImage}
                    alt=""
                    priority
                    fill
                    sizes="100vw"
                    className="absolute top-0 left-0 z-20"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    onLoad={() => {
                        setFadeIn(false)
                    }}
                />
            )}

            {/* Capa seminegra */}
            <div className="absolute inset-0 bg-black opacity-55 z-30" />
            {/* Contenido encima */}
            <div className="relative z-30 flex items-center justify-center h-full">
                {children}
            </div>
        </div>
    )
}
