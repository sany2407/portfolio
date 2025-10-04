import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectsSearch from '@/components/ProjectsSearch'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Projects',
  description: 'Selected projects and case studies',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New container for the back button and heading, using Flexbox */}
        <div className="flex items-center mb-10">
          <Link href="/">
            {/* Reduced bottom margin on the icon */}
            <ArrowLeft className="w-6 h-6 text-white mr-4" /> 
          </Link>
          <h1 className="text-4xl font-bold text-white">Projects</h1>
        </div>
        
        {/* The ProjectsSearch component remains here */}
        <ProjectsSearch items={projects} />
      </div>
    </div>
  )
}