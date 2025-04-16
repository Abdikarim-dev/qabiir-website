"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ImageSkeletonProps {
  className?: string
  width?: number
  height?: number
  rounded?: boolean
}

export default function ImageSkeleton({ className, width, height, rounded = true }: ImageSkeletonProps) {
  const [isAnimating, setIsAnimating] = useState(true)

  // Simulate a random loading time between 1-3 seconds
  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsAnimating(false)
      },
      Math.random() * 2000 + 1000,
    )

    return () => clearTimeout(timer)
  }, [])

  // Ensure width and height are properly formatted as strings with px units
  const styleWidth = width !== undefined ? `${width}px` : "100%"
  const styleHeight = height !== undefined ? `${height}px` : "100%"

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gray-200 dark:bg-gray-800",
        rounded ? "rounded-lg" : "",
        isAnimating ? "animate-pulse" : "",
        className,
      )}
      style={{
        width: styleWidth,
        height: styleHeight,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent skeleton-loading" />
    </div>
  )
}
