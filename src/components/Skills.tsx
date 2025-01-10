import React from 'react';

interface Technology {
  name: string;
  level: number;
}

interface Skill {
  name: string;
  icon: string;
  technologies: Technology[];
}

interface SkillsProps {
  skills: Skill[];
  icons: { [key: string]: JSX.Element };
}

const Skills = ({ skills, icons }: SkillsProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="relative w-full py-20">
        <div className="relative max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-orange-500 text-center">
            Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-orange-500 transition-shadow duration-300"
              >
                <div className="flex items-center mb-6 text-gray-400">
                  {icons[skill.icon]}
                  <h3 className="text-2xl font-semibold ml-3 text-white">
                    {skill.name}
                  </h3>
                </div>
                <div className="space-y-4">
                  {skill.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{tech.name}</span>
                        <span className="text-gray-400">{tech.level}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-400 rounded-full transition-all duration-300"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;