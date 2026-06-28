"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const experience = [
  {
    title: "Senior Full-Stack Engineer",
    company: "EagleLion System Technology",
    location: "Addis Ababa, Ethiopia",
    period: "Feb 2025 – Present",
    badge: "Current",
    points: [
      "Architected a production-grade serverless backend on AWS Lambda and API Gateway for a banking Super App with 1M+ active users, sustaining sub-150ms P99 response times at 58,000+ concurrent requests per second.",
      "Engineered real-time event processing pipelines in Node.js and TypeScript to ingest and route high-frequency financial webhooks, reducing end-to-end event propagation latency by 60% through batching and async queue optimizations.",
      "Optimized AWS Lambda cold-start behavior through dependency pruning and provisioned concurrency, eliminating 2.8s of initialization overhead from payment flows and reducing cold-start frequency by 74%.",
      "Engineered 65+ RESTful API endpoints for 150,000+ active internet banking customers, maintaining strict PCI-DSS-aligned data security and input validation standards.",
      "Designed and deployed an Automated Reconciliation System synchronizing real-time balances across 280+ post office agency nodes, eliminating manual errors and reducing settlement cycle time by 78%.",
      "Integrated Redis distributed caching across high-frequency query paths, reducing primary PostgreSQL load by 72% and improving average API response time from 680ms to 140ms during peak hours.",
    ],
    tech: ["Node.js", "TypeScript", "AWS Lambda", "API Gateway", "Redis", "PostgreSQL", "Express.js", "React"],
  },
  {
    title: "Full-Stack Engineer",
    company: "Independent (Freelance)",
    location: "Addis Ababa, Ethiopia",
    period: "Jan 2024 – Present",
    badge: null,
    points: [
      "Designed an event-driven geolocation ingestion engine processing high-frequency GPS streams and dynamic geofencing across 400+ active vehicles, tracking 5,000+ daily trips with zero-downtime real-time operations.",
      "Built a React/TypeScript admin dashboard with live map rendering and WebSocket real-time sync, enabling fleet operators to monitor vehicle status at 2-second refresh intervals with sub-500ms update latency.",
      "Architected a secure multi-tenant backend using Node.js, Express, and PostgreSQL with row-level tenant isolation and RBAC policies, supporting 18+ enterprise clients with zero cross-tenant data leakage incidents.",
      "Secured all tenant API endpoints with JWT authentication, rate limiting, and input sanitization — achieving clean results across 100% of penetration test checkpoints.",
    ],
    tech: ["Node.js", "TypeScript", "React", "Next.js", "PostgreSQL", "WebSocket", "JWT"],
  },
  {
    title: "Full-Stack Engineer",
    company: "Addispay Financial Technology",
    location: "Addis Ababa, Ethiopia",
    period: "Jan 2024 – Feb 2025",
    badge: null,
    points: [
      "Built full-stack transaction monitoring dashboards using React and TypeScript, enabling operations teams to track 35,000+ daily transactions with real-time status visibility, reducing average transaction review time by 40%.",
      "Secured payment gateway endpoints with JWT tokenization, HMAC request signing, rate limiting, and input sanitization — eliminating SQL injection and replay-attack vulnerabilities from all production endpoints.",
      "Reduced frontend dashboard bundle size by 38% through code-splitting and lazy loading, improving Time-to-Interactive by 2.1 seconds and cutting page load time from 4.8s to 2.7s.",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis", "JWT"],
  },
  {
    title: "Code Coach & Technical Instructor",
    company: "Code Jika NGO",
    location: "Addis Ababa, Ethiopia",
    period: "2022 – 2023",
    badge: "Volunteer",
    points: [
      "Mentored 90+ aspiring developers through structured web development curricula covering HTML, CSS, JavaScript, and full-stack project architecture, achieving an 85% course completion rate.",
      "Designed hands-on workshops introducing industry-standard Git workflows, code review practices, and agile habits to accelerate graduates' time to first job placement.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Git"],
  },
];

