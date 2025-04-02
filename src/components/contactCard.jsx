import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export const ContactCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>

      {/* Email */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <FaEnvelope className="text-blue-600 text-xl" />
        <a
          href="mailto:samarabbas@example.com"
          className="text-gray-800 font-medium hover:underline"
        >
          gn2500@myamu.ac.in
        </a>
      </div>

      {/* Phone */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <FaPhone className="text-green-600 text-xl" />
        <a
          href="tel:+919997405528"
          className="text-gray-800 font-medium hover:underline"
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
          className="text-blue-700 text-2xl hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/samar-abbas-786"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 text-2xl hover:scale-110 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/SamarAb65178114"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-2xl hover:scale-110 transition"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};
