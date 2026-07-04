"use client";

import { MotionConfig } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const pageLabels = {
  "/": "Home",
  "/about": "About",
  "/portfolio": "Portfolio",
  "/resume": "Resume",
  "/blog": "Blog",
  "/contact": "Contact",
};

function getPageLabel(path) {
  if (pageLabels[path]) return pageLabels[path];
  if (path.startsWith("/portfolio/")) return "Portfolio";
  if (path.startsWith("/blog/")) return "Blog";
  const segment = path.split("/").filter(Boolean).pop();
  return segment ? segment.replace(/-/g, " ") : "Page";
}

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <MotionConfig reducedMotion="user">
      <div className="w-screen h-screen bg-white overflow-hidden">
        {/* Curtain reveal: re-mounts on every route change and animates itself
            away. Pure overlay — the page below is already mounted, so a
            dropped animation frame can never leave the app stuck on black. */}
        <div key={pathName} className="pointer-events-none">
          <motion.div
            className="h-screen w-screen fixed bottom-0 left-0 bg-black rounded-t-[100px] z-40"
            initial={{ height: "140vh" }}
            animate={{ height: "0vh" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl font-bold cursor-default z-50 w-fit h-fit capitalize"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {getPageLabel(pathName)}
          </motion.div>
        </div>
        <div className="h-24 shrink-0">
          <Navbar />
        </div>
        <main
          key={`main-${pathName}`}
          id="main-content"
          className="h-[calc(100vh-6rem)] overflow-y-auto"
        >
          {children}
        </main>
      </div>
    </MotionConfig>
  );
};

export default TransitionProvider;
