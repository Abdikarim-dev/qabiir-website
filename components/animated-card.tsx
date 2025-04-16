"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  title: string
  description: string
  logoSrc: string
  backgroundSrc: string
  blurPosition: "left" | "right"
  className?: string
}

export default function AnimatedCard({
  title,
  description,
  logoSrc,
  backgroundSrc,
  blurPosition,
  className,
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  // Set visibility state when card enters viewport
  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <div ref={ref} className={cn("relative overflow-hidden rounded-lg p-6 min-h-[200px] flex items-center", className)}>
      {/* Background Image Layer (z-index: 1) - Animated */}
      <div
        className="absolute inset-0 z-[1] transition-transform duration-1000 ease-out"
        style={{
          transform: isVisible ? "translateX(0)" : `translateX(${blurPosition === "left" ? "-15%" : "15%"})`,
        }}
      >
        <Image src={backgroundSrc || "/placeholder.svg"} alt="" fill className="object-cover" />
      </div>

      {/* Blurred Shape Layer (z-index: 2) */}
      <div
        className={cn(
          "absolute z-[2] w-48 h-48 rounded-lg bg-black/70 backdrop-blur-xl",
          blurPosition === "left" ? "left-6" : "right-6",
        )}
      />

      {/* Logo Layer (z-index: 3) */}
      <div
        className={cn(
          "absolute z-[3] w-16 h-16 rounded-full bg-black flex items-center justify-center",
          blurPosition === "left" ? "left-[88px]" : "right-[88px]",
        )}
      >
        <Image src={logoSrc || "/placeholder.svg"} alt="Logo" width={24} height={24} className="text-red-500" />
      </div>

      {/* Content */}
      <div className={cn("relative z-[2] max-w-md", blurPosition === "left" ? "ml-64" : "mr-64")}>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  )
}
