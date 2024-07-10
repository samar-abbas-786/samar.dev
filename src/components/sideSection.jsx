import React, { useContext, useState } from "react";
import logo from "../../public/samf.jpg";

import github from "../../public/github.png";
import linkedin from "../../public/link.png";
import instagram from "../../public/insta.png";
import twitter from "../../public/twit.png";
import facebook from "../../public/fb.png";
import { motion } from "framer-motion";
import { GlobalContext } from "../context/contextApi";

const sideSection = (props) => {
  const { menu, setMenu, hide, Sethide, handleSidebar } =
    useContext(GlobalContext);
  // const [menu, setMenu] = useState("Home");

  // const handleOnClick = (tab) => {
  //   props.setSelected(tab);
  //   props.handleClick(tab);
  // };
  return (
    <div>
      <div
        className={`md:main md:flex ${hide ? "hidden" : "block"} md:block z-50`}
      >
        {" "}
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="left w-[100%]   md:w-[25vw] md:h-[100vh] h-[110vh]  bg-[#2c3656] flex flex-col pt-7 items-center fixed p-[1rem]  border-zinc-950"
        >
          <img
            className="rounded-full h-[200px] w-[200px] items-center object-fill object-left hover:scale-110 duration-500"
            src={logo}
            alt=""
            srcSet=""
          />
          {/* <div
            onClick={() => handleSidebar()}
            className="md:hidden text-red-700 absolute ml-[90%] bg-white p-2 rounded-full font-extrabold text-2xl"
          >
            X
          </div> */}
          <div className="list mt-5">
            <ul className="flex flex-col w-full ">
              <li
                // className={menu === "Home" ? active : ""}
                onClick={() => setMenu("Home")}
                className={`${
                  menu === "Home" ? "sideClass" : null
                }  p-2 text-lg h-max text-white  font-bold w-[100%] md:w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300`}
              >
                Home
              </li>

              <li
                onClick={() => setMenu("Projects")}
                // onClick={`${props.selected === Projects && bg - black}`}
                className={`${
                  menu === "Projects" ? "sideClass" : null
                }    p-2 text-lg h-max   text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300`}
              >
                Projects
              </li>
              <li
                href="public/Samar Abbas resume.pdf"
                onClick={() => setMenu("CV")}
                className={` ${
                  menu === "CV" ? "sideClass" : null
                } p-2 text-lg h-max text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300`}
              >
                <a target="blank" href="public/Samar Abbas resume.pdf">
                  CV
                </a>
              </li>
              <li
                onClick={() => setMenu("Contact")}
                className={`${
                  menu === "Contact" ? "sideClass" : null
                } p-2 text-lg h-max   text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300`}
              >
                Contact
              </li>
              <li
                onClick={() => setMenu("Skills")}
                className={` ${
                  menu === "Skills" ? "sideClass" : null
                } p-2 text-lg h-max   text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300`}
              >
                Skills
              </li>
            </ul>
          </div>
          <div className="logo flex justify-center space-x-12 w-full md:space-x-5   mt-5 ">
            <img onClick={props.link} src={linkedin} alt="" srcSet="" />
            <img onClick={props.github} src={github} alt="" srcSet="" />
            <img onClick={props.twitter} src={twitter} alt="" srcSet="" />
            <img onClick={props.insta} src={instagram} alt="" srcSet="" />
            <img onClick={props.fb} src={facebook} alt="" srcSet="" />
          </div>
          {/* <div className="emph">
            <div className="mt-2 text-sm text-red-200">
              <b className="text-black">Email: </b>
              <span className="font-sans ">samarabbas172003@gmail.com</span>
            </div>
            <div className="text-red-200 ">
              <b className="text-sm text-black">Phone No.</b>
              <span className="font-sans text-sm">+91 9997405528</span>
            </div>
          </div> */}
        </motion.div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default sideSection;
