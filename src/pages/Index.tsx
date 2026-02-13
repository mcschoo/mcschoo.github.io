import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import RotatingPhotos from "@/components/RotatingPhotos";

const projects = [
  {
    title: "Project Alpha",
    description: "Large-scale distributed systems optimization for real-time inference pipelines.",
    tags: ["Systems", "ML Infrastructure"],
  },
  {
    title: "Project Beta",
    description: "Novel approach to multi-modal representation learning across vision and language.",
    tags: ["Research", "Deep Learning"],
  },
  {
    title: "Project Gamma",
    description: "End-to-end platform for automated experiment tracking and model deployment.",
    tags: ["MLOps", "Platform"],
  },
];

const publications = [
  {
    title: "On the Convergence of Adaptive Learning Rate Methods",
    venue: "NeurIPS 2024",
  },
  {
    title: "Efficient Attention Mechanisms for Long-Context Transformers",
    venue: "ICML 2024",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
              Your
              <br />
              Name
              <br />
              <span className="text-muted-foreground">Here.</span>
            </h1>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Researcher and engineer building intelligent systems at the intersection
              of machine learning and distributed computing.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="mailto:you@example.com"
                className="font-mono text-sm border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                Get in touch
              </a>
              <Link
                to="/writings"
                className="font-mono text-sm text-muted-foreground px-5 py-2.5 hover:text-foreground transition-colors"
              >
                Read my work →
              </Link>
            </div>
          </div>
          <RotatingPhotos />
        </div>
      </section>

      {/* Projects & Publications */}
      <section className="border-t">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Projects */}
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
                Selected Projects
              </h2>
              <div className="space-y-8">
                {projects.map((project) => (
                  <div key={project.title} className="group">
                    <h3 className="text-xl mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-muted-foreground border px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div>
              <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
                Publications
              </h2>
              <div className="space-y-6">
                {publications.map((pub) => (
                  <div key={pub.title} className="group">
                    <h3 className="text-lg mb-1">{pub.title}</h3>
                    <span className="font-mono text-xs text-accent">{pub.venue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="border-t">
        <div className="container py-16 md:py-24">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Explore
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/readings"
              className="border p-6 hover:bg-secondary transition-colors group"
            >
              <h3 className="text-lg mb-1">Readings</h3>
              <p className="text-sm text-muted-foreground">
                Curated papers organized by topic.
              </p>
              <span className="font-mono text-xs text-accent mt-3 block group-hover:translate-x-1 transition-transform">
                Browse →
              </span>
            </Link>
            <Link
              to="/writings"
              className="border p-6 hover:bg-secondary transition-colors group"
            >
              <h3 className="text-lg mb-1">Writings</h3>
              <p className="text-sm text-muted-foreground">
                Technical breakdowns and essays.
              </p>
              <span className="font-mono text-xs text-accent mt-3 block group-hover:translate-x-1 transition-transform">
                Read →
              </span>
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-6 hover:bg-secondary transition-colors group"
            >
              <h3 className="text-lg mb-1">Connect</h3>
              <p className="text-sm text-muted-foreground">
                Find me on LinkedIn.
              </p>
              <span className="font-mono text-xs text-accent mt-3 block group-hover:translate-x-1 transition-transform">
                Visit ↗
              </span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
