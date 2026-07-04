"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { id: 1, url: "/", title: "Home" },
  { id: 2, url: "/about", title: "About" },
  { id: 3, url: "/portfolio", title: "Portfolio" },
  { id: 4, url: "/blog", title: "Blog" },
  { id: 5, url: "/resume", title: "Resume" },
  { id: 6, url: "/contact", title: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/Reman-tsega",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/haylemichael-tsega/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://t.me/kings_time",
    label: "Telegram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.9l-2.95-.924c-.64-.204-.657-.64.135-.954l11.57-4.461c.537-.194 1.006.131.969.66z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };
  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.1 },
    },
  };
  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 border-b border-slate-100">
      {/* DESKTOP LINKS */}
      <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
        {links.map((link) => (
          // this is the commentthat is being re d kdfl
          <NavLink link={link} key={link.id} />
        ))}
      </nav>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:absolute xl:left-1/2 xl:-translate-x-1/2">
        <Link
          href="/"
          className="flex items-center gap-1.5 group"
          aria-label="Haylemichael Tsega — Home"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
            <span className="text-white text-xs font-bold">H</span>
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-[11px] font-bold text-slate-900 tracking-tight">Haylemichael</span>
            <span className="text-[9px] text-violet-600 font-semibold tracking-widest uppercase">Tsega</span>
          </div>
        </Link>
      </div>

      {/* RIGHT: Social + availability */}
      <div className="hidden md:flex items-center gap-4">
        {/* Availability badge */}
        <Link href="/contact">
          <span className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full hover:bg-emerald-100 transition-colors">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Open to work
          </span>
        </Link>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-slate-400 hover:text-slate-800 transition-colors"
            >
              {s.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* MOBILE HAMBURGER */}
      <div className="md:hidden">
        <button
          className="w-8 h-6 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-0.5 bg-slate-800 rounded origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-0.5 bg-slate-800 rounded"
          />
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-0.5 bg-slate-800 rounded origin-left"
          />
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="fixed top-0 left-0 w-screen h-screen bg-slate-950 flex flex-col items-center justify-center gap-8 z-40"
          >
            <motion.div
              variants={listItemVariants}
              className="flex flex-col gap-8 items-center"
            >
              {/* Availability badge in mobile menu */}
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Open to work
              </span>

              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-bold text-white hover:text-violet-400 transition-colors"
                >
                  {link.title}
                </Link>
              ))}

              <div className="flex items-center gap-5 pt-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
