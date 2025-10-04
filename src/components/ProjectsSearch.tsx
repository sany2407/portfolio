"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectsSearchProps {
  items: Project[]
}

export default function ProjectsSearch({ items }: ProjectsSearchProps) {
  const [query, setQuery] = React.useState("")

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((p) => {
      const haystack = [
        p.title,
        p.summary,
        ...(p.tags || []),
        ...(p.stack || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [items, query])

  return (
    <div>
      <div className="mb-8">
        <div className="relative max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects by title, tag, or summary"
            className="pl-10"
            aria-label="Search projects"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">No projects found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-xl border border-neutral-700 hover:border-blue-500 transition p-4 bg-neutral-800"
            >
              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                <Image
                  src={p.cover || "/assets/scene.png"}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition"
                />
              </div>
              <h2 className="text-xl font-semibold text-white">{p.title}</h2>
              <p className="text-sm text-neutral-400 mt-2">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded bg-neutral-700 text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
