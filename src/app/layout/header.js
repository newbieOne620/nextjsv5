import React from "react";
import { FaBars } from "react-icons/fa";

function Header({ toggleDrawer }) {
  return (
    <div className=" text-black w-screen bg-white p-4 flex items-center justify-between ">
      <div className="flex  items-center justify-center">
        <buton
          onClick={toggleDrawer}
          className="p-2   md:hidden rounded-md hover:bg-gray-400 cursor-pointer  mr-2"
        >
          <FaBars />
        </buton>
        NHA COSDD
      </div>
      <div>logout</div>
    </div>
  );
}

export default Header;
