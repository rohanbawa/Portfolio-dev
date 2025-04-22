
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    category: "3D & Animation",
    items: [
      { name: "Three.js", level: 85 },
      { name: "WebGL", level: 75 },
      { name: "GSAP", level: 80 },
      { name: "Framer Motion", level: 85 },
      { name: "Blender", level: 70 }
    ]
  },
  {
    category: "Design",
    items: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 85 },
      { name: "Photoshop", level: 75 },
      { name: "Illustrator", level: 70 },
      { name: "UI/UX", level: 85 }
    ]
  }
];

function SkillBar({ name, level, index, inView }: { name: string; level: number; index: number; inView: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-sm font-medium text-purple-light">{level}%</span>
      </div>
      <div className="w-full bg-purple/10 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-purple-light to-purple"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, items, inView }: { category: string; items: { name: string; level: number }[]; inView: boolean }) {
  return (
    <div className="p-6 bg-black/20 backdrop-blur-sm border border-purple/10 rounded-xl">
      <h3 className="text-xl font-bold mb-4 text-white">{category}</h3>
      {items.map((skill, index) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          index={index}
          inView={inView}
        />
      ))}
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">My Skills</h2>
          <div className="w-20 h-1 bg-purple-light mx-auto mb-6"></div>
          <p className="text-muted-foreground">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <SkillCategory
                category={skill.category}
                items={skill.items}
                inView={inView}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}