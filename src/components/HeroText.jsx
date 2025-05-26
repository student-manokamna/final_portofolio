import React from "react";
import { motion } from "framer-motion";
import { FlipWords } from "./FlipWords";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-20 md:mt-32 px-8">
      {/* Left side text only */}
      <div className="text-center md:text-left z-10 space-y-5">
        <motion.h1
          className="text-4xl font-medium"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          Hi I'm MANOKAMNA
        </motion.h1>

        <motion.p
          className="text-5xl font-medium text-neutral-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          A Developer <br /> Dedicated to Crafting
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <FlipWords
            words={words}
            className="font-black text-white text-8xl"
          />
        </motion.div>

        <motion.p
          className="text-4xl font-medium text-neutral-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          Web Solutions
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
