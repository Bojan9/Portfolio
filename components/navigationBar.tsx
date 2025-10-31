"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function NavigationBar() {
  const handleDownloadCV = () => {
    const cvUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Bojan_Spasovski_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="absolute bottom-8 w-full px-8">
      <div className="flex justify-between items-center">
        {/* GitHub Button - Bottom Left */}
        <motion.a
          href="https://github.com/Bojan9"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1.2 }}
          className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
        >
          <FaGithub className="text-xl" />
          <span>GitHub</span>
        </motion.a>

        {/* Navigation - Bottom Center */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 1.2,
            ease: "easeOut",
          }}
          className="flex space-x-6 text-sm"
        >
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-300 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/hobbies"
            className="hover:text-gray-300 transition-colors"
          >
            Hobbies
          </Link>
        </motion.nav>

        {/* CV Button - Bottom Right */}
        <motion.button
          onClick={handleDownloadCV}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1.2 }}
          className="text-sm hover:text-gray-300 transition-colors"
        >
          CV
        </motion.button>
      </div>
    </div>
  );
}
