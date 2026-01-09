import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    school: "Gaming Campus Paris",
    degree: "Bachelor's Degree in Game Programming",
    year: "2025",
    details: "Spécialisation en développement de jeux Unity et mobile",
    highlight: true,
  },
  {
    school: "CY Cergy Paris Université",
    degree: "Licence Informatique",
    year: "2025",
    details: "Diplômé avec mention. Développement logiciel, bases de données, POO, Python, Java, C",
    honors: "Mention Bien",
  },
  {
    school: "Lycée Jules Ferry",
    degree: "Baccalauréat",
    year: "2022",
    details: "Spécialités Mathématiques & Informatique",
    honors: "Mention Très Bien",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Formation</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Mon parcours académique en informatique et développement de jeux vidéo.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div
                  className={`ml-0 md:ml-16 p-6 rounded-2xl border transition-all duration-300 hover:border-primary/50 ${
                    item.highlight
                      ? "bg-primary/5 border-primary/30"
                      : "bg-secondary/30 border-border"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold">
                          {item.school}
                        </h3>
                        <p className="text-primary font-medium">{item.degree}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-2">
                    {item.details}
                  </p>

                  {item.honors && (
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-primary font-medium">{item.honors}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
