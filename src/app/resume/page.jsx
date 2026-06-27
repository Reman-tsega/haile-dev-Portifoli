"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const experience = [
  {
    title: "Senior Full-Stack Developer & Technical Team Lead",
    company: "EagleLion System Technology",
    location: "Addis Ababa, Ethiopia",
    period: "Feb 2025 – Present",
    badge: "Current",
    points: [
      "Lead a cross-functional engineering squad architecting, optimizing, and maintaining high-concurrency microservices for enterprise banking, fintech, and commercial lottery platforms.",
      "Engineered secure, high-throughput RESTful APIs and real-time dashboards using Node.js, TypeScript, and React for the Dashen Internet Banking Platform, reducing transactional latency and improving user workflow transitions.",
      "Developed core transactional state logic, cryptographic random seed validation, and zero-loss ledger logging for the Dashen Edil Lottery Game to handle extreme traffic spikes.",
      "Designed and launched a decentralized Agency Banking Service routing layer with bulletproof input validation and high-availability error management configurations.",
      "Orchestrate end-to-end code audits, security compliance reviews, and technical mentorship sessions across all distributed frontend and backend environments.",
    ],
    tech: ["Node.js", "TypeScript", "React", "Go", "Kafka", "Redis", "PostgreSQL", "Kubernetes"],
  },
  {
    title: "Full-Stack Software Developer",
    company: "Addispay Financial Technology",
    location: "Addis Ababa, Ethiopia",
    period: "2023 – 2025",
    badge: null,
    points: [
      "Designed, developed, and deployed cross-platform merchant payment solutions, admin verification interfaces, and secure customer-facing portals using React, Node.js, and Express.",
      "Integrated secure third-party financial clearing APIs and multi-tier session management protocols to guarantee data protection across sensitive multi-party balance settlement operations.",
      "Optimized high-volume PostgreSQL query execution plans and indexed historical records to decrease latency in financial auditing and compliance reporting pipelines by 40%.",
    ],
    tech: ["Node.js", "Express.js", "React", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Code Coach",
    company: "Code Jika NGO",
    location: "Addis Ababa, Ethiopia",
    period: "Oct 2022 – Present",
    badge: "Volunteer",
    points: [
      "Enabling African students to become leaders in the digital industry through CodeJika — a platform for fun, real-world coding for teens.",
      "Instructed high school students in structural HTML5, CSS3 responsive design, and functional JavaScript programming logic.",
      "Facilitated interactive lab sessions and collaborative team projects, fostering independent debugging practices and problem-solving skills.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
];

const skills = [
  { label: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "Python", "Go", "SQL", "Bash"] },
  { label: "Backend", items: ["Node.js", "Express.js", "NestJS", "FastAPI", "Flask", "gRPC", "REST API", "GraphQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Redux"] },
  { label: "Databases & Caching", items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"] },
  { label: "Cloud & DevOps", items: ["AWS (EC2, Lambda, S3)", "Vercel", "Docker", "Kubernetes", "CI/CD", "Git", "Linux"] },
  { label: "Architecture", items: ["Microservices", "Event-Driven", "Serverless", "Payment Systems", "Saga Pattern"] },
];

const achievements = [
  { icon: "🏆", text: "Inobizz & Korean Embassy Prize — Graduation project: Property Security and Warehouse Management System" },
  { icon: "🎓", text: "Great Distinction — AASTU B.Sc. in Electrical and Computer Engineering (Computer Focus), GPA 3.81 / 4.0" },
  { icon: "🏦", text: "Technical Team Lead for EagleLion's enterprise fintech suite: Internet Banking, Lottery, and Agency Banking" },
  { icon: "⚡", text: "40% API latency reduction on payment gateway serving hundreds of active merchants" },
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
                Senior Full-Stack Developer & Tech Lead · Fintech · Distributed Systems · Cloud
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
              <a href="/HAILEMIKAEL ID.pdf" download>
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
              Senior Full-Stack Developer and Technical Team Lead with 5 years of experience engineering,
              scaling, and deploying high-availability transaction layers, secure financial services, and
              real-time distributed software infrastructure. Expert command of the JavaScript/TypeScript
              ecosystem (Node.js, Express, Next.js, React) combined with extensive experience in
              performance-optimized backend systems and Python. Proven track record leading engineering
              squads, establishing reliable database architectures, and reducing application latency via
              strategic distributed caching. Available for senior full-stack and backend roles globally.
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
              { v: "5", l: "Years Experience" },
              { v: "11+", l: "Production Systems" },
              { v: "40%", l: "API Latency Reduced" },
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
            <a href="/HAILEMIKAEL ID.pdf" download>
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
