import { Cake } from "lucide-react"
import Link from "next/link"

interface LogoProps {
  color?: "light" | "dark"
  withText?: boolean
}

export default function Logo({ color = "dark", withText = true }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-10 h-10 flex items-center justify-center bg-pink-500 rounded-full">
        <Cake className="h-6 w-6 text-white" />
      </div>
      {withText && (
        <span
          className={`text-xl font-bold tracking-tight font-serif ${color === "dark" ? "text-pink-600" : "text-white"}`}
        >
          CakesByElsie
        </span>
      )}
    </Link>
  )
}
