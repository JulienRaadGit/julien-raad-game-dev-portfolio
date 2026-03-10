import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  tags: string[];
  image: string;
  award?: string;
  onClick: () => void;
  index: number;
}

const ProjectCard = ({
  title,
  shortDescription,
  tags,
  image,
  award,
  onClick,
  index,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      className="group cursor-pointer relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/40 hover:shadow-glow transition-all duration-400"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {award && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            <Trophy className="w-3.5 h-3.5" />
            {award}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-secondary/80 text-secondary-foreground text-[11px] font-medium rounded-full border border-border/40"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-2.5 py-1 text-muted-foreground text-[11px] font-medium">
              +{tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
