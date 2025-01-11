import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
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
        Code2: _jsx(Code2, { className: "w-6 h-6" }),
        Book: _jsx(Book, { className: "w-6 h-6" }),
        Database: _jsx(Database, { className: "w-6 h-6" }),
        Puzzle: _jsx(Puzzle, { className: "w-6 h-6" }),
    };
    return (_jsxs("div", { className: "relative", children: [_jsx("nav", { className: "fixed top-0 right-0 p-4 z-50 hidden lg:block", children: _jsx("div", { className: "bg-gray-800 rounded-lg shadow-lg p-2", children: _jsx("ul", { className: "space-y-2", children: ['hero', 'formation', 'skills', 'projects', 'about'].map((section) => (_jsx("li", { className: "", children: _jsx("a", { href: `#${section}`, className: `block w-3 h-3 rounded-full transition-all duration-300 ${activeSection === section ? 'bg-orange-500 scale-125' : 'bg-gray-400 hover:bg-orange-400'}`, "aria-label": section }) }, section))) }) }) }), _jsxs("main", { className: "w-full overflow-hidden", children: [_jsx("section", { id: "hero", className: "min-h-screen", children: _jsx(Hero, {}) }), _jsx("section", { id: "formation", className: "min-h-screen", children: _jsx(Formation, {}) }), _jsx("section", { id: "skills", className: "min-h-screen", children: _jsx(Skills, { skills: skills, icons: icons }) }), _jsx("section", { id: "projects", className: "min-h-screen", children: _jsx(Projects, { projects: projects }) }), _jsx("section", { id: "about", className: "min-h-screen", children: _jsx(AboutMe, {}) })] })] }));
}
export default App;
