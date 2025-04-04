import React from "react";
import Img11 from "../assets/images/Amulate1.jpg";
import Img12 from "../assets/images/int.jpg";
import { useScroll } from "../context/ScrollContext";

const experiences = [
  {
    id: 2,
    title: "The Amulate Program",
    mentor: "Leonardo Davinci Darwin",
    mentorLink: "https://www.linkedin.com/in/leonardo-davinci-darwin/",
    description:
      "Developing a business case for verifying Android OS-enabled devices, starting with automating mobile handsets.",
    learnings:
      "Explored Testing, DevOps, and Automation potentials applicable across various fields.",
    techStack: [
      "Android Dev Tools",
      "Git",
      "DBMS",
      "MS Excel",
      "Web Development",
    ],
    projectLink:
      "https://github.com/samar-abbas-786/Verification-of-Android-OS-enabled-Devices",
    image: Img11,
  },
  {
    id: 1,
    title: "Apna Darzi",
    description:
      "Developed and refined the Apna Darzi mobile app, enabling seamless online tailoring services with doorstep delivery. Successfully contributed to its launch on the Google Play Store.",
    learnings:
      "Expertise in developing business logic for startup applications, designing highly optimized APIs, and integrating services like Firebase for notifications, Google Analytics, and more.",
    techStack: [
      "React.js",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Google Analytics",
      "Twilio",
    ],
    projectLink:
      "https://play.google.com/store/apps/details?id=com.onlinetailoring&hl=en_IN",
    image: Img12,
  },
];

export const ExperiencePage = () => {
  const { dark } = useScroll();

  return (
    <div
      className={`w-full py-12 transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-center">My Experience</h1>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`flex flex-col md:flex-row items-center gap-6 my-8 p-6 rounded-2xl shadow-lg transition duration-300 backdrop-blur-md ${
              dark
                ? "bg-white/5 border border-white/10"
                : "bg-white/70 border border-gray-200"
            } ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={exp.image}
                alt={exp.title}
                className="rounded-xl shadow-md w-full object-cover h-64"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              {exp.mentor && (
                <p className="text-blue-500 text-sm mt-1">
                  Mentor:{" "}
                  <a
                    href={exp.mentorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {exp.mentor}
                  </a>
                </p>
              )}
              <p className="mt-3 text-sm opacity-90">{exp.description}</p>
              <p className="mt-4 text-sm font-medium">Learnings:</p>
              <p className="text-sm opacity-80">{exp.learnings}</p>
              <p className="mt-4 text-sm font-medium">Tech Stack:</p>
              <p className="text-sm opacity-80">{exp.techStack.join(", ")}</p>
              {exp.projectLink && (
                <a
                  href={exp.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white py-1.5 px-4 text-sm rounded-md shadow hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
