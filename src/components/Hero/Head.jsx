import React, { forwardRef } from "react";
import Marquee from "./Marquee";
import clsx from "clsx";
import Underline from "../Underline";
import IconBtn from "../Buttons/IconBtn";
import ScrollDown from "../ScrollDown/index.jsx";
import { googleplayLink, appstoreLink } from "../../Constants/links.js";

import playstore from "../../assests/icons/playstore.svg";
import applestore from "../../assests/icons/applestore.svg";
import playstoreL from "../../assests/icons/playstoreL.svg";
import applestoreL from "../../assests/icons/applestoreL.svg";

const Head = forwardRef(({ theme, z }, ref) => {
  return (
    <div className="h-fit sm:h-[calc(100vh-6rem)] leading-none flex flex-col py-16 gap-4 sm:gap-0 sm:justify-between ">
      {/* main heading */}
      <div className="font-libre font-normal text-[9vw] sm:text-[max(6.2vw,40px)]  leading-normal sm:leading-tight tracking-wide">
        The world’s first <br />
        <Underline z={z} text={"Decentralized"} /> Messaging <br />
        App meets{" "}
        <Marquee direction={"left"} speed={1}>
          Decentralized *
        </Marquee>
        <br />
        Banking
        <span
          ref={ref}
          className={clsx(
            theme === "dark" ? "bg-main" : "bg-sec",
            " w-4 h-4 sm:w-[2vw] sm:h-[2vw] aspect-square inline-block rounded-full align-baseline"
          )}
        ></span>{" "}
        <span className="flex sm:inline-flex gap-4 sm:gap-12 py-6 sm:py-0 sm:px-6 leading-none align-middle items-center">
          <a href={googleplayLink} target="_blank" rel="noreferrer" className="flex">
          <IconBtn
            theme={theme}
            icon={theme === "dark" ? playstoreL : playstore}
            label1={"get it on"}
            label2={"Google play"}
          />
          </a>
          <a href={appstoreLink} target="_blank" rel="noreferrer" className="flex">
          <IconBtn
            theme={theme}
            icon={theme === "dark" ? applestoreL : applestore}
            label1={"get it on"}
            label2={"Apple play"}
          />
          </a>
        </span>
      </div>
      <p className="font-normalF font-normal text-[max(22px,2vw)] leading-[1.2]">
      Be a part of the market leader in decentralized communication and finance
      </p>

      <ScrollDown theme={theme}/>
    </div>
  );
});

export default Head;
