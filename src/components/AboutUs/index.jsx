import React, { useLayoutEffect, useState, useRef } from "react";
import Decentralized from "../../assests/images/Decentralized.png";
import Built from "../../assests/images/Built.png";
import Superior from "../../assests/images/Superior.png";
import ScrollerItem from "./ScrollerItem";
import { gsap } from "gsap";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../Heading";
gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const aboutRef = useRef();
  const itemsRef = useRef();
  const aboutSec = useRef();
  const stericRef = useRef();
  const [currentSec, setCurrentSec] = useState(1);
  const maxSec = 4;

  function isMobile() {
    return window.innerWidth <= 640;
  }

  const nextSection = () => {
    const currentSecValue = currentSec + 1 <= maxSec ? currentSec + 1 : maxSec; // Capture the current value of currentSec
    gsap.to(itemsRef.current, {
      x: -((itemsRef.current.children[0].offsetWidth + 40) * (currentSecValue - 1)), // Use currentSecValue here
    });
    setCurrentSec(currentSecValue);
  };

  const prevSection = () => {
    const currentSecValue = currentSec - 1 >= 1 ? currentSec - 1 : 1; // Capture the current value of currentSec
    gsap.to(itemsRef.current, {
      x: -((itemsRef.current.children[0].offsetWidth + 40) * (currentSecValue - 1)), // Use currentSecValue here
    });
    setCurrentSec(currentSecValue);
  };

  useLayoutEffect(() => {
    // GSAP animation for the steric rotation
    if (stericRef.current) {
      gsap.to(stericRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "linear",
      });
    }

    if (!isMobile()) {
      gsap.set(aboutRef.current, {
        x: window.innerWidth/2,
        ease: "none",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutSec.current,
            start: "top top",
            end: () => "+=" + aboutSec.current.offsetWidth/2,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(
          aboutRef.current,
          {
            x: -(aboutRef.current.offsetWidth - (window.innerWidth * 0.8)),
            ease: "none",
          },
          "a"
        );
    }
  }, []);

  return (
    <section
      ref={aboutSec}
      className="w-full sm:h-screen overflow-hidden bg-dark text-white"
    >
      <div className=" heroSection sm:h-screen w-full relative px-5 sm:px-16 2xl:px-32 py-12 flex flex-col justify-between">
        <Heading text={"Enabled Technology"} />

        {/* horizontal scroller */}

        <div
          ref={aboutRef}
          className="w-fit pt-16 sm:pt-0 flex flex-nowrap flex-grow items-center"
        >
          <div>
            <div ref={itemsRef} className="flex flex-nowrap mt-4 2xl:mt-8 gap-10">
              <ScrollerItem
                text="Decentralized"
                imageSrc={Decentralized}
                detail="Sappchat platform is decentralized through blockchain technology. Attacks on your sensitive data are impossible."
              />
              <ScrollerItem
                text="Built on Multi-Chains"
                imageSrc={Built}
                detail="The Sappchat is built on multi-chains technology smart contracts enable users to manage all their variety of digital assets securely in one place."
              />
              <ScrollerItem
                text="Superior end-to-end encryption"
                imageSrc={Superior}
                detail="Our security protocol developed on genuine end-to-end encryption and blockchain based authentication."
              />
            </div>
          </div>
        </div>
            <div className="flex sm:hidden items-center pt-6 gap-6 text-2xl text-black">
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
    </section>
  );
}
