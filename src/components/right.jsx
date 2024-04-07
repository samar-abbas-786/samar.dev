import React from "react";
import Project from "./project";

const right = () => {
  return (
    <div>
      <div className="main w-[75vw] flex  justify-center flex-col  pt-5 pl-16 bg-slate-300">
        <h1 className="text-2xl">Hello Everyone!👋 </h1>
        <br />
        <h1 className="text-5xl font-bold "> I'm SAMAR ABBAS</h1>
        <h1 className="text-2xl text-gray-600 font-serif mt-2">
          Software Developer
        </h1>
        <p className=" write text-lg mt-3">
          As a Mern Stack developer, my objective is to architect and develop
          high-quality web applications using{" "}
          <b className="text-stone-700">
            {" "}
            MongoDB, Express.js, React, and Node.js.
          </b>{" "}
          I aim to contribute my expertise to create seamless user experiences,
          drive business growth, and stay updated with the latest technologies.
          Let's build the future of web development together.
        </p>
        <div className="buttons mt-8 w-1/3 flex justify-between ">
          <button className=" border px-3  text-lg border-black  bg-black text-white hover:bg-neutral-700 rounded-sm h-[40px] w-max">
            Let's Connect
          </button>
          <button className=" border px-3 text-lg border-black hover:bg-black hover:text-white hover:ease-in-out hover:scale-105 duration-200 rounded-sm h-[40px] w-max">
            Check Github
          </button>
        </div>
        <div className="mt-10">
          <Project></Project>
        </div>
      </div>
    </div>
  );
};

export default right;
