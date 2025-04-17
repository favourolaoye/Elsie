"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const image = imageRef.current
    const content = contentRef.current

    if (!section || !image || !content) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    })

    tl.from(image, {
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })

    tl.from(
      content.children,
      {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.6",
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="container flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            ref={imageRef}
            src="/ceo.jpg?height=500&width=500&text=Elsie"
            alt="Elsie, our master baker"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
        <div ref={contentRef} className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Our Sweet Story</h2>
          <p className="text-gray-600">
            CakesByElsie was founded in 2019 with a simple mission: to create delicious, beautiful cakes that bring joy
            to every celebration. What started as a small home bakery has grown into a beloved local business.
          </p>
          <p className="text-gray-600">
            Our team of passionate bakers use only the finest ingredients and time-honored techniques to ensure every
            cake is perfect. From birthdays to weddings, we take pride in being part of your special moments.
          </p>
          <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  )
}
