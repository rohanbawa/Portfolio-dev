import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    // Handle scroll event to update active section
    useEffect(() => {
      const handleScroll = () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
  
        // Update navbar background opacity on scroll
        if (window.scrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
  
        // Update active section based on scroll position
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute('id') || '';
  
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []); 
    return (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4',
            scrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
          )}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg font-bold"
            >
              <span className="text-purple-light">Portfolio</span>
            </motion.div>
    
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a
                      href={link.href}
                      className={cn(
                        'text-sm hover:text-purple-light transition-colors link-underline',
                        activeSection === link.href.substring(1) ? 'text-purple-light font-medium' : 'text-foreground/80'
                      )}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
    
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                className="text-foreground/80 hover:text-purple-light transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.header>
      );
    }