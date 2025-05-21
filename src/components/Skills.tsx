import { useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
  category: 'programming' | 'tools' | 'soft';
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'programming' | 'tools' | 'soft'>('all');

  const skills: Skill[] = [
    { name: 'JavaScript', percentage: 70, category: 'programming' },
    { name: 'Python', percentage: 80, category: 'programming' },
    { name: 'Java', percentage: 75, category: 'programming' },
    { name: 'C', percentage: 70, category: 'programming' },
    { name: 'HTML/CSS', percentage: 80, category: 'programming' },
    { name: 'Data Structure and Algorithm', percentage: 70, category: 'programming' },
    { name: 'React', percentage: 65, category: 'tools' },
    { name: 'Node.js', percentage: 80, category: 'tools' },
    { name: 'SQL', percentage: 75, category: 'tools' },
    { name: 'Tailwind CSS', percentage: 85, category: 'tools' },
    { name: 'Problem Solving', percentage: 90, category: 'soft' },
    { name: 'Team Collaboration', percentage: 95, category: 'soft' },
    { name: 'Communication', percentage: 90, category: 'soft' },
    { name: 'Time Management', percentage: 80, category: 'soft' },
    { name: 'Adaptability', percentage: 85, category: 'soft' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'tools', label: 'Tools & Frameworks' },
    { id: 'soft', label: 'Soft Skills' }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are the technologies and skills I've developed over the years
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as 'all' | 'programming' | 'tools' | 'soft')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
              } shadow-sm`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-emerald-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%`, transitionDelay: `${index * 100}ms` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;