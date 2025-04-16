"use client"

import type React from "react"
import { Suspense } from "react"
import { useState, useRef, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail } from "lucide-react"
import Header from "@/components/header"

function ContactForm() {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const searchParams = useSearchParams()
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
    date: "",
    time: "",
  })

  // Focus on first input when requested via URL parameter
  useEffect(() => {
    if (searchParams?.get('focus') === 'first-input' && nameInputRef.current) {
      nameInputRef.current.focus()
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend or email service
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
      date: "",
      time: "",
    })
  }

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center mt-10">
        {/* Hero Section */}
        <section className="w-full max-w-3xl px-4 py-8 mt-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Contact</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I'm always excited to hear from new people about their ideas, projects, and potential collaborations.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              variant="secondary"
              className="rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            >
              Schedule a call
            </Button>
            <div className="flex items-center bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-full">
              <span className="text-gray-700 dark:text-gray-300">uluoluebube@gmail.com</span>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full max-w-3xl px-4 py-8 mb-12">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send a message</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-600 dark:text-gray-400">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  ref={nameInputRef}
                  className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-400">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm text-gray-600 dark:text-gray-400">
                Company Name
              </label>
              <Input
                id="company"
                name="company"
                placeholder="Google..."
                value={formData.company}
                onChange={handleChange}
                className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="projectType" className="text-sm text-gray-600 dark:text-gray-400">
                What kind of Project are we working on?
              </label>
              <Select value={formData.projectType} onValueChange={handleSelectChange}>
                <SelectTrigger className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="logo">Logo Design</SelectItem>
                  <SelectItem value="marketing">Marketing Design</SelectItem>
                  <SelectItem value="social">Social Media Design</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-gray-600 dark:text-gray-400">
                How can I help (Project Brief)?
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Describe your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[120px] rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm text-gray-600 dark:text-gray-400">
                  Pick a meeting date
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm text-gray-600 dark:text-gray-400">
                  Pick a meeting time
                </label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white rounded">
              Submit
            </Button>
          </form>
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
    </>
  )
}

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  )
}
