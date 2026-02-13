import { useState } from "react";
import Layout from "@/components/Layout";

interface Paper {
  title: string;
  abstract: string;
  url: string;
}

interface Folder {
  name: string;
  papers: Paper[];
}

const readingsData: Folder[] = [
  {
    name: "Attention & Transformers",
    papers: [
      {
        title: "Attention Is All You Need",
        abstract:
          "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms.",
        url: "https://arxiv.org/abs/1706.03762",
      },
      {
        title: "FlashAttention: Fast and Memory-Efficient Exact Attention",
        abstract:
          "Transformers are slow and memory-hungry on long sequences, since the time and memory complexity of self-attention are quadratic in sequence length. We propose FlashAttention, an IO-aware exact attention algorithm that uses tiling to reduce memory reads/writes between GPU high bandwidth memory and on-chip SRAM.",
        url: "https://arxiv.org/abs/2205.14135",
      },
    ],
  },
  {
    name: "Reinforcement Learning",
    papers: [
      {
        title: "Playing Atari with Deep Reinforcement Learning",
        abstract:
          "We present the first deep learning model to successfully learn control policies directly from high-dimensional sensory input using reinforcement learning. The model is a convolutional neural network, trained with a variant of Q-learning.",
        url: "https://arxiv.org/abs/1312.5602",
      },
      {
        title: "Proximal Policy Optimization Algorithms",
        abstract:
          "We propose a new family of policy gradient methods for reinforcement learning, which alternate between sampling data through interaction with the environment, and optimizing a surrogate objective function using stochastic gradient ascent.",
        url: "https://arxiv.org/abs/1707.06347",
      },
    ],
  },
  {
    name: "Representation Learning",
    papers: [
      {
        title: "A Simple Framework for Contrastive Learning of Visual Representations",
        abstract:
          "This paper presents SimCLR: a simple framework for contrastive learning of visual representations. We simplify recently proposed contrastive self-supervised learning algorithms without requiring specialized architectures or a memory bank.",
        url: "https://arxiv.org/abs/2002.05709",
      },
    ],
  },
];

const Readings = () => {
  const [openFolder, setOpenFolder] = useState<string | null>(null);

  return (
    <Layout>
      <section className="container py-16 md:py-24 max-w-3xl">
        <h1 className="text-4xl md:text-5xl mb-2">Readings</h1>
        <p className="text-muted-foreground mb-12">
          A curated collection of papers, organized by topic.
        </p>

        {/* Breadcrumb */}
        <div className="font-mono text-xs text-muted-foreground mb-6 flex items-center gap-1">
          <button
            onClick={() => setOpenFolder(null)}
            className={`hover:text-foreground transition-colors ${!openFolder ? "text-foreground" : ""}`}
          >
            ~/readings
          </button>
          {openFolder && (
            <>
              <span>/</span>
              <span className="text-foreground">{openFolder.toLowerCase().replace(/\s+/g, "-")}</span>
            </>
          )}
        </div>

        {/* Folder / File View */}
        <div className="border-t">
          {!openFolder ? (
            // Folder list
            readingsData.map((folder) => (
              <button
                key={folder.name}
                onClick={() => setOpenFolder(folder.name)}
                className="w-full text-left border-b py-3 px-4 hover:bg-secondary transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-accent">📁</span>
                  <span className="text-sm">{folder.name}</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {folder.papers.length} papers
                </span>
              </button>
            ))
          ) : (
            // Paper list within a folder
            <>
              <button
                onClick={() => setOpenFolder(null)}
                className="w-full text-left border-b py-3 px-4 hover:bg-secondary transition-colors flex items-center gap-3 font-mono text-sm text-muted-foreground"
              >
                ← ..
              </button>
              {readingsData
                .find((f) => f.name === openFolder)
                ?.papers.map((paper) => (
                  <a
                    key={paper.title}
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-b py-4 px-4 hover:bg-secondary transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-sm text-muted-foreground mt-0.5">📄</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold mb-1 group-hover:text-accent transition-colors">
                          {paper.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                          {paper.abstract}
                        </p>
                        <span className="font-mono text-xs text-accent mt-2 inline-block">
                          arxiv ↗
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Readings;
