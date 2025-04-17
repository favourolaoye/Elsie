"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const titleElement = titleRef.current
    if (!titleElement) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleElement,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    tl.from(titleElement.querySelector("h2"), {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })

    if (subtitle) {
      tl.from(
        titleElement.querySelector("p"),
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [subtitle])

  return (
    <div ref={titleRef} className={`space-y-4 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold font-serif">{title}</h2>
      {subtitle && <p className={`text-gray-600 ${centered ? "max-w-2xl mx-auto" : ""}`}>{subtitle}</p>}
    </div>
  )
}
