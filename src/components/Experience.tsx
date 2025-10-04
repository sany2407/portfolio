import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "Jul 2024 - Present",
      content: (
        <div>
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/50 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Software Associate</h3>
            <h4 className="text-blue-400 mb-4">SNS Innovation Hub — Coimbatore</h4>
            <p className="text-neutral-300 text-sm mb-6">
              Building AI-powered employee engagement platform (Nomantify), secure APIs, analytics pipelines, and automation with modern web stack.
            </p>
            <div className="space-y-2 text-neutral-400 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  Developed <b>Nomantify</b>, an AI-powered platform for employee engagement, using <b>Next.js</b>, React, and Node.js, transforming user feedback into actionable insights.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  Designed and integrated <b>secure, scalable REST APIs</b>, improving backend maintainability and performance.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  Collaborated closely with product managers and designers to build and iterate on key features based on user feedback.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  Integrated <b>AI-based analytics pipelines</b>, visualizing engagement metrics in real time.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  Worked on <b>calendar and messaging automation tools</b>, including email and YouTube comment response automation.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  Improved deployment speed using <b>CI/CD pipelines (Docker + GitHub Actions)</b> and optimized <b>PostgreSQL</b> and <b>MongoDB</b> queries.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">Next.js</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">React</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">Node.js</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">REST APIs</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">PostgreSQL</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">MongoDB</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">CI/CD</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">Docker</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">GitHub Actions</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">Analytics</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">Automation</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">Email API</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">YouTube API</span>
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2024 - May 2024",
      content: (
        <div>
          <div className="bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/50 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Web Developer Intern</h3>
            <h4 className="text-blue-400 mb-4">Accent Techno Soft — Coimbatore</h4>
            <p className="text-neutral-300 text-sm mb-6">
              Contributed to front-end builds, API integrations, and end-to-end debugging for smooth application functionality.
            </p>
            <div className="space-y-2 text-neutral-400 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  Contributed to front-end development using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, and gained hands-on experience with frameworks like <b>React</b>.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  Assisted in creating and integrating <b>RESTful APIs</b> for dynamic data rendering and implemented features that improved user functionality and engagement.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>
                  Debugged and resolved front-end and back-end issues, ensuring smooth application functionality.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">HTML</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">CSS</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">JavaScript</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">React</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">REST APIs</span>
            <span className="px-3 py-1 bg-neutral-800/50 text-blue-400 text-sm rounded-full border border-neutral-700/50">Debugging</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="experience">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
