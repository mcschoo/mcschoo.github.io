interface TechItem {
    name: string;
    icon: string;
  }
  
  const techStack: TechItem[] = [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "📘" },
    { name: "C++", icon: "💻" },
    { name: "React", icon: "⚛️" },
    { name: "React Native", icon: "📱" },
    { name: "Node.js", icon: "🟢" },
    { name: "Next.js", icon: "▲" },
    { name: "Firebase", icon: "🔥" },
    { name: "FastAPI", icon: "⚡" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Git", icon: "📂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Pandas", icon: "🐼" },
    { name: "Scikit-learn", icon: "🤖" },
    { name: "AWS", icon: "☁️" },
    { name: "Streamlit", icon: "📊" },
  ];
  
  const TechStackSection = () => {
    return (
      <section className="py-24 bg-card/50 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Tech Stack
          </h2>
        </div>
  
        {/* Marquee container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card/50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card/50 to-transparent z-10" />
  
          {/* First row */}
          <div className="flex mb-6 animate-marquee">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-3 flex items-center gap-3 bg-secondary border border-border rounded-lg px-5 py-3 hover:border-primary/50 transition-colors"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-foreground font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
  
          {/* Second row - reverse direction */}
          <div
            className="flex animate-marquee"
            style={{ animationDirection: "reverse", animationDuration: "35s" }}
          >
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-3 flex items-center gap-3 bg-secondary border border-border rounded-lg px-5 py-3 hover:border-primary/50 transition-colors"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-foreground font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TechStackSection;
  