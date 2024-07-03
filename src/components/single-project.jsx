import React from "react";
import { testing } from "../../public/campus.png";

export const Single_project = () => {
  return (
    <div>
      <div className="project-container flex flex-col items-start justify-center">
        <h1>My Projects</h1>
        <div className="img w-screen h-[50vw] flex justify-evenly">
          <div className="img_sec">
            <img src={testing} alt="" />
          </div>
          <div className="txt">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quos
            quasi delectus officia adipisci nisi amet voluptates? Cumque dolor
            incidunt aperiam repudiandae deleniti, blanditiis dicta dolorum
            natus sapiente nam laborum.
          </div>
        </div>
      </div>
    </div>
  );
};
