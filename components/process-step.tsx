"use client";

import type { ReactNode } from "react";
import AnimatedSection from "@/components/animated-section";
import CloudinaryVideoWrapper from "@/app/3d/animation/cloudinary-video-wrapper";
import { Ticket, WandSparkles } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: ReactNode;
  bulletPoints?: string[];
  icon: ReactNode;
  imagePosition: "left" | "right";
  delay?: number;
  isVideo?: boolean;
  cloudinaryId?: string;
}

export default function ProcessStep({
  number,
  title,
  description,
  bulletPoints,
  icon,
  imagePosition,
  delay = 0,
  isVideo = false,
  cloudinaryId,
}: ProcessStepProps) {
  const safeDelay = typeof delay === "number" ? delay : 0;

  // Helper function to determine background image based on title
  const getBackgroundImage = (title: string) => {
    switch (title) {
      case "DISCOVERY CALL":
        return "url('/calls.jpg')";
      case "CONCEPT & STRATEGY":
        return "url('/strategy.jpg')";
      case "MODELING & TEXTURING":
        return "url('https://res.cloudinary.com/dofv7shih/image/upload/v1744803922/tijabo-14_plwpet.png')";
      case "RENDERING & DELIVERY":
        return "url('/delivery.jpg')";
      default:
        return "none";
    }
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-800 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {imagePosition === "left" && !isVideo && (
          <AnimatedSection
            animation="slide-right"
            delay={safeDelay}
            className="relative w-full md:w-64 h-48 bg-gray-800 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center order-1 md:order-none"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-center bg-cover scale-105"
              style={{ backgroundImage: getBackgroundImage(title) }}
            ></div>

            {/* Blurred black overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* Icon */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
              {icon}
            </div>
          </AnimatedSection>
        )}
        {imagePosition === "left" && isVideo && (
          <AnimatedSection
            animation="slide-right"
            delay={safeDelay}
            className="w-full md:w-64 h-48 bg-gray-800 dark:bg-gray-800 rounded-lg overflow-hidden order-1 md:order-none relative"
          >
            {/* Clear background image */}
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dofv7shih/image/upload/v1744803770/tijabo-24_ixzocc.png')] bg-center bg-cover scale-105"></div>
            <CloudinaryVideoWrapper
              publicId={cloudinaryId || "abu_walad_dkmtb1"}
              className="w-full h-full object-cover pointer-events-none"
              controls={false}
              autoPlay={true}
              loop={true}
              muted={true}
              poster={`https://res.cloudinary.com/${
                process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
              }/video/upload/q_auto,f_jpg,so_0/${
                cloudinaryId || "abu_walad_dkmtb1"
              }`}
            />
            {/* Add black overlay with blur */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            {/* Add centered icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                <WandSparkles className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </AnimatedSection>
        )}
        <AnimatedSection
          animation="slide-up"
          delay={safeDelay + 200}
          className="flex-1"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <span className="text-gray-900 dark:text-white text-xs font-bold">
                {number}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>
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
            className="relative w-full md:w-64 h-48 bg-gray-800 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-center bg-cover scale-105"
              style={{ backgroundImage: getBackgroundImage(title) }}
            ></div>

            {/* Blurred black overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* Icon */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
              {icon}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
