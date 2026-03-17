"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { translations, type Lang } from "@/lib/i18n"

// ── Theme ────────────────────────────────────────────────────

type Theme = "dark" | "light"

interface ThemeCtx {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeCtx>({ theme: "dark", toggleTheme: () => {} })

// ── Lang ─────────────────────────────────────────────────────

interface LangCtx {
  lang: Lang
  toggleLang: () => void
  t: typeof translations["en"]
}

const LangContext = createContext<LangCtx>({
  lang: "en",
  toggleLang: () => {},
  t: translations["en"],
})

// ── Provider ─────────────────────────────────────────────────

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [lang, setLang] = useState<Lang>("en")

  // Persist in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null
    const savedLang = localStorage.getItem("portfolio-lang") as Lang | null
    if (savedTheme) setTheme(savedTheme)
    if (savedLang) setLang(savedLang)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    html.setAttribute("data-theme", theme === "dark" ? "datatheme" : "datatheme-light")
    // Also toggle a class so raw CSS can react
    html.classList.toggle("light-mode", theme === "light")
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem("portfolio-lang", lang)
  }, [lang])

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"))
  const toggleLang = () => setLang((l) => (l === "en" ? "fr" : "en"))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LangContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
        {children}
      </LangContext.Provider>
    </ThemeContext.Provider>
  )
}

// ── Hooks ─────────────────────────────────────────────────────

export const useTheme = () => useContext(ThemeContext)
export const useLang = () => useContext(LangContext)
