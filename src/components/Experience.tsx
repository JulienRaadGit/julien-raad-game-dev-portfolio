import { motion } from "framer-motion";
import { Briefcase, Code, Building } from "lucide-react";

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
    <section id="experience" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Expériences</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Mes expériences professionnelles et projets personnels en développement.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.type);
            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold">
                          {exp.role}
                        </h3>
                        <p className="text-muted-foreground">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 ml-16">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-2"
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
