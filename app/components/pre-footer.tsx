"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"

export default function PreFooter() {
  return (
    <section className="w-full max-w-md md:max-w-2xl mx-auto px-4 py-12 border-t border-gray-200 dark:border-gray-800">
      <AnimatedSection animation="slide-up" className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">I'm available for new projects</span>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          I'm always open to hearing from new people about their ideas, projects, or potential collaborations.
        </p>
      </AnimatedSection>

      <AnimatedSection animation="slide-up" delay={100} className="flex justify-center gap-4">
        <Link href="/contact?focus=first-input">
          <Button className="bg-blue-500 hover:bg-blue-600 rounded-full text-white">Schedule a call</Button>
        </Link>
        <Link href="/contact?focus=first-input">
          <Button
            variant="outline"
            className="rounded-full border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
          >
            Say hello
          </Button>
        </Link>
      </AnimatedSection>
    </section>
  )
} 