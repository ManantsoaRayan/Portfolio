"use client"
import { useEffect, useRef, useState } from "react"
import { config } from "@/lib/config"
import { useLang } from "@/lib/providers"

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const { t } = useLang()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); setVisible(true) } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="reveal py-24 px-6 bg-base-200/40">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-xs tracking-widest uppercase">{t.skills.sectionLabel}</span>
          <h2 className="font-display text-3xl font-bold text-base-content">{t.skills.sectionTitle}</h2>
          <div className="flex-1 hr-data" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.skillGroups.map((group, gi) => (
            <div key={group.label}
              className="rounded-xl border border-base-300 bg-base-100/60 p-5 hover:border-primary/30 transition-colors"
              style={{
                transitionDelay: visible ? `${gi * 80}ms` : "0ms",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <span className="font-display font-bold text-base-content text-sm tracking-wide uppercase">
                  {group.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <span key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-base-200 text-base-content border border-base-300 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "scale(1)" : "scale(0.9)",
                      transition: `opacity 0.4s ease ${gi * 80 + si * 30}ms, transform 0.4s ease ${gi * 80 + si * 30}ms`,
                    }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-base-300 bg-base-100/60 p-6 font-mono text-sm overflow-x-auto">
          <div className="text-primary text-xs tracking-widest mb-3 uppercase">{t.skills.atAGlance}</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-8 text-xs">
            {t.skills.table.map(([key, val]) => (
              <div key={key}>
                <span className="text-base-content/40">{key}: </span>
                <span className="text-warning">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
