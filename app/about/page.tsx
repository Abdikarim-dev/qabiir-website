import Footer from "@/components/Footer";
import PreFooter from "@/components/pre-footer";
import Image from "next/image";

const careerData = [
  {
    id: 1,
    company: "Qabiir Global",
    initial: "Q",
    position: "CEO and Founder",
    period: "",
    logo: "/images/qabiir-logo.png",
    description:
      "As the CEO of Qabiir Global, I lead the vision, strategy, and growth of a creative agency focused on branding, 3D design, and digital media. I oversee operations, client relationships, and creative direction to ensure high-quality, impactful results. My leadership combines business strategy with design thinking to deliver innovative solutions for brands and organizations. At Qabiir Global, we help clients transform ideas into powerful visual experiences that drive success.",
  },
  {
    id: 3,
    company: "Dhalinta Media",
    initial: "D",
    position: "Head of Digital Media",
    period: "From Mar 2024 - April 2025",
    logo: "/images/dhalinta-logo.jpg",
    description:
      "As the Head of Digital Media at Dhalinta Media, I lead the strategy and execution of all digital content across platforms. I oversee content creation, social media campaigns, and digital branding to ensure strong online engagement. My role includes managing creative teams, setting visual direction, and analyzing performance for continuous improvement.",
  },
  {
    id: 4,
    company: "Wasaradda Waxbarashada",
    initial: "W",
    position: "Creative Designer",
    period: "From Feb 2023 - May 2024",
    logo: "/images/wazaarada-logo.jpg",
    description:
      "As a Creative Designer at the Ministry of Education, I developed visual content for national campaigns and educational programs as online. I crafted branding materials, official presentations, and promotional assets for print and digital use. My designs supported communication strategies across departments and public initiatives.",
  },
  {
    id: 5,
    company: "Deero Advert",
    initial: "D",
    position: "Creative Designer",
    period: "From Aug 2023 - Jan 2024",
    logo: "/images/deero-logo.jpg",
    description:
      "As a Creative Designer at Deero Advert, I specialized in crafting brand visuals, marketing materials, and social media content for diverse clients. I led the design of campaigns that balanced creativity with strategy, enhancing brand visibility and engagement. My role involved translating client goals into compelling visuals across digital and print platforms.",
  },
  {
    id: 6,
    company: "Tik Solution",
    initial: "T",
    position: "Creative Designer",
    period: "From Jun 2023 - Dec 2024",
    logo: "/images/tik-logo.jpg",
    description:
      "As a Creative Designer at Tik Solution, I create tailored visual content that supports clients' digital marketing and branding goals. My work includes designing logos, social media assets, and campaign visuals that resonate with target audiences. I collaborate with the marketing and development teams to ensure cohesive visual communication across platforms.",
  },
  {
    id: 7,
    company: "Sarah Cosmetics",
    initial: "S",
    position: "3D Animator and Visuals Product",
    period: "",
    logo: "/images/sarah-logo.jpg",
    description:
      "As a 3D Animator and Visuals Product Designer at Sarah Cosmetics, I specialize in creating realistic 3D product visualizations for marketing and advertising. I develop high-quality 3D animations that showcase the features and aesthetics of cosmetic products. My role includes working closely with the marketing team to create visually engaging content for digital platforms and promotional materials.",
  },
];

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-4">
      {/* Hero Image */}
      <div className="w-full max-w-3xl px-4 py-8 mt-8">
        <div className="w-full h-[480px] bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 rounded-xl overflow-hidden relative">
          <Image
            src="https://res.cloudinary.com/dofv7shih/image/upload/v1746955911/profile_qpcdxv.png?height=480&width=768"
            width={768}
            height={480}
            alt="Mohamed Abdikhabir"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 text-white text-opacity-75">
            <h2 className="text-lg font-medium mb-1">Mohamed Abdikhabir</h2>
            <div className="h-[2px] w-16 bg-white bg-opacity-75"></div>
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
        <div className="md:sticky top-12 z-10 py-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900 dark:text-white"
              >
                <path d="M21 6v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6" />
                <path d="M9 2h6" />
                <circle cx="12" cy="10" r="3" />
                <path d="M12 13v8" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              My career so far
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 md:block hidden">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I've successfully collaborated with startups across diverse
                sectors including Qabiir Global, Wasaradda waxbarashada, Deero
                Advert, Dhalinta Media, Sarah Cosmetics, Tik Soultion and beyond
                to elevate their brand presence and craft meaningful, memorable
                design experiences that connect with their audiences.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="md:hidden block space-y-4 mb-8">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I've successfully collaborated with startups across diverse
              sectors including Qabiir Global, Wasaradda waxbarashada, Deero
              Advert, Dhalinta Media, Sarah Cosmetics, Tik Soultion and beyond
              to elevate their brand presence and craft meaningful, memorable
              design experiences that connect with their audiences.
            </p>
          </div>
          <div className="hidden md:block"></div>{" "}
          {/* Empty div for desktop layout */}
          {/* Career Timeline */}
          <div className="space-y-8">
            {careerData.map((career) => (
              <div
                key={career.id}
                className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6"
              >
                <div className="flex flex-col items- gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    {career.logo ? (
                      <Image
                        src={career.logo}
                        alt={`${career.company} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-white text-lg font-semibold">
                        {career.initial}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                      {career.company}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {career.position}
                    </p>
                    {career.period && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {career.period}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {career.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="w-full max-w-3xl px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
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
      {/* <section className="w-full max-w-3xl px-4 py-8 mb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
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
      </section> */}
      <PreFooter />

      {/* Footer */}
      <Footer />
    </main>
  );
}
