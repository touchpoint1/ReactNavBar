import React, { useState } from "react";
import { XMarkIcon, HomeIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Button from "./Button";

const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
    { name: "SERVICES", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 ">
        <div className=" cursor-pointer flex items-center">
          <HomeIcon className="w-7 h-7" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            TouchPoint
          </span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 nav   space-x-8 lg:flex text-lg absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="navs md:ml-8 md:my-0 my-7 font-semibold tracking-wide text-gray-700 transition-colors duration-200  ">
              <a href={link.link} className="text-gray-800 duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <button className="inline-flex lg:hidden sm:hidden  items-center justify-center h-9 px-6 font-semibold tracking-wide text-white transition  bg-indigo-300  rounded shadow-md  focus:shadow-outline focus:outline-none duration-500 md:static">
            SIGNUP
          </button>
        </ul>
        <Button text="SignUp" />
      </div>
    </div>
  );
};

export default Header;
