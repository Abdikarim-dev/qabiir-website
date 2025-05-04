"use client";

import Footer from "@/components/Footer";
import PreFooter from "@/components/pre-footer";
import { ArrowLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  image: string;
  gallery: string[];
  description: string;
}

export default function SingleBrandProject() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Projects data with gallery images
  const projects: Project[] = [
    {
      id: "brand-1",
      title: "Dhalinta Brand Identity",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261063/Dhalinta_brand-01_y8uaxs.png",
      gallery: [
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745260907/Dhalinta_brand-02_voty8k.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745260897/Dhalinta_brand-03_lee0l2.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745260898/Dhalinta_brand-04_jl80ow.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745260903/Dhalinta_brand-05_zqedqd.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745328870/Dhalinta_brand-06_zsrp3a.jpg",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745328871/Dhalinta_brand-07_pklqji.jpg",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745328862/Dhalinta_brand-08_vjamio.jpg",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745260899/Dhalinta_brand-09_b79ixh.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745328884/Dhalinta_brand-10_pwk8wg.jpg",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745260920/Dhalinta_brand-11_v9ppnk.png",
      ],
      description:
        "A comprehensive brand identity project showcasing the visual elements and applications.",
    },
    {
      id: "brand-2",
      title: "Gorgor Logo Design",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261464/Gorgor_logo_presentation-17_e62lab.png",
      gallery: [
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261111/Gorgor_logo_presentation-18_rigjq7.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261086/Gorgor_logo_presentation-19_oz3aq1.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261085/Gorgor_logo_presentation-20_s1cn9q.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261091/Gorgor_logo_presentation-21_mmkpme.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745328768/Gorgor_logo_presentation_ecjjwv.jpg",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261163/Gorgor_logo_presentation-23_fsegwn.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261173/Gorgor_logo_presentation-24_okeir8.png",
      ],
      description: "Logo design and brand identity development for Gorgor.",
    },
    {
      id: "brand-3",
      title: "Hindis Brand Identity",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261729/Hindis_Advert_Brand-01_hmge45.png",

      gallery: [
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261730/Hindis_Advert_Brand-02_pcttzn.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261730/Hindis_Advert_Brand-03_plfexf.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745261832/Hindis_Advert_Brand-04_t6dkcj.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745262306/Hindis_Advert_Brand-05_fz8o5x.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745262039/Hindis_Advert_Brand-06_lkyodx.png",
      ],
      description:
        "Complete brand identity system for Hindis, including visual guidelines and marketing materials.",
    },
    {
      id: "brand-4",
      title: "Wakiil Brand Identity",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745329228/Wakiil_brand-01_kw04mr.png",
      gallery: [
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745329228/Wakiil_brand-01_kw04mr.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745329229/Wakiil_brand-02_jpmzjg.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745329230/Wakiil_brand-03_scfqms.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745329323/Wakiil_brand-04_aqmef6.jpg",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745329308/Wakiil_brand-05_mjqijp.jpg",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745329294/Wakiil_brand-06_zxvzbx.jpg",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745329308/Wakiil_brand-07_ychuic.jpg",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745329302/Wakiil_brand-08_qaymij.jpg",
      ],
      description:
        "Comprehensive brand identity development for Wakiil, showcasing visual elements and brand applications.",
    },
    {
      id: "brand-5",
      title: "Birimo Brand Identity",
      image:
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745694519/birimo_...-01_sprjhr.png",
      gallery: [
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745693093/Birimo_advert-02_bewfuf.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745692990/Birimo_advert-03_cy5qv3.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745692976/Birimo_advert-04_mnjnuu.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745692979/Birimo_advert-05_cpatsx.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745693906/birimo.-03_kdzo65.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745693905/birimo..-04_mx0dhl.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745693137/Birimo_advert-07_jezedt.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745693137/Birimo_advert-07_jezedt.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745693136/Birimo_advert-11_fukmxb.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745693018/Birimo_advert-12_kw0ujy.png",
        "https://res.cloudinary.com/dofv7shih/image/upload/v1745693925/birimo_8-02_zhobit.png",
      ],
      description:
        "Complete brand identity system for Birimo, including visual guidelines and marketing materials.",
    },
  ];

  useEffect(() => {
    const currentProject = projects.find((p) => p.id === params.id);
    setProject(currentProject || null);
  }, [params.id]);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center dark:bg-black text-gray-900 dark:text-gray-100">
        <div className="w-full max-w-3xl px-4 py-8">
          <h1 className="text-2xl font-bold text-red-500">Project not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Hero Image */}
      <div className="w-full dark:bg-black">
        <div className="max-w-3xl mx-auto">
          <Image
            src={project.image}
            width={768}
            height={400}
            alt={project.title}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Project Title */}
      <div className="w-full max-w-3xl px-4 py-8 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {project.description}
        </p>
      </div>

      {/* Gallery Section */}
      <section className="w-full max-w-3xl px-4 py-12 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-xl font-bold mb-8 text-gray-900 dark:text-white">
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src={image}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Related Projects */}
      <section className="w-full max-w-3xl px-4 py-12 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-xl font-bold mb-8 text-gray-900 dark:text-white">
          Related Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.id !== project.id)
            .slice(0, 2)
            .map((relatedProject) => (
              <Link
                href={`/branding/${relatedProject.id}`}
                key={relatedProject.id}
                className="group"
              >
                <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={relatedProject.image}
                    width={400}
                    height={300}
                    alt={relatedProject.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-lg text-gray-900 dark:text-white">
                  {relatedProject.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Brand Strategy, Brand Design, & Visual Marketing Design
                </p>
              </Link>
            ))}
        </div>
      </section>

      {/* Back to Projects */}
      <section className="w-full max-w-3xl px-4 py-12 bg-gray-50 dark:bg-gray-900">
        <Link
          href="/branding"
          className="inline-flex items-center text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all projects
        </Link>
      </section>

      {/* Pre-Footer Section */}
      <section className="w-full max-w-3xl bg-gray-50 dark:bg-gray-900">
        <Suspense
          fallback={
            <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
          }
        >
          <PreFooter />
        </Suspense>
        {/* Footer Section */}

        <Suspense
          fallback={
            <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
          }
        >
          <Footer />
        </Suspense>
      </section>
    </main>
  );
}
