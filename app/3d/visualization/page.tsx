"use client";

import dynamic from "next/dynamic";
import { Suspense, useState } from "react";
import { CuboidIcon as Cube, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageSkeleton from "@/components/image-skeleton";
import Link from "next/link";
import PreFooter from "@/components/pre-footer";

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

export default function VisualizationPage() {
  // Modal state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  // Define project type
  type Project = {
    id: string;
    title: string;
    category: string;
    image: string;
  };

  // Projects with Cloudinary URLs
  const projects: Project[] = [
    {
      id: "tijabo-17",
      title: "Product Visualization 1",
      category: "Product Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744804055/tijabo-17_umxqah.png",
    },
    {
      id: "tijabo-15",
      title: "Product Visualization 2",
      category: "Product Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744804032/tijabo-15_fdhgdk.png",
    },
    {
      id: "tijabo-11",
      title: "Nutrition Multi-Pack",
      category: "Product Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744804031/tijabo-11_dmof3k.png",
    },
    {
      id: "tijabo-10",
      title: "Cosmetic Product",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744804022/tijabo-10_jqeduw.png",
    },
    {
      id: "tijabo-12",
      title: "Skincare Collection",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744804006/tijabo-12_zqc8is.png",
    },
    {
      id: "tijabo-13",
      title: "Premium Package",
      category: "Packaging Design",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803928/tijabo-13_rllrsl.png",
    },
    {
      id: "tijabo-19",
      title: "Luxury Fragrance",
      category: "Luxury Product",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744804119/tijabo-19_cya3ku.png",
    },
    {
      id: "tijabo-18",
      title: "Beverage Collection",
      category: "Beverage Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744804111/tijabo-18_bknbvh.png",
    },
    {
      id: "tijabo-17-2",
      title: "Premium Design",
      category: "Product Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744804055/tijabo-17_umxqah.png",
    },
    {
      id: "tijabo-14",
      title: "Beauty Product",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803922/tijabo-14_plwpet.png",
    },
    {
      id: "tijabo-29",
      title: "Ikhlas Perfume",
      category: "Luxury Product",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803908/tijabo-29_ytaw10.png",
    },
    {
      id: "tijabo-25",
      title: "Skincare Line",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803895/tijabo-25_jaydsu.png",
    },
    {
      id: "tijabo-26",
      title: "Premium Packaging",
      category: "Packaging Design",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803881/tijabo-26_gpxalj.png",
    },
    {
      id: "tijabo-28",
      title: "Blue Alora Special",
      category: "Luxury Product",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803853/tijabo-28_lrwijm.png",
    },
    {
      id: "tijabo-06",
      title: "Health Product",
      category: "Product Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803840/tijabo-06_yoehdv.png",
    },
    {
      id: "tijabo-24",
      title: "Skincare Collection",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803770/tijabo-24_ixzocc.png",
    },
    {
      id: "tijabo-09",
      title: "Retin Body Lotion",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803791/tijabo-09_t7fu0c.png",
    },
    {
      id: "tijabo-27",
      title: "Fragrance Line",
      category: "Luxury Product",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803815/tijabo-27_vycosx.png",
    },
    {
      id: "tijabo-24-2",
      title: "Premium Skincare",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803770/tijabo-24_ixzocc.png",
    },
    {
      id: "tijabo-05",
      title: "Lotion Product",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803768/tijabo-05_wak2tf.png",
    },
    {
      id: "tijabo-07",
      title: "Luxury Packaging",
      category: "Packaging Design",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803749/tijabo-07_ydman5.png",
    },
    {
      id: "tijabo-01",
      title: "Premium Collection",
      category: "Product Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803747/tijabo-01_qdi2fs.png",
    },
    {
      id: "tijabo-22",
      title: "Skincare Solutions",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803730/tijabo-22_ic9w00.png",
    },
    {
      id: "tijabo-04",
      title: "Premium Cream",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803729/tijabo-04_ye0jqk.png",
    },
    {
      id: "tijabo-03",
      title: "Luxury Bottle",
      category: "Luxury Product",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803693/tijabo-03_hnjxj5.png",
    },
    {
      id: "tijabo-23",
      title: "Cosmetic Line",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803686/tijabo-23_oqqjl5.png",
    },
    {
      id: "tijabo-02",
      title: "Premium Package",
      category: "Packaging Design",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803681/tijabo-02_wc08fo.png",
    },
    {
      id: "tijabo-21",
      title: "Beauty Collection",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803676/tijabo-21_sfdg98.png",
    },
    {
      id: "tijabo-20",
      title: "Yellow Rose Collection",
      category: "Cosmetic Visualization",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1744803673/tijabo-20_n2xlys.png",
    },
  ];

  // Featured project is the first one
  const featuredProject = projects[0];

  // The rest of the projects will be displayed in the grid
  const gridProjects = projects.slice(1);

  // Function to open the lightbox
  const openLightbox = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-50 dark:bg-gray-900 max-w-3xl mx-auto px-4">
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
              <Cube className="h-8 w-8 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold text-center mb-4">
              3D Visualization
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl">
              Creating photorealistic 3D visualizations for products, packaging,
              and branding that showcase your designs with stunning detail and
              lighting.
            </p>
          </AnimatedSection>
        </Suspense>

        {/* Featured Project */}
        <Suspense
          fallback={<ImageSkeleton height={400} className="w-full mb-16" />}
        >
          <AnimatedSection animation="fade-in" className="mb-16">
            <div
              className="relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer"
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
            </div>
          </AnimatedSection>
        </Suspense>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((project, index) => (
            <div key={project.id} className="group cursor-pointer">
              <Suspense
                fallback={<ImageSkeleton height={300} className="w-full" />}
              >
                <AnimatedSection
                  animation="slide-up"
                  delay={100 * index}
                  className="h-full"
                >
                  <div
                    className="relative aspect-square rounded-lg overflow-hidden h-full"
                    onClick={() => openLightbox(project.image, project.title)}
                  >
                    <ProgressiveImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </AnimatedSection>
              </Suspense>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16">
        {/* <Suspense
          fallback={
            <div className="h-60 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mb-16"></div>
          }
        >
          <AnimatedSection animation="slide-up" className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Visualization Services</h2>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">
                    Product Visualization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Showcase your products with photorealistic 3D renders that
                    highlight every detail, material, and feature before
                    physical production.
                  </p>
                </div>

                <div className="md:w-2/3 bg-gray-100 dark:bg-gray-800 rounded-lg h-48 flex items-center justify-center">
                  <img
                    src={projects[3].image}
                    alt="Product Visualization Example"
                    className="h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 md:order-2">
                  <h3 className="text-xl font-bold mb-2">Packaging Design</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Visualize packaging concepts with realistic materials,
                    lighting, and environments to see how your products will
                    look on shelves.
                  </p>
                </div>

                <div className="md:w-2/3 md:order-1 bg-gray-100 dark:bg-gray-800 rounded-lg h-48 flex items-center justify-center">
                  <img
                    src={projects[5].image}
                    alt="Packaging Visualization Example"
                    className="h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold mb-2">
                    Cosmetic Visualization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Create stunning visualizations for cosmetic products with
                    realistic textures, lighting, and effects that highlight
                    product features.
                  </p>
                </div>

                <div className="md:w-2/3 bg-gray-100 dark:bg-gray-800 rounded-lg h-48 flex items-center justify-center">
                  <img
                    src={projects[4].image}
                    alt="Cosmetic Visualization Example"
                    className="h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Suspense> */}

        {/* CTA Section */}
        <Suspense
          fallback={
            <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
          }
        >
          {/* Pre-Footer / Contact CTA */}
          <PreFooter />
        </Suspense>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <button
              className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white z-10 hover:bg-black/70"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </button>

            <div className="w-full h-full flex items-center justify-center">
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-white text-center">
              <h3 className="text-lg font-medium">{selectedTitle}</h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
