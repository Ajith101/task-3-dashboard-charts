import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import MobileNav from "../sidebar/MobileNav";
import { TfiClose } from "react-icons/tfi";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="h-[70px] flex items-center justify-between pr-2 border-b-[4px] border-b-blue-700 w-full">
        <p className="text-violet-600 text-[22px] font-bold pl-3">
          D
          <span className="text-red-500 font-medium -tracking-widest">
            ashboard
          </span>
        </p>
        <div className="sm:hidden">
          {" "}
          {showNav ? (
            <TfiClose
              size={25}
              color="red"
              onClick={() => setShowNav((pre) => !pre)}
            />
          ) : (
            <CgMenuRight
              size={25}
              color="blue"
              onClick={() => setShowNav((pre) => !pre)}
            />
          )}
        </div>
      </div>
      <MobileNav setShowNav={setShowNav} showNav={showNav} />
    </>
  );
};

export default Header;
