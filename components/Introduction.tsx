"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TechStack from "./TechStack";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

const Introduction = () => {
  const [introVisible, setIntroVisible] = useState(true);

  setTimeout(() => {
    setIntroVisible(false);
  }, 2000);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full "
    >
      <div className="flex flex-col gap-8 h-screen w-full text-7xl max-md:text-3xl font-bold text-white justify-center bg-gradient-to-r p-4 from-black from-20%  to-transparent">
        <AnimatePresence>
          {introVisible ? (
            <motion.div
              animate={{ opacity: [0, 1, 0], y: [30, 0 - 30] }}
              transition={{ duration: 5, times: [0, 0.1, 1] }}
              exit={{ opacity: 0, y: -30 }}
              className="flex flex-col gap-8"
            >
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Hi
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0, y: -30 }}
              >
                My Name is
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0, y: -30 }}
              >
                Lakshay Manchanda
              </motion.p>
            </motion.div>
          ) : (
            <>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0, y: -30 }}
                className="flex flex-col gap-8"
              >
                I&apos;m a Full Stack Web developer
                <br />
                <br />
                <span className="text-xl font-normal">
                  Scroll Down to know more about me
                </span>
              </motion.p>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="bg-black rounded-tr-3xl border-black">
        <TechStack />
      </div>
      <div className="bg-black text-white pt-52">
        <Projects />
      </div>
      <div>
        <ContactMe />
      </div>
    </motion.section>
  );
};

export default Introduction;
