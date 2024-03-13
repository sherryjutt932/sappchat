import React, { useLayoutEffect, useRef, useState } from "react";
import { DetailData, ImgData } from "./data.js";
import Detail from "./detail.jsx";
import Image from "./image.jsx";
import StickyButton from "../UI/StickyButton.jsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../Heading/index.jsx";
gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const workSec = useRef();
  const imgRef = useRef();
  const detailRef = useRef();
  const [currentSec, setCurrentSec] = useState(1);
  const maxSec = 4;

  useLayoutEffect(() => {
    var tl = gsap.timeline();

    if(imgRef.current){
      tl.to(imgRef.current, {
        yPercent: -300,
        ease: "none",
      });
  
      ScrollTrigger.create({
        trigger: workSec.current,
        start: "top top",
        end: () => `+=${imgRef.current.offsetHeight * 2}`,
        scrub: true,
        pin: true,
        animation: tl,
        // snap: {
        //   snapTo: 1 / (imgRef.current.childNodes.length - 1),
        // },
        onUpdate: (self) => {
          let progress = self.progress;
  
          if (progress <= 0.15) {
            setCurrentSec(1);
          }
          if (progress > 0.15) {
            setCurrentSec(2);
          }
          if (progress > 0.5) {
            setCurrentSec(3);
          }
          if (progress > 0.75) {
            setCurrentSec(4);
          }
        },
      });
    }
  }, [workSec, imgRef]);

  const nextSection = () => {
    const currentSecValue = currentSec + 1 <= maxSec ? currentSec + 1 : maxSec; // Capture the current value of currentSec
    gsap.to(imgRef.current, {
      yPercent: -(100 * (currentSecValue - 1)), // Use currentSecValue here
      ease: "none",
    });
    setCurrentSec(currentSecValue);
  };

  const prevSection = () => {
    const currentSecValue = currentSec - 1 >= 1 ? currentSec - 1 : 1; // Capture the current value of currentSec
    gsap.to(imgRef.current, {
      yPercent: -(100 * (currentSecValue - 1)), // Use currentSecValue here
      ease: "none",
    });
    setCurrentSec(currentSecValue);
  };

  return (
    <section className="h-fit">
      <div className="py-6 w-full text-white">
        <Heading text={"Features"} />
      </div>

      <div
        ref={workSec}
        className="w-full h-screen box-border overflow-hidden hidden sm:block"
      >
        <div className=" heroSection h-screen w-full flex flex-col text-white relative">
          {/* work grid */}
          <div className="h-full text-xl grid grid-cols-8 grid-rows-3 ">
            {/* Detail */}
            <div className=" row-span-2 col-span-4 w-full">
              <div className="relative h-full w-full flex flex-nowrap flex-row-reverse">
                {DetailData.map((item, index) => {
                  return (
                    <Detail
                      active={currentSec === index + 1}
                      key={index}
                      data={item}
                    />
                  );
                })}
              </div>
            </div>

            {/* images scroller */}
            <div className="row-span-3 col-span-4 w-full max-h-full box-border h-full">
              <div ref={imgRef} className="w-full h-full z-10">
                {ImgData.map((item, index) => {
                  return <Image key={index} src={item.img} />;
                })}
              </div>
            </div>
          </div>

          <div className="bg-dark absolute bottom-0 left-0 w-full py-4 z-50 px-16 flex items-center gap-12">
            <h1 className="font-libre text-6xl w-16">0{currentSec}</h1>
            <div className="flex-grow h-2 bg-sec"></div>
            <div className="flex items-center gap-6 text-2xl text-black">
              <button
                onClick={prevSection}
                className={`rounded-full w-12 aspect-square flex items-center justify-center transition-all ${
                  currentSec === 1 ? "bg-gray-400" : "bg-white"
                }`}
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={nextSection}
                className={`rounded-full w-12 aspect-square flex items-center justify-center transition-all ${
                  currentSec === maxSec ? "bg-gray-400" : "bg-white"
                }`}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit box-border sm:hidden block">
        <div className="h-fit w-full flex flex-col text-white relative">
          {DetailData.map((item, index) => {
            return (
              <div
                key={index}
                className={`frombelowanim p-5 sm:pl-16 pt-16 flex flex-col justify-start gap-4 sm:gap-8 w-full bg-dark`}
              >
                <img src={item.img} alt="" className="block w-full h-auto object-contain rounded-3xl" />
                <h2 className="text-2xl leading-normal font-libre">
                  {item.heading}
                </h2>
                <p className="text-base leading-loose font-normalF">
                  {item.detail}
                </p>
                <a
                  href="/"
                  className="hidden capitalize font-normalF border border-white px-8 sm:px-12 py-2 sm:py-4 no-underline rounded-full w-fit cursor-pointer"
                >
                  learn more
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
