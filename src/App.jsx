import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [isTrueView, setIsTrueView] = useState(true);

  const toggleView = () => {
    setIsTrueView(!isTrueView);
  };

  return (
    <div>
      {isTrueView ? (
        <div className="min-h-screen bg-pastel-green text-gray-800 flex flex-col justify-center items-center">

          {/* Main Content */}
          <div className="max-w-lg p-8 bg-white shadow-lg rounded-md border border-green-500">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Paras Adhikari</h1>
            <p className="text-gray-600 mb-6">Software Developer</p>
            <div className="bg-green-100 p-6 rounded-md mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-2">About Me</h2>
              <p className="text-gray-600">I'm a passionate Software Developer with a keen interest in creating user-friendly programs and applications.</p>
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


          {/* Contact Bar */}
          <footer className="bg-white shadow-md p-4 mt-8 rounded-lg max-w-lg border border-green-500">
            <p className="text-lg font-semibold">Contact</p>
            <ul className="flex space-x-40 mt-2 underline">
              <li>
                <button className="underline" onClick={toggleView}>Email</button>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/paras-adhikari-247726245/" className="text-pastel-green hover:underline">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/parasxdhikari" className="text-pastel-green hover:underline">GitHub</a>
              </li>
            </ul>
          </footer>

        </div>
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center">
          <p className="text-4xl mb-2">parasad612@gmail.com</p>
          <button onClick={toggleView}>Back</button>
          {/* Additional components or content for the false case */}
        </div>
      )}
    </div>
  );
};

export default App;
