import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "../context/ScrollContext";

// Importing skill icons
import js from "../assets/images/js.svg";
import nodejs from "../assets/images/nodejs.svg";
import mongodb from "../assets/images/mongodb.svg";
import tailwind from "../assets/images/tailwind.svg";
import css from "../assets/images/css.svg";
import java from "../assets/images/java.svg";
import postman from "../assets/images/postman.svg";
import git from "../assets/images/git.svg";
import cpp from "../assets/images/cpp.svg";
import c from "../assets/images/c.svg";
import py from "../assets/images/py.svg";
import express from "../assets/images/express.svg";
import docker from "../assets/images/Docker.svg";
import redis from "../assets/images/Redis-Dark.svg";
import kubernetes from "../assets/images/Kubernetes.svg";
import nextjs from "../assets/images/NextJS-Dark.svg";
import react from "../assets/images/react.svg";
import firebase from "../assets/images/Firebase-Dark.svg";
import Postgre from "../assets/images/PostgreSQL-Dark.svg";
import Prisma from "../assets/images/Prisma.svg";
import Spring from "../assets/images/spring-boot.png";
import AWS from "../assets/images/aws.svg";

const skillsData = [
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: Spring },
  { name: "AWS", icon: AWS },

  { name: "C++", icon: cpp },
  { name: "C", icon: c },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "NextJS", icon: nextjs },
  { name: "Express.js", icon: express },
  { name: "Node.js", icon: nodejs },
  { name: "PostgreSQL", icon: Postgre },
  { name: "Prisma ORM", icon: Prisma },

  { name: "MongoDB", icon: mongodb },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "CSS", icon: css },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
  { name: "Redis", icon: redis },
  { name: "Firebase", icon: firebase },
  { name: "Git", icon: git },
  { name: "Postman", icon: postman },
];

const Skills = () => {
  const { dark } = useScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className={`py-16 px-4 md:px-8 transition-all duration-500 ${
        dark
          ? "bg-gradient-to-br from-[#000000] via-[#0f0f1e] to-[#1a0033]"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              dark
                ? "text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
                : "text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
            }`}
          >
            My Skills & Expertise
          </h1>
          <div
            className={`w-24 h-1 mx-auto rounded-full ${
              dark
                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                : "bg-gradient-to-r from-blue-600 to-purple-600"
            }`}
          />
          <p
            className={`mt-4 text-lg ${dark ? "text-gray-300" : "text-gray-600"}`}
          >
            Technologies and tools I've mastered throughout my journey
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: dark
                  ? "0 20px 40px rgba(59, 130, 246, 0.2)"
                  : "0 20px 40px rgba(59, 130, 246, 0.15)",
              }}
              className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-xl transition-all duration-300 group cursor-pointer backdrop-blur-sm ${
                dark
                  ? "bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 border border-white/10 hover:border-blue-500/50 hover:bg-zinc-800/90"
                  : "bg-gradient-to-br from-white/80 to-gray-100/80 border border-gray-200 hover:border-blue-400 shadow-sm hover:shadow-lg"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ duration: 0.3 }}
                className="mb-3"
              >
                <img
                  loading="lazy"
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
                />
              </motion.div>
              <p
                className={`text-xs md:text-sm font-semibold text-center leading-snug ${
                  dark
                    ? "text-gray-200 group-hover:text-blue-300"
                    : "text-gray-700 group-hover:text-blue-600"
                } transition-colors duration-300`}
              >
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div
            className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
              dark
                ? "bg-blue-900/20 border border-blue-500/30 hover:border-blue-400/60"
                : "bg-blue-100/40 border border-blue-300/30 hover:border-blue-400/60 shadow-md"
            }`}
          >
            <h3 className="text-xl font-bold mb-3 text-blue-400">Backend</h3>
            <p className={dark ? "text-gray-300" : "text-gray-700"}>
              Java, Spring Boot, Node.js, Express, Microservices, RESTful APIs
            </p>
          </div>

          <div
            className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
              dark
                ? "bg-purple-900/20 border border-purple-500/30 hover:border-purple-400/60"
                : "bg-purple-100/40 border border-purple-300/30 hover:border-purple-400/60 shadow-md"
            }`}
          >
            <h3 className="text-xl font-bold mb-3 text-purple-400">Frontend</h3>
            <p className={dark ? "text-gray-300" : "text-gray-700"}>
              React, Next.js, Tailwind CSS, Framer Motion, Responsive Design
            </p>
          </div>

          <div
            className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
              dark
                ? "bg-pink-900/20 border border-pink-500/30 hover:border-pink-400/60"
                : "bg-pink-100/40 border border-pink-300/30 hover:border-pink-400/60 shadow-md"
            }`}
          >
            <h3 className="text-xl font-bold mb-3 text-pink-400">
              DevOps & Tools
            </h3>
            <p className={dark ? "text-gray-300" : "text-gray-700"}>
              Docker, Kubernetes, AWS, Git, Postman, Firebase, MongoDB
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
