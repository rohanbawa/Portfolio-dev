
import { motion } from 'framer-motion';
import ProjectsScene from '../three/ProjectsScene';  

const projects = [
  {
    title: "Web Design Portfolio",
    description: "Modern portfolio website with interactive elements and smooth animations.",
    tags: ["React", "Three.js", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Chess",
    description: "Fully responsive e-commerce site with cart functionality and payment integration.",
    tags: ["Next.js", "Stripe", "Redux"],
    link: "#"
  },
  {
    title: "Crypto Tracker",
    description: "Interactive 3D product visualization tool for online shopping experiences.",
    tags: ["Three.js", "React", "WebGL"],
    link: "#"
  },
  {
    title: "Mobile App Design",
    description: "UI/UX design and prototype for a health and fitness tracking mobile application.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background/90 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">My Projects</h2>
          <div className="w-20 h-1 bg-purple-light mx-auto mb-6"></div>
          <p className="text-muted-foreground">A selection of my recent work</p>
        </motion.div>

        {/* 3D Project Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <ProjectsScene />
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-black/20 backdrop-blur-sm border border-purple/10 rounded-xl overflow-hidden hover:border-purple/30 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-purple/10 text-purple-light text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-purple-light hover:text-white transition-colors link-underline"
                >
                  <span>View Project</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}