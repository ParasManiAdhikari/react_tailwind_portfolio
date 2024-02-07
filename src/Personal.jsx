import React from "react";

function Middle() {
  return (
    <div className="max-w-lg p-8 bg-white shadow-lg rounded-md border border-green-500">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Paras Adhikari</h1>
      <p className="text-gray-600 mb-6">Software Developer</p>
      <div className="bg-green-100 p-6 rounded-md mb-8">
        <h2 className="text-lg font-bold text-gray-800 mb-2">About Me</h2>
        <p className="text-gray-600">
          I'm a passionate Software Developer with a keen interest in creating
          user-friendly programs and applications.
        </p>
      </div>
      <div className="bg-green-100 p-6 rounded-md">
        <h2 className="text-lg font-bold text-gray-800">Skills</h2>
        <ul className=" text-gray-600 list-none">
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
}

export default Middle;
