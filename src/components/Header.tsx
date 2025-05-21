import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavLinkProps {
  href: string;
  title: string;
  active: boolean;
  onClick: () => void;
}

const NavLink = ({ href, title, active, onClick }: NavLinkProps) => (
  <a
    href={href}
    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
      active ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300'
    }`}
    onClick={onClick}
  >
    {title}
  </a>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute('id') || '';

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(sectionId);
      }
    });

    setIsScrolled(window.scrollY > 10);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', title: 'Home' },
    { href: '#about', title: 'About' },
    { href: '#skills', title: 'Skills' },
    { href: '#projects', title: 'Projects' },
    { href: '#education', title: 'Education' },
    { href: '#contact', title: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold text-blue-600 dark:text-blue-500"
          onClick={() => scrollToSection('home')}
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              title={link.title}
              active={activeSection === link.href.substring(1)}
              onClick={() => scrollToSection(link.href.substring(1))}
            />
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-2 py-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  title={link.title}
                  active={activeSection === link.href.substring(1)}
                  onClick={() => scrollToSection(link.href.substring(1))}
                />
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;