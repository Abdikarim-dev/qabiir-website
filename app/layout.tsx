import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "@/components/WhatsAppButton";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ThemeProvider = dynamic(
  () => import("@/components/theme-provider").then((mod) => mod.ThemeProvider),
  {
    ssr: true,
  }
);

const Header = dynamic(() => import("@/components/header"), {
  ssr: true,
  loading: () => (
    <div className="w-full fixed top-0 z-50 py-4">
      <div className="max-w-md md:max-w-2xl mx-auto px-4">
        <div className="bg-gray-800 dark:bg-gray-800 rounded-full px-4 py-2 animate-pulse h-12"></div>
      </div>
    </div>
  ),
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qabiir - 3D Artist & FX Specialist",
  description: "Professional 3D Artist and Visual Effects Specialist offering high-quality CGI, product visualization, animations, and VFX services. Expertise in creating stunning visual content for brands and businesses.",
  generator: "Github-link:Abdikarim-dev",
  keywords: [
    "3D Artist",
    "Visual Effects Specialist",
    "CGI Artist",
    "Product Visualization",
    "3D Animation",
    "VFX Artist",
    "Motion Graphics",
    "Product Rendering",
    "3D Product Animation",
    "Commercial CGI",
    "Visual Effects",
    "3D Modeling",
    "Product CGI",
    "Digital Artist",
    "Creative Professional"
  ],
  verification: {
    google: "EMQ_F3LEwThSVZ_2-Ujf1ev98DTwgmEpBu2CdeJxYpI",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qabiir.com",
    siteName: "Qabiir - 3D Artist & FX Specialist",
    title: "Qabiir - Professional 3D Artist & Visual Effects Specialist",
    description: "Professional 3D Artist and Visual Effects Specialist offering high-quality CGI, product visualization, animations, and VFX services.",
    images: [
      {
        url: "/logos/android-chrome-512x512.png", // Using existing image temporarily
        width: 512,
        height: 512,
        alt: "Qabiir - 3D Artist & Visual Effects Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Qabiir - Professional 3D Artist & Visual Effects",
    description: "Professional 3D Artist and Visual Effects Specialist offering high-quality CGI, product visualization, animations, and VFX services.",
    images: ["/logos/android-chrome-512x512.png"] // Using existing image temporarily
  },
  icons: {
    icon: [
      {
        url: "/logos/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/logos/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: {
      url: "/logos/apple-touch-icon.png",
      type: "image/png",
    },
    shortcut: "/logos/favicon.ico",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/logos/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/logos/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Qabiir",
              "url": "https://qabiir.com",
              "image": "/logos/android-chrome-512x512.png",
              "description": "Professional 3D Artist and Visual Effects Specialist offering high-quality CGI, product visualization, animations, and VFX services.",
              "jobTitle": "3D Artist & FX Specialist",
              "sameAs": [
                // Add your social media URLs here
                "https://qabiir.com"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme"
        >
          <div className="min-h-screen bg-[#FAFAF9] dark:bg-[#111827] text-gray-900 dark:text-gray-100">
            <Header />
            <div className="max-w-3xl mx-auto border-x border-[#D5D5D4] dark:border-gray-800 min-h-screen">
              <Suspense
                fallback={
                  <div className="w-full fixed top-0 z-50 py-4">
                    <div className="max-w-md md:max-w-2xl mx-auto px-4">
                      <div className="bg-gray-800 dark:bg-gray-800 rounded-full px-4 py-2 animate-pulse h-12"></div>
                    </div>
                  </div>
                }
              ></Suspense>
              {children}
              <WhatsAppButton />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
