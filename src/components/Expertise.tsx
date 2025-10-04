// components/Expertise.tsx

import React from "react";

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">AI Full-Stack Expertise</h2>
          <p className="text-gray-400 text-xl">LLM apps, RAG pipelines, agents, and scalable web</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:border-blue-500 transition-all animate__animated animate__fadeInUp">
            <div className="text-blue-500 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Application Frontends</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">React.js</span>
                <div className="w-1/2 bg-neutral-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Next.js</span>
                <div className="w-1/2 bg-neutral-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Tailwind CSS</span>
                <div className="w-1/2 bg-neutral-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Development */}
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:border-blue-500 transition-all animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
            <div className="text-blue-500 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">APIs & Data Infrastructure</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Node.js</span>
                <div className="w-1/2 bg-neutral-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Express.js</span>
                <div className="w-1/2 bg-neutral-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">MongoDB</span>
                <div className="w-1/2 bg-neutral-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Low Code Development */}
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700 hover:border-blue-500 transition-all animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
            <div className="text-blue-500 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">LLMs, RAG & Agents</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">LLM Orchestration (LangChain/LangGraph)</span>
                <div className="w-1/2 bg-neutral-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">RAG Pipelines (Vector DBs, embeddings)</span>
                <div className="w-1/2 bg-neutral-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Agent Workflows (tools, memory)</span>
                <div className="w-1/2 bg-neutral-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;