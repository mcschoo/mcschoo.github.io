import Layout from "@/components/Layout";

interface Article {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  content: string;
}

const articles: Article[] = [
  {
    title: "Understanding Gradient Accumulation in Distributed Training",
    description:
      "A practical breakdown of how gradient accumulation enables training with effective batch sizes far larger than GPU memory allows.",
    date: "2025-01-15",
    tags: ["Distributed Systems", "Training"],
    slug: "gradient-accumulation",
    content: `When training large models across multiple GPUs, the effective batch size is a critical hyperparameter. Gradient accumulation allows us to simulate larger batch sizes without requiring proportionally more memory.

## The Core Idea

Instead of updating model weights after every forward-backward pass, we accumulate gradients over multiple mini-batches before performing a single optimizer step. This is mathematically equivalent to using a larger batch size.

## Why It Matters

In distributed training, communication overhead is a dominant cost. By accumulating gradients locally before synchronization, we can reduce the frequency of all-reduce operations across nodes — improving throughput without sacrificing convergence.

## Implementation Notes

Most modern frameworks (PyTorch, JAX) support gradient accumulation natively. The key is to scale the loss by the accumulation factor to maintain correct gradient magnitudes.`,
  },
  {
    title: "A Primer on Ring All-Reduce",
    description:
      "How the ring all-reduce algorithm enables efficient gradient synchronization across GPU clusters.",
    date: "2024-11-20",
    tags: ["Distributed Systems", "Networking"],
    slug: "ring-all-reduce",
    content: `Ring all-reduce is a bandwidth-optimal algorithm for aggregating gradients across multiple workers in distributed training.

## How It Works

Workers are arranged in a logical ring. Each worker sends a chunk of its data to the next worker in the ring while simultaneously receiving a chunk from the previous worker. After N-1 steps (where N is the number of workers), every worker has the fully reduced result.

## Bandwidth Optimality

The total data transferred per worker is 2(N-1)/N times the data size, which approaches 2x for large N. This is optimal — no algorithm can do better.

## In Practice

Libraries like NCCL implement ring all-reduce (along with tree-based variants) and automatically select the best topology based on hardware.`,
  },
  {
    title: "KV-Cache and Why It Makes Inference Fast",
    description:
      "Explaining the key-value cache mechanism that makes autoregressive transformer inference tractable.",
    date: "2024-09-05",
    tags: ["Transformers", "Inference"],
    slug: "kv-cache",
    content: `Autoregressive transformers generate tokens one at a time. Without caching, each new token requires recomputing attention over all previous tokens — O(n²) per generation step.

## The KV-Cache

By caching the key and value projections from previous tokens, we avoid redundant computation. Each new token only needs to compute its own Q, K, V projections and attend to the cached keys and values.

## Memory Tradeoff

The KV-cache trades memory for compute. For long sequences, this cache can become the bottleneck. Techniques like Multi-Query Attention (MQA) and Grouped-Query Attention (GQA) reduce the cache size by sharing key-value heads.`,
  },
];

const Writings = () => {
  return (
    <Layout>
      <section className="container py-16 md:py-24 max-w-3xl">
        <h1 className="text-4xl md:text-5xl mb-2">Writings</h1>
        <p className="text-muted-foreground mb-12">
          Technical breakdowns and notes on topics I find interesting.
        </p>

        <div className="space-y-0 border-t">
          {articles.map((article) => (
            <details
              key={article.slug}
              className="border-b group"
            >
              <summary className="py-5 px-4 cursor-pointer hover:bg-secondary transition-colors list-none">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {article.date}
                      </span>
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground mt-1 shrink-0 group-open:rotate-90 transition-transform">
                    ▸
                  </span>
                </div>
              </summary>
              <div className="px-4 pb-6 pt-2">
                <div className="prose-sm max-w-none">
                  {article.content.split("\n\n").map((paragraph, i) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h4 key={i} className="text-base font-semibold mt-6 mb-2">
                          {paragraph.replace("## ", "")}
                        </h4>
                      );
                    }
                    return (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Writings;
