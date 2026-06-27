"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function StatItem({ value, suffix, label, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1600;
    const startTime = Date.now();
    const frame = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(frame);
      else setCount(value);
    };
    requestAnimationFrame(frame);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center px-4"
    >
      <p className="text-3xl md:text-4xl font-bold text-white tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="text-xs text-violet-200 mt-1.5 font-medium tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 11, suffix: "+", label: "Projects Shipped" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 40, suffix: "%+", label: "API Perf. Improved" },
];

const expertise = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        <circle cx="5" cy="12" r="2" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Distributed Systems",
    desc: "Event-driven microservice architectures using Kafka and RabbitMQ. Designed to handle high-throughput financial workloads with guaranteed message delivery and horizontal scalability.",
    tags: ["Kafka", "RabbitMQ", "gRPC", "Microservices"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M2 10h20" />
        <path strokeLinecap="round" d="M6 15h4M14 15h4" />
      </svg>
    ),
    title: "Payment Infrastructure",
    desc: "Secure, idempotent payment processing pipelines — from merchant checkout APIs to real-time transaction reconciliation. PCI-compliant designs serving hundreds of active merchants.",
    tags: ["Payment APIs", "Idempotency", "Redis", "PostgreSQL"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Cloud-Native Engineering",
    desc: "Container-first systems on Kubernetes with automated CI/CD pipelines. Observable from day one — structured logging, distributed tracing, and health-check-driven deployments.",
    tags: ["Kubernetes", "Docker", "CI/CD", "AWS"],
  },
];

const featured = [
  {
    id: "dashen-super-app",
    title: "Dashen Super App",
    category: "Digital Banking Platform",
    description:
      "Ethiopia's largest digital banking super app — payments, chat banking, e-commerce, and lottery unified into one ecosystem serving tens of thousands of active users.",
    impact: "Tens of thousands of active users",
    impactColor: "text-violet-400",
    tech: ["Go", "Kafka", "RabbitMQ", "Kubernetes", "Redis"],
    gradient: "from-violet-600 to-indigo-700",
    live: "https://www.dashensuperapp.com/",
    badge: "Production · Live",
  },
  {
    id: "addis-pay",
    title: "AddisPay Gateway",
    category: "Payment Infrastructure",
    description:
      "A production payment gateway simplifying integration with Ethiopian banking systems and digital wallets, serving hundreds of merchants with secure checkout and real-time reporting.",
    impact: "40% API latency reduction",
    impactColor: "text-emerald-400",
    tech: ["Node.js", "Redis", "PostgreSQL", "MongoDB", "REST API"],
    gradient: "from-emerald-600 to-teal-700",
    live: "https://addispay.et/",
    badge: "Production · Live",
  },
  {
    id: "addis-bike",
    title: "Addis Bike Platform",
    category: "Urban Mobility System",
    description:
      "Full-stack bicycle rental platform for Addis Ababa — fleet management, user administration, and transaction tracking for city-scale bike sharing operations.",
    impact: "City-scale fleet management",
    impactColor: "text-orange-400",
    tech: ["Node.js", "React", "MongoDB", "Docker"],
    gradient: "from-orange-600 to-amber-700",
    live: "https://admin.addisbike.org/",
    badge: "Production · Live",
  },
];

const achievements = [
  {
    icon: "🏆",
    title: "Inobizz & Korean Embassy Prize",
    desc: "Awarded for graduation project in Property Security and Warehouse Management — AASTU",
    highlight: "University Recognition",
  },
  {
    icon: "🎓",
    title: "Great Distinction",
    desc: "B.Sc. in Electrical and Computer Engineering — AASTU, GPA 3.81 / 4.0",
    highlight: "Academic Excellence",
  },
  {
    icon: "🏦",
    title: "Fintech at Scale",
    desc: "Designed backend systems for Ethiopia's largest digital banking ecosystem",
    highlight: "Dashen Bank",
  },
  {
    icon: "🌍",
    title: "Remote-Ready",
    desc: "Open to senior backend roles at top global tech companies and fintechs",
    highlight: "Available Now",
  },
];

const techStrip = [
  "Go", "Node.js", "TypeScript", "Kafka", "RabbitMQ",
  "Redis", "Kubernetes", "Docker", "PostgreSQL", "MongoDB", "gRPC", "React",
];

