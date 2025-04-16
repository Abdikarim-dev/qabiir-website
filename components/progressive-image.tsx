"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import ImageSkeleton from "@/components/image-skeleton"
import { cn } from "@/lib/utils"

interface ProgressiveImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition?: string
}

export default function ProgressiveImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  objectFit = "cover",
  objectPosition = "center",
}: ProgressiveImageProps) {
  const [isLoading, setIsLoading] = useState(!priority)
  const [isError, setIsError] = useState(false)

  // Reset loading state if src changes
  useEffect(() => {
    if (!priority) setIsLoading(true)
  }, [src, priority])

  // Ensure width and height are numbers if provided
  const safeWidth = width !== undefined ? Number(width) : undefined
  const safeHeight = height !== undefined ? Number(height) : undefined

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && !isError && (
        <div className="absolute inset-0 z-10">
          <ImageSkeleton
            width={safeWidth}
            height={safeHeight}
            className={cn("w-full h-full", fill ? "absolute inset-0" : "")}
          />
        </div>
      )}

      {!isError ? (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={!fill ? safeWidth : undefined}
          height={!fill ? safeHeight : undefined}
          className={cn(
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
            fill ? "object-cover" : "",
          )}
          style={{
            objectFit,
            objectPosition,
          }}
          fill={fill}
          sizes={sizes}
          priority={priority}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setIsError(true)
          }}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-800 rounded-lg">
          <span className="text-sm text-gray-500 dark:text-gray-400">Failed to load image</span>
        </div>
      )}
    </div>
  )
}
