"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import { MessageSquare } from "lucide-react"
import { memo } from "react"

const PreFooter = memo(function PreFooter() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center max-w-[768px] mx-auto px-4 py-12 border-t border-gray-200 dark:border-gray-800">
      <AnimatedSection
        animation="slide-up"
        className="flex w-full md:w-2/3 flex-col items-center mb-10 md:mb-0"
      >
        <div className="w-16 h-16 rounded-full bg-gray-900 dark:bg-gray-900 flex items-center justify-center mb-4" aria-hidden="true">
          <MessageSquare className="h-8 w-8 text-blue-500" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Get in touch
        </h2>
      </AnimatedSection>
      
      <div className="w-full md:w-auto">
        <AnimatedSection
          animation="slide-up"
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              I'm available for new projects
            </span>
          </div>
          <p className="text-center md:text-left text-gray-600 dark:text-gray-400 mb-8">
            I'm always open to hearing from new people about their ideas,
            projects, or potential collaborations.
          </p>
        </AnimatedSection>

        <AnimatedSection
          animation="slide-up"
          delay={100}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <Link 
            href="/contact?focus=first-input" 
            className="w-full md:w-auto"
            aria-label="Schedule a call"
          >
            <Button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 rounded-full text-white">
              Schedule a call
            </Button>
          </Link>
          <Link 
            href="/contact?focus=first-input" 
            className="w-full md:w-auto"
            aria-label="Say hello"
          >
            <Button
              variant="outline"
              className="w-full md:w-auto rounded-full border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
            >
              Say hello
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
})

PreFooter.displayName = "PreFooter"

export default PreFooter 