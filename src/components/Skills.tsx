import { motion } from "framer-motion";
import { Code, Gamepad2, Brain, Users, Cpu, GitBranch } from "lucide-react";

const skillCategories = [
    {
        title: "Programming",
        icon: Code,
        skills: ["C#", "Python", "Java", "Kotlin", "SQL", "HTML/CSS"],
    },
    {
        title: "Engines & Tools",
        icon: Gamepad2,
        skills: ["Unity (2D/3D/VR)", "Android Studio", "Firebase", "Git", "Gradle"],
    },
    {
        title: "Concepts",
        icon: Brain,
        skills: [
            "Gameplay systems",
            "Interaction logic",
            "Physics",
            "Data structures",
            "Optimization",
        ],
    },
    {
        title: "Soft Skills",
        icon: Users,
        skills: [
            "Curiosity",
            "Teamwork",
            "Problem-solving",
            "Adaptability",
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-secondary/20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                        Compétences
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="text-gradient">Expertise</span> Technique
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                        Une boîte à outils complète pour donner vie à des expériences interactives.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                <category.icon className="w-6 h-6" />
                            </div>

                            <h3 className="font-display text-xl font-bold mb-4">{category.title}</h3>

                            <ul className="space-y-3">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-muted-foreground text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
