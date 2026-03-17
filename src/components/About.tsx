"use client"
import { useEffect, useRef } from "react"
import { config } from "@/lib/config"
import { useLang } from "@/lib/providers"

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const { t } = useLang()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible") },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="reveal py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-xs tracking-widest uppercase">{t.about.sectionLabel}</span>
          <h2 className="font-display text-3xl font-bold text-base-content">{t.about.sectionTitle}</h2>
          <div className="flex-1 hr-data" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2 flex flex-col items-center md:items-start gap-6">
            <div className="relative w-48 h-48">
              {config.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={config.avatar} alt={config.name}
                  className="w-48 h-48 rounded-2xl object-cover border-2 border-primary/40 glow-box" />
              ) : (
                <div className="w-48 h-48 rounded-2xl border-2 border-primary/40 bg-base-200 flex items-center justify-center glow-box">
                  <span className="font-display text-5xl font-extrabold gradient-text">
                    {config.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              )}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-secondary" />
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="badge badge-outline border-primary/40 text-base-content/50 font-mono text-xs">
                📍 {config.location}
              </span>
              <span className="badge badge-outline border-success/40 text-success font-mono text-xs">
                {t.about.openToWork}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {config.github && (
                <a href={`https://github.com/${config.github}`} target="_blank" rel="noopener noreferrer"
                  className="btn btn-xs btn-outline border-primary/40 text-base-content/50 hover:border-primary hover:text-primary font-mono">
                  GitHub
                </a>
              )}
              {config.linkedin && (
                <a href={config.linkedin} target="_blank" rel="noopener noreferrer"
                  className="btn btn-xs btn-outline border-secondary/40 text-base-content/50 hover:border-secondary hover:text-secondary font-mono">
                  LinkedIn
                </a>
              )}
              {config.kaggle && (
                <a href={config.kaggle} target="_blank" rel="noopener noreferrer"
                  className="btn btn-xs btn-outline border-info/40 text-base-content/50 hover:border-info hover:text-info font-mono">
                  Kaggle
                </a>
              )}
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <p className="font-body text-base-content/60 text-lg leading-relaxed">{config.bio}</p>

            <div className="rounded-xl border border-base-300 bg-base-200/60 p-5 space-y-3">
              <p className="font-mono text-primary text-xs tracking-widest uppercase mb-3">
                {t.about.whatIBring}
              </p>
              {t.about.bullets.map((text, i) => {
                const icons = ["🔬", "⚙️", "📊", "🛠️"]
                return (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg">{icons[i]}</span>
                    <span className="font-body text-base-content text-sm leading-relaxed">{text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
