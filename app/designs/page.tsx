import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PreFooter from "@/components/pre-footer"

export default function Designs() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-3xl px-4 py-8 mt-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          Social Media, Marketing & Poster Designs
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          A collection of social media posts, marketing materials, and poster designs created for various clients and
          campaigns.
        </p>
      </section>

      {/* Designs Grid */}
      <section className="w-full max-w-3xl px-4 py-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Row 1 */}
          <div className="bg-blue-500 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 1"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-blue-500 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 2"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 2 */}
          <div className="bg-blue-400 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 3"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-blue-400 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 4"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 3 */}
          <div className="bg-blue-300 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 5"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-blue-300 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 6"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 4 */}
          <div className="bg-cyan-300 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 7"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-orange-300 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 8"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 5 */}
          <div className="bg-purple-700 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Poster Design 1"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-purple-600 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Poster Design 2"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 6 */}
          <div className="bg-yellow-400 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 1"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-yellow-400 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 2"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 7 */}
          <div className="bg-yellow-400 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 3"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-gray-900 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 4"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 8 */}
          <div className="bg-purple-800 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Poster Design 3"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-pink-500 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Poster Design 4"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 9 */}
          <div className="bg-pink-400 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 9"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-purple-400 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 10"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 10 */}
          <div className="bg-yellow-500 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 5"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-yellow-500 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 6"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 11 */}
          <div className="bg-cyan-300 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 11"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-purple-800 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 12"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 12 */}
          <div className="bg-yellow-400 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 7"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-yellow-400 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 8"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 13 */}
          <div className="bg-blue-500 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 13"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-purple-600 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Social Media Design 14"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 14 */}
          <div className="bg-gray-200 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 9"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-purple-500 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 10"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Row 15 */}
          <div className="bg-yellow-400 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 11"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="bg-green-600 rounded-lg p-3 aspect-square">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Marketing Design 12"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="w-full max-w-3xl px-4 py-12 mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400">I'm available for new projects</p>
        </div>

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
      <PreFooter></PreFooter>

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
