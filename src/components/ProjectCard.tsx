import { motion } from "framer-motion";
import { Trophy, Gamepad2 } from "lucide-react";

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
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Image */}
        <div className={`relative overflow-hidden rounded-2xl ${!isEven ? 'lg:col-start-2' : ''}`}>
          <div className="aspect-video overflow-hidden rounded-2xl border border-border/50 bg-card">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
          
          {award && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute top-4 right-4 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              <Trophy className="w-4 h-4" />
              {award}
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className={`space-y-6 ${!isEven ? 'lg:col-start-1' : ''}`}>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Gamepad2 className="w-4 h-4 text-primary" />
              </div>
              <span className="text-primary text-sm font-medium tracking-wide uppercase">
                {subtitle}
              </span>
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground text-xs font-medium rounded-full border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="pt-4 border-t border-border/50">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Fonctionnalités clés
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
