import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TechStack = () => {
  return (
    <motion.div className="p-8 flex flex-col gap-16 w-full">
      <motion.div
        className="w-full flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        <h1 className="text-6xl max-md:text-2xl font-bold">I work with the T3 stack</h1>
        <p>which is</p>
      </motion.div>
      <motion.div className="flex justify-around mb-7">
        <motion.div
          className="flex flex-col justify-center items-center "
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6 }}
        >
          <Image
            src={"/images/tsLogo.svg"}
            alt="typescript"
            width={100}
            height={100}
            className="max-md:scale-75"
          />
          <p className="max-md:scale-75">TypeScript</p>
        </motion.div>
        <motion.div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/nextLogo.svg"}
            alt="next"
            width={100}
            height={100}
            className="max-md:scale-75"
          />
          <p className="max-md:scale-75">NextJS</p>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6 }}
        >
          <Image
            src={"/images/tailwindLogo.svg"}
            alt="tailwind"
            width={100}
            height={100}
            className="max-md:scale-75"
          />
          <p className="max-md:scale-75">TailWind CSS</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        <p className="text-center  max-md:px-[2vw] px-[20vw] text-2xl leading-loose">
          My proficiency lies in crafting beautiful frontend which is attached
          to a robust backend all powerd by NextJS. I can create any frontend
          imaginable and implement it with a strong and powerful backend. I even
          have hands on practice with implementing animations to potray
          beautiful animations with the help of framer motion.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TechStack;
