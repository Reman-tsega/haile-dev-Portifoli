"use client";

import { AnimatePresence, MotionConfig } from "framer-motion";
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
      <AnimatePresence mode="wait">
        <div
          key={pathName}
          className="w-screen h-screen bg-white overflow-hidden"
        >
          <motion.div
            className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
            animate={{ height: "0vh" }}
            exit={{ height: "140vh" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl font-bold cursor-default z-50 w-fit h-fit capitalize"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {getPageLabel(pathName)}
          </motion.div>
          <motion.div
            className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
            initial={{ height: "140vh" }}
            animate={{ height: "0vh", transition: { delay: 0.5 } }}
          />
          <div className="h-24 shrink-0">
            <Navbar />
          </div>
          <main id="main-content" className="h-[calc(100vh-6rem)] overflow-y-auto">
            {children}
          </main>
        </div>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default TransitionProvider;
