"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const info = infoRef.current
    const form = formRef.current

    if (!section || !info || !form) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    })

    // Animate contact info items
    tl.from(info.children, {
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    })

    // Animate form
    tl.from(
      form,
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4",
    )

    // Animate form elements
    tl.from(
      form.querySelectorAll("input, textarea, button"),
      {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.4",
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-r from-pink-50 to-pink-100">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or want to place an order? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={infoRef} className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full shadow-md">
                <Phone className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif">Phone</h3>
                <p className="text-gray-600">+234(0)-816-399-7155</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full shadow-md">
                <Mail className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif">Email</h3>
                <p className="text-gray-600">CakesandtreatsbyElsie@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full shadow-md">
                <MapPin className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif">Location</h3>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div ref={formRef} className="bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full bg-pink-500 hover:bg-pink-600">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
