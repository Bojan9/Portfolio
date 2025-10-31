"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: [0, 1, 0.8, 1],
          filter: ["blur(10px)", "blur(0px)"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="text-white text-8xl font-bold tracking-wide"
      >
        Shift
      </motion.h1>

      <div className="absolute bottom-10 w-full flex justify-center">
        <motion.div
          className="h-0.5 w-[200px] bg-white/20 overflow-hidden rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <motion.div
            className="h-full w-full bg-white/60 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}