"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const items = [
  {
    id: "dashen-super-app",
    title: "Dashen Super App",
    sub: "Digital Banking Platform",
    desc: "Ethiopia's largest digital banking super app — payments, chat banking, e-commerce, budgeting, and lottery unified into a single ecosystem serving tens of thousands of active users.",
    img: "/dashen_super_app.PNG",
    live: "https://www.dashensuperapp.com/",
    tech: ["Go", "Node.js", "Kafka", "RabbitMQ", "Redis", "Kubernetes"],
    category: "Fintech",
    featured: true,
    impact: "Tens of thousands of users",
    impactColor: "text-violet-400",
    accent: "from-violet-600 to-indigo-700",
  },
  {
    id: "addis-pay",
    title: "AddisPay Gateway",
    sub: "Payment Infrastructure",
    desc: "Production payment gateway serving hundreds of merchants with secure checkout APIs, real-time transaction reporting, and 40% faster API responses via Redis optimization.",
    img: "/addispay.PNG",
    live: "https://addispay.et/",
    tech: ["Node.js", "Express.js", "MongoDB", "Redis", "PostgreSQL"],
    category: "Fintech",
    featured: true,
    impact: "40% API latency reduction",
    impactColor: "text-emerald-400",
    accent: "from-emerald-600 to-teal-700",
  },
  {
    id: "addis-bike",
    title: "Addis Bike Platform",
    sub: "Urban Mobility System",
    desc: "Full-stack bicycle rental platform for Addis Ababa — fleet management, user administration, and transaction tracking for city-scale bike sharing operations.",
    img: "/addisbikedashboard.png",
    live: "https://admin.addisbike.org/",
    tech: ["Node.js", "React", "MongoDB", "Docker"],
    category: "Logistics",
    featured: true,
    impact: "City-scale fleet management",
    impactColor: "text-orange-400",
    accent: "from-orange-600 to-amber-700",
  },
  {
    id: "dir-link",
    title: "Dir Link",
    sub: "Shipping Connector Dashboard",
    desc: "Logistics platform for delivery companies with real-time order administration, driver management, route tracking, and delivery status updates.",
    img: "/dirlink.PNG",
    live: "https://dirlink.addissystems.et/dashboard",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    category: "Logistics",
    featured: false,
    impact: null,
    impactColor: null,
    accent: "from-sky-600 to-blue-700",
  },
  {
    id: "aurora-plc",
    title: "Aurora General PLC",
    sub: "Company Management Platform",
    desc: "Multi-feature platform covering company portfolio, products, job postings, applicant tracking, CRM, and a dynamic blog — deployed to production for a general services company.",
    img: "/Aurora.png",
    live: "https://www.auroraplc.com/",
    tech: ["Next.js", "Node.js", "MongoDB"],
    category: "SaaS",
    featured: false,
    impact: null,
    impactColor: null,
    accent: "from-purple-600 to-violet-700",
  },
  {
    id: "addis-systems",
    title: "Addis Systems",
    sub: "Corporate Site & Ordering",
    desc: "Corporate website and digital ordering platform for a software company, enhancing online visibility and enabling direct product orders.",
    img: "/addissystems.png",
    live: "https://www.addissystems.et/",
    tech: ["Next.js", "Node.js", "MongoDB"],
    category: "Web",
    featured: false,
    impact: null,
    impactColor: null,
    accent: "from-slate-600 to-slate-700",
  },
  {
    id: "blue-clerk",
    title: "Blue Clerk",
    sub: "Housing Broker CRM",
    desc: "CRM tailored for the housing industry: lead tracking, property management, client communication, and deal pipeline management.",
    img: "/blueclerk.png",
    live: "https://blueclerk.com/",
    tech: ["React", "Node.js", "PostgreSQL"],
    category: "SaaS",
    featured: false,
    impact: null,
    impactColor: null,
    accent: "from-blue-600 to-indigo-700",
  },
  {
    id: "chuchu-beauty",
    title: "ChuChu Beauty School",
    sub: "School Management System",
    desc: "Student administration, course management, attendance tracking, and financial reporting platform for a beauty school.",
    img: "/chuchu.png",
    live: "http://196.188.249.33:6053/",
    tech: ["React", "Node.js", "MongoDB"],
    category: "SaaS",
    featured: false,
    impact: null,
    impactColor: null,
    accent: "from-pink-600 to-rose-700",
  },
  {
    id: "mak-salon",
    title: "Mak Beauty Salon",
    sub: "Service Landing Page",
    desc: "Polished landing page showcasing beauty services, gallery, and online booking for a premium Addis Ababa salon.",
    img: "/mak_bauty_salon.PNG",
    live: "https://www.makbeautysalonandspa.com/",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Web",
    featured: false,
    impact: null,
    impactColor: null,
    accent: "from-rose-600 to-pink-700",
  },
  {
    id: "noliga-engineering",
    title: "Noliga Engineering",
    sub: "Engineering Services Site",
    desc: "Professional company website showcasing civil and construction engineering services with project portfolios and contact integration.",
    img: "/noliga.PNG",
    live: "https://reman-tsega.github.io/noligaengineering/index.html",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    featured: false,
    impact: null,
    impactColor: null,
    accent: "from-amber-600 to-orange-700",
  },
];

