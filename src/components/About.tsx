import React from 'react';
import { Code2, MapPin, PersonStanding, Coffee } from 'lucide-react';

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "Java",
  "SQL"
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <PersonStanding className="w-8 h-8 text-amber-600" />
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-zinc-700 leading-relaxed">
              I'm a passionate developer who loves crafting elegant solutions to complex problems. 
              When I'm not coding, you might find me exploring new coffee shops or playing with my cat.
            </p>
            
            <div className="flex items-center gap-2 text-zinc-700">
              <MapPin className="w-5 h-5 text-amber-600" />
              <span>Based in New York, NY</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-700">
              <Coffee className="w-5 h-5 text-amber-600" />
              <span>Fueled by coffee and curiosity</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-amber-600" />
              <h3 className="text-xl font-semibold">Technologies I Work With</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white rounded-lg shadow-sm border border-zinc-100 
                           hover:border-amber-500 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}