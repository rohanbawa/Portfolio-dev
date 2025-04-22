import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/ui/HeroSection';
import AboutSection from '@/components/ui/AboutSection';
import ProjectsSection from '@/components/ui/ProjectSsection';
import SkillsSection from '@/components/ui/SkillsSection';
import ContactSection from '@/components/ui/ContactSection';
import Footer from '@/components/ui/Footer';
import MouseEffect from '@/components/effects/MouseEffect';
import ScrollProgress from '@/components/effects/ScrollProgress';
import { useEffect } from 'react';

const Index = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MouseEffect />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;