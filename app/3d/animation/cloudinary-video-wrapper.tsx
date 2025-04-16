"use client"

import dynamic from "next/dynamic"

const CloudinaryVideo = dynamic(() => import("@/components/cloudinary-video"), {
  ssr: false,
  loading: () => <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>,
})

interface CloudinaryVideoWrapperProps {
  publicId: string
  className?: string
  controls?: boolean
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  poster?: string
  cloudName?: string
}

export default function CloudinaryVideoWrapper({
  cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  ...props
}: CloudinaryVideoWrapperProps) {
  return <CloudinaryVideo cloudName={cloudName} {...props} />
} 