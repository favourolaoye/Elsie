"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import Image from "next/image"

export default function Navbar() {
  const navbarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const navbar = navbarRef.current

    // Initial animation
    gsap.from(navbar, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })

    // Scroll animation
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navbar, {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(8px)",
          duration: 0.3,
        })
      } else {
        gsap.to(navbar, {
          boxShadow: "none",
          backgroundColor: "rgba(255, 255, 255, 1)",
          backdropFilter: "blur(0px)",
          duration: 0.3,
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header ref={navbarRef} className="border-b bg-white sticky top-0 z-50 transition-all duration-300">
      <div className="container flex items-center justify-between py-3">
        <Image
          src="/logo.png"
          width={200}
          height={70}
          alt="CakesByElsie Logo"
          priority 
          className="w-auto h-[50px]" 
        />
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-medium hover:text-pink-500 transition-colors">
            Home
          </Link>
          <Link href="#about" className="font-medium hover:text-pink-500 transition-colors">
            About
          </Link>
          <Link href="#cakes" className="font-medium hover:text-pink-500 transition-colors">
            Our Cakes
          </Link>
          <Link href="#contact" className="font-medium hover:text-pink-500 transition-colors">
            Contact
          </Link>
        </nav>
        <Button>Order Now</Button>
      </div>
    </header>
  )
}
