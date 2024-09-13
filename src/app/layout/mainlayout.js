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
    <div className="flex flex-col bg-gray-100 h-screen overflow-hidden">
      <Header toggleDrawer={toggleDrawer} />
      <div className="flex flex-1">
        <Sidebar isDrawerOpen={isDrawerOpen} />
        {/* <aside className="bg-gray-200 w-1/4 p-4">Sidebar</aside> */}
        <main className="flex-1 p-4    ">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
