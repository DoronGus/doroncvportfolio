import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "Unity/C#"],
  },
  {
    category: "3D & Visualization",
    skills: ["Three.js", "Point Cloud Processing", "Gaussian Splatting", "VR/AR", "Blender"],
  },
  {
    category: "Data & Medical",
    skills: ["MySQL", "Signal Processing", "Image Processing", "MATLAB"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Arduino", "Git", "Power Automate", "Linux", "SolidWorks", "Ansys Fluent"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-3xl md:text-5xl font-bold">Technical Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-md bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
