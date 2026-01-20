import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Zenin",
    description:
      "A personal finance tracker app, analyzing transactions and suggesting savings strategies.",
    tags: ["React Native", "Firebase"],
  },
  {
    title: "Dazai",
    description:
      "A quantitative trading algorithm for stocks and crypto using Python, focused on market analysis.",
    tags: ["Python", "Pandas", "Streamlit"],
  },
  {
    title: "RentKr",
    description:
      "A MERN stack website for renting items, targeted at bachelors and college students.",
    tags: ["React.js", "NodeJs", "MongoDB", "JavaScript"],
  },
  {
    title: "Lexx",
    description:
      "AI legal chat focused on Indian laws. RAG-powered answers with real citations. Built with Next.js, FastAPI & OpenRouter.",
    tags: ["Next.js", "FastAPI", "Python", "RAG"],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 card-glow hover:glow-border">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-display font-bold text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
      </div>
      <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-badge">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
