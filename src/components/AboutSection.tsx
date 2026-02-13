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
          Michael Schoonmaker is a Computer Science major with a minor in Artificial Intelligence, 
          and university research in Human-AI Teaming. His background spans embedded systems research in partnership with NASA, 
          embedded systems engineering at Aeronix, and vision language model research at NVIDIA. His work focuses on bridging 
          embedded systems, artificial intelligence, and human-computer interaction to deploy robotic and edge-AI applications.
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
