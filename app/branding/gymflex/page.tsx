import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function GymFlexProject() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black">
      {/* Navigation - will be replaced by the shared header component */}
      <nav className="w-full bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link href="/branding" className="font-bold text-lg">
              Branding
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-white">
              Projects
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
          <Button variant="outline" className="rounded-full border-gray-700 text-white">
            Let's Talk
          </Button>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="w-full bg-red-600">
        <div className="max-w-3xl mx-auto">
          <Image
            src="/placeholder.svg?height=400&width=768"
            width={768}
            height={400}
            alt="GymFlex Hero"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Project Title */}
      <div className="w-full max-w-3xl px-4 py-8">
        <h1 className="text-2xl font-bold">GymFlex</h1>
        <p className="text-sm text-gray-500">Brand Strategy, Brand Design, & Visual Marketing Design</p>
      </div>

      {/* Project Description */}
      <section className="w-full max-w-3xl px-4 py-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-4">
              GymFlex needed a brand identity that would resonate with fitness enthusiasts while conveying strength,
              motivation, and community. The goal was to create a visual language that would stand out in the
              competitive fitness industry and appeal to both beginners and experienced athletes.
            </p>
            <p className="text-gray-700">
              The brand strategy focused on empowerment, community building, and personal growth - values that are
              reflected throughout the visual identity system.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-gray-500">CLIENT</h3>
              <p className="text-sm">GymFlex Fitness</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-500">SERVICES</h3>
              <p className="text-sm">Brand Strategy</p>
              <p className="text-sm">Visual Identity</p>
              <p className="text-sm">Marketing Design</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-500">YEAR</h3>
              <p className="text-sm">2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Design */}
      <section className="w-full max-w-3xl px-4 py-12 border-t border-gray-200 mt-8">
        <h2 className="text-xl font-bold mb-8">The Challenge & Brand Concept</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              GymFlex needed a brand identity that would stand out in a crowded fitness market while appealing to a
              diverse audience of fitness enthusiasts. The challenge was to create something bold and energetic that
              would work across digital and physical touchpoints.
            </p>
            <p className="text-gray-700">
              The solution was a dynamic, flexible brand system built around a strong, geometric "G" mark that could be
              adapted for different contexts while maintaining brand recognition.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              src="/placeholder.svg?height=200&width=400"
              width={400}
              height={200}
              alt="GymFlex Logo Grid"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Logo Showcase */}
      <section className="w-full max-w-3xl px-4 py-12">
        <div className="bg-red-100 rounded-lg p-8 flex justify-center">
          <Image
            src="/placeholder.svg?height=120&width=300"
            width={300}
            height={120}
            alt="GymFlex Logo"
            className="h-auto"
          />
        </div>
      </section>

      {/* Logo Explanation */}
      <section className="w-full max-w-3xl px-4 py-12">
        <h2 className="text-xl font-bold mb-6">Logo and Brand System</h2>
        <p className="text-gray-700 mb-8">
          The GymFlex logo combines strength and flexibility in a modern, geometric mark. The "G" is constructed with
          precise angles that suggest movement and progress, while the bold typography reinforces the brand's confidence
          and reliability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              width={150}
              height={150}
              alt="GymFlex Logo Variation 1"
              className="h-auto"
            />
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              width={150}
              height={150}
              alt="GymFlex Logo Variation 2"
              className="h-auto"
            />
          </div>
          <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              width={150}
              height={150}
              alt="GymFlex Logo Variation 3"
              className="h-auto"
            />
          </div>
        </div>
      </section>

      {/* Brand Applications */}
      <section className="w-full max-w-3xl px-4 py-12 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-8">Brand Applications</h2>
        <div className="space-y-12">
          {/* Application 1 */}
          <div className="bg-red-50 p-6 rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=700"
              width={700}
              height={400}
              alt="GymFlex Brand Application 1"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Application 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-600 p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="GymFlex Product 1"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-red-600 p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="GymFlex Product 2"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-red-600 p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=200&width=200"
                width={200}
                height={200}
                alt="GymFlex Product 3"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Application 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="GymFlex Application 1"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="GymFlex Application 2"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Application 4 */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=700"
              width={700}
              height={400}
              alt="GymFlex Store Front"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="w-full max-w-3xl px-4 py-12 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-6">Project Results</h2>
        <p className="text-gray-700 mb-8">
          The new GymFlex brand identity has helped the company increase brand recognition by 45% and grow their
          customer base by 30% within the first six months. The cohesive visual system has been successfully implemented
          across all touchpoints, creating a consistent and memorable brand experience.
        </p>
      </section>

      {/* Related Projects */}
      <section className="w-full max-w-3xl px-4 py-12 border-t border-gray-200">
        <h2 className="text-xl font-bold mb-8">Related Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/branding/auto-works" className="group">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Auto Works"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium text-lg">Auto Works</h3>
            <p className="text-xs text-gray-500">Brand Strategy, Brand Design, & Visual Marketing Design</p>
          </Link>

          <Link href="/branding/stayzen" className="group">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="StayZen"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium text-lg">StayZen</h3>
            <p className="text-xs text-gray-500">Brand Strategy, Brand Design, & Visual Marketing Design</p>
          </Link>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="w-full max-w-3xl px-4 py-12 mb-12">
        <Link href="/branding" className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all projects
        </Link>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Habib Lee Pla. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="#" className="text-gray-500 hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white">
              Dribbble
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
