"use client";

import { motion } from "framer-motion";

export default function AnimatedHeading() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1.2,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="text-8xl font-bold select-none tracking-wide"
      >
        Bojan Spasovski
      </motion.h1>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 3.2,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="mt-6 flex space-x-8 text-2xl"
      >
        <a href="#" className="hover:text-gray-300 transition-colors">About</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Portfolio</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Hobby</a>
      </motion.nav>
    </div>
  );
}
