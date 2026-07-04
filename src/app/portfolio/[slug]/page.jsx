"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const caseStudies = {
  "dashen-super-app": {
    title: "Dashen Super App",
    subtitle: "Digital Banking & Lifestyle Super App",
    client: "Dashen Bank · Eagle Lion System Technology",
    role: "Backend Developer",
    period: "Feb 2025 – Present",
    status: "Live · Active Development",
    live: "https://www.dashensuperapp.com/",
    img: "/dashen_super_app.PNG",
    accent: "violet",
    overview:
      "Ethiopia's most comprehensive digital banking super app, consolidating payments, chat banking, e-commerce, budgeting analytics, and lottery into a single platform for Dashen Bank's customer base. The system serves tens of thousands of active users under strict financial-grade reliability requirements.",
    problem:
      "Dashen Bank needed a unified digital platform to compete with global super apps while satisfying the compliance and reliability requirements of regulated banking. The challenge: integrate five separate product domains — payments, e-commerce, chat banking, budgeting, lottery — with a shared identity layer, without compromising the transaction integrity a bank demands.",
    architecture: {
      description:
        "Domain-bounded microservices communicating through a dual-broker event layer. gRPC for synchronous, latency-sensitive operations. Kafka for the high-throughput financial event stream. RabbitMQ for reliable task queuing requiring guaranteed exactly-once delivery semantics.",
      layers: [
        {
          name: "API Gateway",
          detail: "Routes mobile and web traffic, enforces authentication, rate limiting, and request validation before passing to upstream services.",
          tech: "Go · JWT / OAuth2 · Rate Limiter",
        },
        {
          name: "Core Services",
          detail: "Payment, E-commerce, Chat Banking, Lottery, and Budgeting — each deployed as an independent Go service with its own data store.",
          tech: "Go · gRPC · REST",
        },
        {
          name: "Event Streaming",
          detail: "Kafka handles the financial event backbone. RabbitMQ manages task queues with dead-letter queue support for failed message recovery.",
          tech: "Kafka · RabbitMQ · Consumer Groups",
        },
        {
          name: "Data Layer",
          detail: "Service-owned databases enforce domain isolation. Redis caches hot-path reads and manages distributed session state.",
          tech: "PostgreSQL · MongoDB · Redis · ScyllaDB",
        },
        {
          name: "Infrastructure",
          detail: "Containerized workloads on Kubernetes with rolling deployments, readiness probes, and auto-scaling for traffic spikes.",
          tech: "Kubernetes · Docker · CI/CD · AWS",
        },
      ],
    },
    myRole: [
      "Designed the backend service topology — defining service boundaries, ownership contracts, and inter-service communication patterns across five product domains.",
      "Built the event-driven core using Kafka topics and RabbitMQ queues, ensuring no financial event is lost even under service failure through idempotent consumer design.",
      "Led the internal API design: gRPC service contracts for the service mesh, REST endpoints for mobile client integration.",
      "Implemented the payment orchestration service handling fund transfers, wallet top-ups, merchant payments, and transaction status tracking.",
      "Defined Kubernetes deployment manifests, resource limits, health check probes, and rolling update strategies for zero-downtime production rollouts.",
    ],
    challenges: [
      {
        title: "Financial Transaction Consistency Across Services",
        description:
          "Multi-step financial operations must be atomic or fully compensated. Implemented the saga pattern: each step publishes an event to Kafka, and rollback consumers handle partial failures — eliminating distributed transaction locks while preserving end-to-end correctness.",
      },
      {
        title: "Per-User Event Ordering at High Throughput",
        description:
          "Lottery events, payment confirmations, and e-commerce updates needed strict per-user ordering without global sequencing bottlenecks. Solved by partitioning Kafka topics by user ID, giving per-user ordering with horizontal throughput scaling.",
      },
      {
        title: "Zero-Downtime Deployments for Financial Services",
        description:
          "Active payment flows cannot tolerate cold-start downtime. Configured Kubernetes readiness probes checking gRPC health endpoints before routing live traffic, combined with rolling deployment strategies keeping old pods alive until new ones fully pass health checks.",
      },
    ],
    results: [
      "Platform serving tens of thousands of active registered users across Ethiopia",
      "Five product domains — payments, e-commerce, lottery, chat banking, budgeting — unified under a single identity layer",
      "Zero-downtime deployments achieved across all services on Kubernetes",
      "Financial events processed with at-least-once delivery guarantees via Kafka consumer groups with idempotent handlers",
    ],
    tech: ["Go", "Node.js", "Kafka", "RabbitMQ", "Redis", "Kubernetes", "Docker", "gRPC", "PostgreSQL", "MongoDB", "ScyllaDB", "AWS"],
    lesson: "The hardest part of a super app backend isn't any individual service — it's maintaining their independence. Every shortcut crossing service boundaries becomes debt that limits your ability to scale domains independently. Strict ownership contracts and event-driven integration are not optional in financial systems; they are the architecture.",
  },

  "addis-pay": {
    title: "AddisPay Payment Gateway",
    subtitle: "Payment Infrastructure for Ethiopian Merchants",
    client: "Addis Pay Financial Technology",
    role: "Full Stack Developer",
    period: "Nov 2023 – Sep 2024",
    status: "Live · Production",
    live: "https://addispay.et/",
    img: "/addispay.PNG",
    accent: "emerald",
    overview:
      "A production payment gateway enabling Ethiopian merchants to accept digital payments through a unified API that integrates with local banking systems and digital wallets. The platform serves hundreds of active merchants and handles real-time transaction processing with a full merchant dashboard for monitoring and reporting.",
    problem:
      "Ethiopian merchants had to build separate integrations for every payment provider — multiplying development cost and creating a fragmented checkout experience. AddisPay needed a single reliable gateway that any merchant could integrate in hours and trust with live transactions, plus real-time visibility into their financial operations.",
    architecture: {
      description:
        "A REST API layer on Node.js/Express connects merchants to the core processing engine. PostgreSQL stores all financial records with ACID guarantees. MongoDB handles flexible merchant configuration. Redis provides caching, rate limiting, and distributed locks for idempotency. A webhook dispatcher delivers real-time transaction events to merchant endpoints.",
      layers: [
        {
          name: "Merchant API",
          detail: "REST endpoints for payment initiation, status polling, webhook subscriptions, and merchant onboarding — documented with Swagger.",
          tech: "Node.js · Express.js · Swagger",
        },
        {
          name: "Payment Processor",
          detail: "Orchestrates calls to bank and wallet providers, manages payment state machine, handles retries with exponential backoff and circuit breaking.",
          tech: "Node.js · Provider Adapters · State Machine",
        },
        {
          name: "Idempotency Layer",
          detail: "Redis distributed locks ensure that retried payment requests never produce duplicate charges — critical for financial correctness on unreliable networks.",
          tech: "Redis · Distributed Locks · Idempotency Keys",
        },
        {
          name: "Data Storage",
          detail: "PostgreSQL for transactional financial records; MongoDB for merchant config and session data; Redis for cache and rate limiting.",
          tech: "PostgreSQL · MongoDB · Redis",
        },
        {
          name: "Merchant Dashboard",
          detail: "Real-time transaction monitoring, date-range reporting, CSV export, and balance summaries built with React and server-sent events.",
          tech: "React · SSE · Chart.js",
        },
      ],
    },
    myRole: [
      "Designed and implemented the core checkout API — payment initiation, status polling, and confirmation endpoints that all merchant integrations depend on.",
      "Built the idempotency system using Redis distributed locks, preventing duplicate charges on client-side retries — the most financially critical correctness guarantee.",
      "Optimized API response times by 40% (850ms → 510ms) through Redis caching of provider status lookups, PostgreSQL query indexing, and connection pool tuning.",
      "Implemented the webhook dispatcher delivering real-time payment events to merchant callback URLs with automatic retry and exponential backoff.",
      "Built the merchant-facing React dashboard with transaction tables, date-range filtering, CSV export, and real-time balance feeds using server-sent events.",
    ],
    challenges: [
      {
        title: "Idempotent Payment Processing",
        description:
          "Mobile clients on flaky networks retry failed requests. Without idempotency, a retry becomes a double charge. Solved with Redis-based idempotency keys: the first request acquires a distributed lock and writes the result; subsequent requests with the same key return the cached result without re-processing.",
      },
      {
        title: "40% API Latency Reduction",
        description:
          "Profiling showed 70% of response time came from repeated bank provider status checks returning identical results within 5-second windows. Added a short-TTL Redis cache keyed on provider + transaction ID — cutting median response from 850ms to 510ms without sacrificing freshness for time-sensitive operations.",
      },
      {
        title: "Multi-Provider Integration Complexity",
        description:
          "Each banking partner had a different auth scheme, error model, and webhook format. Built a provider adapter layer normalizing all external responses into a single internal Transaction model — decoupling core processing logic from upstream provider changes entirely.",
      },
    ],
    results: [
      "Hundreds of active merchants processing live transactions daily",
      "40% reduction in average API response time (850ms → 510ms)",
      "Zero duplicate-charge incidents after idempotency layer deployment",
      "Real-time webhook delivery with 99%+ success rate on 30-day rolling window",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Redis", "PostgreSQL", "React", "Docker", "REST API", "JWT"],
    lesson: "Payment systems are 20% payment logic and 80% correctness guarantees. Idempotency, atomic state transitions, and observable failure modes are requirements, not optimizations. If I were starting this project again, the idempotency layer would be the first thing built — not the third.",
  },

  "addis-bike": {
    title: "Addis Bike Rental Platform",
    subtitle: "Urban Bicycle Rental System · Addis Ababa",
    client: "Addis Bike",
    role: "Full Stack Developer",
    period: "2023",
    status: "Live · Production",
    live: "https://admin.addisbike.org/",
    img: "/addisbike1.png",
    gallery: [
      {
        src: "/addisbike2.png",
        caption: "Operations dashboard — live revenue, payment health, and fleet metrics",
      },
      {
        src: "/addisbike3.png",
        caption: "IoT device control — remote lock/unlock, telemetry, and GSM signal monitoring",
      },
    ],
    accent: "orange",
    overview:
      "A complete bicycle rental platform for Addis Ababa, managing the full rental lifecycle across multiple city stations. The system includes a web admin dashboard for fleet operators, handling bike inventory, user accounts, rental sessions, and financial transactions — replacing entirely manual station management processes.",
    problem:
      "Addis Bike was managing a growing city fleet with spreadsheets and manual check-in forms. There was no unified view of station inventory, no automated billing, and no audit trail for disputes. Operators needed a system they could use from day one with no learning curve — and it had to be accurate enough to be the financial record of truth.",
    architecture: {
      description:
        "A deliberately structured monolith with clean internal separation between API, business logic, and data access — chosen over microservices because the scale didn't justify the operational overhead, and a single deployable unit is easier for a small ops team to own. Docker packaging ensures consistent deployments across environments.",
      layers: [
        {
          name: "Admin Dashboard",
          detail: "React SPA with fleet map, bike status board, rental history, user management, and financial reporting.",
          tech: "React · React Query · Chart.js",
        },
        {
          name: "REST API",
          detail: "Business logic layer handling rental lifecycle, billing computation, inventory management, user auth, and reporting aggregations.",
          tech: "Node.js · Express.js · JWT",
        },
        {
          name: "Database",
          detail: "MongoDB document store for bikes, stations, users, and rental session records. Indexed for dashboard query performance.",
          tech: "MongoDB · Mongoose",
        },
        {
          name: "Infrastructure",
          detail: "Docker-containerized application with Nginx reverse proxy, deployed on a managed VPS for cost-effective city-scale operations.",
          tech: "Docker · Docker Compose · Nginx",
        },
      ],
    },
    myRole: [
      "Built the complete platform as a solo developer — API, admin dashboard, database schema, and production deployment.",
      "Designed the rental session state machine: reserved → active → completed / disputed, with atomic transitions and full audit logging for every state change.",
      "Implemented the station inventory system: real-time bike availability per station, low-stock alerts, and visual fleet status board for operators.",
      "Built the financial reporting module with daily, weekly, and monthly revenue aggregations plus CSV export for accounting reconciliation.",
      "Containerized the application with Docker Compose and deployed to production with Nginx reverse proxy and HTTPS termination.",
    ],
    challenges: [
      {
        title: "Concurrent Bike Availability — Preventing Double-Booking",
        description:
          "Two users at the same station can attempt to rent the same bike simultaneously. Solved with optimistic locking on the bike document — the rental transaction checks and updates availability atomically; concurrent attempts fail fast and prompt the client to select a different bike.",
      },
      {
        title: "Rental Session State Machine",
        description:
          "A rental spans multiple states: reserved, active, completed, disputed. Each transition must be auditable for financial disputes. Implemented state validation guards that prevent illegal transitions, with an immutable audit event logged on every state change.",
      },
      {
        title: "Multi-Role Access Control",
        description:
          "Station operators, fleet managers, and super admins each needed different views and permissions. Implemented JWT-based RBAC with middleware-level enforcement on every route — authorization logic centralized rather than scattered across handlers.",
      },
    ],
    results: [
      "City-scale fleet management across multiple stations in Addis Ababa",
      "Complete rental lifecycle automation eliminating all manual tracking",
      "Financial reporting module replacing manual accounting reconciliation",
      "Zero data migration issues on production deployment — running live from launch day",
    ],
    tech: ["Node.js", "Express.js", "React", "MongoDB", "Docker", "Nginx", "JWT"],
    lesson: "Architecture decisions should match team size and operational maturity, not resume ambitions. Choosing a well-structured monolith over microservices for this project was the right call — it shipped faster, was easier to debug, and the small ops team could own the full system without specialized Kubernetes knowledge.",
  },

  "dir-link": {
    title: "Dir Link",
    subtitle: "Logistics & Shipping Connector Dashboard",
    client: "Addis Technology Solution",
    role: "Full Stack Developer",
    period: "Oct 2024 – Jan 2025",
    status: "Live · Production",
    live: "https://dirlink.addissystems.et/dashboard",
    img: "/dirlink.PNG",
    accent: "sky",
    overview:
      "A real-time logistics operations dashboard for delivery and shipping companies. Dir Link provides delivery operators with live order tracking, driver management, route assignments, and delivery status monitoring — replacing manual dispatch coordination with a single, unified platform.",
    problem:
      "Delivery companies were managing driver assignments, order dispatch, and status updates through phone calls and spreadsheets. There was no real-time visibility into where orders were, which driver was handling what, or how long deliveries were taking. The goal: give dispatch operators a live command centre for their entire fleet.",
    architecture: {
      description:
        "A full-stack web application with a React admin dashboard backed by a Node.js REST API. MongoDB stores orders, drivers, and dispatch events as flexible documents. Nginx serves the app in production with reverse-proxy routing.",
      layers: [
        {
          name: "Operations Dashboard",
          detail: "React SPA with live order board, driver status table, route assignment UI, and delivery history reporting.",
          tech: "React · React Query · Tailwind CSS",
        },
        {
          name: "Dispatch API",
          detail: "REST endpoints handling order lifecycle (created → assigned → in-transit → delivered), driver management, and reporting aggregations.",
          tech: "Node.js · Express.js · REST",
        },
        {
          name: "Database",
          detail: "MongoDB for flexible order and driver documents; compound indexes for efficient status-based queries on high-volume order tables.",
          tech: "MongoDB · Mongoose",
        },
        {
          name: "Infrastructure",
          detail: "Docker-containerized service deployed behind Nginx with PM2 process management for zero-restart deployments.",
          tech: "Docker · Nginx · PM2",
        },
      ],
    },
    myRole: [
      "Designed and built the order dispatch lifecycle API — from order creation through driver assignment to final delivery confirmation.",
      "Built the real-time operations dashboard with live order status board and driver availability tracking.",
      "Implemented compound MongoDB indexes on order status + timestamp fields, cutting dashboard query time for high-volume tables.",
      "Built role-based access control allowing dispatchers, drivers, and admin users different views and capabilities.",
      "Containerized and deployed the full stack to production within the client's tight timeline.",
    ],
    challenges: [
      {
        title: "Real-Time Order Status Without WebSockets",
        description:
          "Budget and timeline constraints ruled out a full WebSocket server. Solved using React Query's polling with smart refetch intervals — aggressive (5s) for active dispatch views, relaxed (30s) for historical reports — giving operators a near-live feel without the infrastructure overhead.",
      },
      {
        title: "Driver Assignment Conflict Prevention",
        description:
          "Two dispatchers assigning the same driver to different orders simultaneously would create operational chaos. Implemented optimistic locking on the driver document: the assignment transaction reads, validates, and updates availability atomically, rejecting concurrent conflicting writes.",
      },
      {
        title: "Delivery History Performance",
        description:
          "Reporting queries over months of delivery history were slow on unindexed collections. Added compound indexes on {status, createdAt} and {driverId, createdAt} reducing dashboard load time for historical views from 3s+ to under 300ms.",
      },
    ],
    results: [
      "Full dispatch lifecycle — order creation to delivery confirmation — digitised and automated",
      "Real-time order board giving dispatchers live fleet visibility",
      "Historical reporting query time reduced from 3s+ to under 300ms via indexing",
      "Shipped to production on schedule within a 3-month engagement",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Docker", "Nginx", "JWT"],
    lesson: "Real-time UX does not always require WebSockets. Understanding what 'real-time' actually means to the end user — in this case, dispatchers checking status every few seconds, not millisecond-precision traders — lets you make dramatically simpler engineering choices that still fully satisfy the requirement.",
  },

  "aurora-plc": {
    title: "Aurora General PLC",
    subtitle: "Company Management & Portfolio Platform",
    client: "Aurora General PLC",
    role: "Full Stack Developer",
    period: "Oct 2024 – Jan 2025",
    status: "Live · Production",
    live: "https://www.auroraplc.com/",
    img: "/Aurora.png",
    accent: "purple",
    overview:
      "A multi-feature company management platform for Aurora General PLC covering their public-facing company profile, products and services showcase, job postings and applicant tracking, CRM for client relationships, and a dynamic blog for content publishing — all managed through a single admin interface.",
    problem:
      "Aurora operated with a static website and spreadsheet-based job and client tracking. They needed a platform where marketing could publish content, HR could manage job postings and applicants, and business development could track client interactions — without relying on the engineering team for routine updates.",
    architecture: {
      description:
        "A Next.js full-stack application using server-side rendering for SEO-critical public pages and client-side rendering for the authenticated admin panel. MongoDB stores all content as flexible documents. An admin authentication layer restricts content management to authorised users.",
      layers: [
        {
          name: "Public Site",
          detail: "SSR-rendered pages for company profile, products, services, jobs, and blog — optimised for search engine indexing.",
          tech: "Next.js · SSR · Tailwind CSS",
        },
        {
          name: "Admin Panel",
          detail: "Authenticated CMS for managing all content types: products, services, blog posts, job listings, applicants, and CRM entries.",
          tech: "Next.js · React · Client-side Auth",
        },
        {
          name: "API Layer",
          detail: "Next.js API routes handling all CRUD operations for content, job applications, and CRM records.",
          tech: "Node.js · Next.js API Routes · REST",
        },
        {
          name: "Database",
          detail: "MongoDB for all content types with flexible schemas allowing marketing to add custom fields without code changes.",
          tech: "MongoDB · Mongoose",
        },
      ],
    },
    myRole: [
      "Designed the information architecture covering six content domains (company profile, products, jobs, applicants, CRM, blog) and their relationships.",
      "Built the full admin CMS allowing non-technical staff to manage all content types without developer intervention.",
      "Implemented the job application pipeline: posting creation, public application form, applicant tracking with status progression (received → reviewing → shortlisted → hired/rejected).",
      "Built the CRM module for tracking client interactions, contact history, and deal stages.",
      "Optimised public pages for SEO using Next.js SSR, structured metadata, and semantic HTML.",
    ],
    challenges: [
      {
        title: "Multi-Role Content Management Without Complexity",
        description:
          "Marketing, HR, and business development each had different content domains and needed intuitive interfaces without learning a complex CMS. Built role-scoped admin views where each department only sees and manages their relevant content types — reducing cognitive load while enforcing access boundaries.",
      },
      {
        title: "SEO for a Dynamic Content Platform",
        description:
          "Job listings and blog posts needed to be discoverable by search engines despite being database-driven. Used Next.js getServerSideProps for all public-facing routes, generating fully rendered HTML that search engine crawlers could index — achieving proper SEO without a separate static site.",
      },
      {
        title: "Applicant Tracking Without a Dedicated ATS",
        description:
          "Building a full ATS from scratch was out of scope, but HR needed structured applicant progression. Modelled applicants as state-machine documents with status transitions and email notification hooks — giving HR the core ATS flow they needed without over-engineering the solution.",
      },
    ],
    results: [
      "Six business domains (profile, products, jobs, applicants, CRM, blog) managed through a single admin interface",
      "Non-technical staff self-managing all content updates without developer involvement",
      "SSR-rendered public pages indexed by search engines from launch day",
      "Full applicant tracking pipeline digitising Aurora's hiring workflow",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "React", "Tailwind CSS", "JWT"],
    lesson: "A well-scoped internal tool often delivers more business value than a sophisticated external one. By scoping the admin CMS to exactly what each role needed — no more, no less — adoption was immediate. The platform was in active daily use by non-technical staff from week one.",
  },
};

const ac = {
  violet: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    tag: "bg-violet-950/60 text-violet-300 border-violet-800/60",
    dot: "bg-violet-400",
    num: "bg-violet-500/15 text-violet-400",
    gradient: "from-violet-600 to-indigo-700",
    ring: "ring-violet-500/25",
    glow: "bg-violet-600/15",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    tag: "bg-emerald-950/60 text-emerald-300 border-emerald-800/60",
    dot: "bg-emerald-400",
    num: "bg-emerald-500/15 text-emerald-400",
    gradient: "from-emerald-600 to-teal-700",
    ring: "ring-emerald-500/25",
    glow: "bg-emerald-600/15",
  },
  orange: {
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    tag: "bg-orange-950/60 text-orange-300 border-orange-800/60",
    dot: "bg-orange-400",
    num: "bg-orange-500/15 text-orange-400",
    gradient: "from-orange-600 to-amber-700",
    ring: "ring-orange-500/25",
    glow: "bg-orange-600/15",
  },
  sky: {
    badge: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    tag: "bg-sky-950/60 text-sky-300 border-sky-800/60",
    dot: "bg-sky-400",
    num: "bg-sky-500/15 text-sky-400",
    gradient: "from-sky-600 to-blue-700",
    ring: "ring-sky-500/25",
    glow: "bg-sky-600/15",
  },
  purple: {
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    tag: "bg-purple-950/60 text-purple-300 border-purple-800/60",
    dot: "bg-purple-400",
    num: "bg-purple-500/15 text-purple-400",
    gradient: "from-purple-600 to-violet-700",
    ring: "ring-purple-500/25",
    glow: "bg-purple-600/15",
  },
};

