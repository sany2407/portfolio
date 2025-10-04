"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Twitter, Linkedin, Github } from "lucide-react"
import me from '../../public/assets/me.png'

export default function Hero() {
  const socialLinks = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Github, href: "https://github.com/sany2407" },
  ]

  return (
    <div id="about" className="min-h-screen bg-[#1a1a1a] flex items-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl text-white font-medium">Hello, It&apos;s Me</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Sany A</h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white">
              And I&apos;m an <span className="text-blue-800 font-medium">AI Full-Stack Developer</span>
            </p>
          </div>

          <p className="text-gray-400 max-w-lg mx-auto lg:mx-0">
          I build AI-enabled products end-to-end AI apps, RAG pipelines, and agentic workflows, grounded in solid web foundations.
I work with LangChain/LangGraph, vector databases, and providers like OpenAI, and ship with Next.js, Node, and robust APIs.
I’m focused on reliability, evaluation, and DX so AI features are useful, safe, and fast.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-blue-800 flex items-center justify-center group hover:bg-blue-800 transition-colors duration-300"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-800 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
<br/>
          <motion.a
            href="/My Resume.pdf"
            download
          >
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="px-6 py-2 text-blue-800 border-2 border-blue-800 rounded-md hover:bg-blue-800 hover:text-white transition-colors duration-300 font-medium"
            >
              Download Resume
            </motion.button>
          </motion.a>
        </motion.div>

        {/* Right Content - Hexagon Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative order-first lg:order-last"
        >
          <div className="relative w-full max-w-[400px] lg:max-w-[500px] mx-auto aspect-square">
            {/* Hexagon Shape with Glow and Fill */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-500 opacity-10 blur-2xl" />
                
                {/* Hexagon with gradient fill */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="hexagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#ffff', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#ffff', stopOpacity: 0.3 }} />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="50 3, 93.3 25, 93.3 75, 50 98, 6.7 75, 6.7 25"
                    className="stroke-blue-800 stroke-2"
                    fill="url(#hexagonGradient)"
                  />
                </svg>
              </div>
            </div>

            {/* Image Container */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="w-[85%] h-[85%] relative">
                <Image
                  src={me}
                  alt="Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}