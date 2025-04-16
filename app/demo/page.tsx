import AnimatedCard from "@/components/animated-card"

export default function DemoPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-8">Animated Cards Demo</h1>

        {/* Card with blur on right */}
        <AnimatedCard
          title="Marketing Designs"
          description="Strategic social media and marketing designs that elevate your brand's presence, and drive meaningful interactions."
          logoSrc="/icons/marketing.svg"
          backgroundSrc="/images/branding-design-bg.jpeg"
          blurPosition="right"
          className="bg-gray-900 text-white"
        />

        {/* Card with blur on left */}
        <AnimatedCard
          title="Logo Design"
          description="Let's say you have a design team, or you don't have one at all, but you want just your logo design done for you. I'm the guy. With great precision and kin to detail, I create pretty cool logos for brands and businesses which in turn can be used to redefine their brand experiences."
          logoSrc="/icons/logo-design.svg"
          backgroundSrc="/images/logo-design-bg.webp"
          blurPosition="left"
          className="bg-gray-900 text-white"
        />
      </div>
    </main>
  )
}
