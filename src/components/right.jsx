import React, { useEffect, useState } from "react";
import { useScroll } from "../context/ScrollContext";
import Projects_Section from "./Projects_Section";
import Skill from "./skills";
import Footer from "./footer";
import { ExperiencePage } from "./experiencePage";
import { ContactCard } from "./contactCard";
import EducationPage from "./education";
import TopNav from "./sideSection";
import {
  motion,
  useScroll as useFramerScroll,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Right = () => {
  const {
    homeRef,
    projectRef,
    skillRef,
    expRef,
    contactRef,
    eduRef,
    dark,
    setDark,
  } = useScroll();
  const { scrollYProgress } = useFramerScroll();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const mouseX = useSpring(mouse.x, springConfig);
  const mouseY = useSpring(mouse.y, springConfig);

  const roles = ["Software Engineer", "Full Stack Developer", "Problem Solver"];

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  const toggleDark = () => setDark(!dark);

  const socialLinks = [
    {
      href: "https://linkedin.com/in/samar-abbas-a1ab4625a",
      icon: FaLinkedin,
      color: "text-blue-700",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/samar-abbas-786",
      icon: FaGithub,
      color: dark ? "text-white" : "text-gray-900",
      label: "GitHub",
    },
    {
      href: "https://leetcode.com/u/samar_abbas_786/",
      icon: SiLeetcode,
      color: "text-yellow-500",
      label: "Leetcode",
    },
    {
      href: "https://x.com/SamarAb65178114",
      icon: FaTwitter,
      color: "text-blue-500",
      label: "Twitter",
    },
    {
      href: "https://instagram.com/samar_abbas_786",
      icon: FaInstagram,
      color: "text-pink-600",
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/samar.naqvi.568/",
      icon: FaFacebook,
      color: "text-blue-600",
      label: "Facebook",
    },
  ];

  return (
    <div
      className={`min-h-screen w-full font-thin transition-all duration-700 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <motion.div
        className={`fixed w-4 h-4 rounded-full pointer-events-none z-50 ${
          dark ? "bg-white/70" : "bg-black/70"
        }`}
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: hover ? 1.4 : 1 }}
      />

      <TopNav toggleDark={toggleDark} />

      <motion.section
        className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 text-center"
        ref={homeRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hey there! 👋 I'm
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
            Samar Abbas
          </span>
        </h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-lg font-semibold text-blue-400 mb-2"
          >
            {roles[roleIndex]}
          </motion.p>
        </AnimatePresence>

        <p
          className={`text-xs md:text-lg max-w-2xl leading-relaxed ${
            dark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I build scalable and efficient web applications using modern tech
          stacks.
          <br />
          Passionate about clean code, user experience, and performance
          optimization.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socialLinks.map(({ href, icon: Icon, color, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full border hover:scale-110 transition shadow-md ${color}`}
              whileHover={{ rotate: 360 }}
              title={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.section>

      <div className="space-y-20 pb-20">
        <section ref={eduRef}>
          <EducationPage />
        </section>
        <section ref={expRef}>
          <ExperiencePage />
        </section>
        <section ref={projectRef}>
          <Projects_Section />
        </section>
        <section ref={skillRef}>
          <Skill />
        </section>
        <section ref={contactRef}>
          <ContactCard />
        </section>
        <section>
          <Footer />
        </section>
      </div>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Right;