export default function Homepage() {
  return (
    <motion.div
      className="min-h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ─── HERO ─── */}
      <section className="relative bg-slate-950 flex flex-col justify-center min-h-[calc(100vh-6rem)] overflow-hidden">
        {/* Ambient gradient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] animate-[pulse_5s_ease-in-out_1s_infinite]" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-violet-800/10 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_2s_infinite]" />
        </div>
        {/* Subtle grid pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text content */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Open to senior backend roles · Remote globally
              </span>
            </motion.div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-slate-400 text-sm font-semibold tracking-[0.25em] uppercase"
            >
              Haylemichael Tsega
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Senior Backend
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
                Engineer
              </span>
            </motion.h1>

            {/* Value proposition */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-slate-300 leading-relaxed max-w-lg"
            >
              Building distributed systems that move{" "}
              <span className="text-white font-semibold">money</span>,{" "}
              <span className="text-white font-semibold">data</span>, and{" "}
              <span className="text-white font-semibold">trust</span> at scale.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="text-slate-400 text-sm leading-relaxed max-w-lg"
            >
              4+ years designing production fintech infrastructure — from payment
              gateways serving hundreds of merchants to the microservices powering
              Ethiopia&apos;s leading digital banking platform.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <Link href="/portfolio">
                <button className="px-6 py-3 rounded-full bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/25">
                  View My Work →
                </button>
              </Link>
              <a href="/HAILEMIKAEL ID.pdf" download>
                <button className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-800 hover:text-white transition-colors">
                  Download CV
                </button>
              </a>
              <Link href="/contact">
                <button className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-800 hover:text-white transition-colors">
                  Get in Touch
                </button>
              </Link>
            </motion.div>

            {/* Tech strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="border-t border-slate-800 pt-5"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-semibold mb-3">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStrip.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-slate-400 border border-slate-800 px-3 py-1 rounded-full bg-slate-900/60 hover:border-violet-700/50 hover:text-slate-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/30 to-indigo-600/20 blur-2xl scale-110" />
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-violet-900/30">
                <Image
                  src="/developer_photo.jpg"
                  alt="Haylemichael Tsega — Senior Backend Engineer"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-bold">Haylemichael Tsega</p>
                  <p className="text-slate-400 text-xs mt-0.5">Based in Addis Ababa · Remote</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-700 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-violet-500/30">
            {stats.map((s, i) => (
              <StatItem key={i} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE ─── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-violet-600 font-semibold mb-3">
              What I Build
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Engineering depth where it matters most
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-violet-200 hover:bg-white hover:shadow-lg hover:shadow-violet-50 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-5 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-[10px] font-semibold bg-white text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="bg-slate-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-violet-400 font-semibold mb-3">
                Selected Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Production systems at scale
              </h2>
            </div>
            <Link href="/portfolio">
              <span className="text-sm text-slate-400 hover:text-white transition-colors font-medium border-b border-slate-700 hover:border-slate-400 pb-0.5">
                View all projects →
              </span>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col hover:border-slate-700 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <div className="w-4 h-4 bg-white/80 rounded-sm" />
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-full">
                    {project.badge}
                  </span>
                </div>

                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1.5">
                  {project.category}
                </p>
                <h3 className="font-bold text-white text-lg mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0" />
                  <span className={`text-xs font-semibold ${project.impactColor}`}>
                    {project.impact}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t, ti) => (
                    <span
                      key={ti}
                      className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <Link href={`/portfolio/${project.id}`} className="flex-1">
                    <button className="w-full rounded-full border border-slate-700 text-slate-300 text-xs font-semibold py-2.5 hover:bg-violet-600 hover:border-violet-600 hover:text-white transition-all duration-200">
                      Case Study →
                    </button>
                  </Link>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <button className="rounded-full border border-slate-700 text-slate-400 text-xs font-semibold px-4 py-2.5 hover:bg-slate-800 transition-colors">
                      Live ↗
                    </button>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACHIEVEMENTS ─── */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-violet-600 font-semibold mb-3">
              Recognition
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Awards & Milestones
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-violet-200 transition-all text-center group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-violet-600 mb-1">
                  {item.highlight}
                </p>
                <h3 className="font-bold text-slate-900 text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HIRE CTA ─── */}
      <section className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 py-20 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/20 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-violet-400 font-semibold mb-4">
              Let&apos;s Work Together
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Looking for a senior backend engineer?
            </h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
              I design and build distributed systems that are observable, scalable, and
              maintainable. Currently open to senior backend roles at product companies globally.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 rounded-full bg-white text-violet-700 text-sm font-bold hover:bg-violet-50 transition-colors shadow-lg">
                  Get in Touch
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="px-8 py-4 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  View Portfolio →
                </button>
              </Link>
              <a href="/HAILEMIKAEL ID.pdf" download>
                <button className="px-8 py-4 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                  Download CV
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
