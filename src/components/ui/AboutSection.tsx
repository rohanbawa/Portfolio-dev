
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">About Me</h2>
          <div className="w-20 h-1 bg-purple-light mx-auto mb-6"></div>
          <p className="text-muted-foreground">Who I am and what I do</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="aspect-square max-w-md mx-auto bg-purple/10 rounded-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple/20 to-purple-dark/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Placeholder for profile image or 3D avatar */}
              <div className="w-32 h-32 bg-purple-light/30 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Creative Developer & Designer</h3>
            <p className="text-muted-foreground mb-6">
            I'm a passionate developer driven to build robust, scalable digital systems that power seamless user experiences. With hands-on expertise in Java, Spring Boot, REST APIs, and cloud technologies like AWS, I love designing solutions that are not just functional—but efficient, resilient, and future-ready. My work blends performance with purpose, ensuring every line of code solves real-world problems at scale..
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-medium text-white mb-2">Name</h4>
                <p className="text-muted-foreground">Your Name</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Email</h4>
                <p className="text-muted-foreground">your.email@example.com</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Location</h4>
                <p className="text-muted-foreground">Your Location</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Availability</h4>
                <p className="text-muted-foreground">Available for work</p>
              </div>
            </div>
            <a 
              href="#contact"
              className="inline-flex items-center text-purple-light hover:text-white transition-colors link-underline"
            >
              <span>Get in touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}