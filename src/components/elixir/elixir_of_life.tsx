import React from "react";
import Image from "next/image";
import './elixir.css';

const ElixirOfLife = () => {
  return (
    <div className="wrapperOfElixir perspective-500 relative right-12 top-8">
    <div className="elixirDiv relative bg-transparent border cursor-pointer transition-all  border-blue-500 rounded-lg p-6 shadow-lg max-w-sm mx-auto text-white">


      {/* Outer Glowing Effect */}
      <div className="absolute inset-0 rounded-lg bg-blue-500 blur-xl opacity-30"></div>

      {/* Content */}
      <div className="relative">
        {/* Formula Title */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold" style={{fontFamily: "Montserrat, serif"}}>FORMULA:&nbsp;</span>
          <span className="text-lg font-semibold" style={{fontFamily: "Montserrat, serif"}}>Code-leveling (LIFE)</span>
        </div>

        {/* Image & Info Section */}
        <div className="flex items-center gap-4">
          {/* Scroll Icon */}
          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-blue-300">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/1185/1185751.png" // Replace with your actual scroll icon path
              alt="Scroll Icon"
              height={16}
              width={16}
              className="w-12 h-12"
            />
          </div>

          {/* Details */}
          <div>
            <p className="text-sm">ACQUISITION DIFFICULTY:</p>
            <p className="text-lg font-bold">?</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-blue-300"></div>

        {/* Learn Section */}
        <div className="text-center">
          <p className="text-xl font-semibold mb-2" style={{fontFamily: "Montserrat, serif"}}>Learn how to level up</p>
          <p className="text-2xl font-bold text-blue-400" style={{fontFamily: "Montserrat, serif"}}>[Item: Code-leveling]</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ElixirOfLife;
