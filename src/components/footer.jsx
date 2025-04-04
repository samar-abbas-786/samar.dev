import React from "react";
import { useScroll } from "../context/ScrollContext";

const Footer = () => {
  const { dark } = useScroll();

  return (
    <footer
      className={`h-10 w-full text-sm flex justify-center items-center transition-colors duration-500 ${
        dark ? "bg-black" : "bg-gray-100 text-black"
      }`}
    >
      <p>Made with ❤️ by Samar {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
