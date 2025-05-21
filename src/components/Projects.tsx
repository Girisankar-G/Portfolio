import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
  {
    id: 1,
    title: 'Perscripto',
    description: 'A Doctor Appointment System built using the MERN stack (MongoDB, Express, React, Node.js) that allows patients to book appointments and doctors to manage schedules.',
    image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['react', 'node', 'mongodb', 'express'],
    link: 'https://github.com/Girisankar-G/Perscripto',
    github: 'https://github.com/Girisankar-G/Perscripto'
  },
  {
    id: 2,
    title: 'Netflix Clone',
    description: 'A responsive front-end Netflix clone built using HTML, CSS, and JavaScript. It mimics the original UI with features like movie thumbnails and hover effects.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['html', 'css', 'javascript'],
    link: 'https://github.com/Girisankar-G/Netflix_Clone',
    github: 'https://github.com/Girisankar-G/Netflix_Clone'
  },
  {
    id: 3,
    title: 'Twitter Sentiment Analysis',
    description: 'A machine learning model developed to analyze sentiment from tweets using natural language processing techniques. It classifies tweets into positive, negative, or neutral.',
    image: 'https://images.pexels.com/photos/4597041/pexels-photo-4597041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['python', 'ml', 'nlp'],
    link: 'https://github.com/Girisankar-G/Twitter_Analysis',
    github: 'https://github.com/Girisankar-G/Twitter_Analysis'
  },
  {
    id: 4,
    title: 'Resume Filtering Model',
    description: 'A full-stack project combining a front-end built with HTML/CSS and a machine learning model in Python to filter and classify resumes based on job requirements.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    tags: ['python', 'ml', 'html', 'css'],
    link: 'https://github.com/Girisankar-G/Resume_Filter',
    github: 'https://github.com/Girisankar-G/Resume_Filter'
  },
];


  const allTags = ['all', ...Array.from(new Set(projects.flatMap(project => project.tags)))];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Check out some of my recent work
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              } shadow-sm`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 flex gap-4">
                    <a 
                      href={project.github} 
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition"
                      aria-label="View Github repository"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.link} 
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;