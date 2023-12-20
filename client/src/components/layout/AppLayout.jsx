import React from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex md:ml-[200px] flex-col w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
