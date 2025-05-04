"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { PenTool, MessageSquare, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CloudinaryVideoWrapper from "./cloudinary-video-wrapper";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";
import PreFooter from "@/components/pre-footer";

export default function AnimationPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cloud name from environment variable
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  // Animation projects with video embeds - updated with actual Cloudinary IDs
  const animationProjects = [
    // Abu Walad Series
    {
      id: "abu-walad-1",
      title: "Abu Walad Skincare",
      category: "Cream Animation",
      description:
        "3D animation showcasing skincare product features and benefits",
      cloudinaryId: "abu_walad_dkmtb1",
      thumbnail: "/images/abu-walad-1.png",
    },
    // Software & Technology
    {
      id: "ishop-software",
      title: "iShop Software",
      category: "Product Animation",
      description: "3D animation showcasing software interface and features",
      cloudinaryId: "ishop_software_bwmiel",
      thumbnail: "/images/ishop-software.png",
    },
    // Financial Services
    {
      id: "salam-mastercard",
      title: "Salam Mastercard",
      category: "Product Animation",
      description: "Dynamic visualization of banking and payment solutions",
      cloudinaryId: "salam_mastercard_zuygzm",
      thumbnail: "/images/salam-mastercard.png",
    },
    // Skincare & Beauty
    {
      id: "yellow-rose-cream",
      title: "Yellow Rose Cream",
      category: "Cream Animation",
      description: "Elegant showcase of skincare cream and its benefits",
      cloudinaryId: "Yellow_rose_cream_xmpuog",
      thumbnail: "/images/yellow-rose.png",
    },
    {
      id: "hiil",
      title: "Hiil Beauty Products",
      category: "Product Animation",
      description: "Luxurious presentation of beauty product line",
      cloudinaryId: "Hiil_lirfsj",
      thumbnail: "/images/hiil.png",
    },
    // Fragrances
    {
      id: "david-walker",
      title: "David Walker Fragrances",
      category: "Fragrance Animation",
      description: "Premium fragrance bottle design showcase",
      cloudinaryId: "David_walker_h3yk1w",
      thumbnail: "/images/david-walker.png",
    },
    {
      id: "my-perfumes",
      title: "My Perfumes Collection",
      category: "Fragrance Animation",
      description: "Artistic display of premium perfume collection",
      cloudinaryId: "My_perfumes_mbrhpp",
      thumbnail: "/images/my-perfumes.png",
    },

    {
      id: "abu-walad-2",
      title: "Abu Walad Collection",
      category: "Cream Animation",
      description: "Complete showcase of the Abu Walad skincare line",
      cloudinaryId: "Abu_walad1_ahippd",
      thumbnail: "/images/abu-walad-2.png",
    },
    // Nutrition & Health
    {
      id: "nutrition-1",
      title: "Nutritional Supplements",
      category: "Cream Animation",
      description: "Visualization of health supplement benefits",
      cloudinaryId: "nut_yxftle",
      thumbnail: "/images/nutrition-1.png",
    },
    {
      id: "nutrition-3",
      title: "Advanced Nutrition",
      category: "Cream Animation",
      description: "Premium nutritional product showcase",
      cloudinaryId: "Nutrition3_aluxt7",
      thumbnail: "/images/nutrition-3.png",
    },
    // Additional Yellow Rose Product
    {
      id: "yellow-rose-2",
      title: "Yellow Rose Premium",
      category: "Cream Animation",
      description: "Premium skincare product visualization",
      cloudinaryId: "yellow_rose_2_a1flzp",
      thumbnail: "/images/yellow-rose-2.png",
    },
  ];

  // Extract unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      animationProjects.map((project) => project.category)
    );
    return ["All", ...Array.from(uniqueCategories)];
  }, [animationProjects]);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return animationProjects;
    return animationProjects.filter(
      (project) => project.category === activeCategory
    );
  }, [animationProjects, activeCategory]);

  // Generate Cloudinary thumbnail URL
  const getCloudinaryThumbnail = (publicId: string) => {
    return `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_jpg,so_0/${publicId}`;
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900 max-w-3xl mx-auto px-4">
      {/* Hero Section */}
      <section className="w-full py-8">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4">
            <PenTool className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">3D Animation</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            Bringing products and concepts to life through fluid, engaging
            animations that highlight features and functionality.
          </p>
        </div>

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

        {/* Featured Animation and Grid Section */}
        <div className="mb-16">
          {/* Banner video only on larger screens */}
          <div className="hidden md:block mb-16">
            {filteredProjects.length > 2 && (
              <Suspense
                fallback={
                  <div className="w-full aspect-[16/9] bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
                }
              >
                <div className="w-full max-w-2xl mx-auto">
                  <CloudinaryVideoWrapper
                    publicId={filteredProjects[0].cloudinaryId}
                    className="w-full aspect-[16/9] rounded-lg overflow-hidden"
                    controls={true}
                    autoPlay={false}
                    loop={true}
                    muted={true}
                    poster={getCloudinaryThumbnail(filteredProjects[0].cloudinaryId)}
                  />
                </div>
              </Suspense>
            )}
          </div>

          {/* Grid for all projects on mobile, remaining projects on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {(isMobile || filteredProjects.length <= 2 ? filteredProjects : filteredProjects.slice(1)).map((project, index) => (
              <div
                key={project.id}
                className="bg-transparent rounded-lg overflow-hidden shadow-md group"
              >
                <AnimatedSection
                  animation="slide-up"
                  delay={100 * (isMobile ? index + 1 : index)}
                  className="h-full"
                >
                  <div className="relative aspect-[9/13] max-w-md mx-auto">
                    <CloudinaryVideoWrapper
                      publicId={project.cloudinaryId}
                      className="w-full h-full object-cover rounded-lg"
                      controls={true}
                      autoPlay={false}
                      loop={true}
                      muted={true}
                      poster={getCloudinaryThumbnail(project.cloudinaryId)}
                    />
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
      </section>

      {/* Pre-Footer / Contact CTA */}
      <PreFooter />
    </main>
  );
}
