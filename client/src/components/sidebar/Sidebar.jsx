import React from "react";
import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../data/data";

const Sidebar = () => {
  return (
    <>
      <div className="md:flex flex-col justify-center top-0 fixed left-0 h-screen w-[200px] hidden bg-gray-950">
        <div className="flex-col pt-14 gap-4 overflow-hidden hidden sm:flex lg:pt-10">
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
    </>
  );
};

export default Sidebar;
