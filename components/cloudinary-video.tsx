"use client"

import { useState, useEffect, useRef } from "react"
import ImageSkeleton from "@/components/image-skeleton"
import { cn } from "@/lib/utils"

interface CloudinaryVideoProps {
  publicId: string
  cloudName?: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  poster?: string
  transformation?: string
  width?: number
  height?: number
}

export default function CloudinaryVideo({
  publicId,
  cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
  className,
  autoPlay = false,
  loop = false,
  muted = true,
  controls = true,
  poster,
  transformation = "q_auto,f_auto",
  width,
  height,
}: CloudinaryVideoProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Create video URL safely
  const videoUrl = `https://res.cloudinary.com/${String(cloudName)}/video/upload/${String(transformation)}/${String(publicId)}`

  // Create poster URL safely
  const posterUrl =
    poster || `https://res.cloudinary.com/${String(cloudName)}/video/upload/q_auto,f_jpg,so_0/${String(publicId)}`

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoading(false)
    }

    const handlePlaying = () => {
      setIsPlaying(true)
    }

    const handlePaused = () => {
      setIsPlaying(false)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("playing", handlePlaying)
    video.addEventListener("pause", handlePaused)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("playing", handlePlaying)
      video.removeEventListener("pause", handlePaused)
    }
  }, [])

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <ImageSkeleton
            width={typeof width === "number" ? width : undefined}
            height={typeof height === "number" ? height : undefined}
            className="w-full h-full rounded-lg"
          />
        </div>
      )}

      <video
        ref={videoRef}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300 rounded-lg",
          isLoading ? "opacity-0" : "opacity-100",
        )}
        poster={posterUrl}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!controls && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-20"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <div className="w-16 h-16 rounded-full bg-blue-500/80 flex items-center justify-center">
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            )}
          </div>
        </button>
      )}
    </div>
  )
}
