import React from "react";
import js from "../../public/js.svg";
import nodejs from "../../public/nodejs.svg";
import mongodb from "../../public/mongodb.svg";
import tailwind from "../../public/tailwind.svg";
import css from "../../public/css.svg";
import java from "../../public/java.svg";
import postman from "../../public/postman.svg";
import git from "../../public/git.svg";
import cpp from "../../public/cpp.svg";
import c from "../../public/c.svg";

import py from "../../public/py.svg";
import express from "../../public/express.svg";
import react from "../../public/react.svg";

const skills = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mt-28">My Skills</h1>
      <div id="skill" className="skills-container flex w-full  mt-16 flex-wrap">
        <img src={js} alt="" />
        <img src={react} alt="" />
        <img src={express} alt="" />
        <img src={nodejs} alt="" />
        <img src={mongodb} alt="" />
        <img src={tailwind} alt="" />
        <img src={css} alt="" />

        <img src={cpp} alt="" />
        <img src={java} alt="" />
        <img src={c} alt="" />
        <img src={py} alt="" />
        <img src={git} alt="" />
        <img src={postman} alt="" />
      </div>
    </div>
  );
};

export default skills;
