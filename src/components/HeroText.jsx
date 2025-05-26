import React, { useState } from "react";
import { motion } from "framer-motion";
import { FlipWords } from "./FlipWords";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
 
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-20 md:mt-32 px-8">
      {/* Left side text */}
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

      {/* Right side image with flip on click */}
      <motion.div
        className="relative w-72 h-96 mt-16 ml-[100px] cursor-pointer perspective"

        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 120 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)",
        }}
      >
        <div
          className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d" 
        >
          {/* Front face */}
          <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden border-2 border-gray-800 shadow-lg shadow-gray-800/30">
            <img
              src="/assets/myimage.png"
              alt="Manokamna"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back face */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center bg-gradient-to-br from-purple-700 to-blue-600 text-white p-6 rounded-xl shadow-xl shadow-blue-500/30">
            <h3 className="text-xl font-semibold mb-2">Skills & CGPA</h3>
            <p className="text-lg mb-2">
              CGPA: <span className="font-bold">8.69 / 10</span>
            </p>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
