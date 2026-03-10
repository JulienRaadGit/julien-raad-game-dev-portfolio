import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Play, Download } from "lucide-react";
import { useEffect } from "react";
import type { ProjectData } from "@/data/projects";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

const iconMap = {
  github: Github,
  video: Play,
  download: Download,
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero image */}
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 space-y-8 -mt-12 relative">
              {/* Title + tags */}
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/80 text-secondary-foreground text-xs font-medium rounded-full border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {project.overview}
                </p>
              </div>

              {/* Sections grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <Section title="Context" content={project.context} />
                <Section title="What I Worked On" content={project.work} />
              </div>

              {/* Tech / Tools */}
              <div>
                <h4 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Tech & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techTools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-lg border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key takeaways */}
              <div>
                <h4 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Key Takeaways
                </h4>
                <ul className="space-y-3">
                  {project.takeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                  {project.links.map((link) => {
                    const Icon = iconMap[link.icon];
                    return (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-200"
                      >
                        <Icon className="w-4 h-4" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Section = ({ title, content }: { title: string; content: string }) => (
  <div>
    <h4 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
      {title}
    </h4>
    <p className="text-foreground/80 text-sm leading-relaxed">{content}</p>
  </div>
);

export default ProjectModal;
