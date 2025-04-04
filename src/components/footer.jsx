import React from "react";
import { useScroll } from "../context/ScrollContext";

const Footer = () => {
  const { dark } = useScroll();

  return (
    <footer
      className={`h-10 w-full text-sm flex justify-center items-center transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-tr from-[#000000] via-[#101010] to-[#1a1a1a] text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <p>Made with ❤️ by Samar {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
