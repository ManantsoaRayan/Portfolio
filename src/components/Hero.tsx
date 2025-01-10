import React from 'react';
import { Github, Mail, Phone, Gamepad2 } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,_138,_76,_0.1)_0%,_rgba(0,_0,_0,_0)_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(255,_138,_76,_0.05)_0%,_rgba(0,_0,_0,_0)_70%)]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="space-y-6">
            <h1 className="peer/status group/name text-5xl md:text-6xl font-bold tracking-tight">
              <span className="group-hover/name:text-orange-300 transition-colors duration-300 ease-in-out delay-100">RANDRIANARIVELO</span>
              <br />
              <span className="group-hover/name:text-orange-500 transition-colors duration-300 ease-in-out delay-100">Manantsoa Rayan</span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-2xl text-orange-400 peer-hover/status:text-white animate-bounce transition-colors duration-300 ease-in-out delay-100">
                Étudiant en Licence 2 | GE-IT
              </p>
              <p className="text-xl text-gray-400 max-w-lg">
                Passionné par le développement de jeux vidéo, avec une expérience pratique dans la création de projets web et l'élaboration de jeux interactifs.
              </p>
            </div>
          </div>
          
          <div className="mt-12 space-y-6">
            <div className="flex flex-wrap gap-6">
              <a href="tel:+261345112501" className="flex items-center gap-2 text-gray-400 hover:text-orange-300 transition-all transform hover:translate-x-2">
                <Phone className="w-5 h-5" />
                034 51 125 01
              </a>
              <a href="mailto:manantsoarayan@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-orange-300 transition-all transform hover:translate-x-2">
                <Mail className="w-5 h-5" />
                manantsoarayan@gmail.com
              </a>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/ManantsoaRayan" 
                className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-orange-500 hover:text-white transition-all"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
              <a 
                href="#projects" 
                className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-orange-500 hover:text-white transition-all"
              >
                <Gamepad2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Game Developer
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;