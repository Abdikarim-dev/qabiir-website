"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  backgroundSrc: string
  blurPosition: "left" | "right"
  className?: string
}

export default function ServiceCard({
  title,
  description,
  icon,
  backgroundSrc,
  blurPosition,
  className,
}: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  // Set visibility state when card enters viewport
  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-lg p-6 min-h-[180px] flex items-center bg-gray-900 text-white",
        className,
      )}
    >
      {/* Background Image Layer (z-index: 1) - This is the only layer that animates */}
      <div
        className="absolute inset-0 z-[1] transition-transform duration-1000 ease-out"
        style={{
          transform: isVisible ? "translateX(0)" : `translateX(${blurPosition === "left" ? "-15%" : "15%"})`,
        }}
      >
        <Image src={backgroundSrc || "/placeholder.svg"} alt="" fill className="object-cover opacity-40" />
      </div>

      {/* Blurred Shape Layer (z-index: 2) */}
      <div
        className={cn(
          "absolute z-[2] w-40 h-40 rounded-lg bg-black/50 backdrop-blur-xl",
          blurPosition === "left" ? "left-6" : "right-6",
        )}
      />

      {/* Logo/Icon Layer (z-index: 3) - Centered on the blurred shape */}
      <div
        className={cn(
          "absolute z-[3] w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center",
          blurPosition === "left" ? "left-[72px]" : "right-[72px]",
        )}
      >
        {icon}
      </div>

      {/* Content */}
      <div className={cn("relative z-[2] max-w-md", blurPosition === "left" ? "ml-56" : "mr-56")}>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  )
}
