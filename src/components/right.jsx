import React, { useEffect } from "react";
import { useScroll } from "../context/ScrollContext";
import Projects_Section from "./Projects_Section";
import Skill from "./skills";
import {
  motion,
  useScroll as useFramerScroll,
  useTransform,
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
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);

  function toggleDarkMode() {
    const newMode = !dark;
    setDark(newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");
  }

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`main relative min-h-screen w-full flex flex-col transition-all duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute top-20 right-20 w-32 h-32 rounded-full ${
            dark ? "bg-blue-500/5" : "bg-blue-500/10"
          } blur-xl`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute bottom-40 left-20 w-24 h-24 rounded-full ${
            dark ? "bg-purple-500/5" : "bg-purple-500/10"
          } blur-xl`}
        />
      </div>

      {/* Top Navigation */}
      <TopNav />

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 pt-8"
      >
        {/* Hero Section */}
        <motion.section
          variants={itemVariants}
          className="min-h-screen flex flex-col justify-center px-6 md:px-20"
          ref={homeRef}
        >
          <div className="max-w-6xl">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-2xl md:text-4xl font-light mb-4 relative">
                <span className="text-6xl mr-4">👋</span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Hey there!
                </span>
              </h1>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mb-8"
            >
              <h1 className="text-4xl md:text-7xl font-black leading-tight">
                I'm <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    Samar Abbas
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Role Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                "Software Engineer",
                "Full Stack Developer",
                "Problem Solver",
              ].map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${
                    dark
                      ? "bg-white/10 text-blue-300 border border-white/20"
                      : "bg-blue-100/50 text-blue-700 border border-blue-200/50"
                  }`}
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`max-w-4xl p-8 rounded-3xl backdrop-blur-xl border ${
                dark
                  ? "bg-white/5 border-white/10"
                  : "bg-white/50 border-gray-200/50"
              } shadow-2xl`}
            >
              <p className="text-lg md:text-xl leading-relaxed">
                As a{" "}
                <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Software Engineer
                </span>
                , my goal is to design and develop efficient, scalable, and
                high-performance applications by leveraging my expertise in{" "}
                <span className="font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  Data Structures & Algorithms (DSA)
                </span>{" "}
                and modern{" "}
                <span className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  software development
                </span>
                . I strive to build robust, optimized solutions, enhance user
                experiences, and contribute to innovation in technology.
              </p>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1.2 }}
                className="mt-6 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              />

              <p className="mt-4 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Let's create impactful software together. ✨
              </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`flex flex-col items-center gap-2 ${
                  dark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span className="text-sm font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-current rounded-full mt-2"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Content Sections with Enhanced Spacing */}
        <div className="space-y-20 pb-20">
          <motion.div
            variants={itemVariants}
            className="px-6 md:px-20"
            ref={eduRef}
          >
            <EducationPage />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="px-6 md:px-20"
            ref={expRef}
          >
            <ExperiencePage />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="px-6 md:px-20"
            ref={projectRef}
          >
            <Projects_Section />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="px-6 md:px-20"
            ref={skillRef}
          >
            <Skill />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="px-6 md:px-20"
            ref={contactRef}
          >
            <ContactCard />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Footer />
          </motion.div>
        </div>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default Right;
