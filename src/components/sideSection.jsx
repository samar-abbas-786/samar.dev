import React from "react";
import logo from "../../public/samf.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from "@material-ui/core/Button";

const sideSection = () => {
  return (
    <div>
      <div className="main flex  ">
        <div className="left w-[25vw] border-2 h-[100vh]  bg-slate-600 flex flex-col pt-7 items-center fixed p-[1rem] border-r border-zinc-950">
          <img
            className="rounded-full h-[200px] w-[200px] items-center object-fill hover:scale-110 duration-500"
            src={logo}
            alt=""
            srcset=""
          />

          <div className="list mt-5">
            <ul className="flex flex-col w-full ">
              <li className=" bg-slate-200 p-2 text-lg h-max text-black    font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300">
                Home
              </li>

              <li className="    p-2 text-lg h-max   text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300">
                Projects
              </li>
              <li className="    p-2 text-lg h-max   text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300">
                CV
              </li>
              <li className="    p-2 text-lg h-max   text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300">
                Contact
              </li>
              <li className="    p-2 text-lg h-max   text-white font-bold w-[25vw] hover:bg-slate-200 hover:text-black hover:text-xl hover:ease-in-out duration-300">
                Skills
              </li>
            </ul>
          </div>
          <div className="logo">
            {/* <FontAwesomeIcon icon="fa-brands fa-github" />
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            <Button variant="contained">Hello World</Button> */}
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default sideSection;
