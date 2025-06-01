import React from "react";
import avs from "../../images/avs.png";
import survey from "../../images/survey - Copy.png";
import gym from "../../images/gym.png";
import caresync from "../../images/caresync.png";
import mdes from "../../images/mdes.png";
import UniUnity from "../../images/UniUnity.png";
import tubegate from "../../images/TubeGate.png";

const Project = (props) => {
  return (
    <div>
      <h1 id="project" className="text-4xl font-bold">
        My Projects 🧑‍💻
      </h1>
      <div className="all-card rounded-lg flex w-full flex-wrap justify-between p-9">
        {/* TubeGate Project Card */}
        <div className="card mt-10 rounded-lg w-[250px] h-[300px] bg-gray-100 hover:scale-105 duration-500 flex flex-col items-center border-sky-950">
          <h1 className="text-2xl font-bold mb-5">TubeGate</h1>
          <img
            className="img h-[210px] hover:scale-105 duration-500 w-full object-fill object-center"
            src={tubegate}
            alt=""
          />
          <div className="btns h-16 w-full flex justify-evenly items-center">
            <button
              onClick={props.tubegate}
              className="text-white w-auto px-3 border bg-black hover:bg-neutral-700 border-sky-950"
            >
              Source Code
            </button>
            <button
              onClick={props.tubegate}
              className="w-auto px-3 border hover:bg-black hover:text-white hover:scale-105 duration-300 border-sky-950"
            >
              Live
            </button>
          </div>
        </div>

        {/* Existing Project Cards */}
        {/* ... Your CareSync, AVS, UniUnity, School Website, Gym, Survey cards stay unchanged below ... */}
      </div>
    </div>
  );
};

export default Project;
