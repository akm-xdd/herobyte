import React from "react";
import Logo from "./Logo";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black text-sm">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap sm:justify-start sm:flex-nowrap sm:items-center sm:justify-between">
        <a
          href="#"
          className="flex-none text-xl font-semibold text-white dark:text-white"
        >
          <Logo />
        </a>
        <div className="flex flex-row items-center gap-5 mt-5 pb-2 overflow-x-auto sm:justify-end sm:mt-0 sm:pl-5 sm:pb-0 sm:overflow-x-visible">
          <a
            href="#"
            className="font-primary font-medium text-2xl text-white hover:text-gray-400"
          >
            BLOG
          </a>
          <a
            href="#"
            className="font-primary font-medium text-2xl text-white hover:text-gray-400"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="font-primary font-medium text-2xl text-white hover:text-gray-400"
          >
            LOGIN
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
