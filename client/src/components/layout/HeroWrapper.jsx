import React from "react";
import { FaBell } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const HeroWrapper = ({ children }) => {
  return (
    <div className="flex fixed sm:top-[90px] top-[60px] left-0 md:left-[200px] md:pt-5 md:pr-[200px] justify-center w-full items-center bg-white h-full">
      {children}
    </div>
  );
};

export default HeroWrapper;
