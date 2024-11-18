import React from 'react';
import { Github, ExternalLink, FolderGit2, Star } from 'lucide-react';

const projects = [
  {
    title: "MeowMatch",
    description: "Tinder but for cats!",
    tech: ["Typescript", "React", "HTML", "CSS"],
    github: "https://github.com/Fear-Itself/meowmatch",
    live: "https://meowmatch.netlify.app/"
  },
  {
    title: "COMING SOON",
    description: "Will be added soon",
    tech: ["COMINGSOON"],
    github: "#",
    live: "#"
  },
  {
    title: "COMING SOON",
    description: "Will be added soon",
    tech: ["COMINGSOON"],
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <FolderGit2 className="w-8 h-8 text-amber-600" />
          Featured Projects
          <Star className="w-5 h-5 text-amber-400 ml-2 animate-pulse" />
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-zinc-50 rounded-lg p-6 group relative
                       border border-zinc-100 
                       hover:shadow-[0_0_20px_rgba(251,191,36,0.1)]
                       hover:border-amber-200
                       transition-all duration-300 ease-in-out
                       overflow-hidden"
            >
              {/* Decorative star */}
              <div className="absolute -right-6 -bottom-6 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                <Star className="w-20 h-20 text-amber-600 transform rotate-45" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-zinc-800 group-hover:text-amber-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-zinc-600 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-sm px-3 py-1 bg-white rounded-full text-zinc-600
                             border border-zinc-200 group-hover:border-amber-200
                             transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 relative z-10">
                <a 
                  href={project.github}
                  className="text-zinc-600 hover:text-amber-600 transition-colors duration-300
                           hover:scale-110 transform"
                  aria-label="View source on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={project.live}
                  className="text-zinc-600 hover:text-amber-600 transition-colors duration-300
                           hover:scale-110 transform"
                  aria-label="View live project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
