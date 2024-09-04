import React from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className=" text-black w-full bg-gray-300 p-4 flex items-center justify-between">
      <div className="flex  items-center justify-center">
        <buton className="p-2 rounded-md hover:bg-gray-400 cursor-pointer  mr-2">
          <FaBars />
        </buton>
        NHA COSDD
      </div>
      <div>logout</div>
    </div>
  );
}

export default Header;
