import React from "react";
import features1 from "../../assests/features/features1.png";
import features2 from "../../assests/features/features2.png";
import features3 from "../../assests/features/features3.png";
import features4 from "../../assests/features/features4.png";

export default function Features() {
  const list = [
    {
      link: "/",
      target: "_blank",
      img: features1,
      name:"cointelegraph"
    },
    {
      link: "https://finance.yahoo.com/news/sappchat-providing-safe-communications-financial-111900943.html",
      target: "_blank",
      img: features2,
      name:"yahoo"
    },
    {
      link: "https://www.bitcoininsider.org/article/112137/sappchat-providing-safe-communications-and-financial-operations-blockchain",
      target: "_blank",
      img: features3,
      name:"bitcoin"
    },
    {
      link: "/",
      target: "_blank",
      img: features4,
      name:"market watch"
    },
  ];
  return (
    <div className="flex flex-col items-center py-32 text-white font-normalF text-3xl font-semibold px-5 sm:px-16">
      <h1 className="frombelowanim">As featured in</h1>

      <div className="frombelowanim w-full flex flex-wrap sm:flex-nowrap justify-center items-center py-12 gap-16">
        {list.map((item, index) => {
          return (
            <div key={index} className="w-[30%] sm:w-[15%] block">
              <img
                className="w-full block max-h-[60px] object-contain"
                src={item.img}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
