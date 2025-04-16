import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PreFooter from "@/components/pre-footer"

export default function Branding() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-3xl px-4 py-8 mt-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Brand & Visual Identity Designs</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Renowned startups, collaborators, and brands I've partnered with.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="w-full max-w-3xl px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 - 042 Fashion */}
          <div className="flex flex-col">
            <Link href="/branding/042-fashion" className="group">
              <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="042 Fashion"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-lg text-gray-900 dark:text-white">042 Fashion</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Brand Strategy, Brand Design, & Visual Marketing Design
              </p>
            </Link>
          </div>

          {/* Project 2 - Auto Works */}
          <div className="flex flex-col">
            <Link href="/branding/auto-works" className="group">
              <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Auto Works"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-lg text-gray-900 dark:text-white">Auto Works</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Brand Strategy, Brand Design, & Visual Marketing Design
              </p>
            </Link>
          </div>

          {/* Project 3 - GymFlex */}
          <div className="flex flex-col">
            <Link href="/branding/gymflex" className="group">
              <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-4 relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="GymFlex"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                </div>
              </div>
              <h3 className="font-medium text-lg text-gray-900 dark:text-white">GymFlex</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Brand Strategy, Brand Design, & Visual Marketing Design
              </p>
            </Link>
          </div>

          {/* Additional projects follow the same pattern... */}
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="w-full max-w-3xl px-4 py-12 mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400">I'm available for new projects</p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          I'm always open to hearing from new people about their ideas, projects, or potential collaborations.
        </p>

        <div className="flex gap-4">
          <Button className="bg-red-500 hover:bg-red-600 rounded-full text-white">Schedule a call</Button>
          <Button
            variant="outline"
            className="rounded-full border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
          >
            Say hello
          </Button>
        </div>
      </section> */}
      <PreFooter />

      {/* Footer */}
      <footer className="w-full max-w-3xl px-4 py-6 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Habib Lee Pla. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Instagram
          </Link>
          <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            Dribbble
          </Link>
          <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
            LinkedIn
          </Link>
        </div>
      </footer>
    </main>
  )
}