function SectionBlock({ label, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5"
    >
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-500">
          {label}
        </span>
        <span className="flex-1 h-px bg-slate-800" />
      </div>
      {children}
    </motion.div>
  );
}

export default function CaseStudyPage({ params }) {
  const study = caseStudies[params.slug];
  if (!study) notFound();
  const a = ac[study.accent];

  return (
    <motion.div
      className="min-h-full bg-slate-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ─── HERO ─── */}
      <div className="relative border-b border-slate-800/70 px-6 py-14 overflow-hidden">
        <div className={`pointer-events-none absolute -top-24 -right-24 w-96 h-96 ${a.glow} rounded-full blur-[100px]`} />
        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/portfolio">
            <span className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5 mb-8 w-fit group">
              <span className="group-hover:-translate-x-0.5 transition-transform">←</span> Back to Portfolio
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span className={`text-xs font-semibold border px-3 py-1 rounded-full ${a.badge}`}>
              {study.subtitle}
            </span>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
              {study.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
            {study.title}
          </h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed mb-8 text-base">
            {study.overview}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-5 py-6 border-t border-slate-800">
            {[
              { l: "Client", v: study.client },
              { l: "My Role", v: study.role },
              { l: "Timeline", v: study.period },
              { l: "Status", v: study.status },
            ].map(({ l, v }) => (
              <div key={l}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold mb-1">{l}</p>
                <p className="text-sm text-slate-300 font-medium leading-snug">{v}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {study.tech.map((t, i) => (
              <span key={i} className={`text-xs border px-2.5 py-1 rounded-full font-medium ${a.tag}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SCREENSHOT ─── */}
      <div className="bg-slate-900/60 border-b border-slate-800/60 px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-64 md:h-[400px] rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl">
            <Image src={study.img} alt={study.title} fill className="object-contain bg-slate-950" />
          </div>

          {study.gallery && (
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {study.gallery.map((shot, i) => (
                <figure key={i} className="flex flex-col gap-2">
                  <div className="relative h-48 md:h-56 rounded-xl overflow-hidden border border-slate-700/50 shadow-xl">
                    <Image
                      src={shot.src}
                      alt={shot.caption}
                      fill
                      className="object-contain bg-slate-950"
                    />
                  </div>
                  <figcaption className="text-xs text-slate-500 leading-relaxed px-1">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ─── CONTENT ─── */}
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-16">

        {/* Problem */}
        <SectionBlock label="The Problem">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-7">
            <p className="text-slate-300 leading-relaxed">{study.problem}</p>
          </div>
        </SectionBlock>

        {/* Architecture */}
        <SectionBlock label="System Architecture">
          <p className="text-slate-400 leading-relaxed text-sm">{study.architecture.description}</p>
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            {study.architecture.layers.map((layer, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row sm:items-start gap-4 px-6 py-5 ${
                  i < study.architecture.layers.length - 1 ? "border-b border-slate-800/80" : ""
                }`}
              >
                <div className="sm:w-44 shrink-0 mt-0.5">
                  <span className={`text-xs font-bold px-2.5 py-1.5 rounded-full border inline-flex ${a.badge}`}>
                    {layer.name}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-slate-300 text-sm leading-relaxed mb-2.5">{layer.detail}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {layer.tech.split(" · ").map((t, ti) => (
                      <span key={ti} className="text-[10px] bg-slate-800 text-slate-500 px-2 py-0.5 rounded border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionBlock>

        {/* My Role */}
        <SectionBlock label="My Contributions">
          <ul className="flex flex-col gap-3">
            {study.myRole.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-3.5 bg-slate-900 rounded-xl border border-slate-800 px-5 py-4"
              >
                <span className={`mt-0.5 shrink-0 w-5 h-5 rounded-full ${a.num} flex items-center justify-center text-[10px] font-bold`}>
                  {i + 1}
                </span>
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </ul>
        </SectionBlock>

        {/* Challenges */}
        <SectionBlock label="Engineering Challenges">
          <div className="flex flex-col gap-5">
            {study.challenges.map((ch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-slate-900 rounded-2xl border border-slate-800 p-6"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`w-2 h-2 rounded-full ${a.dot} flex-shrink-0`} />
                  <h3 className="font-bold text-white text-base">{ch.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{ch.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionBlock>

        {/* Results */}
        <SectionBlock label="Results & Impact">
          <div className="grid sm:grid-cols-2 gap-3.5">
            {study.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 bg-slate-900 rounded-xl border border-slate-800 px-5 py-4"
              >
                <span className={`mt-1 shrink-0 w-2 h-2 rounded-full ${a.dot}`} />
                <p className="text-slate-300 text-sm leading-relaxed">{r}</p>
              </motion.div>
            ))}
          </div>
        </SectionBlock>

        {/* Lesson */}
        <SectionBlock label="Key Takeaway">
          <div className={`bg-slate-900 border border-slate-800 rounded-2xl p-7 ring-1 ${a.ring}`}>
            <p className="text-slate-200 leading-relaxed italic text-base">
              &ldquo;{study.lesson}&rdquo;
            </p>
          </div>
        </SectionBlock>

        {/* CTA navigation */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
          <a href={study.live} target="_blank" rel="noreferrer">
            <button className={`px-6 py-3 rounded-full bg-gradient-to-r ${a.gradient} text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg`}>
              View Live Site ↗
            </button>
          </a>
          <Link href="/portfolio">
            <button className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-800 transition-colors">
              ← All Projects
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-800 transition-colors">
              Discuss a Project
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
