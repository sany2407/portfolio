"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { StaticImageData } from "next/image"

// Import images with exact names as provided
import nextjs from "../../public/assets/nextjs.png"
import laravel from "../../public/assets/Laravel.png"
import mysql from "../../public/assets/MySQL-Logo.png"
import vercel from "../../public/assets/apple-touch-icon-256x256.png"
import clickup from "../../public/assets/clickup.png"
import expressjs from "../../public/assets/expressjs.png"
import figma from "../../public/assets/figma.png"
import flutterflow from "../../public/assets/flutterflow.png"
import git from "../../public/assets/git.png"
import github from "../../public/assets/github.png"
import mongodb from "../../public/assets/mongodb.png"
import miro from "../../public/assets/miro.png"
import nodejs from "../../public/assets/nodejs-logo.png"
import postman from "../../public/assets/postman.png"
import slack from "../../public/assets/slack.png"
import redux from "../../public/assets/redux.png"
import swagger from "../../public/assets/swagger.png"
import tailwind from "../../public/assets/tailwind-css.png"
import reactjs from "../../public/assets/teactjs.png"
import trello from "../../public/assets/trello.png"
import ts from "../../public/assets/ts.png"
import vsCode from "../../public/assets/vs-code.png"
import xampp from "../../public/assets/xampp.png"

interface Item {
  name: string
  icon: StaticImageData
  category: string
}

const tools: Item[] = [
  { name: "VS Code", icon: vsCode, category: "Development" },
  { name: "Git", icon: git, category: "Version Control" },
  { name: "GitHub", icon: github, category: "Version Control" },
  { name: "Postman", icon: postman, category: "API Testing" },
  { name: "Swagger", icon: swagger, category: "API Documentation" },
  { name: "Trello", icon: trello, category: "Project Management" },
  { name: "ClickUp", icon: clickup, category: "Project Management" },
  { name: "Miro", icon: miro, category: "Collaboration" },
  { name: "Slack", icon: slack, category: "Communication" },
  { name: "Figma", icon: figma, category: "Design" },
  { name: "Vercel", icon: vercel, category: "Deployment" },
  { name: "XAMPP", icon: xampp, category: "Development" },
]

const languages: Item[] = [
  { name: "React.js", icon: reactjs, category: "Frontend" },
  { name: "Next.js", icon: nextjs, category: "Frontend" },
  { name: "TypeScript", icon: ts, category: "Language" },
  { name: "Tailwind CSS", icon: tailwind, category: "CSS" },
  { name: "Redux", icon: redux, category: "State Management" },
  { name: "Node.js", icon: nodejs, category: "Backend" },
  { name: "Express.js", icon: expressjs, category: "Backend" },
  { name: "Laravel", icon: laravel, category: "Backend" },
  { name: "MongoDB", icon: mongodb, category: "Database" },
  { name: "MySQL", icon: mysql, category: "Database" },
  { name: "FlutterFlow", icon: flutterflow, category: "Mobile Development" },
]

const ItemGrid: React.FC<{ items: Item[]; title: string }> = ({ items, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {items.map((item, index) => (
          <motion.div key={index} className="flex flex-col items-center" variants={itemVariants}>
            <motion.div
              className="relative w-20 h-20 mb-4 bg-neutral-800 rounded-lg overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={item.icon || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 80px, 80px"
              />
              <motion.div
                className="absolute inset-0 bg-blue-500 opacity-0"
                animate={{
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
            <h3 className="text-white text-lg font-semibold text-center">{item.name}</h3>
            <p className="text-gray-400 text-sm text-center">{item.category}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const Tools: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-10 w-64 mx-auto mb-4 bg-gray-800 animate-pulse rounded" />
            <div className="h-6 w-96 mx-auto bg-gray-800 animate-pulse rounded" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-20 w-20 mb-4 bg-gray-800 animate-pulse rounded-lg" />
                <div className="h-4 w-16 bg-gray-800 animate-pulse rounded mb-2" />
                <div className="h-3 w-12 bg-gray-800 animate-pulse rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="tools" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Tools & Technologies</h1>
          <p className="text-gray-400 text-xl">Crafting digital experiences with these powerful tools and languages</p>
        </div>

        <ItemGrid items={tools} title="Development Tools" />
        <ItemGrid items={languages} title="Languages & Frameworks" />

        <div className="mt-16 text-center">
          <p className="text-gray-400">Continuously expanding my toolkit to stay at the forefront of web development</p>
        </div>
      </div>
    </section>
  )
}

export default Tools

