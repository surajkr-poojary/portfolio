"use client"
// import type { Metadata } from "next";
import localFont from "next/font/local";
import { useState } from "react";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Suraj K R | Portfolio",
//   description: "Portfolio of Suraj K R, Front-End Developer",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkTheme] = useState(true);


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all duration-300 ${
          isDarkTheme ? "bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        {/* Header Section */}
        <Header  />

        {/* Main Content */}
        <main className="mt-32">{children}</main>

        {/* Footer Section */}
        <Footer />
      </body>
    </html>
  );
}
