import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, MessageSquare } from "lucide-react";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/JulienRaadGit",
    icon: Github,
    username: "@JulienRaadGit",
    color: "group-hover:bg-[#333] group-hover:text-white",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/julien-raad/",
    icon: Linkedin,
    username: "Julien Raad",
    color: "group-hover:bg-[#0077B5] group-hover:text-white",
  },
  {
    label: "Email",
    href: "mailto:julien.raadd@gmail.com",
    icon: Mail,
    username: "julien.raadd@gmail.com",
    color: "group-hover:bg-primary group-hover:text-primary-foreground",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Disponible pour discuter</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Intéressé par une collaboration ou simplement envie de discuter de game dev ? 
            N'hésitez pas à me contacter.
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
              className="group relative overflow-hidden p-6 bg-card/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-secondary transition-all duration-300 ${link.color}`}>
                  <link.icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <div>
                <p className="font-display font-semibold text-lg mb-1">{link.label}</p>
                <p className="text-sm text-muted-foreground truncate">{link.username}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
