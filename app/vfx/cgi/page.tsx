import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Wand2 } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function CGIPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8">
        <AnimatedSection animation="slide-up" className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4">
            <Wand2 className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Visual Effects & Simulations</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            Creating stunning visual effects and realistic simulations that bring your projects to life with impact and
            realism.
          </p>
        </AnimatedSection>

        {/* Featured Project */}
        <AnimatedSection animation="fade-in" className="mb-16">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <Image src="/images/fx-bg.jpg" alt="VFX Demo Reel" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">FX Demo Reel</h2>
                <p className="text-gray-300 mb-4">
                  A showcase of my latest visual effects work including particle systems, fluid simulations, and
                  destruction sequences.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 rounded-full text-white">Watch Demo Reel</Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection animation="slide-up" className="mb-16">
          <h2 className="text-2xl font-bold mb-8">VFX Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Particle Systems</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                From subtle dust and smoke to explosive fire and magic effects, I create custom particle systems that
                add depth and realism to your scenes.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Fluid Simulations</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Realistic water, smoke, fire, and other fluid dynamics simulations that behave naturally and integrate
                seamlessly with your environment.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Destruction & Physics</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Dynamic destruction sequences and physics-based animations that add impact and excitement to your
                projects.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Environment Effects</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Weather effects, atmospheric conditions, and environmental elements that enhance the mood and realism of
                your scenes.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection animation="slide-up" className="mb-16">
          <h2 className="text-2xl font-bold mb-8">My VFX Process</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-blue-500">01</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Concept & Planning</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I start by understanding your vision and requirements, then plan the technical approach to achieve the
                  desired visual effects.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-blue-500">02</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Simulation Setup</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I set up the simulation parameters, create custom solvers if needed, and establish the foundation for
                  the effects.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-blue-500">03</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Iteration & Refinement</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Through multiple iterations, I refine the simulations to achieve the perfect look, behavior, and
                  integration with your scene.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-blue-500">04</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rendering & Compositing</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I render the final effects with proper lighting and shading, then composite them into your scene for a
                  seamless integration.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="slide-up" className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to add stunning visual effects to your project?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life with professional VFX that elevates your project.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-blue-500 hover:bg-blue-600 rounded-full text-white">Get a Quote</Button>
            <Button variant="outline" className="rounded-full">
              View Portfolio
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
