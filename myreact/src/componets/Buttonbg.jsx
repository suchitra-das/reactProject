import React, { useState } from "react";

export const Buttonbg = () => {
  const [bgColor, setBgColor] = useState("Olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-4xl text-white justify-center items-center flex m-4 shadow-3xl font-bold">Suchitra Das </div>
      <div className="flex fixed justify-center bottom-5 px-2 inset-x-0 gap-2 shadow-lg ">
        <button
          className="border px-2 py-1 rounded-md bg-black   text-white"
          onClick={() => setBgColor("black")}
        >
          Black
        </button>
        <button
          className="border px-2 py-1 bg-white text-black rounded-md "
          onClick={() => setBgColor("white")}
        >
          White
        </button>
        <button
          className="border px-2 py-1 rounded-md bg-blue-700 text-white "
          onClick={() => setBgColor("blue")}
        >
          Blue
        </button>
        <button
          className="border px-2 py-1 rounded-md  bg-red-600 text-white "
          onClick={() => setBgColor("red")}
        >
          Red
        </button>
        <button
          className="border px-2 py-1 rounded-md bg bg-green-600 text-white"
          onClick={() => setBgColor("green")}
        >
          Green
        </button>
      </div>
    </div>
  );
};
