import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-4">
      {/* Hero Image */}
      <div className="w-full max-w-3xl px-4 py-8 mt-8">
        <div className="w-full h-[480px] bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 rounded-xl overflow-hidden">
          <Image
            src="/images/profile.png?height=480&width=768"
            width={768}
            height={480}
            alt="Habib Lee Pla"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* About Section */}
      <section className="w-full max-w-3xl px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Your Partner in Bringing Your Brand's Vision to Life
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">Behind every design is a designer with a vision.</p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              I'm <strong>Habib Lee Pla</strong>, a professional designer dedicated to transforming functionality and
              ideas.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              I believe that great design is more than just a logo; it's about creating a visual language that's both
              adaptive and distinct, providing clarity through simplification, but also emotive and functional.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              As a strategist, I partner with companies and organizations to develop and implement effective branding
              solutions and design systems that help them to establish a strong and unified presence.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I'm also a Public Speaker and Educator, an Adobe Certified Creative Cloud and a Certified Brand
              Specialist.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Ultimately, I take pleasure in connecting my expertise, ideas, and creativity to design solutions that are
              not only visually appealing but also practical, accessible, cost-effective, and solve real-world problems.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              So, here is the interesting part: I'm helping brands to stand out by creating designs that are visually
              distinct and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="w-full max-w-3xl px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-gray-900 dark:text-white text-xs">📋</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">My career so far</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I've had the privilege of working with various companies like Spotify, EasyBiz, Art Real Estate, Sazo
              Design Studio, and more. Here's a brief overview of my professional journey.
            </p>

            <Button className="bg-purple-600 hover:bg-purple-700 rounded-full text-white">View CV online</Button>
          </div>

          {/* Career Timeline */}
          <div className="space-y-8">
            {/* EasyBiz Agency */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-900 dark:text-white text-xs">E</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">EasyBiz Agency</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Senior Brand Designer & Design Partner</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">From Oct 2022 - present</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                As a Senior Designer, I lead multiple branding projects, create visual identity design, create
                production-ready UI/UX designs, and develop marketing materials and presentations slides and pitch
                decks.
              </p>
            </div>

            {/* Sazo Design Studio */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-900 dark:text-white text-xs">S</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Sazo Design Studio</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Senior Brand Designer</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">From Oct 2021 - Sept 2022</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                My role at the Visual and Web UI department involved the creation of visual communications aimed at
                establishing and strengthening brand identities. I worked on the development of brand guidelines, visual
                identity, and user interface implementation.
              </p>
            </div>

            {/* Additional career items follow the same pattern... */}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="w-full max-w-3xl px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-gray-900 dark:text-white text-xs">🏆</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Awards & Recognitions</h2>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Celebrated for my work through awards and recognition from industry leaders in Brand Design and Consultancy.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 py-4">
            <span className="font-medium text-gray-900 dark:text-white">2023 Content Creator of the Year</span>
            <span className="text-gray-600 dark:text-gray-400">🏆</span>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 py-4">
            <span className="font-medium text-gray-900 dark:text-white">2022 Content Creator of the Year</span>
            <span className="text-gray-600 dark:text-gray-400">🏆</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-3xl px-4 py-8 mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-gray-900 dark:text-white text-xs">📞</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Get in touch</h2>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400">I'm available for new projects</p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          I'm always open to hearing from new people about their projects and ideas.
        </p>

        <div className="flex gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 rounded-full text-white">Contact me</Button>
          <Button
            variant="outline"
            className="rounded-full border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
          >
            View FAQs
          </Button>
        </div>
      </section>

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
