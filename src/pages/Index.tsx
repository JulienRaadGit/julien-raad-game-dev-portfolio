import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
