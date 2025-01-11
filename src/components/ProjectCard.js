import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Github, ExternalLink, Calendar, Users } from 'lucide-react';
const ProjectCard = ({ project }) => {
    return (_jsxs("div", { className: "group/card-info bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-orange-500 transition-shadow duration-300", children: [_jsxs("div", { className: "relative group", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 " }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-2xl font-bold mb-2 text-white group-hover/card-info:text-orange-400", children: project.title }), _jsx("p", { className: "text-gray-400 mb-4", children: project.description }), (project.duration || project.teamSize) && (_jsxs("div", { className: "flex gap-4 mb-4 text-gray-400", children: [project.duration && (_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Calendar, { className: "w-4 h-4" }), _jsx("span", { className: "text-sm", children: project.duration })] })), project.teamSize && (_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Users, { className: "w-4 h-4" }), _jsxs("span", { className: "text-sm", children: [project.teamSize, " membres"] })] }))] })), project.achievements && (_jsxs("div", { className: "mb-4", children: [_jsx("h4", { className: "text-sm font-semibold text-orange-400 mb-2", children: "R\u00E9alisations:" }), _jsx("ul", { className: "text-gray-400 text-sm space-y-1", children: project.achievements.map((achievement, index) => (_jsxs("li", { children: ["\u2022 ", achievement] }, index))) })] })), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.technologies.map((tech, techIndex) => (_jsx("span", { className: "px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-sm cursor-pointer hover:bg-orange-400", children: tech }, techIndex))) }), _jsxs("div", { className: "flex gap-4", children: [project.githubLink && (_jsxs("a", { href: project.githubLink, className: "flex items-center gap-2 text-gray-400 hover:text-orange-300", children: [_jsx(Github, { className: "w-5 h-5" }), "Code source"] })), project.demoLink && (_jsxs("a", { href: project.demoLink, className: "flex items-center gap-2 text-gray-400 hover:text-orange-300", children: [_jsx(ExternalLink, { className: "w-5 h-5" }), "D\u00E9mo live"] }))] })] })] }));
};
export default ProjectCard;
