import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sany A — Portfolio',
    template: '%s | Sany A',
  },
  description: 'AI Full-Stack Developer: LLM apps, RAG, agents, MERN & Next.js.',
  keywords: ['AI Full-Stack', 'LLMs', 'RAG', 'Agents', 'Vector DBs', 'Next.js', 'MERN', 'LangChain', 'LangGraph', 'CrewAI', 'AutoGen', 'Portfolio'],
  openGraph: {
    type: 'website',
    title: 'Sany A — Portfolio',
    description: 'AI Full-Stack Developer: LLM apps, RAG, agents, MERN & Next.js.',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'Sany A Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sany A — Portfolio',
    description: 'AI Full-Stack Developer: LLM apps, RAG, agents, MERN & Next.js.',
    images: ['/og.svg'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
