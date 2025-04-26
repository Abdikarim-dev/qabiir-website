import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  AtomIcon,
  PenTool,
  RefreshCcw,
  MessageSquare,
  ArrowRight,
  CuboidIcon as Cube,
} from "lucide-react";
import RecentProjects from "@/components/recent-projects";
import AnimatedSection from "@/components/animated-section";
import ProcessStep from "@/components/process-step";
import PreFooter from "@/components/pre-footer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-md md:max-w-2xl px-4 py-4 mt-20">
        <div className="flex flex-col md:flex-row items-center gap-6 py-6">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500">
            <Image
              src="/images/profile.png"
              width={256}
              height={256}
              alt="Qabiir"
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-3 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Available for new projects
              </p>
            </div>

            {/* <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"></h1> */}
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Hello! I'm <span className="font-bold">Qabiir</span>, a 3D Artist,
              specializing in Fx Artist,
              <br className="hidden md:block" />
              3D Product Animation and Visualization.
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
      <div className="w-full max-w-md md:max-w-2xl px-4 flex justify-between border-t border-b border-gray-50 dark:border-gray-800 py-4">
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
      <section className="w-full max-w-md md:max-w-2xl px-4 py-12 border-t border-gray-50 dark:border-gray-800">
        <AnimatedSection
          animation="slide-up"
          className="flex flex-col items-center mb-10"
        >
          <div className="w-16 h-16 rounded-full bg-gray-900 dark:bg-gray-900 flex items-center justify-center mb-4">
            <Cube className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Here's what I bring to the table
          </h2>
        </AnimatedSection>

        {/* 3D Visualization */}
        <div className="border-t border-gray-50 dark:border-gray-800 py-10">
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
        <div className="border-t border-gray-50 dark:border-gray-800 py-10">
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
                <PenTool className="h-6 w-6 text-blue-500" />
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
        <div className="border-t border-gray-50 dark:border-gray-800 py-10">
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
                <MessageSquare className="h-6 w-6 text-blue-500" />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Concept Development */}
        <div className="border-t border-gray-50 dark:border-gray-800 py-10">
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
                <RefreshCcw className="h-6 w-6 text-blue-500" />
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
      <section className="w-full max-w-md md:max-w-2xl px-4 py-12 border-t border-gray-50 dark:border-gray-800">
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
          icon={<MessageSquare className="h-6 w-6 text-blue-500" />}
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
          icon={<AtomIcon className="h-6 w-6 text-blue-500" />}
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
          icon={<Cube className="h-6 w-6 text-blue-500" />}
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
          icon={<PenTool className="h-6 w-6 text-blue-500" />}
          imagePosition="left"
          delay={400}
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
          icon={<MessageSquare className="h-6 w-6 text-blue-500" />}
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
      <section className="w-full max-w-md md:max-w-2xl px-4 py-12 border-t border-gray-50 dark:border-gray-800">
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
          {/* Testimonial 1 */}
          <AnimatedSection
            animation="slide-up"
            delay={100}
            className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Thomas Smith
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Creative Director at Pixel Studios
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              "Working with Qabiir was a game-changer for our product launch.
              His attention to detail and ability to create photorealistic 3D
              animations helped us showcase our product features in ways we
              never thought possible. The final result exceeded our
              expectations."
            </p>
          </AnimatedSection>

          {/* Testimonial 2 */}
          <AnimatedSection
            animation="slide-up"
            delay={200}
            className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Sarah Johnson
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Marketing Director at TechVision
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              "Qabiir's 3D visualizations for our architectural project were
              stunning. He captured the essence of our design and brought it to
              life with incredible lighting and detail. The client was blown
              away by the quality and it helped us secure the project."
            </p>
          </AnimatedSection>

          {/* Testimonial 3 */}
          <AnimatedSection
            animation="slide-up"
            delay={300}
            className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  James Chen
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Product Manager at InnoTech
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              "The FX work Qabiir did for our commercial was outstanding. The
              fluid simulations and particle effects added that wow factor we
              were looking for. He was professional, met all deadlines, and was
              a pleasure to work with throughout the project."
            </p>
          </AnimatedSection>

          {/* Testimonial 4 */}
          <AnimatedSection
            animation="slide-up"
            delay={400}
            className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Amanda Wallace
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Director at Visionary Films
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              "Qabiir's ability to translate our concept into stunning 3D
              visuals was impressive. He understood our vision immediately and
              enhanced it with his technical expertise. The animations he
              created became the centerpiece of our campaign and received
              amazing feedback."
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="w-full max-w-md md:max-w-2xl px-4 py-12 border-t border-gray-200 dark:border-gray-800">
        <AnimatedSection
          animation="slide-up"
          className="flex flex-col items-center mb-10"
        >
          <div className="w-16 h-16 rounded-full bg-gray-900 dark:bg-gray-900 flex items-center justify-center mb-4">
            <MessageSquare className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Get in touch
          </h2>
        </AnimatedSection>

        <AnimatedSection
          animation="slide-up"
          delay={100}
          className="text-center text-gray-600 dark:text-gray-400 mb-8"
        >
          <p>
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </AnimatedSection>

        <AnimatedSection
          animation="slide-up"
          delay={200}
          className="flex justify-center gap-4"
        >
          <Button className="bg-blue-500 hover:bg-blue-600 rounded-full text-white">
            Contact me
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
          >
            Say hello
          </Button>
        </AnimatedSection>
      </section> */}
      <PreFooter />
      {/* Footer */}
      <Footer />
    </main>
  );
}
