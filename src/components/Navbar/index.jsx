import React, { useState } from "react";
import Icon from "./Icon";
import logo from "../../assests/images/logo.png";
import Popup from "./Popup";
import DN404 from "../../pages/DN404";

export default function Navbar({ theme }) {
  const [isActive, setisActive] = useState(0);
  const [isMenu, setIsMenu] = useState(false);
  const navArray = [
    {
      label: "Home",
      url: "/",
      target:""
    },
    {
      label: "Company",
      url: "https://orangerocklabs.com/",
      target:"_blank"
    },
    {
      label: "Docs",
      url: "https://sappchat.gitbook.io/docs/",
      target:""
    },
    {
      label: "Mint",
      url: "/",
      target:""
    },
    {
      label: "DN404",
      url: "./DN404",
      target:""
    },
    {
      label: "Stake App",
      url: "https://hodl.sappchat.com/ ",
      target:"_blank"
    },
  ];

  const setActive = (index) => {
    setisActive(index);
  };

  const handleMenuClick = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav
      className={`${
        theme === "dark" ? "text-white" : "text-black "
      } w-full relative top-0 left-0 flex items-center h-fit py-8 justify-between font-Satoshi whitespace-nowrap`}
    >
      <div>
        <a href="/">
          <img src={logo} alt="" className="w-36 sm:w-44" />
        </a>
      </div>
      <div className="flex-1 gap-8 justify-end items-center hidden sm:flex">
        {navArray.map((item, index) => {
          return (
          <a href={item.url} target={item.target} key={index} className="relative">
            <Icon
              theme={theme}
              index={index}
              isActive={isActive}
              setActive={setActive}
            >
              {item.label}
            </Icon>
            {item.new && <span className="absolute -right-4 -top-5 bg-[#f90842] leading-[1.2] px-3 py-1 rounded-full text-white text-sm">new</span>}
          </a>
          );
        })}
      </div>

      <button className="flex sm:hidden text-3xl bg-transparent p-0">
        <Popup
          handleMenuClick={handleMenuClick}
          isMenu={isMenu}
          navArray={navArray}
        />
      </button>

      <span
        className={`${
          theme === "dark" ? "" : ""
        } border-gray-c5 absolute bottom-0 rounded-full left-1/2 -translate-x-1/2 border-b w-full`}
      ></span>
    </nav>
  );
}
