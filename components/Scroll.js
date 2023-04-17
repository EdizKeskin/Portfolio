"use client";
import { motion } from "framer-motion";

export default function Scroll() {
  return (
    <div className="justify-center hidden mt-20 sm:flex">
      <a href="#about" aria-label="Scroll to about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-300 flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 mb-1 bg-gray-300 rounded-full"
          />
        </div>
      </a>
    </div>
  );
}
