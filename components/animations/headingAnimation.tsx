"use client";

import { motion } from "framer-motion";
import NavigationBar from "../navigationBar";

export default function AnimatedHeading() {
  return (
    <div className="relative z-10 h-full text-white">
      <div className="flex flex-col items-center justify-center h-full">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1.2,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="text-8xl font-bold select-none tracking-wide"
        >
          Bojan Spasovski
        </motion.h1>
      </div>

      <NavigationBar />
    </div>
  );
}
