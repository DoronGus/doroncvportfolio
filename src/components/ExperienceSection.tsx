import { motion } from "framer-motion";

const education = [
  {
    period: "2019 — 2023",
    title: "B.Sc Medical Engineering",
    company: "Afeka College of Engineering",
    description: "GPA 86.6 · Specialization in Medical Information Systems",
  },
];

const experiences = [
  {
    period: "2024 — 2025",
    title: "Software & 3D Modeling Engineer",
    company: "Geemaps",
    description: "Developed AR infrastructure applications using Unity and Three.js for interactive building visualization. Implemented Gaussian splat rendering technology, improving efficiency and reducing file sizes. Processed and classified point cloud data using Python and conducted field laser scanning operations. A fast learner who thrived in a dynamic environment, quickly picking up new technologies and taking ownership of end-to-end project delivery.",
  },
  {
    period: "2022 — 2024",
    title: "Chess Teacher",
    company: "Private",
    description: "Designed and delivered structured learning programs tailored to students of various skill levels, from beginners to competitive players. Passionate about teaching and breaking down complex strategies into approachable lessons. Built strong relationships with students through patience, encouragement, and a genuine love for sharing knowledge.",
  },
  {
    period: "2021 — 2024",
    title: "Math Tutor",
    company: "Zeitlin High-School",
    description: "Provided specialized mathematics instruction for high school students, helping them build confidence and achieve academic goals. Known for a patient and adaptive teaching style, taking responsibility for each student's progress and finding creative ways to make challenging concepts click.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-3xl md:text-5xl font-bold">Education</h2>
        </motion.div>

        <div className="space-y-0 mb-20">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group grid md:grid-cols-[160px_1fr] gap-4 py-8 border-b border-border last:border-0"
            >
              <span className="font-mono text-sm text-muted-foreground pt-1">{item.period}</span>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{item.company}</p>
                <p className="text-secondary-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">Experience</h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group grid md:grid-cols-[160px_1fr] gap-4 py-8 border-b border-border last:border-0"
            >
              <span className="font-mono text-sm text-muted-foreground pt-1">{item.period}</span>
              <div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{item.company}</p>
                <p className="text-secondary-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
