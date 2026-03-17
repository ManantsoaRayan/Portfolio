"use client"
import { useEffect, useRef } from "react"
import type { Project } from "@/lib/github"
import { config } from "@/lib/config"
import { useLang } from "@/lib/providers"
import ProjectCard from "./ProjectCard"

export default function Projects({ projects }: { projects: Project[] }) {
  const ref = useRef<HTMLElement>(null)
  const { t } = useLang()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible") },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="reveal py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-primary text-xs tracking-widest uppercase">{t.projects.sectionLabel}</span>
          <h2 className="font-display text-3xl font-bold text-base-content">{t.projects.sectionTitle}</h2>
          <div className="flex-1 hr-data" />
        </div>

        <p className="font-body text-base-content/40 text-sm mb-10 font-mono">
          {t.projects.loadedFrom}{" "}
          <a href={`https://github.com/${config.github}`} target="_blank" rel="noopener noreferrer"
            className="text-secondary hover:underline">
            github.com/{config.github}
          </a>
          {" "}{t.projects.taggedWith} <span className="text-primary">{t.projects.tagKeyword}</span> {t.projects.inDescription}
        </p>

        {projects.length === 0 ? (
          <EmptyState username={config.github} />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a href={`https://github.com/${config.github}?tab=repositories`} target="_blank" rel="noopener noreferrer"
            className="btn btn-outline border-primary/30 text-base-content/50 hover:border-primary hover:text-primary font-mono text-xs tracking-wider">
            {t.projects.viewAll}
          </a>
        </div>
      </div>
    </section>
  )
}

function EmptyState({ username }: { username: string }) {
  const { t } = useLang()
  const isPlaceholder = username === "YOUR_GITHUB_USERNAME" || !username
  return (
    <div className="rounded-xl border border-dashed border-base-300 p-12 text-center">
      <div className="font-mono text-primary text-3xl mb-4">[ ]</div>
      <p className="font-mono text-base-content/40 text-sm">
        {isPlaceholder ? t.projects.emptyConfig : t.projects.emptyNone(username)}
      </p>
      <p className="font-mono text-base-content/25 text-xs mt-2">{t.projects.emptyHint}</p>
    </div>
  )
}
