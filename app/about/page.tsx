import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-4">
      {/* Hero Image */}
      <div className="w-full max-w-3xl px-4 py-8 mt-8">
        <div className="w-full h-[480px] bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 rounded-xl overflow-hidden relative">
          <Image
            src="/images/profile.png?height=480&width=768"
            width={768}
            height={480}
            alt="Mohamed Abdikhabir"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-lg font-medium mb-1">Mohamed Abdikhabir</h2>
            <div className="h-[2px] w-16 bg-white"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="w-full max-w-3xl px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          From Concept to Creation: Bringing Your Vision to Life
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Every design tells a story, and behind every story is a master of
              the craft.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              I am <strong>Qabiir</strong> — a designer and 3D design expert,
              passionate about transforming concepts into captivating visual
              experiences.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              With years of experiences, I've developed my ability to bring new
              concepts to life, whether using classic design techniques or
              advanced 3D modelling and animation.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Partnering with brands and organizations, I craft immersive visual
              narratives that elevate their identity, creating a strong presence
              across both digital and physical platforms.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              My work combines creativity and technical expertise, ensuring that
              each design is both visually appealing and functional.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              I prioritise producing solutions that are not just visually
              appealing, but also functional and impactful.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Through my expertise in both traditional design and 3D
              visualization, I help brands create memorable and distinctive
              visual experiences that truly stand out.
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            My career so far
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I’ve successfully collaborated with startups across diverse
              sectors including Qabiir Global, Wasaradda waxbarashada, Deero
              Advert, Dhalinta Media, Sarah Cosmetics, Tik Soultion and beyond
              to elevate their brand presence and craft meaningful, memorable
              design experiences that connect with their audiences.
            </p>

            {/* <Button className="bg-purple-600 hover:bg-purple-700 rounded-full text-white">View CV online</Button> */}
          </div>

          {/* Career Timeline */}
          <div className="space-y-8">
            {/* EasyBiz Agency */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-900 dark:text-white text-xs">
                    E
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  EasyBiz Agency
                </h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Senior Brand Designer & Design Partner
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                From Oct 2022 - present
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                As a Senior Designer, I lead multiple branding projects, create
                visual identity design, create production-ready UI/UX designs,
                and develop marketing materials and presentations slides and
                pitch decks.
              </p>
            </div>

            {/* Sazo Design Studio */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-900 dark:text-white text-xs">
                    S
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Sazo Design Studio
                </h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Senior Brand Designer
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                From Oct 2021 - Sept 2022
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                My role at the Visual and Web UI department involved the
                creation of visual communications aimed at establishing and
                strengthening brand identities. I worked on the development of
                brand guidelines, visual identity, and user interface
                implementation.
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Awards & Recognitions
          </h2>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Celebrated for my work through awards and recognition from industry
          leaders in Brand Design and Consultancy.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 py-4">
            <span className="font-medium text-gray-900 dark:text-white">
              2023 Content Creator of the Year
            </span>
            <span className="text-gray-600 dark:text-gray-400">🏆</span>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 py-4">
            <span className="font-medium text-gray-900 dark:text-white">
              2022 Content Creator of the Year
            </span>
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Get in touch
          </h2>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            I'm available for new projects
          </p>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          I'm always open to hearing from new people about their projects and
          ideas.
        </p>

        <div className="flex gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 rounded-full text-white">
            Contact me
          </Button>
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
        <p>
          © {new Date().getFullYear()} Mohamed Abdikhabir. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="#"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Instagram
          </Link>
          <Link
            href="#"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Dribbble
          </Link>
          <Link
            href="#"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            LinkedIn
          </Link>
        </div>
      </footer>
    </main>
  );
}
