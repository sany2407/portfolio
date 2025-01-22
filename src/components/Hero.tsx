"use client";
import type React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-neutral-900">
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-20">
            Full Stack Developer <span className="text-blue-500">&amp;</span>{" "}
            Low Code Expert
          </h1>
        }
      >
        <div className="relative w-full h-full">
          {/* Mac window controls */}
          <div className="absolute top-0 left-0 right-0  px-4 py-2 flex items-center rounded-t-2xl">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="h-full pt-12 px-8 flex flex-col justify-center items-center">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xl text-gray-800 mb-8">
                Specialized in MERN Stack, Next.js, and building efficient
                low-code solutions.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-gray-600 text-blue-500 rounded-lg hover:border-blue-500 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="mt-12 w-full max-w-2xl">
              <pre className="text-gray-300 bg-[#1E1E1E] p-6 rounded-lg">
                <code>
                  {`const developer = {
  name: "Kaviyarasan G",
  skills: ["Web Development"],
  passion: "Building scalable solutions",
  current: "Full Stack Developer",
};`}
                </code>
              </pre>
            </div>   
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default Hero;
