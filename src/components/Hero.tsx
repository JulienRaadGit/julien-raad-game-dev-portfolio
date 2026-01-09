import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center z-10 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-muted-foreground text-sm tracking-wide">
            Disponible pour opportunités
          </span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-medium"
        >
          Unity Game Developer
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95]"
        >
          Julien <span className="text-gradient">Raad</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Développeur de jeux Unity spécialisé en mobile. Passionné par la création 
          d'expériences de jeu <span className="text-foreground">uniques</span> et <span className="text-foreground">engageantes</span>.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://github.com/JulienRaadGit"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 rounded-full bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300"
          >
            <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/julien-raad/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-3 rounded-full bg-secondary border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:julien.raadd@gmail.com"
            className="group flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm font-medium">Me contacter</span>
          </a>
        </motion.div>
      </motion.div>
      
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
