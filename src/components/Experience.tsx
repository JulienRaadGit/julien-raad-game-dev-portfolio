import { motion } from "framer-motion";
import { Briefcase, Code, Building, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Progestio",
    location: "Paris",
    role: "Stagiaire Développement Web",
    period: "Juin – Août 2025",
    description: [
      "Refonte complète du site web de l'entreprise",
      "Travail sur la structure, le responsive design et l'optimisation des performances",
    ],
    type: "internship",
  },
  {
    company: "Projets personnels",
    location: "France",
    role: "Développeur Unity Mobile",
    period: "2023 – Présent",
    description: [
      "Nyra (Unity Android) – Jeu survivor-like 2D développé en solo",
      "Tilt The Line (Android Studio) – Jeu mobile avec contrôles accéléromètre",
      "Corvio.xyz – Application fitness web avec OpenAI API et Firebase",
    ],
    type: "personal",
    highlight: true,
  },
  {
    company: "Synchrone",
    location: "Paris",
    role: "Stage d'observation",
    period: "2018",
    description: [
      "Découverte du conseil IT et des environnements de gestion de projet",
    ],
    type: "observation",
  },
];

const Experience = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "personal":
        return Code;
      case "observation":
        return Building;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Parcours professionnel
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Expériences</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Mes expériences professionnelles et projets personnels en développement.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.type);
            const isHighlight = exp.highlight;
            
            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                  isHighlight 
                    ? 'bg-primary/5 border-primary/20' 
                    : 'bg-card/50 border-border/50 backdrop-blur-sm'
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl transition-colors ${
                        isHighlight ? 'bg-primary/20' : 'bg-secondary group-hover:bg-primary/10'
                      }`}>
                        <Icon className={`w-5 h-5 ${isHighlight ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'} transition-colors`} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg md:text-xl font-semibold mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm">
                          <span className="font-medium text-foreground/80">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/80 px-3 py-1.5 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2.5 ml-0 md:ml-16">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-3 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
