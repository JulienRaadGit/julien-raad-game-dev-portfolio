import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
  image: string;
  index: number;
  award?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  tags,
  features,
  image,
  index,
  award,
}: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {award && (
          <div className="absolute top-4 right-4 flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium">
            <Trophy className="w-4 h-4" />
            {award}
          </div>
        )}
      </div>
      
      <div className="p-6 md:p-8">
        <p className="text-primary text-sm font-medium tracking-wide uppercase mb-2">
          {subtitle}
        </p>
        
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="border-t border-border pt-6">
          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
            Fonctionnalités clés
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="text-primary mt-1">▸</span>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
