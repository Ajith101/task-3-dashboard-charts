import React from "react";
import { navigationLinks } from "../../data/data";
import { NavLink } from "react-router-dom";

const MobileNav = ({ showNav, setShowNav }) => {
  return (
    <div
      className={`flex fixed flex-col justify-center transition-all ease-linear duration-200 ${
        showNav ? "translate-x-0" : "translate-x-[-100%]"
      } top-0 left-0 h-screen w-[200px] md:hidden bg-black shadows`}
    >
      <div className="flex-col pt-14 gap-4 h-full overflow-hidden sm:hidden flex lg:pt-10">
        {navigationLinks.map((item, id) => (
          <NavLink
            to={item.link}
            key={id}
            className={({ isActive }) =>
              isActive
                ? "flex py-2 items-center gap-3 bg-blue-950/60 text-white hover:bg-blue-200 pl-4"
                : "flex py-2 items-center gap-3 text-white pl-4 overflow-hidden hover:bg-blue-600/50 hover:scale-105 transition-all ease-in-out duration-200"
            }
          >
            {item.icon}
            <span className="text-[16px] font-semibold">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
