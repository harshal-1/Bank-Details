import React from "react";
import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return <div className="flex flex-row w-full">
    <Sidebar/>
    {<Outlet/>}
  </div>;
};

export default Layout;