const skills = [
  { label: "Languages", items: ["TypeScript", "JavaScript (ES2022+)", "SQL", "Go", "Bash"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Remix", "Tailwind CSS", "WebSocket Client"] },
  { label: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "WebSocket Servers", "GraphQL", "Microservices"] },
  { label: "Cloud & Serverless", items: ["AWS Lambda", "Amazon API Gateway", "Amazon S3", "Amazon EC2", "Amazon RDS", "Serverless Framework"] },
  { label: "Databases & Caching", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { label: "DevOps & Tooling", items: ["Docker", "Git / GitHub", "CI/CD Pipelines", "Linux"] },
  { label: "Architecture", items: ["Distributed Systems", "Multi-Tenant SaaS", "Event-Driven", "Serverless", "Microservices"] },
  { label: "FinTech Domain", items: ["Payment Gateways", "Automated Reconciliation", "Agency Banking", "Internet Banking", "PCI-DSS"] },
];

const achievements = [
  { icon: "🏦", text: "1M+ active users on EagleLion's banking Super App (AWS Lambda, sub-150ms P99)" },
  { icon: "⚡", text: "78% reduction in settlement cycle time via Automated Reconciliation across 280+ agency nodes" },
  { icon: "🏆", text: "Inobizz & Korean Embassy Prize — Property Security and Warehouse Management graduation project" },
  { icon: "🎓", text: "Great Distinction — AASTU B.Sc. in Electrical and Computer Engineering (Computer Focus), GPA 3.81 / 4.0" },
];

export default function ResumePage() {
  return (
    <motion.div
      className="min-h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ─── DARK HEADER ─── */}
      <div className="bg-slate-950 px-6 py-12 relative overflow-hidden no-print">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-violet-600/15 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-violet-400 font-semibold mb-3">
                Resume
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Haylemichael Tsega
              </h1>
              <p className="mt-1.5 text-slate-400 font-medium">
                Senior Backend Engineer · Distributed Systems · FinTech · Cloud
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-slate-400">
                <a href="mailto:remantsega@gmail.com" className="hover:text-violet-400 transition-colors">
                  remantsega@gmail.com
                </a>
                <a href="tel:+251947731212" className="hover:text-violet-400 transition-colors">
                  +251 947 731 212
                </a>
                <a href="https://github.com/Reman-tsega" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors">
                  github.com/Reman-tsega
                </a>
                <a href="https://www.linkedin.com/in/haylemichael-tsega/" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors">
                  linkedin.com/in/haylemichael-tsega
                </a>
                <span className="text-slate-600">Addis Ababa, Ethiopia · UTC+3 · Remote</span>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href="/Haylemichael_Tsega_Resume.pdf" download>
                <button className="rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/25">
                  Download PDF
                </button>
              </a>
              <button
                onClick={() => window.print()}
                className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 transition-colors"
              >
                Print
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── BODY ─── */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12">

          {/* SUMMARY */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="print-break-inside-avoid"
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-violet-600 font-bold mb-4 flex items-center gap-3">
              <span>Professional Summary</span>
              <span className="flex-1 h-px bg-slate-200" />
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Senior Full-Stack Engineer with 5+ years of production experience architecting
              high-throughput distributed systems, real-time financial platforms, and cloud-native
              microservices. Specialized in Node.js, TypeScript, and AWS serverless infrastructure,
              with a proven track record delivering mission-critical fintech systems — including
              automated reconciliation engines, payment gateways, and banking platforms serving
              1M+ customers — in regulated, high-compliance environments. Deep expertise in
              event-driven architecture, Redis-backed performance optimization, multi-tenant SaaS
              design, and secure API development aligned with financial data security standards.
            </p>
          </motion.section>

          {/* KEY METRICS */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 print-break-inside-avoid"
          >
            {[
              { v: "5+", l: "Years Experience" },
              { v: "1M+", l: "Users Served" },
              { v: "78%", l: "Settlement Time Saved" },
              { v: "3.81", l: "University GPA" },
            ].map(({ v, l }) => (
              <div key={l} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-violet-600">{v}</p>
                <p className="text-[11px] text-slate-500 mt-1 font-medium">{l}</p>
              </div>
            ))}
          </motion.section>

          {/* EXPERIENCE */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-violet-600 font-bold mb-6 flex items-center gap-3">
              <span>Work Experience</span>
              <span className="flex-1 h-px bg-slate-200" />
            </h2>
            <div className="flex flex-col gap-8">
              {experience.map((exp, i) => (
                <div key={i} className="border-l-2 border-violet-200 pl-5 print-break-inside-avoid">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-slate-900">{exp.title}</h3>
                        {exp.badge && (
                          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-violet-600 font-semibold">{exp.company}</p>
                      <p className="text-xs text-slate-400">{exp.location}</p>
                    </div>
                    <span className="text-xs text-slate-500 shrink-0 font-medium">{exp.period}</span>
                  </div>
                  <ul className="flex flex-col gap-1.5 mb-3">
                    {exp.points.map((p, pi) => (
                      <li key={pi} className="text-sm text-slate-600 leading-relaxed flex gap-2">
                        <span className="text-violet-400 mt-0.5 shrink-0">▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t, ti) => (
                      <span key={ti} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* TWO-COLUMN: Skills + Education/Achievements */}
          <div className="grid sm:grid-cols-2 gap-10">

            {/* SKILLS */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-violet-600 font-bold mb-5 flex items-center gap-3">
                <span>Technical Skills</span>
                <span className="flex-1 h-px bg-slate-200" />
              </h2>
              <div className="flex flex-col gap-4">
                {skills.map(({ label, items }, i) => (
                  <div key={i}>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">
                      {label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((s, si) => (
                        <span key={si} className="text-xs bg-slate-50 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* EDUCATION + ACHIEVEMENTS */}
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-8"
            >
              {/* Education */}
              <div>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-violet-600 font-bold mb-5 flex items-center gap-3">
                  <span>Education</span>
                  <span className="flex-1 h-px bg-slate-200" />
                </h2>
                <div className="flex flex-col gap-6">
                  <div className="border-l-2 border-violet-200 pl-5">
                    <h3 className="font-bold text-slate-900">B.Sc. in Electrical and Computer Engineering (Computer Focus)</h3>
                    <p className="text-sm text-violet-600 font-semibold mt-0.5">Addis Ababa Science and Technology University (AASTU)</p>
                    <p className="text-xs text-slate-400 mt-0.5">Addis Ababa, Ethiopia · Class of 2023</p>
                    <p className="text-sm text-slate-500 mt-2 flex items-center gap-1.5">
                      <span className="text-amber-500">★</span>
                      GPA 3.81 / 4.0 · Great Distinction
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Distributed Networks · OOP Analysis · Advanced Data Structures · Software Systems Design
                    </p>
                  </div>
                  <div className="border-l-2 border-slate-200 pl-5">
                    <h3 className="font-bold text-slate-900">Associate of Science in Business Administration</h3>
                    <p className="text-sm text-violet-600 font-semibold mt-0.5">University of the People</p>
                    <p className="text-xs text-slate-400 mt-0.5">Online · US-Accredited · 2019 – 2021</p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-violet-600 font-bold mb-5 flex items-center gap-3">
                  <span>Highlights</span>
                  <span className="flex-1 h-px bg-slate-200" />
                </h2>
                <ul className="flex flex-col gap-3">
                  {achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <span className="text-base shrink-0">{a.icon}</span>
                      {a.text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          </div>

          {/* FOOTER NAV */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200 no-print">
            <Link href="/portfolio">
              <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                View Portfolio →
              </button>
            </Link>
            <Link href="/contact">
              <button className="rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white hover:bg-violet-500 transition-colors shadow-lg shadow-violet-600/20">
                Get in Touch
              </button>
            </Link>
            <a href="/Haylemichael_Tsega_Resume.pdf" download>
              <button className="rounded-full border border-violet-300 text-violet-600 px-6 py-3 text-sm font-semibold hover:bg-violet-50 transition-colors">
                Download PDF
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
