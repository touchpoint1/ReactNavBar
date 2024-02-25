import React from "react";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <ItemsContainer />
      <div
        className=" 
      text-center pt-2 text-gray-400 text-xl pb-8"
      >
        <span className="">© 2024 TouchPoint</span>
      </div>
    </footer>
  );
};

export default Footer;
