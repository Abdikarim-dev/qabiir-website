"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animated-section";
import { MessageSquare } from "lucide-react";

export default function PreFooter() {
  return (
    <section className="w-full flex flex-col sm:flex-row items-center max-w-md md:max-w-2xl mx-auto px-4 py-12 border-t border-gray-200 dark:border-gray-800">
      <AnimatedSection
        animation="slide-up"
        className="flex w-2/3 flex-col items-center mb-10"
      >
        <div className="w-16 h-16 rounded-full bg-gray-900 dark:bg-gray-900 flex items-center justify-center mb-4">
          <MessageSquare className="h-8 w-8 text-blue-500" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Get in touch
        </h2>
      </AnimatedSection>
      <div>
        <AnimatedSection
          animation="slide-up"
          className="flex items-center sm:items-start flex-col justify-center"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
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
          className="flex justify-center sm:justify-start items-center gap-4"
        >
          <Link href="/contact?focus=first-input">
            <Button className="bg-blue-500 hover:bg-blue-600 rounded-full text-white">
              Schedule a call
            </Button>
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
      </div>
    </section>
  );
}
