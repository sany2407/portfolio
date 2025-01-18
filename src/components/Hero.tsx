import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[70vh] bg-neutral-900 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Full Stack Developer <span className="text-blue-500">&amp;</span> Low Code Expert
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Specialized in MERN Stack, Next.js, and building efficient low-code solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-blue-500 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative bg-neutral-800 p-8 rounded-xl border border-neutral-700">
            <pre className="text-gray-300">
              <code>
                {`const developer = {
  name: "Sany A",
  skills: ["React", "Next.js", "MongoDB"],
  passion: "Building scalable solutions",
  current: "Full Stack Developer",
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;