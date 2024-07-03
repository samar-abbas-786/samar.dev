import React from "react";

const contact = () => {
  return (
    <div>
      <div className="outer w-[100vw] flex flex-col pr-10 justify-center items-center">
        <h1 className="md:text-4xl text-3xl font-bold">Get in Touch</h1>
        <i id="contact">Reach out and let's turn ideas into action</i>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="number" placeholder="Phone No." />
        <textarea
          placeholder="Share Your Project Idea"
          name=""
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default contact;
