import { FaGithub } from "react-icons/fa";
import RevealOnScroll from "../RevealOnScroll";

const projects = [
    {
        title: "Cloud Platform",
        description: "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
        technologies: ["React", "Node.js", "Tailwind CSS"],
        github: "#",
    },
    {
        title: "Cloud Platform",
        description: "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
        technologies: ["React", "Node.js", "Tailwind CSS"],
        github: "#",
    },
    {
        title: "Cloud Platform",
        description: "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
        technologies: ["React", "Node.js", "Tailwind CSS"],
        github: "#",
    },
    {
        title: "Cloud Platform",
        description: "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
        technologies: ["React", "Node.js", "Tailwind CSS"],
        github: "#",
    },
];

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center bg-gray-800 text-white pt-32" 
        >
            <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 transition-transform transform hover:-translate-y-2 hover:shadow-blue-500/20"
                        >
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                                    <p className="text-gray-300 mb-5 leading-relaxed">{project.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.github}
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project <FaGithub className="text-xl" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
