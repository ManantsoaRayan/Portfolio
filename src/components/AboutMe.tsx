import React from "react";
import { Trophy, Brain } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="relative py-20 bg-gray-900">
        <div className="relative max-w-5xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-orange-500">À Propos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <Trophy className="w-6 h-6 text-orange-400" />
                Objectifs
              </h3>
              <p className="text-gray-400">
                Aspirant développeur de jeux vidéo avec une passion pour la
                création d'expériences interactives innovantes. Je cherche à
                combiner mes compétences en programmation et ma créativité pour
                développer des jeux captivants.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <Brain className="w-6 h-6 text-orange-400" />
                En Apprentissage
              </h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Godot Engine</li>
                <li>• Game Design Patterns</li>
                <li>• 3D Modeling avec Blender</li>
                <li>• Machine Learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
