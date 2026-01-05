import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-display font-bold text-foreground hover:text-accent transition-colors">
            Mikey Schoonmaker
          </a>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About
            </button>
            <div className="relative group">
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium">
                Let's Connect
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 py-2 px-4 bg-card border border-border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg min-w-[160px]">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
            <Button variant="nav" size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
