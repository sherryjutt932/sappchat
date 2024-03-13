import gsap from "gsap";
import React, { useEffect } from "react";

export default function ScrollDown({ theme = "dark" }) {
  useEffect(() => {
    const scroller_Animation_timeline = gsap.timeline({ repeat: -1 });

    // Add your animation to the timeline
    scroller_Animation_timeline
      .to(".scrollerAnim-arrow", {
        y: -34,
        duration: 1,
        ease: "ease",
      })
      .to(".scrollerAnim-arrow", {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      });

    // Add a delay after each repetition
    scroller_Animation_timeline.to({}, { delay: 2 });
  }, []);

  return (
    <div className="flex justify-end items-center gap-4 sm:absolute sm:top-[80vh] sm:right-10">
      <svg
        width="53"
        height="119"
        viewBox="0 0 53 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 sm:w-auto"
      >
        <rect
          x="0.5"
          y="0.5"
          width="52"
          height="118"
          rx="26"
          stroke={`${theme === "dark" ? "white" : "black"}`}
        />
        <circle cx="26.5" cy="23.5" r="6.5" fill="#0090FF" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          className="scrollerAnim-arrow"
          d="M27 61.5C27.8285 61.5 28.5 62.1716 28.5 63V96.8787L35.4853 89.8934C36.0711 89.3076 37.0209 89.3076 37.6066 89.8934C38.1924 90.4792 38.1924 91.4289 37.6066 92.0147L28.0607 101.561C27.4749 102.146 26.5252 102.146 25.9394 101.561L16.3934 92.0147C15.8077 91.4289 15.8077 90.4792 16.3934 89.8934C16.9792 89.3076 17.929 89.3076 18.5148 89.8934L25.5 96.8787V63C25.5 62.1716 26.1716 61.5 27 61.5Z"
          fill={`${theme === "dark" ? "white" : "black"}`}
        />
      </svg>

      <div
        className={`font-normalF leading-tight ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <p className="uppercase font-bold">scroll down</p>
        <p className="capitalize font-normal">to explore more</p>
      </div>
    </div>
  );
}
