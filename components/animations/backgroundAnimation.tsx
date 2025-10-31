"use client";

import { useEffect } from "react";
import { setupAnimation } from "@/lib/background_animation/animation";

export default function AnimatedBackground() {
  useEffect(() => {
    const container = document.createElement("div");
    container.classList.add("content--canvas");
    document.body.appendChild(container);

    setupAnimation(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return null;
}
