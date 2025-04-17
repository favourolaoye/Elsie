"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"

interface TestimonialCardProps {
  name: string
  quote: string
  index: number
}

export default function TestimonialCard({ name, quote, index }: TestimonialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    // Initial animation with stagger
    gsap.from(card, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.15 * index,
      ease: "power3.out",
    })

    // Stars animation
    gsap.from(card.querySelectorAll("svg"), {
      scale: 0,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      delay: 0.2 + 0.15 * index,
      ease: "back.out(1.7)",
    })
  }, [index])

  return (
    <div ref={cardRef} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-pink-400">
      <div className="space-y-4">
        <div className="flex items-center text-amber-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 italic">"{quote}"</p>
        <p className="font-medium">- {name}</p>
      </div>
    </div>
  )
}
