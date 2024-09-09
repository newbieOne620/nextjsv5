import React from "react";
import {
  FaTachometerAlt, // Dashboard icon
  FaList, // Inventory icon
  FaUser, // Create User icon
  FaUsers, // Userlist icon
} from "react-icons/fa";

import Link from "next/link";

function Sidebar({ isDrawerOpen }) {
  return (
    <aside
      className={` transition-all duration-300  overflow-hidden    bg-white  drop-shadow-lg  ${
        isDrawerOpen ? "w-60 p-4 " : "w-0"
      }  md:w-60 md:p-4`}
    >
      <ul className="text-black text-nowrap ">
        <li className="flex justify-start items-center rounded-md p-2 hover:bg-blue-100   cursor-pointer ">
          <FaTachometerAlt className="mr-2" />
          <Link className="w-full h-full" href="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="flex justify-start items-center rounded-md p-2 hover:bg-blue-100   cursor-pointer ">
          <FaUsers className="mr-2" />
          <Link className="w-full h-full" href="/createuser">
            Create User
          </Link>
        </li>
        <li className="flex justify-start items-center rounded-md p-2 hover:bg-blue-100   cursor-pointer ">
          <FaList className="mr-2" />
          <Link className="w-full h-full" href="/userlist">
            Userlist
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
