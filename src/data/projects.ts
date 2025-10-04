export type AgentTool = 'langgraph' | 'langchain' | 'crewai' | 'autogen'

export type Project = {
  slug: string
  title: string
  summary: string
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
    tags: ['mern', 'dashboard'],
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    links: {
      // repo: 'https://github.com/sany2407/job-board-frontend', 
      demo:'https://job-board-frontend-eta.vercel.app/ '
    },
    cover: '/assets/job-board.png',
  },
  
  
  {
    slug: 'ecommerce-palm-products',
    title: 'E-commerce website',
    summary:
      'An e-commerce site for palm products with intuitive navigation, secure payments, and a clean, responsive UI.',
    tags: ['nextjs', 'ecommerce', 'tailwind'],
    stack: ['Next.js', 'TailwindCSS'],
    links: {
      demo:'https://vembar-karupatti.vercel.app/' 
    },
    cover: '/assets/vembar.png',
  },
  {
    slug: 'rag-doc-assistant',
    title: 'RAG Document Assistant',
    summary:
      'Upload documents and chat with them via retrieval-augmented generation; sources cited and cached.',
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
