import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

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
    <section id="education" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Parcours académique
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Formation</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Mon parcours académique en informatique et développement de jeux vidéo.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full border-4 border-background ${
                  item.highlight ? 'bg-primary' : 'bg-muted-foreground'
                }`} />

                <div
                  className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                    item.highlight
                      ? "bg-primary/5 border-primary/20"
                      : "bg-card/50 border-border/50"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl ${item.highlight ? 'bg-primary/20' : 'bg-secondary'}`}>
                        <GraduationCap className={`w-5 h-5 ${item.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg md:text-xl font-semibold mb-1">
                          {item.school}
                        </h3>
                        <p className="text-primary font-medium">{item.degree}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/80 px-3 py-1.5 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {item.details}
                  </p>

                  {item.honors && (
                    <div className="inline-flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                      <Award className="w-4 h-4" />
                      <span className="font-medium">{item.honors}</span>
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
