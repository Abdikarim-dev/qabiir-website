import { CuboidIcon as Cube, PenTool, MessageSquare } from "lucide-react"
import ServiceCard from "@/components/service-card"

export default function ServicesPage() {
  return (
    <main className="min-h-screen p-8 pt-24 bg-gray-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold mb-2">Here's what I bring to the table</h1>
        <p className="text-gray-600 mb-8">Professional services tailored to your needs</p>

        <div className="space-y-6">
          {/* 3D Visualization - Blur on right */}
          <ServiceCard
            title="3D Visualization"
            description="I create photorealistic 3D visualizations for products, architecture, and interiors that showcase your designs with stunning detail and lighting before they're physically produced."
            icon={<Cube className="h-8 w-8 text-blue-500" />}
            backgroundSrc="/images/visualization-bg.jpg"
            blurPosition="right"
          />

          {/* 3D Animation - Blur on left */}
          <ServiceCard
            title="3D Animation"
            description="I bring products and concepts to life through fluid, engaging animations that highlight features and functionality in ways static images simply can't."
            icon={<PenTool className="h-8 w-8 text-blue-500" />}
            backgroundSrc="/images/animation-bg.jpg"
            blurPosition="left"
          />

          {/* FX & Simulation - Blur on right */}
          <ServiceCard
            title="FX & Simulation"
            description="I specialize in creating realistic visual effects including fluid simulations, particle systems, destruction sequences, and natural phenomena."
            icon={<MessageSquare className="h-8 w-8 text-blue-500" />}
            backgroundSrc="/images/fx-bg.jpg"
            blurPosition="right"
          />
        </div>
      </div>
    </main>
  )
}
