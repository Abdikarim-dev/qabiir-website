"use client";

import ImageSkeleton from "@/components/image-skeleton";
import PreFooter from "@/components/pre-footer";
import {
  Paintbrush
} from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";

import Footer from "@/components/Footer";
import Image from "next/image";

// Dynamically import components
const AnimatedSection = dynamic(() => import("@/components/animated-section"), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg h-24"></div>
  ),
});

const ProgressiveImage = dynamic(
  () => import("@/components/progressive-image"),
  {
    ssr: true,
    loading: () => <ImageSkeleton />,
  }
);

export default function BrandingPage() {
  // Modal state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Add zoom state
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Define project type
  type Project = {
    id: string;
    title: string;
    image: string;
  };

  // Projects with Cloudinary URLs
  const projects: Project[] = [
    {
      id: "brand-1",
      title: "Dhalinta Brand Identity",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261063/Dhalinta_brand-01_y8uaxs.png",
    },
    {
      id: "brand-2",
      title: "Gorgor Logo Design",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261464/Gorgor_logo_presentation-17_e62lab.png",
    },
    {
      id: "brand-3",
      title: "Hindis Brand Identity",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261729/Hindis_Advert_Brand-01_hmge45.png",
    },
    {
      id: "brand-4",
      title: "Wakiil Brand Identity",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745329228/Wakiil_brand-01_kw04mr.png",
    },
    {
      id: "brand-5",
      title: "Birimo Brand Identity",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745694540/birimo_01_big_peba4t.png",
    },
  ];

  // Featured project is the first one
  const featuredProject = projects[0];

  // The rest of the projects will be displayed in the grid
  const gridProjects = projects.slice(1);

  // Function to open the lightbox
  const openLightbox = (image: string, title: string) => {
    const index = projects.findIndex((project) => project.image === image);
    setSelectedImage(image);
    setSelectedTitle(title);
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  // Add zoom handlers
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 1));
    setPosition({ x: 0, y: 0 });
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Reset zoom and position when closing lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = "";
  };

  // Navigation functions
  const goToNextImage = () => {
    if (selectedIndex < projects.length - 1) {
      const nextProject = projects[selectedIndex + 1];
      setSelectedImage(nextProject.image);
      setSelectedTitle(nextProject.title);
      setSelectedIndex(selectedIndex + 1);
      resetZoom();
    }
  };

  const goToPrevImage = () => {
    if (selectedIndex > 0) {
      const prevProject = projects[selectedIndex - 1];
      setSelectedImage(prevProject.image);
      setSelectedTitle(prevProject.title);
      setSelectedIndex(selectedIndex - 1);
      resetZoom();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      switch (e.key) {
        case "ArrowRight":
          goToNextImage();
          break;
        case "ArrowLeft":
          goToPrevImage();
          break;
        case "Escape":
          closeLightbox();
          break;
        case "+":
        case "=":
          handleZoomIn();
          break;
        case "-":
          handleZoomOut();
          break;
        case "0":
          resetZoom();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedIndex]);

  return (
    <>
      {/* <Header /> */}
      <main className="min-h-screen pt-24 bg-gray-50 dark:bg-gray-900 max-w-3xl mx-auto px-4">
        {/* Hero Section */}
        <section className="w-full py-8">
          <Suspense
            fallback={
              <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            }
          >
            <AnimatedSection
              animation="slide-up"
              className="flex flex-col items-center mb-12"
            >
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4">
                <Paintbrush className="h-8 w-8 text-blue-500" />
              </div>
              <h1 className="text-4xl font-bold text-center mb-4">
                Branding & Identity
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl">
                Creating distinctive brand identities and visual systems that
                help businesses stand out and connect with their audience.
              </p>
            </AnimatedSection>
          </Suspense>

          {/* Featured Project */}
          {featuredProject && (
            <div className="mb-16">
              <Link href={`/branding/${featuredProject.id}`}>
                <div className="group relative">
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
                      {featuredProject.title}
                    </h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
                      Brand Identity
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Project Grid */}
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gridProjects.map((project) => (
                <Link href={`/branding/${project.id}`} key={project.id}>
                  <div className="group relative">
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Brand Identity
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-Footer Section */}
        <section className="w-full pt-16">
          <Suspense
            fallback={
              <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            }
          >
            <PreFooter />
          </Suspense>
        </section>
        {/* Footer Section */}

        <Suspense
          fallback={
            <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
          }
        >
          <Footer />
        </Suspense>

        {/* Lightbox Modal */}
        {/* <div className="w-full py-8">
          <Suspense
            fallback={
              <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            }
          >
            <AnimatedSection
              animation="slide-up"
              className="flex flex-col items-center mb-12"
            >
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4">
                <Paintbrush className="h-8 w-8 text-blue-500" />
              </div>
              <h1 className="text-4xl font-bold text-center mb-4">
                Branding & Identity
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl">
                Creating distinctive brand identities and visual systems that help businesses
                stand out and connect with their audience.
              </p>
            </AnimatedSection>
          </Suspense>
        </div> */}
      </main>
    </>
  );
}
