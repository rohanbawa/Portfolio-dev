
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground mb-4 md:mb-0"
          >
            © {currentYear} Rohan Bawa. All rights reserved.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a href="#home" className="text-muted-foreground hover:text-purple-light transition-colors">Home</a>
            <a href="#about" className="text-muted-foreground hover:text-purple-light transition-colors">About</a>
            <a href="#projects" className="text-muted-foreground hover:text-purple-light transition-colors">Projects</a>
            <a href="#contact" className="text-muted-foreground hover:text-purple-light transition-colors">Contact</a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}