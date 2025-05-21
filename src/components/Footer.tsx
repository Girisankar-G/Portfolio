import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Portfolio
            </h2>
            <p className="text-gray-400 max-w-md">
              Showcasing my journey, skills, and projects as a computer science student passionate about creating innovative solutions.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="inline-flex items-center text-gray-400 mb-2">
              Made with <Heart size={16} className="mx-1 text-red-500" /> and React
            </p>
            <p className="text-gray-500">
              &copy; {currentYear} Girisankar G. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;