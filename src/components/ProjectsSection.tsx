import { motion } from "framer-motion";
import projectAR from "@/assets/project-ar.jpg";
import projectBracelet from "@/assets/project-bracelet.jpg";
import projectMedical from "@/assets/project-medical.jpg";
import projectPointcloud from "@/assets/project-pointcloud.jpg";
import projectVision from "@/assets/project-vision.jpg";

const projects = [
  {
    title: "AR Building Visualization",
    description: "Developed AR infrastructure application using Unity for interactive building visualization. Created IFC viewer with JavaScript and Three.js for comprehensive building models.",
    tags: ["Unity", "Three.js", "JavaScript", "AR"],
    image: projectAR,
  },
  {
    title: "3D Point Cloud Processing",
    description: "Implemented Gaussian splat rendering technology, improving efficiency and reducing file sizes. Processed and classified point cloud data using Spatial LM with Python.",
    tags: ["Python", "Point Cloud", "Gaussian Splatting", "Linux"],
    image: projectPointcloud,
  },
  {
    title: "Smart Medical Bracelet",
    description: "Designed wearable device using Arduino to measure vital signs including heart rate, oxygen saturation, and GPS location. Built information system with Python and MySQL.",
    tags: ["Arduino", "Python", "MySQL", "IoT"],
    image: projectBracelet,
  },
  {
    title: "Medical Imaging AI",
    description: "Developed algorithms using classic and AI approaches for skin cancer classification and tumor detection in medical imaging using Python and MATLAB.",
    tags: ["Python", "MATLAB", "Deep Learning", "Medical Imaging"],
    image: projectMedical,
  },
  {
    title: "Computer Vision Sports Tracker",
    description: "Created computer vision system to track soccer ball bouncing count and detect violations like hand touching and ball falling to the floor.",
    tags: ["Python", "Computer Vision", "OpenCV"],
    image: projectVision,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold">Selected Projects</h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group grid md:grid-cols-2 gap-6 p-6 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-64 object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-secondary-foreground leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
