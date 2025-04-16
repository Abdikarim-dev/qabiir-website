"use client"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { CuboidIcon as Cube } from "lucide-react"

const AnimatedServiceCard = ({ animation, className, children }) => {
  const { ref, inView } = useInView({ triggerOnce: false })
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (inView) setAnimate(true)
  }, [inView])

  return (
    <div
      ref={ref}
      className={`relative w-full md:w-64 h-48 rounded-lg overflow-hidden flex items-center justify-center ${className}`}
    >
      {/* Background image that exits diagonally when inView */}
      <div
        className={`absolute inset-0 bg-[url('/images/fx-bg.jpg')] bg-center bg-cover scale-105 transition-all duration-1000 ${
          animate ? "animate-exit-diagonal" : ""
        }`}
      ></div>

      {/* Blurred black overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Foreground content */}
      <div className="relative z-10 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
        <Cube className="h-6 w-6 text-blue-500" />
      </div>
    </div>
  )
}
export default AnimatedServiceCard
