"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react"
import me from '../../public/assets/me.png'

export default function Hero() {
  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Linkedin, href: "#" },
  ]

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-2xl text-white font-medium">Hello, It's Me</h2>
            <h1 className="text-5xl sm:text-6xl font-bold text-white">John Kendric</h1>
            <p className="text-2xl sm:text-3xl">
              And I'm a <span className="text-blue-500 font-medium">Frontend Developer</span>
            </p>
          </div>

          <p className="text-gray-400 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ab autem repellat reiciendis ipsam
            perspiciatis.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center group hover:bg-blue-500 transition-colors duration-300"
              >
                <social.icon className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="px-6 py-2 text-blue-500 border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition-colors duration-300 font-medium"
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Right Content - Hexagon Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Hexagon Shape with Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-blue-500 opacity-20 blur-2xl" />
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                  <polygon
                    points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
                    className="stroke-blue-500 stroke-2"
                  />
                </svg>
              </div>
            </div>

            {/* Image */}
            <div className="absolute inset-[10%] overflow-hidden">
              <Image
src={me}                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

