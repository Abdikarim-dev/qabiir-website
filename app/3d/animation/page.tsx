"use client";

import { Suspense, useState, useMemo } from "react";
import { PenTool, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CloudinaryVideoWrapper from "./cloudinary-video-wrapper";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";
import PreFooter from "@/components/pre-footer";

export default function AnimationPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Cloud name from environment variable
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  // Animation projects with video embeds - updated with actual Cloudinary IDs
  const animationProjects = [
    // Abu Walad Series
    {
      id: "abu-walad-1",
      title: "Abu Walad Skincare",
      category: "Product Animation",
      description:
        "3D animation showcasing skincare product features and benefits",
      cloudinaryId: "abu_walad_dkmtb1",
      thumbnail: "/images/abu-walad-1.png",
    },
    // Software & Technology
    {
      id: "ishop-software",
      title: "iShop Software",
      category: "Software Visualization",
      description: "3D animation showcasing software interface and features",
      cloudinaryId: "ishop_software_bwmiel",
      thumbnail: "/images/ishop-software.png",
    },
    // Financial Services
    {
      id: "salam-mastercard",
      title: "Salam Mastercard",
      category: "Financial Product Animation",
      description: "Dynamic visualization of banking and payment solutions",
      cloudinaryId: "salam_mastercard_zuygzm",
      thumbnail: "/images/salam-mastercard.png",
    },
    // Skincare & Beauty
    {
      id: "yellow-rose-cream",
      title: "Yellow Rose Cream",
      category: "Beauty Product Animation",
      description: "Elegant showcase of skincare cream and its benefits",
      cloudinaryId: "Yellow_rose_cream_xmpuog",
      thumbnail: "/images/yellow-rose.png",
    },
    {
      id: "hiil",
      title: "Hiil Beauty Products",
      category: "Beauty Product Animation",
      description: "Luxurious presentation of beauty product line",
      cloudinaryId: "Hiil_lirfsj",
      thumbnail: "/images/hiil.png",
    },
    // Fragrances
    {
      id: "david-walker",
      title: "David Walker Fragrances",
      category: "Luxury Fragrance Animation",
      description: "Premium fragrance bottle design showcase",
      cloudinaryId: "David_walker_h3yk1w",
      thumbnail: "/images/david-walker.png",
    },
    {
      id: "my-perfumes",
      title: "My Perfumes Collection",
      category: "Fragrance Collection",
      description: "Artistic display of premium perfume collection",
      cloudinaryId: "My_perfumes_mbrhpp",
      thumbnail: "/images/my-perfumes.png",
    },

    {
      id: "abu-walad-2",
      title: "Abu Walad Collection",
      category: "Product Collection",
      description: "Complete showcase of the Abu Walad skincare line",
      cloudinaryId: "Abu_walad1_ahippd",
      thumbnail: "/images/abu-walad-2.png",
    },
    // Nutrition & Health
    {
      id: "nutrition-1",
      title: "Nutritional Supplements",
      category: "Health Products",
      description: "Visualization of health supplement benefits",
      cloudinaryId: "nut_yxftle",
      thumbnail: "/images/nutrition-1.png",
    },
    {
      id: "nutrition-3",
      title: "Advanced Nutrition",
      category: "Health Products",
      description: "Premium nutritional product showcase",
      cloudinaryId: "Nutrition3_aluxt7",
      thumbnail: "/images/nutrition-3.png",
    },
    // Additional Yellow Rose Product
    {
      id: "yellow-rose-2",
      title: "Yellow Rose Premium",
      category: "Beauty Products",
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
    return ["all", ...Array.from(uniqueCategories)];
  }, [animationProjects]);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return animationProjects;
    return animationProjects.filter(
      (project) => project.category === selectedCategory
    );
  }, [animationProjects, selectedCategory]);

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
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Featured Animation */}
        <div className="mb-16">
          <Suspense
            fallback={
              <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            }
          >
            <CloudinaryVideoWrapper
              publicId={
                filteredProjects[0]?.cloudinaryId ||
                animationProjects[0].cloudinaryId
              }
              className="w-full aspect-video rounded-lg overflow-hidden"
              controls={true}
              autoPlay={false}
              loop={true}
              muted={true}
              poster={getCloudinaryThumbnail(
                filteredProjects[0]?.cloudinaryId ||
                  animationProjects[0].cloudinaryId
              )}
            />
          </Suspense>
        </div>

        {/* Animation Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredProjects.slice(1).map((project, index) => (
            <div
              key={project.id}
              className="bg-transparent rounded-lg overflow-hidden shadow-md group"
            >
              <AnimatedSection
                animation="slide-up"
                delay={100 * index}
                className="h-full"
              >
              <div className="relative aspect-video">
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

        {/* CTA Section */}
        
      </section>

      {/* Pre-Footer / Contact CTA */}
      <PreFooter />
    </main>
  );
}
