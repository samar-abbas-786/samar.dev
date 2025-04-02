import React from "react";

const footer = () => {
  return (
    <div>
      <div className="last h-10 w-[100%] text-black text-sm  text-center flex justify-center items-center">
        <p>Made with ❤️ by Samar ©️{new Date().getFullYear()} </p>
      </div>
    </div>
  );
};

export default footer;
