import React, { useState } from "react";
import { project } from "../Projects_Container/allProjects";

const Projects_Section = () => {
  console.log(project.img);
  const [image, setImage] = useState(1);
  //   const [id, setID] = useState(null);
  const handleClickNext = () => {
    {
      image === project.length ? setImage(1) : setImage(image + 1);
    }
  };
  const handleClickPrev = () => {
    {
      image === 1 ? setImage(project.length) : setImage(image - 1);
    }
  };
  //   const handleLive = (proj) => {
  //     proj.live;
  //   };

  return (
    <div className="  w-full justify-between items-center">
      <h1 className="text-4xl font-bold font-sans">My Projects</h1>
      {project && project.length > 0 ? (
        project.map((proj) =>
          image === proj.id ? (
            <div className="flex h-auto space-x-3 justify-evenly items-center w-full mt-10 mb-10">
              <div key={proj.id} className="single-project w-auto h-auto ">
                <img
                  className="h-[250px] w-[400px]"
                  src={proj.img}
                  alt={proj.title}
                  srcSet=""
                />
                <div className="btns flex justify-around  mt-2">
                  <button className="bg-violet-300 text-black  px-4  py-[1px] border-black border-[2px] hover:bg-black hover:text-white rounded-sm font-sans text-lg">
                    Code
                  </button>
                  <button
                    onClick={() => handleLive(proj)}
                    className="bg-violet-300 text-black   px-4 py-[1px] border-black border-[2px] hover:bg-black hover:text-white  rounded-sm font-sans text-lg"
                  >
                    Live
                  </button>
                </div>
              </div>
              <div className="description  pt-2  w-[40vw]  py-16 text-xl flex flex-col font-sans px-2 text-start">
                {proj.desc}
                <div className="button  w-full flex space-x-10  mt-4">
                  <button
                    onClick={() => handleClickPrev()}
                    className="bg-slate-900 ml-[1.7px] text-white rounded-sm font-mono text-lg px-5"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => handleClickNext()}
                    className="bg-slate-900 text-white rounded-sm  font-mono text-lg px-5"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          ) : null
        )
      ) : (
        <div>No Project Exist </div>
      )}
    </div>
  );
};

export default Projects_Section;
