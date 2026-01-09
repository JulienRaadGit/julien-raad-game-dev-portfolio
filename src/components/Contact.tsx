import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/JulienRaadGit",
    icon: Github,
    username: "@JulienRaadGit",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/julien-raad/",
    icon: Linkedin,
    username: "Julien Raad",
  },
  {
    label: "Email",
    href: "mailto:julien.raadd@gmail.com",
    icon: Mail,
    username: "julien.raadd@gmail.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Intéressé par une collaboration ou simplement envie de discuter de game dev ? N'hésitez pas à me contacter.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center justify-between p-6 bg-gradient-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <link.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">{link.label}</p>
                  <p className="text-sm text-muted-foreground">{link.username}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
