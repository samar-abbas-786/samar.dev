import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-3">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Reach out and let's turn ideas into action
        </p>

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <input
            type="tel"
            placeholder="Phone No."
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <textarea
            placeholder="Share Your Project Idea"
            rows="5"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
          ></textarea>
        </div>

        <button className="mt-6 w-full bg-gray-800 hover:bg-black text-white py-3 rounded-md text-lg font-semibold transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
