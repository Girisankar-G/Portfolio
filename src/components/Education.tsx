import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: (string | { jsx: JSX.Element })[];
}

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: 'Bachelor of Computer Science and Engineering',
      institution: 'Ramco Institute of Technology',
      location: 'TamilNadu, India',
      period: '2022 - Present',
      description: 'Covers programming, algorithms, databases, software engineering, networks, AI, and practical skills for careers or higher studies.',
      achievements: [
        {
          jsx: <span>A 8.26 CGPA (UPTO 5<sup>th</sup> Sem)</span>
        },
        'Member of the Computer Society of India',
      ]
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Ramana Vidhyalaya',
      location: 'Tamil Nadu, India',
      period: '2020 - 2022',
      description: 'Focusing on core academic subjects Computer Science, preparing students for university entrance and competitive exams.',
      achievements: [
        'Scored 90% in Computer Science',
        'State and International(Open) Level Taekwondo Achievements',
        'Black Belt in Taekwondo'
      ]
    }
  ];

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My academic journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-600 pl-8 pb-8 ml-4 md:ml-8">
            {educationItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative mb-12 ${index === educationItems.length - 1 ? 'mb-0' : ''}`}
              >
                <div className="absolute -left-[3.3rem] flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg">
                  <GraduationCap size={20} />
                </div>
                
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.degree}
                    </h3>
                    <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 py-1 px-3 rounded-full">
                      <Calendar size={14} className="mr-1" />
                      {item.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
                    <MapPin size={16} className="mr-2 text-gray-500 dark:text-gray-400" />
                    <span className="mr-2">{item.institution},</span>
                    <span>{item.location}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <div>
                      <h4 className="font-medium flex items-center text-gray-900 dark:text-white mb-2">
                        <Award size={16} className="mr-2 text-blue-600" />
                        Achievements
                      </h4>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                        {item.achievements.map((achievement, index) => (
                          <li key={index} className="mb-1">
                            {typeof achievement === 'string' ? achievement : achievement.jsx}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;