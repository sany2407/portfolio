import React from 'react';
import {
  Code2,
  Github,
  Terminal,
  Box,
  Code,
  Layers,
  Palette,
  FileType,
  Database,
  Server,
  Container,
  Cloud,
  Rocket,
  GitBranch
} from 'lucide-react';

interface ToolCategory {
  title: string;
  items: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  icon: React.ReactNode;
}

const Tools = () => {
  const tools: ToolCategory[] = [
    {
      title: 'Development',
      items: [
        { name: 'VS Code', icon: <Code2 size={32} /> },
        { name: 'Git', icon: <GitBranch size={32} /> },
        { name: 'GitHub', icon: <Github size={32} /> },
        { name: 'Terminal', icon: <Terminal size={32} /> }
      ],
      icon: (
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'Frontend',
      items: [
        { name: 'React.js', icon: <Code size={32} /> },
        { name: 'Next.js', icon: <Box size={32} /> },
        { name: 'Tailwind CSS', icon: <Palette size={32} /> },
        { name: 'TypeScript', icon: <FileType size={32} /> }
      ],
      icon: (
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', icon: <Server size={32} /> },
        { name: 'Express.js', icon: <Layers size={32} /> },
        { name: 'MongoDB', icon: <Database size={32} /> },
        { name: 'REST APIs', icon: <Code2 size={32} /> }
      ],
      icon: (
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
    {
      title: 'DevOps',
      items: [
        { name: 'Docker', icon: <Container size={32} /> },
        { name: 'AWS', icon: <Cloud size={32} /> },
        { name: 'Vercel', icon: <Rocket size={32} /> },
        { name: 'CI/CD', icon: <GitBranch size={32} /> }
      ],
      icon: (
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="tools" className="py-20 bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Tools & Technologies</h2>
          <p className="text-gray-400 text-xl">
            The technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 hover:border-blue-500 transition-all h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                {tool.icon}
                {tool.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tool.items.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="flex items-center justify-center text-gray-300 hover:text-blue-500 transition-colors">
                      {item.icon}
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-neutral-700 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Always exploring new technologies and tools to improve development workflow and
            efficiency
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;