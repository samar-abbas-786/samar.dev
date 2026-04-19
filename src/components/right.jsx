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

  const roles = [
    "Java Developer",
    "Cloud Computing",
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver",
  ];

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      3000,
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
      className={`min-h-screen w-full transition-all duration-700 ${
        dark
          ? "bg-gradient-to-br from-[#000000] via-[#0f0f1e] to-[#1a0033] text-white relative"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800 relative"
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
        className="h-[85vh] pt-20 pb-10 flex flex-col justify-center items-center px-6 md:px-20 text-center relative overflow-hidden"
        ref={homeRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Background gradient elements */}
        <motion.div
          className="absolute top-10 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            className="mb-6 inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold inline-block ${
                dark
                  ? "bg-blue-900/30 text-blue-300 border border-blue-500/30"
                  : "bg-blue-100/50 text-blue-700 border border-blue-300/50"
              } backdrop-blur-sm`}
            >
              👨‍💻 Welcome to My Portfolio
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hey there! 👋 I'm
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-size-200">
              Samar Abbas
            </span>
          </h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p
                className={`text-xl md:text-2xl font-bold mb-4 h-8 ${
                  dark
                    ? "text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text"
                    : "text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text"
                }`}
              >
                {roles[roleIndex]}
              </p>
            </motion.div>
          </AnimatePresence>

          <p
            className={`text-base md:text-lg max-w-3xl leading-relaxed mx-auto mb-8 ${
              dark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I build intelligent web solutions by fusing AI with modern
            technologies focused on{" "}
            <span className="font-semibold">real-world impact</span>,{" "}
            <span className="font-semibold">automation</span>, and{" "}
            <span className="font-semibold">seamless digital experiences</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {socialLinks.map(({ href, icon: Icon, color, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3.5 rounded-xl border transition-all duration-300 backdrop-blur-sm hover:shadow-2xl ${
                  dark
                    ? `${color} bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20`
                    : `${color} bg-white/20 border-white/30 hover:bg-white/30`
                }`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                title={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="mt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <p
              className={`text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}
            >
              Scroll to explore
            </p>
            <svg
              className={`w-5 h-5 mx-auto mt-1 ${dark ? "text-blue-400" : "text-blue-600"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>
      <section ref={projectRef}>
        <Projects_Section />
      </section>
      <div className="space-y-20 pb-20">
        <section ref={eduRef}>
          <EducationPage />
        </section>
        <section ref={expRef}>
          <ExperiencePage />
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
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Right;
