// components/Experience.tsx

import React from "react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-400 text-xl">My journey in software development</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/30"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {/* Experience 1 */}
            <div className="relative animate__animated animate__fadeInLeft">
              <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              </div>
              <div className="ml-auto w-1/2 pr-8">
                <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 hover:border-blue-500 transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">Senior Full Stack Developer</h3>
                    <span className="text-blue-500">2022 - Present</span>
                  </div>
                  <h4 className="text-lg text-blue-400 mb-4">Tech Innovators Inc.</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Led development of low-code platform solutions</li>
                    <li>• Architected scalable MERN stack applications</li>
                    <li>• Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative animate__animated animate__fadeInRight">
              <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              </div>
              <div className="mr-auto w-1/2 pl-8">
                <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 hover:border-blue-500 transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
                    <span className="text-blue-500">2020 - 2022</span>
                  </div>
                  <h4 className="text-lg text-blue-400 mb-4">Digital Solutions Co.</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Developed and maintained Next.js applications</li>
                    <li>• Implemented RESTful APIs using Node.js</li>
                    <li>• Optimized application performance and user experience</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="relative animate__animated animate__fadeInLeft">
              <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              </div>
              <div className="ml-auto w-1/2 pr-8">
                <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 hover:border-blue-500 transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">Frontend Developer</h3>
                    <span className="text-blue-500">2018 - 2020</span>
                  </div>
                  <h4 className="text-lg text-blue-400 mb-4">Web Creators Ltd.</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Built responsive web applications using React</li>
                    <li>• Collaborated with UI/UX designers</li>
                    <li>• Integrated third-party APIs and services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="mt-20">
          <div className="flex flex-wrap justify-center gap-4 animate__animated animate__fadeInUp">
            <span className="px-4 py-2 bg-neutral-800 text-blue-400 rounded-full border border-neutral-700">React.js</span>
            <span className="px-4 py-2 bg-neutral-800 text-blue-400 rounded-full border border-neutral-700">Next.js</span>
            <span className="px-4 py-2 bg-neutral-800 text-blue-400 rounded-full border border-neutral-700">Node.js</span>
            <span className="px-4 py-2 bg-neutral-800 text-blue-400 rounded-full border border-neutral-700">Express.js</span>
            <span className="px-4 py-2 bg-neutral-800 text-blue-400 rounded-full border border-neutral-700">MongoDB</span>
            <span className="px-4 py-2 bg-neutral-800 text-blue-400 rounded-full border border-neutral-700">TypeScript</span>
            <span className="px-4 py-2 bg-neutral-800 text-blue-400 rounded-full border border-neutral-700">REST APIs</span>
            <span className="px-4 py-2 bg-neutral-800 text-blue-400 rounded-full border border-neutral-700">Low Code</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;