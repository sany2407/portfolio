// components/Projects.tsx

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { projects } from "@/data/projects";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
          <p className="text-gray-400 text-xl">AI and full-stack projects, RAG, agents, and robust web apps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.slice(0, 6).map((p) => (
            <CardContainer key={p.slug} className="inter-var">
              <CardBody className="bg-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-900 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-auto rounded-xl p-6 border border-gray-500 hover:border-blue-500">
                <CardItem translateZ="50" className="text-xl font-bold text-blue-500 dark:text-white">
                  {p.title}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={p.cover || "/assets/scene.png"}
                    height={1000}
                    width={1000}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={p.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-6 gap-3">
                  {p.links?.repo && (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={p.links.repo}
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-sm font-bold bg-black dark:text-white text-white hover:text-blue-400"
                    >
                      GitHub →
                    </CardItem>
                  )}
                  {p.links?.demo && (
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={p.links.demo}
                      target="_blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Live Demo →
                    </CardItem>
                  )}
                  <CardItem translateZ={20} as={Link} href={`/projects/${p.slug}`} className="px-4 py-2 rounded-xl text-sm font-bold text-blue-400">
                    Details →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
