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
    <div className="w-full justify-between items-center">
      <h1 className="md:text-4xl text-3xl  font-bold font-sans">My Projects</h1>
      {project && project.length > 0 ? (
        project.map((proj) =>
          image === proj.id ? (
            <div className="flex flex-col-reverse md:flex-row h-auto md:space-x-3 justify-evenly md:items-center w-full mt-10 md:mb-10">
              <div key={proj.id} className="single-project  ">
                <img
                  className=" w-[90%] h-[250px] md:h-[250px] md:w-[400px]"
                  src={proj.img}
                  alt={proj.title}
                  srcSet=""
                />
                <div className="btns flex md:justify-around space-x-20 mt-4  md:mt-2">
                  <button className="bg-black text-white px-6   py-[1px] border-black border-[2px] hover:bg-black hover:text-white rounded-sm font-sans text-lg">
                    Code
                  </button>
                  <button
                    onClick={() => handleLive(proj)}
                    className="bg-black text-white px-6 py-[1px] border-black border-[2px] hover:bg-black hover:text-white  rounded-sm font-sans text-lg"
                  >
                    Live
                  </button>
                </div>
              </div>
              <div className="description write  pt-2  md:w-[40vw]  w-[95%] py-16 md:text-xl text-lg flex flex-col  md:px-2 text-start">
                {proj.desc}
                <div className="button  w-full flex space-x-10  mt-4">
                  <button
                    onClick={() => handleClickPrev()}
                    className="bg-black text-white px-6 py-[1px] border-black border-[2px] hover:bg-black hover:text-white  rounded-sm font-sans text-lg"
                  >
                    Prev
                  </button>
                  <button
                    onClick={() => handleClickNext()}
                    className="bg-black text-white px-6 py-[1px] border-black border-[2px] hover:bg-black hover:text-white  rounded-sm font-sans text-lg"
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
