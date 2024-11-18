import React from 'react';
import { Cat } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="mb-6 inline-block animate-bounce">
          <Cat className="w-16 h-16 text-amber-600 transform -rotate-12" />
        </div>
        
        <div className="space-y-2 mb-6">
          <p className="text-lg text-amber-600 font-medium">Hello there! 👋</p>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zinc-900 to-amber-800 bg-clip-text text-transparent">
            Developer. Creator. 
            <span className="block">Problem Solver.</span>
          </h1>
        </div>
        
        <p className="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Turning gummy bears into code and ideas into reality, one purr-fect solution at a time.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 
                     transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 bg-white text-zinc-800 rounded-lg hover:bg-zinc-50 
                     transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-zinc-200"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
