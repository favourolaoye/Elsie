import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Instagram, TwitterIcon as TikTok, Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t-8 border-pink-500">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
             <Image
                      src="/logo.png"
                      width={200}
                      height={70}
                      alt="CakesByElsie Logo"
                      priority 
                      className="w-auto h-[70px]" 
                    />
            <p className="text-gray-400">Making your celebrations sweeter since 2019.</p>

            {/* Social Media Links */}
            <div className="pt-4">
              <h3 className="text-lg font-bold font-serif mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition-colors"
                  aria-label="Follow us on TikTok"
                >
                  <TikTok className="h-5 w-5" />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#cakes" className="text-gray-400 hover:text-white transition-colors">
                  Our Cakes
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif">Opening Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif">Newsletter</h3>
            <p className="text-gray-400">Subscribe to get special offers and cake updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
              />
              <Button className="rounded-l-none bg-pink-500 hover:bg-pink-600">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Social Media Banner - Mobile Only */}
        <div className="md:hidden mt-8 py-4 border-t border-gray-800 flex justify-center">
          <div className="flex space-x-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
              aria-label="Follow us on TikTok"
            >
              <TikTok className="h-6 w-6" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} CakesByElsie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
