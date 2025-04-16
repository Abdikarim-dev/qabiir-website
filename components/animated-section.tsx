"use client"

import type { ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  animation?: "fade-in" | "slide-up" | "slide-right" | "slide-left"
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  animation = "fade-in",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: false,
  })

  const getAnimationClass = () => {
    if (!inView) return "opacity-0"

    switch (animation) {
      case "slide-up":
        return "animate-slide-up"
      case "slide-right":
        return "animate-slide-right"
      case "slide-left":
        return "animate-slide-left"
      case "fade-in":
      default:
        return "animate-fade-in"
    }
  }

  // Ensure delay is a number
  const safeDelay = typeof delay === "number" ? delay : 0

  return (
    <div
      ref={ref}
      className={cn(className, getAnimationClass())}
      style={{
        transitionDelay: `${safeDelay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}
