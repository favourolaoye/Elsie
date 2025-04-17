"use client"

import { Button } from "@/components/ui/button"

interface CakeCardProps {
  title: string
  description: string
  price: string
  image: string
  index: number
}

export default function CakeCard({ title, image, description, price, index }: CakeCardProps) {
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all border border-pink-100">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-pink-700 font-serif">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-pink-600">{price}</span>
          <Button variant="outline" size="sm" className="border-pink-300 text-pink-600 hover:bg-pink-50">
            Order Now
          </Button>
        </div>
      </div>
    </div>
  )
}
