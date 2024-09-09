"use client";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { useState } from "react";
const Mainlayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle drawer open/close
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="bg-gray-100 min-h-screen w-screen">
      <Header toggleDrawer={toggleDrawer} />
      <div className="flex justify-start items-start   ">
        <Sidebar isDrawerOpen={isDrawerOpen} />

        <main className="flex-1 ">{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Mainlayout;
