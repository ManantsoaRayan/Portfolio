import React from 'react';
import { Github, ExternalLink, Calendar, Users } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    demoLink?: string;
    image: string;
    duration?: string;
    teamSize?: number;
    achievements?: string[];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group/card-info bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-orange-500 transition-shadow duration-300">
      <div className="relative group">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 " />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover/card-info:text-orange-400">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        {(project.duration || project.teamSize) && (
          <div className="flex gap-4 mb-4 text-gray-400">
            {project.duration && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{project.duration}</span>
              </div>
            )}
            {project.teamSize && (
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span className="text-sm">{project.teamSize} membres</span>
              </div>
            )}
          </div>
        )}
        
        {project.achievements && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-orange-400 mb-2">Réalisations:</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              {project.achievements.map((achievement, index) => (
                <li key={index}>• {achievement}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm cursor-pointer hover:bg-orange-400">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.githubLink && (
            <a href={project.githubLink} className="flex items-center gap-2 text-gray-400 hover:text-orange-300">
              <Github className="w-5 h-5" />
              Code source
            </a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} className="flex items-center gap-2 text-gray-400 hover:text-orange-300">
              <ExternalLink className="w-5 h-5" />
              Démo live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;