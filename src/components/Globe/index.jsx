import React from "react";
import logoBig from "../../assests/images/logoBig.png";

import avatar1 from "../../assests/images/avatar1.png";
import avatar2 from "../../assests/images/avatar2.png";
import avatar3 from "../../assests/images/avatar3.png";
import avatar4 from "../../assests/images/avatar4.png";

import arrowUp from "../../assests/icons/arrowUp.svg";
import arrowDown from "../../assests/icons/arrowDown.svg";
import "./style.css";

function Avatar({ img, pos, stroke = "#ffffff", size = "big", duration = 20 }) {
  return (
    <div className={`absolute aspect-square ${pos} z-50`}>
      <img src={img} alt="" className="block w-[70%] aspect-square rounded-full absolute absCenter z-50" />
      <div className={`absolute aspect-square bg-dark absCenter rounded-full z-20 ${size === "big" ? 'w-[85%]' : 'w-[90%]'}`}></div>
      <div className="absolute w-[100%] rotateCenter aspect-square rounded-full z-10" style={{ background: `linear-gradient(to bottom, ${stroke}, ${stroke}50 40%, ${stroke}00 80%)`, animationDuration: `${duration}s` }}></div>
      <div className="absolute w-[100%] rotateCenter aspect-square rounded-full z-0 blur-xl" style={{ background: `linear-gradient(to bottom, ${stroke}, ${stroke}50 40%, ${stroke}00 80%)`, animationDuration: `${duration}s` }}></div>
    </div>
  )
}

function WaveButton({ img, pos }) {
  return (
    <div className={`w-8 sm:w-16 p-[10px] rounded-full flex justify-center items-center absolute aspect-square ${pos}`}>
      <div className="relative z-50">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="w-full h-full rounded-full absolute absCenter z-30" style={{ background: "linear-gradient(-45deg, #0057FF, #009FFF)" }}></div>
      <div className="w-full h-full bg-[#0085D750] rounded-full absolute waveCenter z-20" style={{ animationDelay: "2s" }}></div>
      <div className="w-full h-full bg-[#0085D750] rounded-full absolute waveCenter z-10"></div>
    </div>
  )
}

function Dot({ pos }) {
  return (
    <div className={`w-1 h-1 sm:w-3 sm:h-3 bg-white absolute rounded-full z-10 ${pos}`}>
    </div>
  )
}

function Circle({ pos, children }) {
  return (
    <div className={`rounded-full border aspect-square flex items-center justify-center relative ${pos}`}>
      {children}
    </div>
  )
}

function Text({ pos, head, detail }) {
  return (
    <div className={`absolute aspect-square z-50 ${pos}`}>
      <h1 className="text-2xl sm:text-5xl font-normalF font-bold" style={{ textShadow: "1px 2px 20px #ffffff80" }}>{head}</h1>
      <p className=" text-xs sm:text-xl  font-normalF w-3/5 font-light uppercase">{detail}</p>
    </div>
  )
}


export default function Globe({ theme }) {
  return (
    <div className={`my-16 sm:my-2 pt-32 pb-16 sm:pt-32 sm:pb-32 relative ${theme === "light" && 'opacity-0'}`}>

      {/* heading with shadow */}
      <div className="h-1/3 w-full z-10 absolute top-0 sm:top-24 left-0 flex flex-col items-center gap-3 sm:gap-6 pt-4 sm:pt-40 text-center" style={{ background: `linear-gradient(to bottom, #181618 50%, #18161800)` }}>
        <h1 className="text-2xl sm:text-3xl font-normalF font-semibold">
        What is Sappchat?
        </h1>
        <p className="text-base sm:text-xl font-normalF sm:w-3/5 font-light">
        Sappchat is helping establish a new era of secure communication and easy peer-to-peer transfer of money and cryptocurrencies to everyone you know around the world
        </p>
      </div>

      {/* bottom shadow */}
      <div className="h-1/3 w-full z-10 absolute bottom-0 left-0" style={{ background: `linear-gradient(to top, #181618 , #18161800)` }}></div>

      {/* circles */}
      <div className="w-full h-full flex items-center justify-center pt-16 sm:pt-0">
        <Circle pos={"p-[60px] sm:p-[10vw] border-[#ffffff30]"}>
          
          <Circle pos={"p-[25px] sm:p-[5vw] border-[#ffffff00]"}>
            <div className="w-full h-full absolute rotateCenter border border-[#ffffff50] rounded-full" style={{ animationDuration: "50s" }}>
              <Dot pos={"right-[20%] top-[90%] -translate-y-1/2 translate-x-1/2"} />
              <Dot pos={"left-[20%] top-[90%] -translate-y-1/2 -translate-x-1/2"} />
            </div>
            <Text head={"180+"} detail={"Languages"} pos={"left-[50%] bottom-[-1%] translate-y-1/2 -translate-x-1/2"} />
            <WaveButton pos={"left-[14%] top-[84%] -translate-y-1/2 -translate-x-1/2"} img={arrowUp} />
            <WaveButton pos={"right-[0%] top-[55%] -translate-y-1/2 translate-x-1/2"} img={arrowDown} />


            <Circle pos={"p-[50px] sm:p-[10vw] border-[#ffffff00]"}>
              <div className="w-full h-full absolute rotateCenter border border-[#ffffff70] rounded-full" style={{ animationDuration: "40s" }}>
                <Dot pos={"right-[10%] top-[20%] -translate-y-1/2 translate-x-1/2"} />
              </div>
              <Text head={"50+"} detail={"Tokens"} pos={"left-[2%] top-[35%] -translate-y-1/2 -translate-x-1/2"} />
              <Avatar pos={"w-[75px] sm:w-[8.5vw] left-[2%] top-[58%] -translate-y-1/2 -translate-x-1/2"} img={avatar4} stroke="#0085D7" size={"small"} />
              <Avatar pos={"w-[70px] sm:w-[8vw] right-[18%] top-[88%] -translate-y-1/2 translate-x-1/2"} img={avatar3} stroke="#FFE600" duration={10} />

              <Circle pos={"p-[50px] sm:p-[8vw] border-[#ffffff00]"}>
                <div className="w-full h-full absolute rotateCenter border border-[#ffffff90] rounded-full" style={{ animationDuration: "50s" }}>
                  <Dot pos={"left-[4%] top-[30%] -translate-y-1/2 -translate-x-1/2"} />
                  <Dot pos={"left-[20%] top-[90%] -translate-y-1/2 -translate-x-1/2"} />
                </div>
                <Avatar pos={"w-[80px] sm:w-[9vw] left-[30%] top-[5%] -translate-y-1/2 -translate-x-1/2"} img={avatar1} stroke="#ffffff" />
                <Avatar pos={"w-[90px] sm:w-[10vw] right-[4%] top-[40%] -translate-y-1/2 translate-x-1/2"} img={avatar2} stroke="#00AB5E" duration={15} />
                <img src={logoBig} alt="" className="min-w-[100px]" />
              </Circle>
            </Circle>
          </Circle>
        </Circle>

      </div>
    </div>
  );
}
