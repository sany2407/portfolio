import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - About Me */}
          <div className="animate__animated animate__fadeInLeft">
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  I'm a passionate Full Stack Developer with extensive experience in modern web technologies, specializing in building scalable applications and low-code solutions.
                </p>
                <p className="text-gray-300">
                  With a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js, I've helped businesses transform their ideas into powerful web applications.
                </p>
                <p className="text-gray-300">
                  Currently, I'm focused on developing innovative low-code tools that empower businesses to build and deploy applications faster than ever.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Key Skills */}
          <div className="animate__animated animate__fadeInRight">
            <div className="grid grid-cols-2 gap-4">
              {/* Full Stack Development */}
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-blue-500 transition-all">
                <div className="text-blue-500 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Full Stack Development</h3>
                <p className="text-gray-400">End-to-end web application development with modern technologies</p>
              </div>

              {/* Performance Optimization */}
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-blue-500 transition-all">
                <div className="text-blue-500 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Performance Optimization</h3>
                <p className="text-gray-400">Building fast and efficient web applications</p>
              </div>

              {/* Low Code Solutions */}
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-blue-500 transition-all">
                <div className="text-blue-500 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Low Code Solutions</h3>
                <p className="text-gray-400">Creating tools for rapid application development</p>
              </div>

              {/* Security First */}
              <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-blue-500 transition-all">
                <div className="text-blue-500 mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
                <p className="text-gray-400">Implementing robust security measures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;