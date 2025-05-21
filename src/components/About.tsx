import { GraduationCap, Coffee, Book, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get to know more about me and my journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              A Passionate Computer Science Student
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Hello! I'm Girisankar G, an enthusiastic and adaptable student with a strong foundation in software development and AI/ML. I have demonstrated expertise
              in building full-stack applications, developing machine learning models, and collaborating on cross-functional teams.
              Passionate about coding, continuous learning, and problem-solving. Currently seeking opportunities to develop technical
              skills and contribute to innovative projects.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Today, I'm pursuing my degree in Computer Science at Ramco Institute of Technology, where I've developed a strong foundation in algorithms, data structures, and software engineering principles. Beyond my coursework, I'm actively involved in hackathons, open-source contributions, and research projects.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Education</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">CS Student</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Coding</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">5+ Languages</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <Book size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Learning</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Always Growing</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Food</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Essential Fuel</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-2xl -rotate-6 transform scale-95 opacity-20 dark:opacity-30"></div>
              <img 
                src="https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Student working on a laptop in a workspace" 
                className="w-full h-auto rounded-2xl shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
