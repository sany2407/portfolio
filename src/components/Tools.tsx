"use client"

import React from "react"
import Image from "next/image"
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

interface Category {
  title: string
  titleIcon: StaticImageData
  sections: Array<{
    name: string
    items: Array<{
      name: string
      icon: StaticImageData
    }>
  }>
}

const Tools = () => {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const categories: Category[] = [
    {
      title: "Development Tools",
      titleIcon: vsCode,
      sections: [
        {
          name: "Code & Version Control",
          items: [
            { name: "VS Code", icon: vsCode },
            { name: "Git", icon: git },
            { name: "GitHub", icon: github },
          ],
        },
        {
          name: "Testing & API",
          items: [
            { name: "Postman", icon: postman },
            { name: "Swagger", icon: swagger },
          ],
        },
        {
          name: "Planning & Collaboration",
          items: [
            { name: "Trello", icon: trello },
            { name: "ClickUp", icon: clickup },
            { name: "Miro", icon: miro },
            { name: "Slack", icon: slack },
            { name: "Figma", icon: figma },
          ],
        },
        {
          name: "Deployment & Services",
          items: [
            { name: "Vercel", icon: vercel },
            { name: "XAMPP", icon: xampp },
          ],
        },
      ],
    },
    {
      title: "Technologies & Frameworks",
      titleIcon: reactjs,
      sections: [
        {
          name: "Frontend",
          items: [
            { name: "React.js", icon: reactjs },
            { name: "Next.js", icon: nextjs },
            { name: "TypeScript", icon: ts },
            { name: "Tailwind CSS", icon: tailwind },
            { name: "Redux", icon: redux },
          ],
        },
        {
          name: "Backend",
          items: [
            { name: "Node.js", icon: nodejs },
            { name: "Express.js", icon: expressjs },
            { name: "Laravel", icon: laravel },
          ],
        },
        {
          name: "Databases",
          items: [
            { name: "MongoDB", icon: mongodb },
            { name: "MySQL", icon: mysql },
          ],
        },
        {
          name: "Development Platforms",
          items: [{ name: "FlutterFlow", icon: flutterflow }],
        },
      ],
    },
  ]

  if (isLoading) {
    return (
      <section className="py-20 bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-10 w-64 mx-auto mb-4 bg-neutral-700 animate-pulse rounded" />
            <div className="h-6 w-96 mx-auto bg-neutral-700 animate-pulse rounded" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="h-[600px] w-full rounded-xl bg-neutral-700 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="tools" className="py-20 bg-neutral-800">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .stagger-delay > * {
          opacity: 0;
        }

        .stagger-delay > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-delay > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-delay > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-delay > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-delay > *:nth-child(5) { animation-delay: 0.5s; }

        .tool-card {
          transition: all 0.3s ease;
        }

        .tool-card:hover {
          transform: scale(1.02);
        }

        .tool-icon {
          transition: all 0.2s ease;
        }

        .tool-icon:hover {
          transform: scale(1.1);
        }

        .tooltip {
          transition: all 0.2s ease;
        }

        .tool-icon:hover .tooltip {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Tools & Technologies</h2>
          <p className="text-gray-400 text-xl">The technologies I work with to bring ideas to life</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 stagger-delay">
          {categories.map((category, index) => (
            <div
              key={index}
              className="tool-card bg-neutral-900 p-8 rounded-xl border border-neutral-700 hover:border-blue-500 transition-all h-full animate-fade-in-up"
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <div className="relative w-8 h-8 mr-3">
                  <Image
                    src={category.titleIcon || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 24px, 32px"
                  />
                </div>
                {category.title}
              </h3>

              <div className="space-y-8 stagger-delay">
                {category.sections.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="animate-fade-in">
                    <h4 className="text-lg font-semibold text-gray-300 mb-4">{section.name}</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="tool-icon relative group" role="img" aria-label={item.name}>
                          <div className="flex items-center justify-center text-gray-300 hover:text-blue-500 transition-colors">
                            <div className="relative w-8 h-8">
                              <Image
                                src={item.icon || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 24px, 32px"
                              />
                            </div>
                            <span className="tooltip absolute -top-8 left-1/2 transform -translate-x-1/2 bg-neutral-700 text-white px-2 py-1 rounded text-sm opacity-0 -translate-y-2 whitespace-nowrap">
                              {item.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <p className="text-gray-400">
            Always exploring new technologies and tools to improve development workflow and efficiency
          </p>
        </div>
      </div>
    </section>
  )
}

export default Tools

