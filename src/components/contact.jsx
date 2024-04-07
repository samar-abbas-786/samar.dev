import React from "react";

const contact = () => {
  return (
    <div>
      <div className="outer flex flex-col items-center">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <i>Reach out and let's turn ideas into action</i>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="number" placeholder="Phone NO." />
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
