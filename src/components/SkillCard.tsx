import React from 'react';

interface SkillCardProps {
  name: string;
  icon: JSX.Element;
  technologies: Array<{
    name: string;
    level: number;
  }>;
}

const SkillCard = ({ name, icon, technologies }: SkillCardProps) => {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-orange-500 transition-shadow duration-300">
      <div className="flex items-center mb-4 text-gray-400">
        {icon}
        <h3 className="text-xl font-semibold ml-2 text-white">{name}</h3>
      </div>
      <div className="space-y-3">
        {technologies.map((tech, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">{tech.name}</span>
              <span className="text-gray-400">{tech.level}%</span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange-400 rounded-full transition-all duration-300"
                style={{ width: `${tech.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};