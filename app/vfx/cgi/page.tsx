"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CloudinaryVideoWrapper from "@/app/3d/animation/cloudinary-video-wrapper";
import AnimatedSection from "@/components/animated-section";
import PreFooter from "@/components/pre-footer";

export default function CGIPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cloud name from environment variable
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  // CGI projects with video embeds
  const cgiProjects = [
    {
      id: "cgi-1",
      title: "Bidhaan CGI",
      description: "Professional product visualization and rendering",
      cloudinaryId: "Bidhaann_yjdpso",
      thumbnail: "/images/bidhaan.png",
    },
    {
      id: "cgi-2",
      title: "My Perfumes Showcase",
      description: "Luxury perfume bottle visualization",
      cloudinaryId: "My_Perfumes_1_sotl8a",
      thumbnail: "/images/perfumes.png",
    },
    {
      id: "cgi-3",
      title: "Abu Walad CGI",
      category: "Product Animation",
      description: "Dynamic product showcase animation",
      cloudinaryId: "Cgi_Abu_Walad_rc9jzr",
      thumbnail: "/images/abu-walad.png",
    },
    {
      id: "cgi-4",
      title: "Banner Unroll Simulation",
      category: "VFX Simulation",
      description: "Advertising banner physics simulation",
      cloudinaryId: "Cgi_Advertising_Banner_Unroll_Simulation_fz0luo",
      thumbnail: "/images/banner.png",
    },
    {
      id: "cgi-5",
      title: "Wara VFX Advertisement",
      category: "Visual Effects",
      description: "Commercial visual effects showcase",
      cloudinaryId: "Wara_Vfx_Ads_fdqvqp",
      thumbnail: "/images/wara.png",
    },
    {
      id: "cgi-6",
      title: "My Bank VFX",
      category: "Financial Services",
      description: "Banking service visualization",
      cloudinaryId: "My_Bank_l8n0sp",
      thumbnail: "/images/mybank.png",
    },
    {
      id: "cgi-7",
      title: "Sarah CGI Production",
      category: "Product Animation",
      description: "Product showcase and animation",
      cloudinaryId: "Sarah_Cgi_1_lyc8un",
      thumbnail: "/images/sarah.png",
    },
    {
      id: "cgi-8",
      title: "Premier Bank Visualization",
      category: "Financial Services",
      description: "Banking service animation",
      cloudinaryId: "Premier_Bank_Video_occ1cd",
      thumbnail: "/images/premier-bank.png",
    },
    {
      id: "cgi-9",
      title: "Cadani Shoes CGI",
      category: "Product Visualization",
      description: "Footwear product visualization",
      cloudinaryId: "Cadani_Shoes_h2va70",
      thumbnail: "/images/cadani.png",
    },
  ];

  // Generate Cloudinary thumbnail URL
  const getCloudinaryThumbnail = (publicId: string) => {
    return `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_jpg,so_0/${publicId}`;
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900 max-w-3xl mx-auto px-4">
      <section className="w-full py-8">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4">
            <Wand2 className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Visual Effects & CGI</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            Creating stunning visual effects and realistic simulations that bring your projects to life with impact and realism.
          </p>
        </div>

        {/* Featured CGI */}
        <div className="mb-16">
          <div className="hidden md:block">
            <Suspense
              fallback={
                <div className="w-full aspect-[16/9] bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
              }
            >
              <div className="w-full max-w-2xl mx-auto">
                <CloudinaryVideoWrapper
                  publicId={cgiProjects[0].cloudinaryId}
                  className="w-full aspect-[16/9] rounded-lg overflow-hidden"
                  controls={true}
                  autoPlay={false}
                  loop={true}
                  muted={true}
                  poster={getCloudinaryThumbnail(cgiProjects[0].cloudinaryId)}
                />
              </div>
            </Suspense>
          </div>
        </div>

        {/* CGI Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {(isMobile ? cgiProjects : cgiProjects.slice(1)).map((project, index) => (
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
      </section>

      <PreFooter />
    </main>
  );
}
