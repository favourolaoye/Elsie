"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Animate decorative elements
    tl.from(
      ".hero-decoration",
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
      },
      0,
    )

    // Animate content
    tl.from(
      contentRef.current?.children || [],
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      },
      0.3,
    )

    // Animate heading with split text effect
    // if (headingRef.current) {
    //   const words = headingRef.current.innerText.split(" ")
    //   headingRef.current.innerHTML = ""

    //   words.forEach((word) => {
    //     const span = document.createElement("span")
    //     span.className = "inline-block mr-[0.25em]" // Add right margin
    //     span.textContent = word // Remove the space from here
    //     headingRef.current?.appendChild(span)
    //   })

    //   gsap.from(headingRef.current.children, {
    //     y: 40,
    //     opacity: 0,
    //     duration: 0.8,
    //     stagger: 0.1,
    //     delay: 0.4,
    //   })
    // }

    // Animate image
    tl.from(
      imageRef.current,
      {
        scale: 0.8,
        opacity: 0,
        rotation: -5,
        duration: 1,
        delay: 0.2,
      },
      0.3,
    )

    // Continuous floating animation for decorations
    gsap.to(".float-1", {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    gsap.to(".float-2", {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5,
    })

    gsap.to(".float-3", {
      y: -12,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    })

    // Sprinkles animation
    gsap.to(".sprinkle", {
      y: -10,
      rotation: "random(-20, 20)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.2,
        from: "random",
      },
    })
  }, [])

  return (
    <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-50"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-200 rounded-full opacity-50 blur-3xl hero-decoration"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-pink-300 rounded-full opacity-40 blur-3xl hero-decoration"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-100 rounded-full opacity-60 blur-3xl hero-decoration"></div>

        {/* Sprinkles pattern */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full sprinkle"
              style={{
                width: Math.random() * 10 + 5 + "px",
                height: Math.random() * 10 + 5 + "px",
                backgroundColor: ["#ec4899", "#be185d", "#fbcfe8"][Math.floor(Math.random() * 3)],
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.3,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div ref={contentRef} className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1 bg-white bg-opacity-70 rounded-full text-pink-600 font-medium text-sm shadow-sm mb-2">
              Handcrafted with love
            </div>
            <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold leading-tight font-serif">
              <span className="block font-serif">Delicious Cakes</span>
              <span className="block mt-2 gradient-text font-serif">For Every Celebration</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              At CakesByElsie, we create beautiful, delicious cakes that make your special moments unforgettable. Each
              cake is baked with passion and decorated with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg">
                View Our Cakes
              </Button>
              <Button size="lg" variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-pink-200 rounded-full opacity-50 blur-sm hero-decoration"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-pink-300 rounded-full opacity-50 blur-sm hero-decoration"></div>
            <img
              ref={imageRef}
              src="/celebrate.jpg?height=500&width=600"
              alt="Beautifully decorated cake"
              className="rounded-lg shadow-xl object-cover w-full h-auto relative z-10 rotate-2"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium">100+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating cake decorations */}
        <div className="absolute -bottom-6 left-1/4 w-16 h-16 float-1 hero-decoration">
          <div className="w-full h-full rounded-full bg-pink-200 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-pink-300"></div>
          </div>
        </div>
        <div className="absolute top-1/4 right-10 w-12 h-12 float-2 hero-decoration">
          <div className="w-full h-full rounded-full bg-pink-100 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-pink-200"></div>
          </div>
        </div>
        <div className="absolute top-2/3 left-10 w-10 h-10 float-3 hero-decoration">
          <div className="w-full h-full rounded-full bg-pink-300 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-pink-400"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
