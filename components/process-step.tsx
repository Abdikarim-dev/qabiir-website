"use client"

import type { ReactNode } from "react"
import AnimatedSection from "@/components/animated-section"

interface ProcessStepProps {
  number: string
  title: string
  description: ReactNode
  bulletPoints?: string[]
  icon: ReactNode
  imagePosition: "left" | "right"
  delay?: number
}

export default function ProcessStep({
  number,
  title,
  description,
  bulletPoints,
  icon,
  imagePosition,
  delay = 0,
}: ProcessStepProps) {
  // Ensure delay is a number
  const safeDelay = typeof delay === "number" ? delay : 0

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {imagePosition === "left" && (
          <AnimatedSection
            animation="slide-right"
            delay={safeDelay}
            className="w-full md:w-64 h-48 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center order-1 md:order-none"
          >
            <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">{icon}</div>
          </AnimatedSection>
        )}

        <AnimatedSection animation="slide-up" delay={safeDelay + 200} className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <span className="text-gray-900 dark:text-white text-xs font-bold">{number}</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
          {bulletPoints && (
            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2 pl-4">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
        </AnimatedSection>

        {imagePosition === "right" && (
          <AnimatedSection
            animation="slide-left"
            delay={safeDelay}
            className="w-full md:w-64 h-48 bg-gray-800 dark:bg-gray-800 rounded-lg flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">{icon}</div>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}
