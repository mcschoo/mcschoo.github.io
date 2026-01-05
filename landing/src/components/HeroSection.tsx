import Typewriter from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const words = ["Web Apps", "Mobile Apps", "AI Solutions"];

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-4 leading-tight">
            I Build <Typewriter words={words} />
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8">
            <span className="gradient-text">Evolving into Quantum Computing</span>
          </h2>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Full-stack developer (Python, Next.js, React Native).
          </p>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Currently diving into LLMs and RAG to build smarter products.
          </p>
          <p className="text-accent text-xl md:text-2xl font-semibold mb-12 font-display">
            Code. Learn. Ship. Repeat.
          </p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="lg" onClick={scrollToProjects}>
            Explore My Work
          </Button>
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-float"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
