// components/Projects.tsx

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import scene from "../../public/assets/scene.png";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
          <p className="text-gray-400 text-xl">Showcasing my best work in web development</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Project 1 */}
          <CardContainer className="inter-var">
            <CardBody className="bg-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-900 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-auto rounded-xl p-6 border border-gray-500 hover:border-blue-500">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-blue-500 dark:text-white"
              >
                E-commerce website
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                A e-commerce website for an entrepreneur to sell palm products, implementing user-friendly navigation, secure payment integration, and a visually appealing design.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={scene}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center  mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://github.com/kaviyarasan2865/vembar-karupatti.git"
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-sm font-bold bg-black dark:text-white text-white hover:text-blue-400"
                >
                  GitHub →
                </CardItem>
                {/* <CardItem
                  translateZ={20}
                  as="a"
                  href="https://example.com/demo"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Live Demo
                </CardItem> */}
              </div>
            </CardBody>
          </CardContainer>

          {/* Project 2 */}
          <CardContainer className="inter-var" style={{ animationDelay: "0.2s" }}>
            <CardBody className="bg-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-900 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-auto rounded-xl p-6 border border-gray-500 hover:border-blue-500">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-blue-500 dark:text-white"
              >
                NPM package 
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
Created an NPM package, &quot;next-auth-kit,&quot; that automates the setup of login, signup, and middleware for Next.js projects, streamlining project initialization with a single command.              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={scene}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://github.com/kaviyarasan2865/nextjs-auth-kit.git"
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-sm font-bold dark:text-white text-white hover:text-blue-400"
                >
                  GitHub →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://www.npmjs.com/package/nextjs-auth-kit"
                  target="_blank"
                  className="px-4 py-2 rounded-xl  bg-black dark:bg-white dark:text-black text-white text-xs font-bold "
                >
                  Package →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Project 3 */}
          <CardContainer className="inter-var" style={{ animationDelay: "0.4s" }}>
            <CardBody className="bg-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-900 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-auto rounded-xl p-6 border border-gray-500 hover:border-blue-500">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-blue-500 dark:text-white"
              >
               Placement Portal
              </CardItem> 
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
Developed a campus recruitment web application with features like student registration, job posting, application tracking, and data visualization, enhancing communication and recruitment insights.              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={scene}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://github.com/kaviyarasan2865"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black text-sm font-bold dark:text-white text-white hover:text-blue-400"
                >
                  GitHub →
                </CardItem>
                {/* <CardItem
                  translateZ={20}
                  as="a"
                  href="https://example.com/demo"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Live Demo
                </CardItem> */}
              </div>
            </CardBody>
          </CardContainer>


          {/* Project 4 */}
          <CardContainer className="inter-var" style={{ animationDelay: "0.4s" }}>
            <CardBody className="bg-neutral-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-900 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-auto rounded-xl p-6 border border-gray-500 hover:border-blue-500">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-blue-500 dark:text-white"
              >
               Farmer Corner
              </CardItem> 
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
Developed a web application enabling farmers to list and manage their products, promoting direct interaction with buyers and eliminating intermediaries for better market access.
   </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={scene}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://github.com/kaviyarasan2865/FarmerCorner.git"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black text-sm font-bold dark:text-white text-white hover:text-blue-400"
                >
                  GitHub →
                </CardItem>
                {/* <CardItem
                  translateZ={20}
                  as="a"
                  href="https://example.com/demo"
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Live Demo
                </CardItem> */}
              </div>
            </CardBody>
          </CardContainer>
        </div>

        <div className="text-center mt-1">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
          >
            View All Projects
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;