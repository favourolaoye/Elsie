import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SectionTitle from "@/components/section-title"
import CakeCard from "@/components/cake-card"
import TestimonialCard from "@/components/testimonial-card"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const cakes = [
    {
      title: "Classic Chocolate",
      description: "Rich chocolate layers with smooth ganache",
      price: "N 4,500",
      image: "/choco.jpg?height=300&width=400&text=Cake+${index + 1}"
    },
    {
      title: "Vanilla Dream",
      description: "Light vanilla sponge with buttercream frosting",
      price: "N 4,000",
      image: "/vanilla.jpg?height=300&width=400&text=Cake+${index + 1}"
    },
    {
      title: "Red Velvet",
      description: "Velvety cake with cream cheese frosting",
      price: "N 4,800",
      image: "/red-velvet.jpg?height=300&width=400&text=Cake+${index + 1}"
    },
  ]

  const testimonials = [
    {
      name: "Favour Olaoye",
      quote: "The birthday cake was absolutely stunning and tasted even better! Everyone at the party was impressed.",
    },
    {
      name: "Michael Peters",
      quote:
        "Our wedding cake was perfect. The team was so helpful throughout the whole process and delivered exactly what we wanted.",
    },
    {
      name: "Funmi Daniels",
      quote: "I order all my celebration cakes from CakesByElsie. The quality and taste are consistently excellent.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Hero />

        {/* Featured Cakes */}
        <section id="cakes" className="py-20">
          <div className="container space-y-12">
            <SectionTitle
              title="Our Signature Cakes"
              subtitle="Each cake is baked with passion and decorated with precision to create a masterpiece for your celebration."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cakes.map((cake, index) => (
                <CakeCard
                  key={index}
                  title={cake.title}
                  image ={cake.image}
                  description={cake.description}
                  price={cake.price}
                  index={index}
                />
              ))}
            </div>

            <div className="text-center pt-8">
              <Button variant="outline" className="gap-2 border-pink-300 text-pink-600 hover:bg-pink-50">
                View All Cakes
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <AboutSection />

        {/* Testimonials */}
        <section className="py-20">
          <div className="container space-y-12">
            <SectionTitle
              title="What Our Customers Say"
              subtitle="We're proud to have served thousands of happy customers over the years."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} name={testimonial.name} quote={testimonial.quote} index={index} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
