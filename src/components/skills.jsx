import React from "react";
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

const skillsData = [
  { name: "C++", icon: cpp },
  { name: "C", icon: c },
  { name: "Java", icon: java },
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

  return (
    <div
      className={`p-8 w-[95%] rounded-md shadow-md mx-auto my-10 transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-white text-gray-800"
      }`}
    >
      <h1 className="md:text-4xl text-3xl font-bold mb-10 text-purple-500 text-center">
        My Skills
      </h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-3 rounded-lg transition duration-300 shadow-sm hover:shadow-md ${
              dark ? "bg-white/10 hover:bg-white/20" : "bg-gray-100"
            }`}
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-1" />
            <p
              className={`text-sm font-medium ${
                dark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