const categories = ["All", "Fintech", "Logistics", "SaaS", "Web"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [quickView, setQuickView] = useState(null);

  const featured = items.filter((i) => i.featured);
  const rest = items.filter((i) => !i.featured);

  const filteredRest =
    activeCategory === "All"
      ? rest
      : rest.filter((i) => i.category === activeCategory);

  return (
    <motion.div
      className="min-h-full bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ─── HERO ─── */}
      <div className="relative border-b border-slate-800/60 px-6 py-16 overflow-hidden">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/15 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs uppercase tracking-[0.5em] text-violet-400 font-semibold mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Production Systems
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Fintech platforms, payment infrastructure, logistics systems, and SaaS products —
              each shipped to production and actively used.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── FEATURED ─── */}
      <section className="px-6 py-14 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-8">
            Featured Work — Deep Dives Available
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col hover:border-slate-700 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-slate-800">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-violet-600 text-white px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                      {item.sub}
                    </p>
                    <h2 className="font-bold text-white text-base">{item.title}</h2>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1">{item.desc}</p>

                  {item.impact && (
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span className={`text-xs font-semibold ${item.impactColor}`}>
                        {item.impact}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.slice(0, 4).map((t, ti) => (
                      <span
                        key={ti}
                        className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                    {item.tech.length > 4 && (
                      <span className="text-[10px] text-slate-500">+{item.tech.length - 4}</span>
                    )}
                  </div>

                  <div className="flex gap-2 mt-auto pt-1">
                    <Link href={`/portfolio/${item.id}`} className="flex-1">
                      <button className="w-full rounded-full border border-slate-700 text-slate-300 text-xs font-semibold py-2 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all duration-200">
                        Case Study →
                      </button>
                    </Link>
                    <button
                      onClick={() => setQuickView(item)}
                      className="rounded-full border border-slate-700 text-slate-400 text-xs font-semibold px-3 py-2 hover:bg-slate-800 transition-colors"
                    >
                      Preview
                    </button>
                    <a href={item.live} target="_blank" rel="noreferrer">
                      <button className="rounded-full bg-violet-600 text-white text-xs font-semibold px-3 py-2 hover:bg-violet-500 transition-colors">
                        ↗
                      </button>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MORE PROJECTS ─── */}
      <section className="px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold">
              More Projects
            </p>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-violet-600 text-white"
                      : "border border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredRest.map((item) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col hover:border-slate-700 transition-all duration-300"
                >
                  <div className="relative h-36 bg-slate-800 overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  </div>
                  <div className="flex flex-col gap-2 p-4 flex-1">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                        {item.sub}
                      </p>
                      <h3 className="font-bold text-white text-sm">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 flex-1">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-auto pt-1">
                      {item.tech.slice(0, 3).map((t, ti) => (
                        <span
                          key={ti}
                          className="text-[9px] bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded border border-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={() => setQuickView(item)}
                        className="flex-1 rounded-full border border-slate-700 text-slate-400 text-xs font-semibold py-1.5 hover:bg-slate-800 transition-colors"
                      >
                        Preview
                      </button>
                      <a href={item.live} target="_blank" rel="noreferrer" className="flex-1">
                        <button className="w-full rounded-full bg-violet-600 text-white text-xs font-semibold py-1.5 hover:bg-violet-500 transition-colors">
                          Live ↗
                        </button>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <div className="border-t border-slate-800/60 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">
            Let&apos;s Build Together
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">Have a project in mind?</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            I build backend systems that scale — from payment gateways to distributed
            microservices. Let&apos;s bring your idea to production.
          </p>
          <Link href="/contact">
            <button className="rounded-full bg-violet-600 px-8 py-4 text-sm font-bold text-white hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/25">
              Start a Conversation →
            </button>
          </Link>
        </div>
      </div>

      {/* ─── QUICK VIEW MODAL ─── */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setQuickView(null)}
          >
            <motion.div
              key="modal-card"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="relative h-56 lg:h-auto lg:w-1/2 bg-slate-800">
                  <Image
                    src={quickView.img}
                    alt={quickView.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-violet-400 font-bold mb-1">
                        {quickView.sub}
                      </p>
                      <h2 className="text-xl font-bold text-white">{quickView.title}</h2>
                    </div>
                    <button
                      onClick={() => setQuickView(null)}
                      className="shrink-0 text-slate-400 hover:text-white transition-colors"
                      aria-label="Close preview"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{quickView.desc}</p>
                  {quickView.impact && (
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className={`text-xs font-semibold ${quickView.impactColor}`}>
                        {quickView.impact}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {quickView.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-slate-800 text-violet-300 border border-violet-800/50 px-2.5 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto pt-2">
                    {quickView.featured && (
                      <Link
                        href={`/portfolio/${quickView.id}`}
                        onClick={() => setQuickView(null)}
                        className="flex-1"
                      >
                        <button className="w-full rounded-full bg-slate-800 text-slate-300 text-sm font-semibold py-2.5 hover:bg-violet-600 hover:text-white transition-all border border-slate-700">
                          Case Study →
                        </button>
                      </Link>
                    )}
                    <a href={quickView.live} target="_blank" rel="noreferrer" className="flex-1">
                      <button className="w-full rounded-full bg-violet-600 text-white text-sm font-semibold py-2.5 hover:bg-violet-500 transition-colors">
                        Live Site ↗
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
