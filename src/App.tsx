import React, { useState, useEffect } from 'react';
import { Code2, Database, Book, Puzzle } from 'lucide-react';
import data from './data/data.json';
import Hero from './components/Hero';
import Formation from './components/Formation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

function App() {
  const [skills] = useState(data.skills);
  const [projects] = useState(data.projects);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const icons = {
    Code2: <Code2 className="w-6 h-6" />,
    Book: <Book className="w-6 h-6" />,
    Database: <Database className="w-6 h-6" />,
    Puzzle: <Puzzle className="w-6 h-6" />,
  };

  return (
    <div className="relative">
      <nav className="fixed top-0 right-0 p-4 z-50 hidden lg:block">
        <div className="bg-gray-800 rounded-lg shadow-lg p-2">
          <ul className="space-y-2">
            {['hero', 'formation', 'skills', 'projects', 'about'].map((section) => (
              <li key={section} className="">
                <a
                  href={`#${section}`}
                  className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === section ? 'bg-orange-500 scale-125' : 'bg-gray-400 hover:bg-orange-400'
                  }`}
                  aria-label={section}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="w-full overflow-hidden">
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="formation" className="min-h-screen">
          <Formation />
        </section>
        
        <section id="skills" className="min-h-screen">
          <Skills skills={skills} icons={icons} />
        </section>
        
        <section id="projects" className="min-h-screen">
          <Projects projects={projects} />
        </section>
        
        <section id="about" className="min-h-screen">
          <AboutMe />
        </section>
      </main>
    </div>
  );
}

export default App;