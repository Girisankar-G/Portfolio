import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          <span className="text-blue-600 dark:text-blue-400">Girisankar G</span>
        </h1>
        <h1 className="text-4xl md:text-4xl font-extrabold text-gray-700 dark:text-gray-300 mb-4">
          Computer Science Student
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Passionate about creating innovative solutions through code. 
          Specializing in web development, machine learning, and software engineering.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
          >
            Contact Me
            <ArrowRight className="ml-2" size={18} />
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-sm font-medium transition-colors"
          >
            View Projects
          </button>
        </div>
      </div>

      {/* Down Arrow for scrolling */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 animate-bounce text-blue-600 dark:text-blue-400"
        aria-label="Scroll Down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
