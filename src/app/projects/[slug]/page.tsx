import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: {
      images: p.cover ? [{ url: p.cover, width: 1200, height: 630 }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug);
  if (!p) return notFound();

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <main className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
        </div>
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-4xl font-bold">{p.title}</h1>
          <div className="flex items-center space-x-4">
            {p.links?.demo && (
              <Link href={p.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-blue-400">
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </Link>
            )}
            {p.links?.repo && (
              <Link href={p.links.repo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400">
                <Github size={20} />
                <span>Code</span>
              </Link>
            )}
          </div>
        </div>

        {p.cover && (
          <div className="mb-8">
            <Image src={p.cover} alt={p.title} width={1200} height={630} className="rounded-lg shadow-lg" />
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          <p className="text-xl">{p.summary}</p>

          <div className="flex flex-wrap gap-2 my-4">
            {p.stack.map(tech => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>

          {p.highlights && p.highlights.length > 0 && (
            <section>
              <h2>Highlights</h2>
              <ul>
                {p.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
            </section>
          )}

          {p.orchestration && (
            <section>
              <h2>Agentic Orchestration</h2>
              {p.orchestration.tools?.length ? (
                <div>
                  <h4>Tools Used</h4>
                  <ul>
                    {p.orchestration.tools.map(t => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              ) : null}
              {p.orchestration.flowHighlights?.length ? (
                <div>
                  <h4>Flow Highlights</h4>
                  <ul>
                    {p.orchestration.flowHighlights.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              ) : null}
              {p.orchestration.architectureDiagram && (
                <div className="mt-4">
                  <h4>Architecture</h4>
                  <Image src={p.orchestration.architectureDiagram} alt="Architecture Diagram" width={1200} height={630} className="rounded-lg" />
                </div>
              )}
            </section>
          )}

          {p.impact?.metrics && p.impact.metrics.length > 0 && (
            <section>
              <h2>Impact</h2>
              <ul>
                {p.impact.metrics.map(m => (
                  <li key={m.label}><strong>{m.label}:</strong> {m.value}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}