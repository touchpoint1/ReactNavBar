import Button from "components/button";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "service", path: "#" },
  { name: "About", path: "#" },
  { name: "Contact", path: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-auto z-10 w-full">
      <div
        className={`flex relative items-center h-16 md:h-20 transition-all bg-${
          scrolled ? "[rgba(255, 255, 255, 0.80)]" : "transparent"
        } backdrop-blur-${scrolled ? "sm" : "none"}`}
      >
        <div className="flex h-full w-full max-w-screen-xl p-4 lg:px-8 mx-auto items-center justify-between">
          <NavLink to={"/home"}>
            <p>TouchPoint</p>
          </NavLink>

          <div className="flex items-center">
            <div className="hidden md:flex gap-12 items-center">
              {links.map((link, index) => (
                <NavLinks key={index} {...link} />
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button variant="primary" size="md">
              Sign in
            </Button>
          </div>

          <div className="block md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="sm">
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-200 transition-all`}
      >
        <div className="p-4 space-y-2">
          {links.map((link, index) => (
            <NavLinks key={index} {...link} />
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ name, path }) => {
  return (
    <ul>
      <li className="list-none hover:list-disc hover:text-blue-400">
        <NavLink
          to={path}
          className={`transition-all ${(NavClass) =>
            NavClass.isActive ? "nav-active" : "nav-links"}`}
        >
          {name}
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
