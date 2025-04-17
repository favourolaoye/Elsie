import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"

// Load Inter from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Load Circa locally (you'll need to add this font file to your project)
const cirka = localFont({
  src: [
    {
      path: "../public/Cirka-Bold.otf",
      weight: "400",
      style: "bold",
    },
    {
      path: "../public/Cirka-Light.otf",
      weight: "700",
      style: "light",
    },
  ],
  variable: "--font-circa",
  display: "swap",
})

export const metadata = {
  title: "CakesByElsie - Delicious Cakes for Every Occasion",
  description: "Handcrafted cakes made with love for birthdays, weddings, and special events.",
  themeColor: "#ec4899",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${cirka.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'