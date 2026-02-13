import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import RotatingPhotos from "@/components/RotatingPhotos";

const projects = [
  {
    title: "Economic Data Valuation Model",
    description: "Partnering with BMW to build a VSS agent & model introspection tool capable of defining the value of video data to 3rd party vendors.",
    tags: ["Machine Learning", "Deep Learning", "Financial Modeling", "Computer Vision"],
  },
  {
    title: "Physical AI VSS Agent using Multi-modal Embeddings",
    description: "Partnered with NVIDIA to create a VSS agent for physical AI to extend long video understanding by 10.23%.",
    tags: ["Applied AI", "Agentic AI", "Computer Vision"],
  },
  {
    title: "Agentic RAG for Proprietary Documentation",
    description: "Proposed and implemented an agentic NLP project to & for Aeronix Technologies Group, providing company projected savings of 9200hrs/quarter",
    tags: ["Applied AI", "Agentic AI", "NLP"],
  },
  {
    title: "Bare-Metal Mesh Radio Firmware Package",
    description: "Developed a firmware package for a custom PCB made to support long range communications from multi-role aircraft, at a data rate of 37.5 kbps",
    tags: ["Embedded Systems", "Radio Frequency", "Aerial Interoperability"],
  },
];

const publications = [
  {
    title: "Eliciting Team Roles for Human-Autonomy Teams in Hazardous Environments",
    venue: "Under Review",
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
              Mikey
              <br />
              <span className="text-muted-foreground">Schoonmaker</span>
            </h1>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Hello! My name's Mikey, I'm a researcher and an engineer building intelligent
              systems for business applications, with the goal of creating a more connected world.
              I study deep learning and distributed computing.
            </p>
            <div className="mt-8 flex gap-4">
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
                Recent Projects (12 months)
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
