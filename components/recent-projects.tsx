"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Folder } from "lucide-react";
import { useInView } from "react-intersection-observer";
import ImageSkeleton from "@/components/image-skeleton";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
  featured?: boolean;
  tags:  '3D VISUALIZATION' | 'DESIGNS' | 'BRAND';
}

export default function RecentProjects() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3, // Changed from 0.5 to 0.3 (30%)
    triggerOnce: false,
  });

  // Updated project data with new Cloudinary images
  const projects: Project[] = [
    
    {
      id: "project1",
      title: "Dhalinta Brand",
      subtitle: "Comprehensive Brand Showcase",
      imageUrl:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261063/Dhalinta_brand-01_y8uaxs.png",
      link: "/branding/brand-1",
      featured: true,
      tags:"BRAND"
    },
    {
      id: "project2",
      title: "Beverage Collection",
      subtitle: "3D Product Visualization & Design",
      imageUrl:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744804111/tijabo-18_bknbvh.png",
      link: "/3d/visualization",
      tags: "3D VISUALIZATION",
    },
    {
      id: "project3",
      title: "Marketing & Poster Designs",
      subtitle: "Visuals for brands, campaigns, and promotions",
      imageUrl:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744890929/9-Febuary-12_muagje.png",
      link: "/designs",
      tags:"DESIGNS"
    },
  ];

  // Check if screen is large enough for animations
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="w-full max-w-md lg:max-w-5xl mx-auto px-4 py-16">
      {/* Title with icon */}
      <div className="flex flex-col items-center mb-16">
        <div className="w-16 h-16 rounded-full bg-gray-900 dark:bg-gray-900 flex items-center justify-center mb-4">
          <Folder className="h-8 w-8 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Recent Projects
        </h2>
      </div>

      {/* Project Cards Container */}
      {isLargeScreen ? (
        // Desktop view - 3D card effect
        <div ref={ref} className="relative h-[400px] lg:h-[350px] mb-16">
          <div
            className="relative w-full h-full"
            style={{
              perspective: "1500px",
              transformStyle: "preserve-3d",
            }}
          >
            {projects.map((project, index) => {
              // Determine card position based on index
              const isLeft = index === 0;
              const isCenter = index === 1;
              const isRight = index === 2;

              // Get card styles safely
              const cardStyles = getCardStylesSafe(
                isLeft,
                isCenter,
                isRight,
                inView
              );

              return (
                <Link
                  href={project.link}
                  key={project.id}
                  className={`
                    block absolute w-full lg:w-[320px] h-full
                    transition-all duration-1000 ease-out
                  `}
                  style={cardStyles}
                >
                  <div
                    className={`
                      relative w-full h-full rounded-lg overflow-hidden
                      transform transition-all duration-1000
                      ${isCenter ? "shadow-xl" : ""} 
                      bg-gray-200 dark:bg-gray-800
                    `}
                  >
                    {/* Tags */}
                    <div className={`absolute top-3 ${index!==2?"left-3":"right-3"} z-10 flex flex-wrap gap-2`}>
                      
                        <span
                          
                          className={`px-2 py-1 text-xs font-medium backdrop-blur-sm text-white rounded-full ${getTagStyle(project.tags)}`}
                        >
                          {project.tags}
                        </span>
                    
                    </div>

                    {/* Project image */}
                    <div
                      className={`absolute inset-0 w-full h-full`}
                    >
                      {project.imageUrl ? (
                        <Image
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 320px"
                          loading="eager"
                        />
                      ) : (
                        <ImageSkeleton className="w-full h-full" />
                      )}
                    </div>

                    {/* Project info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-lg font-medium text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-300">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <span className="text-blue-400 text-xl">⚡</span>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        // Mobile view - Grid layout
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {projects.map((project) => (
            <Link
              href={project.link}
              key={project.id}
              className="block rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800 transition-transform hover:scale-105"
            >
              <div className="relative aspect-[4/3]">
                {/* Tags */}
                <div className={`absolute top-3 left-3 z-10 flex flex-wrap gap-2`}>  
                    <span
                      className={`px-2 py-1 text-xs font-medium backdrop-blur-sm text-white rounded-full ${getTagStyle(project.tags)}`}
                    >
                      {project.tags}
                    </span>
                </div>

                {/* Project image */}
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <ImageSkeleton className="w-full h-full" />
                )}

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-blue-400 text-xl">⚡</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {project.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* View all work button */}
      <div className="flex justify-center">
        <Link href="/3d">
          <Button
            variant="outline"
            className="rounded-full border-red-500 text-gray-900 dark:text-white hover:bg-red-500/10"
          >
            View all work
          </Button>
        </Link>
      </div>
    </section>
  );
}

// Helper function to get card styles based on position and animation state
// Rewritten to avoid any potential object-to-primitive conversion issues
function getCardStylesSafe(
  isLeft: boolean,
  isCenter: boolean,
  isRight: boolean,
  isInView: boolean
): React.CSSProperties {
  const styles: React.CSSProperties = {
    transformStyle: "preserve-3d",
    zIndex: isCenter ? 30 : 20,
  };

  // Initial state (stacked together) - when not in view
  if (!isInView) {
    if (isLeft) {
      styles.left = "45%";
      styles.top = "10%";
      styles.transform = "translateX(-50%) rotateY(15deg) scale(0.85)";
      styles.opacity = 0.8;
    } else if (isCenter) {
      styles.left = "50%";
      styles.top = "0%";
      styles.transform = "translateX(-50%) scale(0.95)";
      styles.opacity = 1;
    } else if (isRight) {
      styles.left = "55%";
      styles.top = "10%";
      styles.transform = "translateX(-50%) rotateY(-15deg) scale(0.85)";
      styles.opacity = 0.8;
    }
  } else {
    // Animated state (spread out) - when in view
    if (isLeft) {
      styles.left = "25%";
      styles.top = "5%";
      styles.transform = "translateX(-50%) rotateY(15deg) scale(0.9)";
      styles.opacity = 0.9;
    } else if (isCenter) {
      styles.left = "50%";
      styles.top = "0%";
      styles.transform = "translateX(-50%) scale(1)";
      styles.opacity = 1;
    } else if (isRight) {
      styles.left = "75%";
      styles.top = "5%";
      styles.transform = "translateX(-50%) rotateY(-15deg) scale(0.9)";
      styles.opacity = 0.9;
    }
  }

  return styles;
}

// Function to get tag background color based on category
const getTagStyle = (category: string) => {
  switch (category) {
    case 'service':
      return 'bg-blue-500/50';
    case 'type':
      return 'bg-green-500/50';
    case 'industry':
      return 'bg-purple-500/50';
    default:
      return 'bg-gray-500/50';
  }
};
