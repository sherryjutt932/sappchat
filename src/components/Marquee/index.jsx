import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Marquee({ ArrayData, direction, speed, ...props }) {
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;

  const rightAnimation = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.to([first.current, second.current], { xPercent: xPercent, duration: 0 });
    requestAnimationFrame(rightAnimation);
    xPercent += speed / 10;
  };

  const leftAnimation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.to([first.current, second.current], { xPercent: xPercent, duration: 0 });
    requestAnimationFrame(leftAnimation);
    xPercent -= speed / 10;
  };

  useEffect(() => {
    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }
  }, [direction]);

  useEffect(() => {
    const handleResize = () => {
      // On resize, reposition the second div based on the first div's width
      gsap.set(second.current, { left: first.current.offsetWidth });
    };

    // Attach the event listener for resize
    window.addEventListener("resize", handleResize);

    // Initial setup
    gsap.set(second.current, { left: first.current.offsetWidth });

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center overflow-hidden py-16 bg-black">
      <div ref={marquee} className="h-full relative">
        <div
          className="h-full flex w-full flex-nowrap gap-12 sm:gap-24 items-center px-6 sm:px-10"
          ref={first}
        >
          {ArrayData.map((item, index) => (
            <div className="w-40 sm:w-[20vw] max-h-[140px] flex-shrink-0 flex justify-center" key={index}>
              <img className="w-full max-w-full object-contain" src={item} alt="" />
            </div>
          ))}
        </div>
        <div
          ref={second}
          className="h-full absolute left-0 top-0 flex flex-nowrap gap-12 sm:gap-24 items-center px-6 sm:px-10"
        >
          {ArrayData.map((item, index) => (
            <div className="w-40 sm:w-[20vw] max-h-[140px] flex-shrink-0 flex justify-center" key={index}>
              <img className="w-full max-w-full object-contain" src={item} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
