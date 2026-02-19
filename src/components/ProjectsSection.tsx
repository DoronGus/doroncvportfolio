import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, Github, Play } from "lucide-react";
import projectBracelet from "@/assets/project-bracelet.jpg";
import projectMedical from "@/assets/project-medical.jpg";
import projectVision from "@/assets/project-vision.jpg";

const projects = [
  {
    title: "Smart Medical Bracelet",
    description:
      "Designed and verified a wearable medical device using Arduino to measure vital signs (heart rate, SpO2, GPS). Conducted V&V testing, defined requirements, and built an information system with Python and MySQL following quality-driven development practices.",
    extendedDescription:
      "The Embracelet is a wearable health monitoring bracelet built on an Arduino microcontroller. It continuously measures heart rate (BPM), blood oxygen saturation (SpO2), and GPS location, transmitting data via Bluetooth to a Python desktop application. Patient readings are stored in a MySQL database with real-time dashboards for medical staff. The project followed formal V&V methodology including requirements definition, test planning, and systematic verification and validation testing across all hardware and software modules.",
    tags: ["V&V", "Medical Devices", "Python", "MySQL", "IoT", "Arduino", "Bluetooth"],
    image: projectBracelet,
    reportUrl: "/reports/embracelet_project_book.docx",
    codeUrl: "https://github.com/DoronGus/smart_bracelet_full_stack",
    videoUrl: null as string | null,
  },
  {
    title: "Patient Information System",
    description:
      "Full-stack patient information management system with a graphical interface, SQLite database, and real-time Arduino integration for monitoring and managing patient vital sign data.",
    extendedDescription:
      "A comprehensive patient information system built with Python and SQLite following MVC architecture. The application features a GUI for managing patient records, real-time vital signs ingestion from the smart bracelet via Arduino serial communication, patient history tracking, and an interactive map view showing patient locations. Developed with software quality standards and tested against defined functional and non-functional requirements.",
    tags: ["Python", "SQLite", "MVC", "GUI", "Arduino", "Healthcare IT"],
    image: projectMedical,
    reportUrl: "/reports/patient_information_system_report.pptx",
    codeUrl: "https://github.com/DoronGus/lung_cancer_mvc_information_system",
    videoUrl: null as string | null,
  },
  {
    title: "Computer Vision Sports Tracker",
    description:
      "Real-time computer vision system for sports ball tracking and bouncing event detection using optical flow, background subtraction, and deep learning techniques.",
    extendedDescription:
      "Developed as part of an M.Sc. course in Digital Image Processing, this system uses Python and OpenCV to detect and track a sports ball during juggling exercises. The algorithm identifies bouncing events, hand-ball contact moments, and out-of-frame occurrences using a combination of optical flow, background subtraction, and frame differencing. MATLAB was used for initial prototyping. The project includes comprehensive V&V evaluation of detection accuracy across multiple test videos.",
    tags: ["R&D", "V&V", "Python", "OpenCV", "Optical Flow", "MATLAB", "M.Sc."],
    image: projectVision,
    reportUrl: "/reports/ball_detection_report.pdf",
    codeUrl: null as string | null,
    videoUrl: null as string | null,
  },
];

type Project = (typeof projects)[0];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group border border-border bg-card/50 hover:border-primary/30 transition-all duration-300 rounded-lg overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-6 p-6">
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
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm text-primary font-mono tracking-wide hover:text-primary/80 transition-colors self-start"
          >
            {expanded ? "Hide details" : "View details"}
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={16} />
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-border pt-5">
              <p className="text-secondary-foreground leading-relaxed mb-6">
                {project.extendedDescription}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.reportUrl && (
                  <a
                    href={project.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
                  >
                    <FileText size={15} />
                    View Report
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
                  >
                    <Github size={15} />
                    View Code
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm hover:border-primary/50 hover:text-primary transition-all duration-200"
                  >
                    <Play size={15} />
                    Watch Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

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
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
