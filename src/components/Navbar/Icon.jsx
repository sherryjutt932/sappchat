import React from "react";

export default function Icon({ children, setActive, index, isActive, theme }) {
  const className = "";
  // const className = theme === "dark" ? "bg-white text-black" : "bg-black text-white"

  return (
    <div
      className={`
    ${isActive === index ? className : ""} 
    relative font-libre rounded-full overflow-hidden group text-[1.2vw]`}
    >
      <div
        className={`px-4 py-1 cursor-pointer transition-all duration-500 group-hover:scale-75`}
        onClick={() => {
          (index>=0) && setActive(index);
        }}
      >
        {children}
      </div>
      <div
        className={`bg-sec text-white px-4 py-1 rounded-full cursor-pointer transition-all duration-500 group-hover:top-0 top-[105%] left-1/2 -translate-x-1/2 absolute `}
        onClick={() => {
          (index>=0) && setActive(index);
        }}
      >
        {children}
      </div>
    </div>
  );
}
