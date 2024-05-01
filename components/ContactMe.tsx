import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <div className=" bg-white text-black rounded-t-3xl h-[450px] relative -top-6">
      <p className="p-20 text-5xl font-bold flex justify-center">
        Find me here
      </p>
      <div className="w-full flex max-md:flex-col max-md:gap-6 max-md:px-3 justify-around">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6 }}
        >
          <Link
            href={"https://www.linkedin.com/in/lakshaymanchanda033/"}
            className="flex gap-5 items-center hover:underline underline-offset-4 filter-black"
            target="_blank"
          >
            <Image
              src={"/images/linkedInLogo.svg"}
              alt="linkedIn"
              width={30}
              height={30}
            />
            https://www.linkedin.com/in/lakshaymanchanda033
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          <Link
            href={"https://github.com/Lakshayyy-m"}
            className="flex gap-5 items-center hover:underline underline-offset-4"
            target="_blank"
          >
            <Image
              src={"/images/githubLogo.svg"}
              alt="github"
              width={30}
              height={30}
            />
            https://github.com/Lakshayyy-m
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          <Link
            href={"https://wa.me/918920277767"}
            className="flex gap-5 items-center hover:underline underline-offset-4"
            target="_blank"
          >
            <Image
              src={"/images/whatsapp.svg"}
              alt="github"
              width={30}
              height={30}
            />
            +91 8920277767
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6 }}
        >
          <Link
            href={"mailto:lakshaymanchanda03@gmail.com"}
            className="flex gap-5 items-center hover:underline underline-offset-4"
            target="_blank"
          >
            <Image
              src={"/images/mailLogo.svg"}
              alt="github"
              width={30}
              height={30}
            />
            lakshaymanchanda03@gmail.com
          </Link>
        </motion.div>
      </div>
      <div className="w-full bg-white absolute -bottom-6 h-6" />
    </div>
  );
};

export default ContactMe;
