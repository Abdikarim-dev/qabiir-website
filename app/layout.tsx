import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
  description: "3D Artist specializing in product visualization and animation",
  generator: "v0.dev",
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
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
