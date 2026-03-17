"use client"
import { useEffect, useRef, useState } from "react"
import { config } from "@/lib/config"
import { useLang } from "@/lib/providers"

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [copied, setCopied] = useState(false)
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

  const copyEmail = () => {
    navigator.clipboard.writeText(config.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" ref={ref} className="reveal py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-primary text-xs tracking-widest uppercase">{t.contact.sectionLabel}</span>
          <h2 className="font-display text-3xl font-bold text-base-content">{t.contact.sectionTitle}</h2>
          <div className="flex-1 hr-data" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-display text-4xl font-extrabold leading-tight">
              <span className="text-base-content">{t.contact.heading1}</span>
              <br />
              <span className="gradient-text">{t.contact.heading2}</span>
            </h3>
            <p className="font-body text-base-content/50 leading-relaxed">{t.contact.subtext}</p>

            <div className="space-y-3">
              {t.contact.bullets.map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm font-body text-base-content/50">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-base-300 bg-base-200/80 p-8 space-y-5 glow-box">
            <p className="font-mono text-primary text-xs tracking-widest uppercase">{t.contact.sendMessage}</p>

            <div className="flex items-center justify-between rounded-lg bg-base-100 border border-base-300 px-4 py-3 hover:border-primary/40 transition-colors">
              <span className="font-mono text-base-content text-sm">{config.email}</span>
              <button onClick={copyEmail} className="text-base-content/40 hover:text-primary transition-colors ml-3" title="Copy email">
                {copied ? (
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                )}
              </button>
            </div>

            <a href={`mailto:${config.email}`} className="btn btn-primary w-full font-mono text-xs tracking-wider">
              {t.contact.sendEmail}
            </a>

            <div className="divider text-base-content/30 text-xs font-mono">{t.contact.orFindMe}</div>

            <div className="flex gap-3">
              {config.github && (
                <a href={`https://github.com/${config.github}`} target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline flex-1 border-primary/30 text-base-content/50 hover:border-primary hover:text-primary font-mono text-xs">
                  GitHub
                </a>
              )}
              {config.linkedin && (
                <a href={config.linkedin} target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline flex-1 border-secondary/30 text-base-content/50 hover:border-secondary hover:text-secondary font-mono text-xs">
                  LinkedIn
                </a>
              )}
              {config.kaggle && (
                <a href={config.kaggle} target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline flex-1 border-info/30 text-base-content/50 hover:border-info hover:text-info font-mono text-xs">
                  Kaggle
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
