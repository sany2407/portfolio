import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "Aug 2024 - Present",
      content: (
        <div>
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/50 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Junior Software Associate</h3>
            <h4 className="text-blue-400 mb-4">SNS iHUB</h4>
            <p className="text-neutral-300 text-sm mb-6">
              Led the development of scalable web applications and mentored junior developers while implementing best practices and modern technologies.
            </p>
            <div className="space-y-2 text-neutral-400 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Architected and developed enterprise-level applications using Next.js and Node.js</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Implemented CI/CD pipelines and automated testing procedures</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Reduced application load time by 40% through performance optimization</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <div>
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/50 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Full Stack Developer</h3>
            <h4 className="text-blue-400 mb-4">Digital Solutions Co.</h4>
            <p className="text-neutral-300 text-sm mb-6">
              Developed and maintained multiple client projects while focusing on code quality and user experience.
            </p>
            <div className="space-y-2 text-neutral-400 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Built responsive web applications using React and TypeScript</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Designed and implemented RESTful APIs using Node.js and Express</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Integrated third-party services and maintained documentation</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2021",
      content: (
        <div>
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/50 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Frontend Developer</h3>
            <h4 className="text-blue-400 mb-4">Web Creators Ltd.</h4>
            <p className="text-neutral-300 text-sm mb-6">
              Specialized in creating engaging user interfaces and implementing modern web technologies.
            </p>
            <div className="space-y-2 text-neutral-400 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Developed and maintained client websites using React and Next.js</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Collaborated with designers to implement pixel-perfect interfaces</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Improved site performance and accessibility standards</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">React</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">Next.js</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">TypeScript</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">Node.js</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">Express</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">MongoDB</span>
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="w-full" id="experience">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;