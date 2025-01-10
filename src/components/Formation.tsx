import React from 'react';

const Formation = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="relative w-full py-20">
        <div className="relative max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-orange-500 text-center">
            Formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* First Formation Card */}
            <div className="group/formation p-8 bg-gray-700 rounded-lg shadow-lg hover:shadow-orange-500 hover:bg-transparent border border-gray-600 hover:border-gray-400 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white group-hover/formation:text-orange-400">
                Licence 2 Informatique | GE-IT
              </h3>
              <p className="text-gray-400 mb-6">Oct 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-400 group-hover/formation:text-white">
                <li className="mb-2 hover:animate-pulse">Spécialisation en développement logiciel</li>
                <li className="mb-2">Cours en algorithmique et structures de données</li>
                <li>Projets pratiques en programmation</li>
              </ul>
            </div>

            {/* Second Formation Card */}
            <div className="group/formation p-8 bg-gray-700 rounded-lg shadow-lg hover:shadow-orange-500 hover:bg-transparent border border-gray-600 hover:border-gray-400 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-white group-hover/formation:text-orange-400">
                Formation en Développement Web
              </h3>
              <p className="text-gray-400 mb-6">Jan 2023 - Sep 2023</p>
              <ul className="list-disc list-inside text-gray-400 group-hover/formation:text-white">
                <li className="mb-2 hover:animate-pulse">Apprentissage des langages HTML, CSS, JavaScript</li>
                <li className="mb-2">Utilisation de frameworks comme React et Node.js</li>
                <li>Projets pratiques en développement front-end et back-end</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;