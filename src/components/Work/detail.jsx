import React from "react";

export default function Detail({ active = false, data }) {
  return (
    <div
      className={`absolute left-0 top-0 pl-16 pt-16 flex flex-col justify-start gap-8 w-full h-screen transition-all bg-dark ${
        active ? " opacity-100 z-40" : "z-30 opacity-0"
      }`}
    >
      <h2 className="text-[3vw] leading-normal font-libre">{data.heading}</h2>
      <p className="text-[1.5vw] leading-loose font-normalF">{data.detail}</p>
      <a
        href="/"
        className="hidden capitalize font-normalF border border-white px-12 py-4 no-underline rounded-full w-fit cursor-pointer"
      >
        learn more
      </a>
    </div>
  );
}
