import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, type ProjectData } from "@/data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <>
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mes <span className="text-gradient">Projets</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Découvrez mes réalisations en développement de jeux, du mobile casual aux game jams intenses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                shortDescription={project.shortDescription}
                tags={project.tags}
                image={project.image}
                index={index}
                award={project.id === "souls-judgment" ? "2ᵉ place" : undefined}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default Projects;
