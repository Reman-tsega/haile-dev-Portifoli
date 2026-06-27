"use client";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactLinks = [
  {
    label: "Email",
    value: "remantsega@gmail.com",
    href: "mailto:remantsega@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+251 947 731 212",
    href: "tel:+251947731212",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    value: "@kings_time",
    href: "https://t.me/kings_time",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.9l-2.95-.924c-.64-.204-.657-.64.135-.954l11.57-4.461c.537-.194 1.006.131.969.66z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "haylemichael-tsega",
    href: "https://www.linkedin.com/in/haylemichael-tsega/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "Reman-tsega",
    href: "https://github.com/Reman-tsega",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

const infoCards = [
  {
    icon: "📍",
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    sub: "UTC+3 · East Africa Time",
  },
  {
    icon: "🌍",
    label: "Availability",
    value: "Open to Opportunities",
    sub: "Remote globally · On-site Addis Ababa",
  },
  {
    icon: "⚡",
    label: "Response Time",
    value: "Within 24 hours",
    sub: "Usually same day",
  },
  {
    icon: "💼",
    label: "Looking For",
    value: "Senior Backend / Staff Roles",
    sub: "Fintech · Cloud · Distributed Systems",
  },
];

const ContactPage = () => {
  const [state, handleSubmit] = useForm("myzgwjrb");
  const messageRef = useRef();
  const emailRef = useRef();
  const [, setLoading] = useState(false);

  useEffect(() => {
    if (state.submitting) {
      setLoading(true);
    }
    if (state.succeeded) {
      setLoading(false);
      toast.success("Message sent! I'll get back to you within 24 hours.", {
        toastId: "successToast",
      });
      if (messageRef.current) messageRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
    }
    if (state.errors && Object.keys(state.errors).length > 0) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.", {
        toastId: "errorToast",
      });
    }
  }, [state]);

  return (
    <motion.div
      className="min-h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* ─── HERO ─── */}
      <div className="bg-slate-950 px-6 py-14 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-violet-600/15 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-emerald-400">
                Open to senior backend roles · Remote globally
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-violet-400 font-semibold mb-3">
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                together.
              </span>
            </h1>
            <p className="text-slate-400 max-w-xl leading-relaxed">
              Open to senior backend engineering roles, technical consulting, and interesting
              system design challenges — whether it&apos;s a payment system, a distributed
              platform, or a hard scalability problem.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── INFO CARDS ─── */}
      <div className="bg-slate-900 border-b border-slate-800/60 px-6 py-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {infoCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              className="bg-slate-800/60 rounded-xl border border-slate-700/50 px-4 py-4"
            >
              <div className="text-xl mb-2">{card.icon}</div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
                {card.label}
              </p>
              <p className="text-sm font-semibold text-white leading-snug">{card.value}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{card.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── MAIN ─── */}
      <div className="bg-white px-6 py-14">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT: Contact details */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-violet-600 font-semibold mb-3">
                Get in Touch
              </p>
              <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                Reach me on any platform
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {contactLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 group p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 group-hover:text-violet-600 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 rounded-2xl p-5">
                <p className="text-xs uppercase tracking-widest text-violet-600 font-bold mb-2">
                  Currently Available
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Based in <strong>Addis Ababa, Ethiopia</strong> (UTC+3).
                  Available for remote roles at global tech companies and fintech firms.
                  Open to senior backend, staff engineer, and technical consulting engagements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.form
            onSubmit={handleSubmit}
            method="post"
            action="https://formspree.io/f/myzgwjrb"
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col gap-5"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Send a Message</h2>
              <p className="text-sm text-gray-400">I read every message and respond within 24 hours.</p>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Your Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
                placeholder="Jane Smith"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Your Email
              </label>
              <input
                name="email"
                ref={emailRef}
                type="email"
                id="email"
                required
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition"
                placeholder="jane@company.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Subject
              </label>
              <select
                name="subject"
                id="subject"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition bg-white text-gray-700"
              >
                <option value="">Select a topic...</option>
                <option value="job-opportunity">Job Opportunity / Role</option>
                <option value="consulting">Technical Consulting</option>
                <option value="project">Project Collaboration</option>
                <option value="system-design">System Design Discussion</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Message
              </label>
              <textarea
                rows={5}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition resize-none"
                name="message"
                ref={messageRef}
                id="message"
                required
                placeholder="Tell me about the role, project, or challenge you're working on..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-full bg-violet-600 py-3.5 text-sm font-bold text-white hover:bg-violet-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-violet-600/25"
            >
              {state.submitting ? "Sending..." : "Send Message →"}
            </button>
          </motion.form>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </motion.div>
  );
};

export default ContactPage;
