import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { useScroll } from "../context/ScrollContext";

export const ContactCard = () => {
  const { dark } = useScroll();

  return (
    <div
      className={`p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-center transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#101010] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>

      {/* Email */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <FaEnvelope
          className={`text-xl ${
            dark ? "text-blue-400" : "text-blue-600"
          } transition`}
        />
        <a
          href="mailto:gn2500@myamu.ac.in"
          className={`font-medium hover:underline ${
            dark ? "text-gray-300" : "text-gray-800"
          }`}
        >
          gn2500@myamu.ac.in
        </a>
      </div>

      {/* Phone */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <FaPhone
          className={`text-xl ${
            dark ? "text-green-400" : "text-green-600"
          } transition`}
        />
        <a
          href="tel:+919997405528"
          className={`font-medium hover:underline ${
            dark ? "text-gray-300" : "text-gray-800"
          }`}
        >
          +91 9997405528
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://linkedin.com/in/samar-abbas-a1ab4625a"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl hover:scale-110 transition ${
            dark ? "text-blue-400" : "text-blue-700"
          }`}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/samar-abbas-786"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl hover:scale-110 transition ${
            dark ? "text-white" : "text-gray-900"
          }`}
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/SamarAb65178114"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl hover:scale-110 transition ${
            dark ? "text-sky-400" : "text-blue-500"
          }`}
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};
