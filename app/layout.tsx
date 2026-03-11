import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suraj K. R | Software Developer Portfolio",
  description: "Modern portfolio of Suraj K. R, a Software Developer specializing in React, Next.js, Flutter, and iOS development.",
  keywords: ["Software Developer", "React", "Next.js", "Flutter", "iOS Development", "Portfolio", "Suraj K. R"],
};

import { SpotlightBackground } from "@/components/Backgrounds";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-200 dark:selection:bg-blue-900`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="portfolio-theme">
          <SpotlightBackground />
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
