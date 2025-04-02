import React from "react";
import avs from "../../images/avs.png";
import survey from "../../images/survey - Copy.png";
import gym from "../../images/gym.png";
import caresync from "../../images/caresync.png";
import mdes from "../../images/mdes.png";
import UniUnity from "../../images/UniUnity.png";

const project = (props) => {
  return (
    <div>
      <h1 id="project" className="text-4xl font-bold">
        My Projects 🧑‍💻
      </h1>
      <div className="all-card rounded-lg flex w-full  flex-wrap justify-between p-9">
        <div className="card mt-10 rounded-lg w-[250px] h-[300px] bg-gray-100  bg-gray- 300 hover:scale-105 duration-500 hover:mt-10  flex flex-col items-center border-sky-950 bg-gary-100">
          <h1 className="text-2xl font-bold mb-5 ">CareSync</h1>
          <img
            className="img h-[210px] hover:scale-105 duration-500 w-full object-fill  object-center "
            src={caresync}
            alt=""
          />{" "}
          <div className="btns h-16 w-full  flex justify-evenly items-center">
            <button
              onClick={props.caresyncg}
              className="  text-white  w-auto px-3 border bg-black hover:bg-neutral-700 border-sky-950"
            >
              Source Code
            </button>
            <button
              onClick={props.careSync}
              className="  w-auto px-3 border hover:bg-black hover:text-white hover:ease-in-out hover:scale-105 duration- 300  border-sky-950 "
            >
              Live
            </button>
          </div>
        </div>

        <div className="card rounded-lg h-[300px]   hover:scale-105 duration-500  bg-gray-100    mt-10 w-[250px] flex flex-col items-center border-sky-950 bg-gary-100">
          <h1 className="text-2xl font-bold mb-5 ">AV Classes</h1>
          <img
            className="img hover:scale-105 duration-500 w-full object-fill  h-[210px]   "
            src={avs}
            alt=""
          />
          <div className="btns h-16 w-full  flex justify-evenly items-center">
            <button
              onClick={props.avsg}
              className="  text-white  w-auto px-3 border bg-black hover:bg-neutral-700 border-sky-950"
            >
              Source Code
            </button>
            <button
              onClick={props.avs}
              className="  w-auto px-3 border hover:bg-black hover:text-white hover:ease-in-out hover:scale-105 duration- 300  border-sky-950 "
            >
              Live
            </button>
          </div>
        </div>
        <div className="card rounded-lg h-[300px] bg-gray-100  bg-gray- 300 hover:scale-105 duration-500 hover:    mt-10 w-[250px] flex flex-col items-center border-sky-950 bg-gary-100">
          <h1 className="text-2xl font-bold mb-5 ">UniUnity</h1>
          <img
            className="img h-[210px] hover:scale-105 duration-500 w-full object-fill  "
            src={UniUnity}
            alt=""
          />{" "}
          <div className="btns h-16 w-full  flex justify-evenly items-center">
            <button
              onClick={props.ug}
              className="  text-white  w-auto px-3 border bg-black hover:bg-neutral-700 border-sky-700"
            >
              Source Code
            </button>
            <button
              onClick={props.UniUnity}
              className="  w-auto px-3 border hover:bg-black hover:text-white hover:ease-in-out hover:scale-105 duration- 300  border-sky-950 "
            >
              Live
            </button>
          </div>
        </div>

        <div className="card rounded-lg h-[300px] bg-gray-100  bg-gray- 300  hover:scale-105 duration-500 hover:  mt-10 w-[250px] flex flex-col items-center border-sky-950 bg-gary-100">
          <h1 className="text-2xl font-bold mb-5 ">School Website</h1>
          <img
            className="img h-[210px] hover:scale-105 duration-500 w-full object-fill  "
            src={mdes}
            alt=""
          />{" "}
          <div className="btns h-16 w-full  flex justify-evenly items-center">
            <button
              onClick={props.schg}
              className="  text-white  w-auto px-3 border bg-black hover:bg-neutral-700 border-sky-700"
            >
              Source Code
            </button>
            <button
              onClick={props.school}
              className="  w-auto px-3 border hover:bg-black hover:text-white hover:ease-in-out hover:scale-105 duration- 300  border-sky-950 "
            >
              Live
            </button>
          </div>
        </div>
        <div className="card rounded-lg h-[300px]  bg-gray-100 bg-gray- 300 hover:scale-105 duration-500 hover:   mt-10 w-[250px] flex flex-col items-center border-sky-950 bg-gary-100">
          <h1 className="text-2xl font-bold mb-5">Gym Website</h1>
          <img
            className="img h-[210px] hover:scale-105 duration-500 w-full object-fill  "
            src={gym}
            alt=""
          />{" "}
          <div className="btns h-16 w-full  flex justify-evenly items-center">
            <button
              onClick={props.gymg}
              className="  text-white  w-auto px-3 border bg-black hover:bg-neutral-700 border-sky-950"
            >
              Source Code
            </button>
            <button
              onClick={props.gym}
              className="  w-auto px-3 border hover:bg-black hover:text-white hover:ease-in-out hover:scale-105 duration- 300  border-sky-950 "
            >
              Live
            </button>
          </div>
        </div>
        <div className="card rounded-lg h-[300px] bg-gray-100  bg-gray- 300 hover:scale-105 duration-500 hover:   mt-10 w-[250px] flex flex-col items-center border-sky-950 bg-gary-100">
          <h1 className="text-2xl font-bold mb-5 ">Survey</h1>
          <img
            className="img h-[210px] hover:scale-105 duration-500 w-full object-fill  "
            src={survey}
            alt=""
          />{" "}
          <div className="btns h-16 w-full  flex justify-evenly items-center">
            <button
              onClick={props.syg}
              className="  text-white  w-auto px-3 border bg-black hover:bg-neutral-700 border-sky-700"
            >
              Source Code
            </button>
            <button
              onClick={props.survey}
              className="  w-auto px-3 border hover:bg-black hover:text-white hover:ease-in-out hover:scale-105 duration- 300  border-sky-950 "
            >
              Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
