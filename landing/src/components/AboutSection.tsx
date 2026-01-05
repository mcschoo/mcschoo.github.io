import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
          I’m a Computer Science major with a minor in AI at Clemson University, graduating in May 2026. My experience spans network security and
          information systems at Giorgio Armani, embedded systems and RAG pipelines at Aeronix, and VLM agent development at NVIDIA. 
          Beyond my strengths in bridging embedded systems and artificial intelligence, I have a passion for connecting with people across industry domains.
          I’ve sent off two papers for publication, and post grad will be exploring opportunities in Forward Deploy Software Engineering.
          </p>
          <Button variant="ghost" className="gap-2 text-accent hover:text-accent/80 p-0">
            More About Me
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
