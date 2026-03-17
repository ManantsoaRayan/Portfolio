import { config } from "@/lib/config"
import { fetchDataScienceProjects } from "@/lib/github"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default async function Home() {
  const projects = await fetchDataScienceProjects(config.github)

  return (
    <main className="grid-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
