import React, { useEffect, useState, useRef } from "react";
import { useScroll } from "../context/ScrollContext";
import Projects_Section from "./Projects_Section";
import Skill from "./skills";
import {
  motion,
  useScroll as useFramerScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Footer from "./footer";
import { ExperiencePage } from "./experiencePage";
import { ContactCard } from "./contactCard";
import EducationPage from "./education";
import TopNav from "./sideSection";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.floor(scrollPosition / (windowHeight * 0.8));
      setCurrentSection(sectionIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleDarkMode() {
    const newMode = !dark;
    setDark(newMode);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  const textRevealVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const roles = ["Software Engineer", "Full Stack Developer", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`main relative min-h-screen w-full flex flex-col transition-all duration-700 overflow-hidden ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Advanced Cursor Follower */}
      <motion.div
        className={`fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference ${
          dark ? "bg-white/70" : "bg-black/70"
        }`}
        style={{
          left: mouseXSpring,
          top: mouseYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Dynamic Background with Interactive Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main floating orbs */}
        <motion.div
          style={{ y: parallaxY }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute top-20 right-20 w-48 h-48 rounded-full ${
            dark ? "bg-blue-500/12" : "bg-blue-500/15"
          } blur-3xl`}
        />

        <motion.div
          style={{ y: parallaxY2 }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute bottom-40 left-20 w-36 h-36 rounded-full ${
            dark ? "bg-purple-500/12" : "bg-purple-500/15"
          } blur-3xl`}
        />

        {/* Constellation effect */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              dark ? "bg-white/30" : "bg-gray-900/30"
            }`}
            style={{
              left: `${20 + i * 7}%`,
              top: `${10 + i * 6}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Interactive mouse-following gradient */}
        <motion.div
          className={`absolute w-72 h-72 rounded-full ${
            dark
              ? "bg-gradient-to-r from-blue-500/8 to-purple-500/8"
              : "bg-gradient-to-r from-blue-500/12 to-purple-500/12"
          } blur-3xl`}
          style={{
            left: mouseXSpring,
            top: mouseYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
      </div>

      {/* Section Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentSection === i
                ? dark
                  ? "bg-blue-500 shadow-lg shadow-blue-500/50"
                  : "bg-blue-600 shadow-lg shadow-blue-600/50"
                : dark
                ? "bg-white/30 hover:bg-white/50"
                : "bg-gray-600/30 hover:bg-gray-600/50"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Top Navigation */}
      <TopNav />

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 pt-6"
      >
        {/* Hero Section */}
        <motion.section
          variants={itemVariants}
          className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative"
          ref={homeRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="max-w-6xl">
            {/* Greeting with Advanced Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                bounce: 0.4,
              }}
              className="relative mb-8"
            >
              <div className="flex items-center gap-4">
                <motion.span
                  className="text-5xl"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  👋
                </motion.span>
                <div className="overflow-hidden">
                  <motion.h1
                    variants={textRevealVariants}
                    className="text-xl md:text-3xl font-light"
                  >
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-300% animate-gradient">
                      Hey there!
                    </span>
                  </motion.h1>
                </div>
              </div>
            </motion.div>

            {/* Main Title with Staggered Letter Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mb-10"
            >
              <div className="overflow-hidden">
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  I'm <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-300% animate-gradient">
                      Samar Abbas
                    </span>
                    <motion.div
                      className="absolute -bottom-3 left-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      transition={{
                        duration: 1.5,
                        delay: 1.2,
                        ease: "easeOut",
                      }}
                    />
                  </span>
                </motion.h1>
              </div>
            </motion.div>

            {/* Animated Role Display */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className={`px-6 py-3 rounded-full text-base font-semibold backdrop-blur-xl border-2 ${
                    dark
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-400/30"
                      : "bg-gradient-to-r from-blue-100/70 to-purple-100/70 text-blue-700 border-blue-300/50"
                  } shadow-xl`}
                >
                  {roles[currentRoleIndex]}
                </motion.div>
              </AnimatePresence>

              {/* Static role indicators */}
              <div className="flex gap-2 items-center">
                {roles.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      index === currentRoleIndex
                        ? "bg-blue-500 w-8"
                        : dark
                        ? "bg-white/30"
                        : "bg-gray-600/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Enhanced Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1,
                type: "spring",
                bounce: 0.2,
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className={`max-w-4xl p-10 rounded-3xl backdrop-blur-2xl border-2 relative overflow-hidden group ${
                dark
                  ? "bg-gradient-to-br from-white/10 via-white/5 to-white/10 border-white/20 hover:border-white/30"
                  : "bg-gradient-to-br from-white/70 via-white/50 to-white/70 border-gray-200/50 hover:border-gray-300/70"
              } shadow-2xl hover:shadow-3xl transition-all duration-500`}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 ${
                    dark ? "opacity-50" : "opacity-30"
                  }`}
                />
              </div>

              <motion.p
                className="text-lg leading-relaxed relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
              >
                As a{" "}
                <motion.span
                  className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Software Engineer
                </motion.span>
                , my goal is to design and develop efficient, scalable, and
                high-performance applications by leveraging my expertise in{" "}
                <motion.span
                  className="font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Data Structures & Algorithms (DSA)
                </motion.span>{" "}
                and modern{" "}
                <motion.span
                  className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  software development
                </motion.span>
                . I strive to build robust, optimized solutions, enhance user
                experiences, and contribute to innovation in technology.
              </motion.p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, delay: 1.8, ease: "easeOut" }}
                className="mt-8 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              <motion.p
                className="mt-6 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent flex items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2, duration: 0.8 }}
              >
                Let's create impactful software together.
                <motion.span
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 3,
                  }}
                >
                  ✨
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Advanced Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`flex flex-col items-center gap-3 cursor-pointer group ${
                  dark
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-all duration-300`}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-sm font-medium tracking-wide group-hover:tracking-wider transition-all duration-300">
                  Scroll to explore
                </span>
                <div
                  className={`relative w-7 h-12 border-2 border-current rounded-full flex justify-center overflow-hidden ${
                    dark
                      ? "group-hover:border-blue-400 group-hover:shadow-blue-400/30"
                      : "group-hover:border-blue-500 group-hover:shadow-blue-500/30"
                  } group-hover:shadow-lg transition-all duration-300`}
                >
                  <motion.div
                    className="w-1.5 h-4 bg-current rounded-full mt-2 group-hover:bg-blue-500 transition-colors duration-300"
                    animate={{
                      y: [0, 16, 0],
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Content Sections */}
        <div className="space-y-20 pb-20">
          {[
            { component: <EducationPage />, ref: eduRef },
            { component: <ExperiencePage />, ref: expRef },
            { component: <Projects_Section />, ref: projectRef },
            { component: <Skill />, ref: skillRef },
            { component: <ContactCard />, ref: contactRef },
            { component: <Footer />, ref: null },
          ].map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${
                section.ref ? "px-6 md:px-20" : ""
              } transition-all duration-700 hover:px-4 md:hover:px-16 group`}
              ref={section.ref}
              whileHover={{ scale: 1.01 }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            >
              <div className="relative">
                {/* Section highlight effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    dark
                      ? "bg-gradient-to-r from-blue-500/5 to-purple-500/5"
                      : "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                  } blur-xl`}
                  initial={false}
                />
                {section.component}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* CSS for gradient animation */}
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
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};

export default Right;
