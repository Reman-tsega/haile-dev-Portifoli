"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const skillGroups = [
  {
    label: "Languages",
    color: "bg-violet-600",
    skills: ["TypeScript", "JavaScript (ES2022+)", "SQL", "Go", "Bash"],
  },
  {
    label: "Frontend",
    color: "bg-indigo-600",
    skills: ["React.js", "Next.js", "Remix", "Tailwind CSS", "WebSocket Client"],
  },
  {
    label: "Backend",
    color: "bg-blue-600",
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "WebSocket Servers", "Microservices"],
  },
  {
    label: "Cloud & Serverless",
    color: "bg-sky-600",
    skills: ["AWS Lambda", "API Gateway", "Amazon S3", "Amazon EC2", "Amazon RDS", "Serverless Framework"],
  },
  {
    label: "Databases & Caching",
    color: "bg-emerald-600",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    label: "DevOps & Tooling",
    color: "bg-orange-600",
    skills: ["Docker", "Git / GitHub", "CI/CD Pipelines", "Linux"],
  },
  {
    label: "FinTech Domain",
    color: "bg-rose-600",
    skills: ["Payment Gateways", "Automated Reconciliation", "Agency Banking", "Internet Banking", "PCI-DSS"],
  },
];

const experiences = [
  {
    side: "left",
    title: "Senior Full-Stack Engineer",
    company: "EagleLion System Technology",
    period: "Feb 2025 – Present",
    highlights: [
      "Architected a production-grade serverless backend on AWS Lambda and API Gateway for a banking Super App with 1M+ active users, sustaining sub-150ms P99 response times at 58,000+ concurrent requests per second.",
      "Deployed an Automated Reconciliation System across 280+ post office agency nodes, eliminating manual errors and reducing settlement cycle time by 78%.",
      "Integrated Redis caching, reducing PostgreSQL load by 72% and cutting average API response from 680ms to 140ms during peak banking hours.",
    ],
    tech: ["Node.js", "TypeScript", "AWS Lambda", "Redis", "PostgreSQL", "Express.js", "React"],
    impact: "1M+ active users",
  },
  {
    side: "right",
    title: "Full-Stack Engineer",
    company: "Independent (Freelance)",
    period: "Jan 2024 – Present",
    highlights: [
      "Built a real-time fleet management platform for 400+ active vehicles with WebSocket live map updates and event-driven GPS ingestion tracking 5,000+ daily trips.",
      "Architected a multi-tenant SaaS backend with row-level tenant isolation and RBAC, supporting 18+ enterprise clients with zero cross-tenant incidents.",
      "Secured all API endpoints with JWT, HMAC signing, and rate limiting — 100% clean penetration test results.",
    ],
    tech: ["Node.js", "TypeScript", "React", "Next.js", "PostgreSQL", "WebSocket", "JWT"],
    impact: "18+ enterprise clients",
  },
  {
    side: "left",
    title: "Full-Stack Engineer",
    company: "Addispay Financial Technology",
    period: "Jan 2024 – Feb 2025",
    highlights: [
      "Built transaction monitoring dashboards tracking 35,000+ daily transactions, reducing average review time by 40%.",
      "Secured payment gateway endpoints with JWT tokenization, HMAC request signing, and input sanitization, eliminating SQL injection and replay-attack vulnerabilities.",
      "Reduced frontend bundle size by 38%, improving Time-to-Interactive by 2.1 seconds.",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Redis"],
    impact: "35,000+ daily transactions",
  },
  {
    side: "right",
    title: "Code Coach & Technical Instructor",
    company: "Code Jika NGO",
    period: "2022 – 2023",
    highlights: [
      "Mentored 90+ aspiring developers through structured curricula covering HTML, CSS, JavaScript, and full-stack project architecture, achieving an 85% course completion rate.",
      "Introduced industry-standard Git workflows, code review practices, and agile habits to accelerate graduates' time to first job placement.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Git"],
    impact: "90+ students mentored",
  },
];

const achievements = [
  {
    icon: "🏆",
    category: "Award",
    title: "Inobizz & Korean Embassy Prize",
    body: "Awarded by Inobizz and the Korean Embassy for a graduation project in Property Security and Warehouse Management — recognized among the top engineering innovations at the ceremony.",
  },
  {
    icon: "🎓",
    category: "Academic",
    title: "Great Distinction — AASTU",
    body: "B.Sc. in Electrical and Computer Engineering (Computer Focus) from Addis Ababa Science and Technology University (AASTU) with a GPA of 3.81/4.0 — graduating with Great Distinction, Class of 2023.",
  },
  {
    icon: "🏦",
    category: "Industry Impact",
    title: "Technical Team Lead at EagleLion",
    body: "Leading the engineering squad architecting high-concurrency microservices for enterprise clients: Dashen Internet Banking, Edil Lottery, and Agency Banking platforms.",
  },
  {
    icon: "⚡",
    category: "Performance",
    title: "40% API Latency Reduction",
    body: "At AddisPay, profiled and optimized the critical payment path, cutting median response time by 40% through Redis caching, PostgreSQL query optimization, and connection pool tuning.",
  },
];

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  const achievRef = useRef();
  const isAchievInView = useInView(achievRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* ─── LEFT: Content ─── */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:p-32 2xl:p-40 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">

          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-8 justify-center">
            <Image
              src="/my_picture.jpg"
              alt="Haylemichael Tsega"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover ring-4 ring-violet-200"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-violet-600 font-semibold mb-3">
                About Me
              </p>
              <h1 className="font-bold text-2xl mb-2">
                Engineering systems that move money,
                <br className="hidden sm:block" /> data, and trust at scale.
              </h1>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-700 leading-relaxed">
              <p>
                I&apos;m Haylemichael Tsega — a Senior Full-Stack Engineer with 5+ years of
                production experience architecting high-throughput distributed systems, real-time
                financial platforms, and cloud-native microservices. I studied Electrical and
                Computer Engineering (Computer Focus) at Addis Ababa Science and Technology
                University (AASTU), graduating with Great Distinction (GPA 3.81/4.0). My
                graduation project on Property Security and Warehouse Management was awarded
                by Inobizz and the Korean Embassy.
              </p>
              <p>
                My stack centers on Node.js, TypeScript, React, and AWS serverless infrastructure.
                At EagleLion System Technology I architect backend systems serving 1M+ active users
                on a banking Super App — including an Automated Reconciliation System that cut
                settlement cycle time by 78% across 280+ post office agency nodes. Deep expertise
                in PCI-DSS-compliant payment systems, multi-tenant SaaS design, and Redis-backed
                performance optimization.
              </p>
              <p>
                I design systems to survive production — observable, horizontally scalable,
                and maintainable by the next engineer who inherits the codebase.
              </p>
            </div>
            <blockquote className="italic text-gray-500 border-l-4 border-violet-300 pl-4 text-sm">
              &ldquo;The best architecture is the one the team can understand, operate, and
              evolve — not the most technically impressive one on paper.&rdquo;
            </blockquote>

            <div className="flex flex-wrap gap-3">
              <Link href="/portfolio">
                <button className="px-5 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
                  View Portfolio →
                </button>
              </Link>
              <a href="/Haylemichael_Tsega_Resume.pdf" download>
                <button className="px-5 py-2.5 rounded-full ring-1 ring-violet-400 text-violet-600 text-sm font-semibold hover:bg-violet-50 transition-colors">
                  Download CV
                </button>
              </a>
            </div>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
            >
              <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#7C3AED" strokeWidth="1" />
              <path d="M12 6V14" stroke="#7C3AED" strokeWidth="1" />
              <path d="M15 11L12 14L9 11" stroke="#7C3AED" strokeWidth="1" />
            </motion.svg>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="flex flex-col gap-10 justify-center" ref={achievRef}>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isAchievInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-violet-600 font-semibold mb-2">
                Recognition
              </p>
              <h2 className="font-bold text-2xl">Awards & Achievements</h2>
            </motion.div>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isAchievInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2 hover:border-violet-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-violet-600">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </motion.div>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
            >
              <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#7C3AED" strokeWidth="1" />
              <path d="M12 6V14" stroke="#7C3AED" strokeWidth="1" />
              <path d="M15 11L12 14L9 11" stroke="#7C3AED" strokeWidth="1" />
            </motion.svg>
          </div>

          {/* SKILLS */}
          <div className="flex flex-col gap-10 justify-center" ref={skillRef}>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-violet-600 font-semibold mb-2">
                Technical Expertise
              </p>
              <h2 className="font-bold text-2xl">Skills & Technologies</h2>
            </motion.div>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-5"
            >
              {skillGroups.map((group, gi) => (
                <div key={gi}>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, si) => (
                      <span
                        key={si}
                        className={`${group.color} text-white text-xs font-semibold px-3 py-1.5 rounded-full`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
            >
              <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#7C3AED" strokeWidth="1" />
              <path d="M12 6V14" stroke="#7C3AED" strokeWidth="1" />
              <path d="M15 11L12 14L9 11" stroke="#7C3AED" strokeWidth="1" />
            </motion.svg>
          </div>

          {/* EXPERIENCE */}
          <div className="flex flex-col gap-10 justify-center pb-64" ref={experienceRef}>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-violet-600 font-semibold mb-2">
                Career
              </p>
              <h2 className="font-bold text-2xl">Work Experience</h2>
            </motion.div>

            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {experiences.map((exp, i) => (
                <div key={i} className="flex justify-between min-h-[20rem] mb-2">
                  {/* LEFT SLOT */}
                  <div className="w-[42%]">
                    {exp.side === "left" && (
                      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col gap-2 h-full">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">
                            {exp.period}
                          </span>
                          {exp.impact && (
                            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                              {exp.impact}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-xs text-gray-900">{exp.title}</h3>
                        <p className="text-[10px] font-semibold text-gray-500">{exp.company}</p>
                        <ul className="mt-1 flex flex-col gap-1.5 flex-1">
                          {exp.highlights.map((h, hi) => (
                            <li key={hi} className="text-[10px] text-gray-600 leading-relaxed flex gap-1.5">
                              <span className="text-violet-400 mt-0.5 shrink-0">▸</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {exp.tech.map((t, ti) => (
                            <span key={ti} className="text-[9px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CENTER LINE */}
                  <div className="w-[8%] flex justify-center">
                    <div className="w-0.5 h-full bg-gray-200 rounded relative">
                      <div className="absolute w-4 h-4 rounded-full ring-4 ring-violet-400 bg-white -left-[7px] top-4" />
                    </div>
                  </div>

                  {/* RIGHT SLOT */}
                  <div className="w-[42%]">
                    {exp.side === "right" && (
                      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col gap-2 h-full">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">
                            {exp.period}
                          </span>
                          {exp.impact && (
                            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                              {exp.impact}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-xs text-gray-900">{exp.title}</h3>
                        <p className="text-[10px] font-semibold text-gray-500">{exp.company}</p>
                        <ul className="mt-1 flex flex-col gap-1.5 flex-1">
                          {exp.highlights.map((h, hi) => (
                            <li key={hi} className="text-[10px] text-gray-600 leading-relaxed flex gap-1.5">
                              <span className="text-violet-400 mt-0.5 shrink-0">▸</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {exp.tech.map((t, ti) => (
                            <span key={ti} className="text-[9px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ─── RIGHT: Sticky Brain ─── */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
