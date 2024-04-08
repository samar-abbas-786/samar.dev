import React from "react";
import logo from "../../public/samf.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from "@material-ui/core/Button";
import github from "../../public/github.png";
import linkedin from "../../public/link.png";
import instagram from "../../public/insta.png";
import twitter from "../../public/twit.png";
import facebook from "../../public/fb.png";

const sideSection = (props) => {
  return (
    <div>
      <div className="main flex  ">
        <div className="left w-[25vw]   h-[100vh]  bg-slate-500 flex flex-col pt-7 items-center fixed p-[1rem]  border-zinc-950">
          <img
            className="rounded-full h-[200px] w-[200px] items-center object-fill object-left hover:scale-110 duration-500"
            src={logo}
            alt=""
            srcset=""
          />

          <div className="list mt-5">
            <ul className="flex flex-col w-full ">
              <li
                onClick={props.home}
                className=" bg-slate-200 p-2 text-lg h-max text-black    font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300"
              >
                Home
              </li>

              <li
                onClick={props.project}
                className="    p-2 text-lg h-max   text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300"
              >
                Projects
              </li>
              <li
                onClick={props.home}
                className="    p-2 text-lg h-max   text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300"
              >
                CV
              </li>
              <li
                onClick={props.contact}
                className="    p-2 text-lg h-max   text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300"
              >
                Contact
              </li>
              <li
                onClick={props.skill}
                className="    p-2 text-lg h-max   text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300"
              >
                Skills
              </li>
            </ul>
          </div>
          <div className="logo flex w-full  mt-9 ">
            <img onClick={props.link} src={linkedin} alt="" srcset="" />
            <img onClick={props.github} src={github} alt="" srcset="" />
            <img onClick={props.twitter} src={twitter} alt="" srcset="" />
            <img onClick={props.insta} src={instagram} alt="" srcset="" />
            <img onClick={props.fb} src={facebook} alt="" srcset="" />
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default sideSection;
