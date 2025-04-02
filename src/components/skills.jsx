import React from "react";
import js from "../../public/js.svg";
import nodejs from "../../public/nodejs.svg";
import mongodb from "../../public/mongodb.svg";
import tailwind from "../../public/tailwind.svg";
import css from "../../public/css.svg";
import java from "../../public/java.svg";
import postman from "../../public/postman.svg";
import git from "../../public/git.svg";
import cpp from "../../public/cpp.svg";
import c from "../../public/c.svg";
import py from "../../public/py.svg";
import express from "../../public/express.svg";
import docker from "../../public/Docker.svg";
import redis from "../../public/Redis-Dark.svg";
import kubernetes from "../../public/Kubernetes.svg";
import nextjs from "../../public/NextJS-Dark.svg";
import react from "../../public/react.svg";
import firebase from "../../public/Firebase-Dark.svg";

const skillsData = [
  { name: "C++", icon: cpp },
  { name: "C", icon: c },
  { name: "Java", icon: java },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "NextJS", icon: nextjs },
  { name: "Express.js", icon: express },
  { name: "Node.js", icon: nodejs },
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
  return (
    <div className="bg-white p-8 w-[95%] rounded-md shadow-md text-center">
      <h1 className="md:text-4xl text-3xl font-bold text-gray-800 mb-10">
        My Skills
      </h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-1" />
            <p className="text-gray-700 text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
