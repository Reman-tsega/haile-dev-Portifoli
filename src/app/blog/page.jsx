"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const articles = [
  {
    slug: "designing-idempotent-payment-apis",
    title: "Designing Idempotent Payment APIs: The Most Important Pattern You're Probably Missing",
    excerpt:
      "Mobile networks drop connections. Users double-tap buttons. Clients retry failed requests. If your payment API isn't idempotent, you're one bad network moment away from a double charge. Here's how to build it right.",
    date: "2025-05-12",
    readTime: "8 min read",
    category: "Payment Systems",
    tags: ["payments", "api-design", "redis", "fintech"],
    featured: true,
  },
  {
    slug: "event-driven-microservices-kafka-rabbitmq",
    title: "Event-Driven Microservices: When to Use Kafka vs RabbitMQ (And When to Use Both)",
    excerpt:
      "Kafka and RabbitMQ solve different problems. Using the wrong one — or treating them as interchangeable — is a common architecture mistake. Here's a practical guide from building the Dashen Super App.",
    date: "2025-04-03",
    readTime: "12 min read",
    category: "Distributed Systems",
    tags: ["kafka", "rabbitmq", "microservices", "architecture"],
    featured: true,
  },
  {
    slug: "redis-caching-strategies-backend",
    title: "Redis Caching Strategies That Actually Move the Needle: Lessons from a 40% Latency Win",
    excerpt:
      "Not all caching is equal. Caching the wrong thing, with the wrong TTL, at the wrong layer will give you cache invalidation bugs and zero performance gains. Here's what actually worked at AddisPay.",
    date: "2025-02-18",
    readTime: "10 min read",
    category: "Performance",
    tags: ["redis", "caching", "performance", "node.js"],
    featured: false,
  },
  {
    slug: "kubernetes-zero-downtime-deployments",
    title: "Zero-Downtime Kubernetes Deployments for Financial Services: What the Docs Don't Tell You",
    excerpt:
      "Rolling updates aren't zero-downtime by default. Between readiness probe timing, graceful shutdown, and load balancer deregistration, there are four places your deployment can drop live requests. Here's how to close all of them.",
    date: "2025-01-07",
    readTime: "11 min read",
    category: "DevOps",
    tags: ["kubernetes", "devops", "zero-downtime", "fintech"],
    featured: false,
  },
];

const categoryColors = {
  "Payment Systems":  "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Distributed Systems": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Performance":      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "DevOps":           "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default function BlogPage() {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <motion.div
      className="min-h-full bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ─── HERO ─── */}
      <div className="relative border-b border-slate-800/60 px-6 py-16 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.5em] text-violet-400 font-semibold mb-4">
              Technical Writing
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Engineering Articles
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Practical writing on distributed systems, payment infrastructure, and backend
              engineering — drawn from real production experience.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── FEATURED ─── */}
      <section className="px-6 py-12 border-b border-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-7">
            Featured Articles
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="group h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-violet-700/50 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-wider border px-2.5 py-1 rounded-full ${categoryColors[article.category]}`}>
                        {article.category}
                      </span>
                      <span className="text-[10px] text-slate-600 font-medium">{article.readTime}</span>
                    </div>
                    <h2 className="font-bold text-white text-base leading-snug group-hover:text-violet-300 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                      <span className="text-xs text-slate-500">{formatDate(article.date)}</span>
                      <span className="text-xs font-semibold text-violet-400 group-hover:text-violet-300 transition-colors">
                        Read article →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL ARTICLES ─── */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-7">
            More Articles
          </p>
          <div className="flex flex-col gap-4">
            {rest.map((article, i) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="group bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-violet-700/40 transition-all duration-300 cursor-pointer">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={`text-[9px] font-bold uppercase tracking-wider border px-2 py-0.5 rounded-full ${categoryColors[article.category]}`}>
                          {article.category}
                        </span>
                        <span className="text-[10px] text-slate-600">{formatDate(article.date)}</span>
                        <span className="text-[10px] text-slate-600">{article.readTime}</span>
                      </div>
                      <h3 className="font-bold text-white text-sm leading-snug group-hover:text-violet-300 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed mt-1.5 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-violet-500 group-hover:text-violet-300 transition-colors">
                      Read →
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TOPICS STRIP ─── */}
      <div className="border-t border-slate-800/60 px-6 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-bold mb-4">
            Topics I Write About
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Distributed Systems", "Payment APIs", "Kafka", "Redis", "Kubernetes", "Microservices", "Go", "Node.js", "Fintech", "System Design", "Performance", "API Design"].map((tag) => (
              <span key={tag} className="text-xs text-slate-400 border border-slate-800 px-3 py-1.5 rounded-full bg-slate-900/60">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
