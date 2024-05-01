import React from "react";
import { projects } from "@/constants/projects";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <motion.h1
        className="text-6xl max-md:text-3xl font-bold flex w-full justify-center mb-48"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
      >
        Some of my projects
      </motion.h1>
      {projects.map((project, index) => {
        return (
          <div key={index} className="mb-48 flex max-md:flex-col-reverse px-20 max-md:gap-7 max-md:px-14">
            <motion.div
              className="w-full lg:pe-52 flex flex-col gap-9"
              initial={{ opacity: 0, y: 30, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1.6 }}
            >
              <h2 className="text-5xl font-semibold">{project.title}</h2>
              <p>{project.description}</p>
              <p>Skills: {project.skills}</p>
              <p>
                Find more at :{" "}
                <Link
                  href={project.link}
                  className="hover:underline underline-offset-4"
                  target="_blank"
                >
                  {project.link}
                </Link>
              </p>
            </motion.div>
            <motion.div
              className="basis-[100%]"
              initial={{ opacity: 0, y: 30, x: -30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 1.6 }}
            >
              <Carousel opts={{ loop: true }}>
                <CarouselContent>
                  {project.images.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <Image src={img} alt="image" width={1920} height={1080} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
