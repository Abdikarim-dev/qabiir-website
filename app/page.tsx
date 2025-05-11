import AnimatedSection from "@/components/animated-section";
import Footer from "@/components/Footer";
import PreFooter from "@/components/pre-footer";
import ProcessStep from "@/components/process-step";
import RecentProjects from "@/components/recent-projects";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CuboidIcon as Cube,
  FileOutput,
  Film,
  Headset,
  Lightbulb,
  MessageSquare,
  Paintbrush,
  Palette,
  PenTool
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    name: "Omar Abdirizak Abdullahi",
    title: "CEO & Founder, Dhalinta Media",
    image: "/testimonial-1-pic.png",
    alt: "testimonial-1-omar",
    quote: "Working with Qabiir at Dhalinta Media has been an incredible journey. His creativity in 3D visualization and graphic design is unmatched, bringing our projects to life with outstanding precision and imagination. Qabiir combines artistic vision with technical excellence, making him an essential part of our creative team. His dedication, professionalism, and attention to detail have elevated the quality of our work, and we are proud to have him as part of the Dhalinta Media family."
  },
  {
    name: "Omar Abdirizak Abdullahi",
    title: "CEO & Founder, Dhalinta Media",
    image: "/testimonial-1-pic.png",
    alt: "testimonial-1-omar",
    quote: "Working with Qabiir at Dhalinta Media has been an incredible journey. His creativity in 3D visualization and graphic design is unmatched, bringing our projects to life with outstanding precision and imagination. Qabiir combines artistic vision with technical excellence, making him an essential part of our creative team. His dedication, professionalism, and attention to detail have elevated the quality of our work, and we are proud to have him as part of the Dhalinta Media family."
  },
  {
    name: "Omar Abdirizak Abdullahi",
    title: "CEO & Founder, Dhalinta Media",
    image: "/testimonial-1-pic.png",
    alt: "testimonial-1-omar",
    quote: "Working with Qabiir at Dhalinta Media has been an incredible journey. His creativity in 3D visualization and graphic design is unmatched, bringing our projects to life with outstanding precision and imagination. Qabiir combines artistic vision with technical excellence, making him an essential part of our creative team. His dedication, professionalism, and attention to detail have elevated the quality of our work, and we are proud to have him as part of the Dhalinta Media family."
  },
  {
    name: "Omar Abdirizak Abdullahi",
    title: "CEO & Founder, Dhalinta Media",
    image: "/testimonial-1-pic.png",
    alt: "testimonial-1-omar",
    quote: "Working with Qabiir at Dhalinta Media has been an incredible journey. His creativity in 3D visualization and graphic design is unmatched, bringing our projects to life with outstanding precision and imagination. Qabiir combines artistic vision with technical excellence, making him an essential part of our creative team. His dedication, professionalism, and attention to detail have elevated the quality of our work, and we are proud to have him as part of the Dhalinta Media family."
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-md md:max-w-3xl px-6 py-6 mt-20">
        <div className="flex flex-col md:flex-row items-center gap-6 py-6">
          <div className="w-48 h-48 md:w-[19rem] md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500">
            <Image
              src="https://res.cloudinary.com/dofv7shih/image/upload/v1746955911/profile_qpcdxv.png"
              width={256}
              height={256}
              alt="Qabiir"
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-3 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Available for new projects
              </p>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Hello! I'm <span className="font-bold">Qabiir</span>,
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              3D Artist & FX Specialist
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              I create high-quality 3D animations and visualizations for
              commercials, films, and digital products that connect with your
              audience.
            </p>

            <div className="mt-3">
              <Button
                className="bg-blue-500 hover:bg-blue-600 rounded-full text-white px-6"
                asChild
              >
                <Link href="/contact">Let's work together</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <div className="w-full max-w-md md:max-w-3xl px-6 flex justify-between border-t border-b border-[#D5D5D4] dark:border-gray-800 py-4">
        <Link
          href="https://www.instagram.com/qabiir.art/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          Instagram
        </Link>
        <Link
          href="https://www.facebook.com/QabiirGlobal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          Facebook
        </Link>
        <Link
          href="https://www.linkedin.com/in/qabiir/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        >
          LinkedIn
        </Link>
      </div>

      {/* Recent Projects - Using the new component */}
      <RecentProjects />

      {/* Services Section */}
      <section className="w-full max-w-md md:max-w-3xl px-6 py-12 border-t border-[#D5D5D4] dark:border-gray-800">
        <AnimatedSection
          animation="slide-up"
          className="flex flex-col items-center mb-10"
        >
          <div className="w-16 h-16 rounded-full bg-gray-900 dark:bg-gray-900 flex items-center justify-center mb-4">
            <ArrowRight className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Here's what I bring to the table
          </h2>
        </AnimatedSection>

        {/* 3D Visualization */}
        <div className="border-t border-[#D5D5D4] dark:border-gray-800 py-10">
          <div className="flex flex-col md:flex-row gap-8">
            <AnimatedSection animation="slide-up" className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                3D Visualization
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I create photorealistic 3D visualizations for products,
                architecture, and interiors that showcase your designs with
                stunning detail and lighting before they're physically produced.
              </p>
            </AnimatedSection>
            <AnimatedSection
              animation="slide-left"
              className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden flex items-center justify-center"
            >
              {/* Clear background image */}
              <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dofv7shih/image/upload/v1744803770/tijabo-24_ixzocc.png')] bg-center bg-cover scale-105"></div>

              {/* Blurred black overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

              {/* Foreground content */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-gray-900 flex     items-center justify-center">
                <Cube className="h-6 w-6 text-blue-500" />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* 3D Animation */}
        <div className="border-t border-[#D5D5D4] dark:border-gray-800 py-10">
          <div className="flex flex-col md:flex-row gap-8">
            <AnimatedSection
              animation="slide-right"
              className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden flex items-center justify-center order-1 md:order-none"
            >
              {/* Background image */}
              <div className="absolute inset-0 bg-[url('/images/animation-bg.jpg')] bg-center bg-cover scale-105"></div>

              {/* Blurred black overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

              {/* Foreground content */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                <Film className="h-6 w-6 text-blue-500" />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                3D Animation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I bring products and concepts to life through fluid, engaging
                animations that highlight features and functionality in ways
                static images simply can't. Perfect for product launches,
                explainer videos, and marketing campaigns.
              </p>
            </AnimatedSection>
          </div>
        </div>

        {/* FX & Simulation */}
        <div className="border-t border-[#D5D5D4] dark:border-gray-800 py-10">
          <div className="flex flex-col md:flex-row gap-8">
            <AnimatedSection animation="slide-up" className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Brand Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every brand has a voice, a vision, and a story. I translate that
                into a visual language that’s both strategic and stunning
                helping your audience see you, feel you, and remember you.
              </p>
            </AnimatedSection>
            <AnimatedSection
              animation="slide-left"
              className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden flex items-center justify-center"
            >
              {/* Background image */}
              <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dofv7shih/image/upload/v1745261063/Dhalinta_brand-01_y8uaxs.png')] bg-center bg-cover scale-105"></div>

              {/* Blurred black overlay */}
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

              {/* Foreground content */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                <Palette className="h-6 w-6 text-blue-500" />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Concept Development */}
        <div className="border-t border-[#D5D5D4] dark:border-gray-800 py-10">
          <div className="flex flex-col md:flex-row gap-8">
            <AnimatedSection
              animation="slide-right"
              className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden flex items-center justify-center order-1 md:order-none"
            >
              {/* Background image */}
              <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dofv7shih/image/upload/v1745329230/Wakiil_brand-03_scfqms.png')] bg-center bg-cover scale-105"></div>

              {/* Blurred black overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

              {/* Foreground content */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                <PenTool className="h-6 w-6 text-blue-500" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Logo Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A logo is more than just a mark — it’s the foundation of your
                brand’s visual identity. I create logos with intention, clarity,
                and meaning helping you establish trust, spark recognition, and
                shape the way people experience your brand from the
                very first glance.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            className="bg-blue-500 hover:bg-blue-600 rounded-full text-white"
            asChild
          >
            <Link href="/contact">Get a project quote</Link>
          </Button>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full max-w-md md:max-w-3xl px-6 py-12 border-t border-[#D5D5D4] dark:border-gray-800">
        <AnimatedSection
          animation="slide-up"
          className="flex flex-col items-center mb-10"
        >
          <div className="w-16 h-16 rounded-full bg-gray-900 dark:bg-gray-900 flex items-center justify-center mb-4">
            <ArrowRight className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Your Project in 5 steps
          </h2>
        </AnimatedSection>

        {/* Step 1 - Discovery Call */}
        <ProcessStep
          number="01"
          title="DISCOVERY CALL"
          description="We start with a free 30-minute call to get to know each other and discuss your project needs."
          bulletPoints={[
            "What's your project all about?",
            "Who is your target audience?",
            "What goals do you want to achieve?",
            "What's your timeline and budget?",
            "What's your preferred visual style?",
          ]}
          icon={<Headset className="h-6 w-6 text-blue-500" />}
          imagePosition="right"
          delay={100}
        />

        {/* Step 2 - Concept & Strategy */}
        <ProcessStep
          number="02"
          title="CONCEPT & STRATEGY"
          description="After signing the contract, I'll dive deep into research to understand your industry, competitors, and target audience."
          bulletPoints={[
            "Reference gathering",
            "Style exploration",
            "Concept development",
            "Moodboard creation",
          ]}
          icon={<Lightbulb className="h-6 w-6 text-blue-500" />}
          imagePosition="left"
          delay={200}
        />

        {/* Step 3 - Modeling & Texturing */}
        <ProcessStep
          number="03"
          title="MODELING & TEXTURING"
          description="I'll create detailed 3D models and apply realistic textures based on our approved concept, ensuring every detail is perfect."
          bulletPoints={[
            "3D modeling",
            "UV mapping",
            "Texturing",
            "Material development",
            "Initial renders for feedback",
          ]}
          icon={<Paintbrush className="h-6 w-6 text-blue-500" />}
          imagePosition="right"
          delay={300}
        />

        {/* Step 4 - Animation & FX */}
        <ProcessStep
          number="04"
          title="ANIMATION & FX"
          description="For animation projects, I'll create smooth, engaging movements and add special effects that bring your vision to life."
          bulletPoints={[
            "Rigging (if needed)",
            "Animation",
            "Particle effects",
            "Simulations",
            "Lighting setup",
          ]}
          isVideo={true}
          icon={null}
          imagePosition="left"
          delay={400}
          cloudinaryId="abu_walad_dkmtb1"
        />

        {/* Step 5 - Rendering & Delivery */}
        <ProcessStep
          number="05"
          title="RENDERING & DELIVERY"
          description="I'll render the final project in high resolution, add any post-processing effects, and deliver the files in your preferred format."
          bulletPoints={[
            "High-quality rendering",
            "Post-production",
            "Color grading",
            "Final delivery",
            "Revisions if needed",
          ]}
          icon={<FileOutput className="h-6 w-6 text-blue-500" />}
          imagePosition="right"
          delay={500}
        />

        <AnimatedSection
          animation="slide-up"
          delay={600}
          className="flex justify-center mt-8"
        >
          <Button
            className="bg-blue-500 hover:bg-blue-600 rounded-full text-white"
            asChild
          >
            <Link href="/contact">Get a project quote</Link>
          </Button>
        </AnimatedSection>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Testimonials Section */}
      <section className="w-full max-w-md md:max-w-3xl px-6 py-12 border-t border-[#D5D5D4] dark:border-gray-800">
        <AnimatedSection
          animation="slide-up"
          className="flex flex-col items-center mb-10"
        >
          <div className="w-16 h-16 rounded-full bg-gray-900 dark:bg-gray-900 flex items-center justify-center mb-4">
            <MessageSquare className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            I'm not hyping myself, they are...
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First testimonial - visible */}
          <AnimatedSection
            animation="slide-up"
            delay={100}
            className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden">
                <Image
                  src="/testimonial-1-pic.png"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  alt="testimonial-1-omar"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Omar Abdirizak Abdullahi
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  CEO & Founder, Dhalinta Media
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              "Working with Qabiir at Dhalinta Media has been an incredible
              journey. His creativity in 3D visualization and graphic design is
              unmatched, bringing our projects to life with outstanding
              precision and imagination. Qabiir combines artistic vision with
              technical excellence, making him an essential part of our creative
              team. His dedication, professionalism, and attention to detail
              have elevated the quality of our work, and we are proud to have
              him as part of the Dhalinta Media family."
            </p>
          </AnimatedSection>

          {/* Placeholder testimonials */}
          {[1, 2, 3].map((index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={100}
              className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-400 dark:bg-gray-600 rounded"></div>
                  <div className="h-3 w-24 bg-gray-400 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-400 dark:bg-gray-600 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-400 dark:bg-gray-600 rounded"></div>
                <div className="h-3 w-4/6 bg-gray-400 dark:bg-gray-600 rounded"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Footer */}
      <PreFooter />
      <Footer />
    </main>
  );
}
