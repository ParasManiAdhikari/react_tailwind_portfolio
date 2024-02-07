import "./App.css";
import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import Middle from "./Personal";
import CopyToClipboard from "./CopyToClipboard";

const App = () => {
  const [view, setView] = useState("homepage");

  const toggleView = (v) => {
    setView(v)
  };

  return (
    <div>
      {view === "homepage" ? (
        <div className="min-h-screen text-gray-800 flex flex-col justify-center items-center">
          
          <header className="bg-white shadow-md p-4 mb-8 rounded-lg max-w-lg border border-green-500">
            <ul className="flex space-x-20">
              <li>
                <button onClick={() => toggleView("cp")} className="hover:underline">Color Picker</button>
              </li>
              <li>
                <a className="text-pastel-green hover:underline">Sphere</a>
              </li>
            </ul>
          </header>

          <Middle></Middle>

          <footer className="bg-white shadow-md p-4 mt-8 rounded-lg max-w-lg border border-green-500">
            <ul className="flex space-x-40">
              <li>
                <button className="hover:underline" onClick={() => toggleView("email")}>Email</button>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/paras-adhikari-247726245/"
                  className="text-pastel-green hover:underline">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/parasxdhikari"
                  className="text-pastel-green hover:underline">GitHub</a>
              </li>
            </ul>
          </footer>
        </div>

      ) : view === "cp" ? (
        <>
          <div className="relative">
            <ColorPicker />
            <button onClick={() => toggleView("homepage")} className="hover:underline absolute top-2 left-1/2 -translate-x-1/2 bg-slate-300 py-2 px-4 rounded">
              Home
            </button>
          </div>
        </>

      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center">
          <CopyToClipboard text="parasad612@gmail.com"/>
          <button onClick={() => toggleView("homepage")} className="hover:underline mt-3 bg-slate-300 py-2 px-4 rounded">Back</button>
        </div>
      )}
    </div>
  );
};

export default App;