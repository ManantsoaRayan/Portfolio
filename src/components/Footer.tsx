"use client"
import { config } from "@/lib/config"
import { useLang } from "@/lib/providers"

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useLang()

  return (
    <footer className="border-t border-base-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-base-content/40">
          <span className="text-primary">&gt;</span> {t.footer.builtWith}
        </div>
        <div className="font-mono text-xs text-base-content/40">
          © {year} <span className="text-base-content">{config.name}</span> — {t.footer.rights}
        </div>
        <div className="flex gap-4 text-xs font-mono text-base-content/40">
          {config.github && (
            <a href={`https://github.com/${config.github}`} target="_blank" rel="noopener noreferrer"
              className="hover:text-primary transition-colors">GitHub</a>
          )}
          {config.linkedin && (
            <a href={config.linkedin} target="_blank" rel="noopener noreferrer"
              className="hover:text-secondary transition-colors">LinkedIn</a>
          )}
        </div>
      </div>
    </footer>
  )
}
