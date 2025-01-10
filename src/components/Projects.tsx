import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveDemoLink?: string;
  image: string;
  duration?: string;
  teamSize?: number;
  achievements?: string[];
}

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="relative py-20 h-screen w-full bg-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,_138,_76,_0.1)_0%,_rgba(0,_0,_0,_0)_70%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-orange-500 mb-4">Projets</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-2xl">
            Une sélection de mes projets les plus significatifs, démontrant mes
            compétences en développement de jeux et en programmation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
