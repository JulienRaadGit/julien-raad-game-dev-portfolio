import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import fishingGame from "@/assets/fishing-game.jpg";
import burgerGame from "@/assets/burger-game.jpg";
import soulsJudgment from "@/assets/souls-judgment.jpg";

const projects = [
  {
    title: "Mobile Fishing Game",
    subtitle: "Projet le plus récent",
    description:
      "Jeu de pêche mobile 2D développé sous Unity. Une expérience relaxante et addictive où les joueurs explorent différents environnements aquatiques pour capturer une variété de poissons.",
    tags: ["Unity", "C#", "Mobile", "2D", "Casual Game"],
    features: [
      "Mécanique de pêche intuitive",
      "Variété de poissons à capturer",
      "Système de progression",
      "Optimisé mobile",
    ],
    image: fishingGame,
  },
  {
    title: "Burger Assembly",
    subtitle: "Projet UI/UX Unity",
    description:
      "Jeu 3D d'assemblage de burgers développé dans le cadre d'un cours UI/UX Unity. Focus sur l'ergonomie, les feedbacks visuels et l'expérience utilisateur intuitive.",
    tags: ["Unity", "C#", "3D", "UI/UX", "Casual"],
    features: [
      "Interface utilisateur intuitive",
      "Feedbacks visuels soignés",
      "Mécanique drag & drop",
      "Design ergonomique",
    ],
    image: burgerGame,
  },
  {
    title: "Soul's Judgment",
    subtitle: "Game Jam 2025 – Gaming Campus Paris",
    description:
      'Dungeon crawler procédural égyptien développé en 39 heures. Trois bugs célèbres de jeux vidéo transformés en mécaniques de gameplay intentionnelles. Thème : "It\'s not a bug, it\'s a feature."',
    tags: ["Unity", "C#", "3D", "Procedural", "Game Jam"],
    features: [
      "Rollback Teleport (fausse perte de connexion)",
      "Clipping Movement (traverser les murs)",
      "Physics Bug (collision chaos)",
      "Génération procédurale de donjons",
      "Assets 3D originaux créés pendant la jam",
      "Auto-shoot intelligent",
    ],
    image: soulsJudgment,
    award: "2ᵉ place / 6 équipes",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Découvrez mes réalisations en développement de jeux Unity, du mobile casual aux game jams intenses.
          </p>
        </motion.div>
        
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
