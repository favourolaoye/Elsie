import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface SocialIconProps {
  href: string
  icon: LucideIcon
  label: string
}

export function SocialIcon({ href, icon: Icon, label }: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition-colors"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </Link>
  )
}
