"use client";

import ImageSkeleton from "@/components/image-skeleton";
import PreFooter from "@/components/pre-footer";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  RotateCcw,
  X,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";
// Remove this line: import Header from "@/components/header";
import Footer from "@/components/Footer";

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

export default function Designs() {
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

  // Filter state
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [categories, setCategories] = useState<string[]>([]);

  // Define project type
  type Project = {
    id: string;
    title: string;
    category: string;
    image: string;
  };

  // Projects data for designs
  const projects: Project[] = [
    {
      id: "design-1",
      title: "Social Media Design 1",
      category: "Social Media",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744890160/oqvmhijzv4vejo2h8wik.png",
    },
    {
      id: "design-2",
      title: "Eid Poster Design",
      category: "Posters",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744890791/1-Eid_poster_tmzpza.png",
    },
    {
      id: "design-3",
      title: "February Social Post",
      category: "Social Media",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744890929/9-Febuary-12_muagje.png",
    },
    {
      id: "design-4",
      title: "Marketing Campaign",
      category: "Marketing",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744890151/ccklyp2e6r9n09xqr0ql.png",
    },
    // {
    //   id: "design-5",
    //   title: "Brand Design",
    //   category: "Marketing",
    //   image:
    //     "https://res.cloudinary.com/dofv7shih/image/upload/v1744890040/g5d021eh6sy2dwagakg8.png",
    // },
    {
      id: "design-6",
      title: "Social Media Campaign",
      category: "Social Media",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744890022/wjbbcdum15wz47dgod9b.png",
    },
    {
      id: "design-7",
      title: "Marketing Design",
      category: "Marketing",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744889783/o8yf2rfbzmhsdwhofz83.png",
    },

    {
      id: "design-9",
      title: "Social Media Post",
      category: "Social Media",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744889567/z3qtskx30kacttqpvile.png",
    },
    {
      id: "design-10",
      title: "Brand Campaign",
      category: "Marketing",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744889529/ph7zfqjrykkjw1bnf7bd.png",
    },
    {
      id: "design-8",
      title: "Promotional Design",
      category: "Marketing",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744889666/on1cxjdg97fpumrk1rvc.jpg",
    },
    // {
    //   id: "design-11",
    //   title: "Marketing Visual",
    //   category: "Marketing",
    //   image:
    //     "https://res.cloudinary.com/dofv7shih/image/upload/v1744889310/mpeu4z05fueqpnujnrsx.jpg",
    // },
  ];

  // Generate unique categories on component mount
  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(projects.map((project) => project.category))
    );
    setCategories(["All", ...uniqueCategories]);
  }, []);

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Featured project is the first one
  const featuredProject = filteredProjects[0];

  // The rest of the projects will be displayed in the grid
  const gridProjects = filteredProjects.slice(1);

  // Function to open the lightbox
  const openLightbox = (image: string, title: string) => {
    const index = filteredProjects.findIndex(
      (project) => project.image === image
    );
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

  // Navigation between images in lightbox
  const goToNextImage = () => {
    if (selectedIndex < filteredProjects.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedImage(filteredProjects[nextIndex].image);
      setSelectedTitle(filteredProjects[nextIndex].title);
      resetZoom();
    }
  };

  const goToPrevImage = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedImage(filteredProjects[prevIndex].image);
      setSelectedTitle(filteredProjects[prevIndex].title);
      resetZoom();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowRight":
          goToNextImage();
          break;
        case "ArrowLeft":
          goToPrevImage();
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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedIndex]);

  // Focus trap for modal
  useEffect(() => {
    if (selectedImage && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selectedImage]);

  return (
    
      
      <main className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900 max-w-3xl mx-auto px-4">
        {/* Keep existing header section */}
        <section className="w-full max-w-3xl px-4 py-8 mt-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            Social Media, Marketing & Poster Designs
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            A collection of social media posts, marketing materials, and poster
            designs created for various clients and campaigns.
          </p>
        </section>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-gray-500" />
            <h2 className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Filter by Category
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <>
            {/* Featured Project */}
            <Suspense
              fallback={<ImageSkeleton height={600} className="w-full mb-16" />}
            >
              <AnimatedSection animation="fade-in" className="mb-16">
                <div
                  className="relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() =>
                    openLightbox(featuredProject.image, featuredProject.title)
                  }
                >
                  <ProgressiveImage
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h2 className="text-white text-xl font-bold">
                      {featuredProject.title}
                    </h2>
                    <p className="text-gray-200 text-sm">
                      {featuredProject.category}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </Suspense>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gridProjects.map((project, index) => (
                <div key={project.id} className="group cursor-pointer">
                  <Suspense
                    fallback={<ImageSkeleton height={500} className="w-full" />}
                  >
                    <AnimatedSection
                      animation="slide-up"
                      delay={100 * index}
                      className="h-full"
                    >
                      <div
                        className="relative aspect-[3/4] rounded-lg overflow-hidden h-full"
                        onClick={() =>
                          openLightbox(project.image, project.title)
                        }
                      >
                        <ProgressiveImage
                          src={project.image}
                          alt={project.title}
                          fill
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <h3 className="text-white font-bold">
                            {project.title}
                          </h3>
                          <p className="text-gray-200 text-sm">
                            {project.category}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  </Suspense>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              No projects found in this category.
            </p>
            <Button
              variant="outline"
              onClick={() => setActiveCategory("All")}
              className="rounded-md"
            >
              Show all projects
            </Button>
          </div>
        )}

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
        {selectedImage && (
          <div
            ref={modalRef}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center outline-none"
            onClick={closeLightbox}
            onKeyDown={(e) => e.key === "Escape" && closeLightbox()}
            tabIndex={0}
            aria-modal="true"
            aria-labelledby="lightbox-title"
            role="dialog"
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <button
                className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white z-10 hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                aria-label="Close lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Zoom Controls */}
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <button
                  className="bg-black/50 rounded-full p-2 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomIn();
                  }}
                  aria-label="Zoom in"
                >
                  <ZoomIn className="h-6 w-6" />
                </button>
                <button
                  className="bg-black/50 rounded-full p-2 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomOut();
                  }}
                  aria-label="Zoom out"
                >
                  <ZoomOut className="h-6 w-6" />
                </button>
                <button
                  className="bg-black/50 rounded-full p-2 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    resetZoom();
                  }}
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="h-6 w-6" />
                </button>
                <div className="bg-black/50 rounded-full px-3 flex items-center text-white">
                  {Math.round(zoomLevel * 100)}%
                </div>
              </div>

              {/* Previous/Next buttons */}
              {selectedIndex > 0 && (
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevImage();
                  }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {selectedIndex < filteredProjects.length - 1 && (
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextImage();
                  }}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}

              <div
                className="w-full h-full flex items-center justify-center overflow-hidden"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <img
                  ref={imageRef}
                  src={selectedImage}
                  alt={selectedTitle}
                  className="max-w-full max-h-full object-contain transition-transform duration-200"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                    cursor:
                      zoomLevel > 1
                        ? isDragging
                          ? "grabbing"
                          : "grab"
                        : "default",
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-white text-center">
                <h3 id="lightbox-title" className="text-lg font-medium">
                  {selectedTitle}
                </h3>
                <p className="text-sm text-gray-300">
                  Image {selectedIndex + 1} of {filteredProjects.length}
                </p>
                <div className="text-xs text-gray-400 mt-1">
                  Use arrow keys to navigate • Press ESC to close • +/- to zoom
                  • 0 to reset zoom
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
  );
}
