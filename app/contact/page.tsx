"use client";

import type React from "react";
import { Suspense } from "react";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/Footer";

function ContactForm() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
    date: "",
    time: "",
    phone: "", // Add phone field
  });

  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Focus on first input when requested via URL parameter
  useEffect(() => {
    if (searchParams?.get("focus") === "first-input" && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [searchParams]);

  // Reset form status after 5 seconds
  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong. Please try again later."
        );
      }

      // Success! Reset the form
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        message: "",
        date: "",
        time: "",
        phone:""
      });
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Status display component
  const StatusMessage = () => {
    if (submitStatus === "success" || submitStatus === "error") {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 p-6 text-left shadow-xl transition-all">
            <div className="flex items-center gap-3">
              {submitStatus === "success" ? (
                <>
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Message Sent Successfully
                  </h3>
                </>
              ) : (
                <>
                  <AlertCircle className="h-6 w-6 text-red-500" />
                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Error
                  </h3>
                </>
              )}
            </div>
            
            <div className="mt-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {submitStatus === "success" 
                  ? "Thank you for your message! I'll get back to you soon."
                  : errorMessage}
              </p>
            </div>
  
            <div className="mt-5 flex justify-end">
              <Button
                onClick={() => {
                  setSubmitStatus("idle");
                  setErrorMessage("");
                }}
                className="inline-flex justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      );
    }
  
    return null;
  };

  return (
      <main className="flex min-h-screen flex-col items-center pt-10">
        {/* Hero Section */}
        <section className="w-full max-w-3xl px-4 py-8 mt-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            Contact
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I'm always excited to hear from new people about their ideas,
            projects, and potential collaborations.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              variant="secondary"
              className="rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            >
              Schedule a call
            </Button>
            <div className="flex items-center bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-full">
              <span className="text-gray-700 dark:text-gray-300">
                qabiir.art@gmail.com
              </span>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full max-w-3xl px-4 py-8 mb-12">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Send a message
            </h2>
          </div>

          {/* Status message */}
          <StatusMessage />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  ref={nameInputRef}
                  className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
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
                  disabled={isSubmitting}
                  className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+252 612 34 56 78"
                value={formData.phone}
                onChange={handleChange}
                className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="company"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Company Name
              </label>
              <Input
                id="company"
                name="company"
                placeholder="Qabiir Global..."
                value={formData.company}
                onChange={handleChange}
                disabled={isSubmitting}
                className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="projectType"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                What kind of Project are we working on?
              </label>
              <Select
                value={formData.projectType}
                onValueChange={handleSelectChange}
                disabled={isSubmitting}
              >
                <SelectTrigger className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700">
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3d_visualization">
                    3D Visualization
                  </SelectItem>
                  <SelectItem value="3d_animation">3D Animation</SelectItem>
                  <SelectItem value="vfx">VFX / CGI</SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="logo">Logo</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                How can I help (Project Brief)?
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Describe your project..."
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="min-h-[120px] rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="date"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Pick a meeting date
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="time"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Pick a meeting time
                </label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </section>
        
        {/* Footer */}
        <Footer />
      </main>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
