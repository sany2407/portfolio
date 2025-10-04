export type AgentTool = 'langgraph' | 'langchain' | 'crewai' | 'autogen'

export type Project = {
  slug: string
  title: string
  summary: string
  description?: string // Detailed description for individual project pages
  tags: string[]
  stack: string[]
  orchestration?: {
    tools: AgentTool[]
    agents?: Array<{ name: string; role: string; memory?: 'short' | 'long' | 'episodic'; tools?: string[] }>
    architectureDiagram?: string
    flowHighlights?: string[]
  }
  impact?: {
    metrics?: Array<{ label: string; value: string }>
    users?: number
    performance?: string
  }
  links?: {
    repo?: string
    demo?: string
    writeup?: string
  }
  highlights?: string[]
  cover?: string
}

export const projects: Project[] = [
  {
    slug: 'job-portal',
    title: 'Job Portal',
    summary:
      'Campus recruitment portal where student registration, job posting, application tracking, and analytics managed all at one place.',
    description:
      'A comprehensive campus recruitment platform designed to streamline the hiring process for educational institutions. The portal enables students to create detailed profiles, browse job opportunities, and track their applications in real-time. Recruiters can post jobs, review applications, and manage the entire recruitment workflow from a centralized dashboard. Built with the MERN stack, it features role-based access control, real-time notifications, and analytics dashboards to provide insights into recruitment metrics and trends.',
    tags: ['mern', 'dashboard'],
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    links: {
      demo: 'https://job-board-frontend-eta.vercel.app/'
    },
    cover: '/assets/job-board.png',
  },
  {
    slug: 'ecommerce-palm-products',
    title: 'E-commerce website',
    summary:
      'An e-commerce site for palm products with intuitive navigation, secure payments, and a clean, responsive UI.',
    description:
      'A modern e-commerce platform specializing in traditional palm-based products. The site features a clean, responsive design built with Next.js and TailwindCSS, offering seamless browsing experience across all devices. Customers can explore product catalogs, view detailed product information, and complete purchases through integrated payment gateways. The platform emphasizes user experience with fast page loads, intuitive navigation, and a streamlined checkout process, backend integration with Nextjs server side rendering and Mongodb and for payment processing with Razorpay.',
    tags: ['nextjs', 'ecommerce', 'tailwind'],
    stack: ['Next.js', 'TailwindCSS', 'MongoDB', 'Razorpay'],
    links: {
      demo: 'https://vembar-karupatti.vercel.app/'
    },
    cover: '/assets/vembar.png',
  },
  {
    slug: 'rag-doc-assistant',
    title: 'RAG Document Assistant',
    summary:
      'Upload documents and chat with them via retrieval-augmented generation; sources cited and cached.',
    description:
      'An intelligent document assistant powered by Retrieval-Augmented Generation (RAG) technology. Users can upload various document formats and interact with their content through natural language queries. The system employs advanced chunking and embedding techniques to process documents, stores them in Pinecone vector database for efficient retrieval, and uses LangChain orchestration to generate accurate, contextual responses. Every answer includes proper source citations, allowing users to verify information. The assistant features hybrid search capabilities combining semantic and keyword-based retrieval, with intelligent caching to optimize performance for frequently asked questions.',
    tags: ['ai', 'rag', 'langchain'],
    stack: ['Next.js', 'Node.js', 'LangChain', 'OpenAI', 'Pinecone'],
    orchestration: {
      tools: ['langchain'],
      flowHighlights: ['chunking+embeddings', 'hybrid search', 'citation + fallback']
    },
    links: {
      repo: 'https://github.com/sany2407/SqlAgent',
    },
    cover: '/assets/rag.png',
  },
  {
    slug: 'ai-chat-cli',
    title: 'AI Chat CLI',
    summary:
      'A powerful command-line chatbot powered by Google Gemini AI. Chat with AI directly from your terminal!',
    description:
      'A terminal-based AI chat interface that brings the power of Google Gemini AI to your command line. This lightweight CLI tool enables developers and power users to have natural conversations with AI without leaving their terminal environment. Perfect for quick queries, code assistance, or brainstorming sessions while working on projects. The tool maintains conversation context, supports multi-turn dialogues, and provides a distraction-free interface for productive AI interactions.',
    tags: ['cli', 'ai', 'chat'],
    stack: ['Node.js', 'Google Gemini AI'],
    links: {
      repo: 'https://github.com/sany2407/ai-chat-cli',
    },
    cover: '/assets/ai-cli.png',
  },
  {
    slug: 'nextjs-auth-kit',
    title: 'NPM package: nextjs-auth-kit',
    summary:
      'CLI to scaffold Next.js auth (login, signup, middleware) with a single command to speed up project setup.',
    description:
      'A time-saving NPM package that automates the setup of authentication in Next.js projects. With a single command, developers can scaffold complete authentication flows including login, signup, password reset, and protected routes. The package generates production-ready code with best practices for security, including JWT token management, password hashing, and route middleware protection. It significantly reduces initial project setup time by eliminating the repetitive task of implementing authentication from scratch, allowing developers to focus on building core features.',
    tags: ['npm', 'nextjs', 'auth'],
    stack: ['Node.js', 'Next.js'],
    links: {
      demo: 'https://www.npmjs.com/package/nextjs-auth-kit',
    },
    cover: '/assets/auth-kit.png',
  },
  {
    slug: 'ats-resume-editor',
    title: 'ATS Resume Editor',
    summary:
      'ATS Resume Editor is a web application that helps users to edit their resumes for ATS (Applicant Tracking System) compatibility.',
    description:
      'An AI-powered resume optimization tool that helps job seekers create ATS-friendly resumes. Built using LangGraph for sophisticated multi-agent orchestration, the system employs three specialized agents working in harmony: a Planner agent that analyzes resume requirements and creates optimization strategies, a Worker agent that executes specific improvements using various tools, and an Evaluator agent that validates changes for ATS compatibility. The application uses Redis for efficient state management and caching, ensuring fast response times. Users receive actionable feedback on keyword optimization, formatting issues, and content structure to maximize their chances of passing automated screening systems.',
    tags: ['ai', 'resume', 'langgraph'],
    stack: ['Next.js', 'Node.js', 'LangGraph', 'OpenAI', 'Redis'],
    orchestration: {
      tools: ['langgraph'],
      agents: [
        { name: 'Planner', role: 'plans tasks', memory: 'short' },
        { name: 'Worker', role: 'executes tools', memory: 'episodic' },
        { name: 'Evaluator', role: 'validates results' }
      ]
    },
    links: {
      repo: 'https://github.com/sany2407/resume-builder',
    },
    cover: '/assets/ats-resume-editor.png',
  },
]