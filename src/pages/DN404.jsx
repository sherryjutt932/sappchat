import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/index.jsx";
import Footer from "../components/Footer/index.jsx";

import darkBg from "../assests/images/darkBg.png";
import dn from "../assests/images/dn.png";
import dn1 from "../assests/images/dn1.png";
import dn2 from "../assests/images/dn2.png";
import dn3 from "../assests/images/dn3.png";
import dn4 from "../assests/images/dn4.png";

import dna from "../assests/images/dna.png";
import dnb from "../assests/images/dnb.png";
import dnc from "../assests/images/dnc.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Buttons() {
  return (
    <div className="opacityAnim flex flex-col sm:flex-row mx-auto gap-4 sm:gap-24 justify-center items-center">
      <a href=" https://forms.gle/YeKBsNXn8CPniF2V8" target="_blank" className="no-underline px-6 py-3 2xl:px-10 2xl:py-6 min-w-[200px] 2xl:min-w-[250px] rounded-full bg-sec text-white font-normalF text-[16px] sm:text-[20px] hover:bg-secD transition-all ease duration-500">
        Join Whitelist
      </a>
      <a href="/Mint" className="no-underline px-6 py-3 2xl:px-10 2xl:py-6 min-w-[200px] 2xl:min-w-[250px] rounded-full border border-sec text-sec font-normalF text-[16px] sm:text-[20px] hover:bg-secD transition-all ease duration-500 hover:text-light">
        Mint Now
      </a>
    </div>
  );
}

export default function DN404() {
  useEffect(() => {
    const panelElements = document.querySelectorAll(".panel");
    panelElements.forEach((panel) => {
      var leftImg = panel.querySelector(".leftImg");
      var rightImg = panel.querySelector(".rightImg");

      var righttext = panel.querySelector(".righttext");
      var righttext2 = panel.querySelector(".righttext2");
      var lefttext = panel.querySelector(".lefttext");
      var lefttext2 = panel.querySelector(".lefttext2");

      let timeline = gsap.timeline();

      leftImg && gsap.set(leftImg, { transformOrigin: "bottom center" });
      rightImg && gsap.set(rightImg, { transformOrigin: "bottom center" });

      leftImg &&
        timeline.fromTo(
          leftImg,
          { rotate: -60 },
          { rotate: 0, duration: 1 },
          "a"
        );

      rightImg &&
        timeline.fromTo(
          rightImg,
          { rotate: 60 },
          { rotate: 0, duration: 1 },
          "a"
        );

      righttext &&
        righttext2 &&
        timeline.fromTo(
          [righttext, righttext2],
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, stagger: 0.1 },
          "a"
        );

      lefttext &&
        lefttext2 &&
        timeline.fromTo(
          [lefttext, lefttext2],
          { x: -200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, stagger: 0.1 },
          "a"
        );

      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "top top",
        scrub: 1,
        animation: timeline,
      });

      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });

      gsap.fromTo(
        ".heroImg2",
        {
          transformOrigin: "bottom center",
          rotate: 60,
          xPercent: 100,
        },
        {
          transformOrigin: "bottom center",
          rotate: 0,
          xPercent: 0,
          duration: 1,
        }
      );

      gsap.fromTo(
        ".heroImg",
        {
          transformOrigin: "bottom center",
          rotate: -60,
          xPercent: -100,
        },
        {
          transformOrigin: "bottom center",
          rotate: 0,
          xPercent: 0,
          duration: 1,
        }
      );

      gsap.fromTo(
        ".opacityAnim",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
        }
      );
    });
  }, []);

  const sectionClass =
    "panel w-full h-screen flex justify-center items-center relative flex-col sm:flex-row p-6 gap-10 sm:gap-0";
  
    const headingClass =
    "capitalize font-normalF Medium font-semibold text-[24px] sm:text-[40px] pb-3";
   
    const textClass =
    "text-dark font-normalF text-[16px] leading-[22px] sm:text-[20px] sm:leading-[31px] tracking-tight sm:w-[90%]";

  return (
    <>
      <div className="heroSection w-full sm:h-screen flex flex-col overflow-hidden px-5 sm:px-16 2xl:px-16 bg-main relative">
        <Navbar theme="light" />
        <img
          src={dna}
          alt=""
          className="block mt-auto w-[8vw] absolute top-36 left-0 heroImg"
        />
        <img
          src={dnb}
          alt=""
          className="block mt-auto w-[14vw] absolute bottom-12 right-0 heroImg2"
        />
        <div className="flex-grow w-full text-center items-center flex flex-col relative pt-12 sm:pt-0">
          <h1 className="opacityAnim text-dark capitalize font-libre Medium font-semibold text-[36px] sm:text-[66px] 2xl:text-[96px] pt-8 xl:pt-16 pb-4  leading-none">
            SAPP TEDDY
          </h1>
          <p className=" opacityAnim font-normalF text-[16px] sm:text-[18px] 2xl:text-[20px] w-[90%] mx-auto pb-8 xl:pb-16 text-[#7A7A7A]">
            <b className="text-dark">Sapp Teddy is the first established NFTs collection brand to launch on the DN404 Binance Chain. </b><br />
            There are only 10,000 ultra-limited rare Sapp Teddy that will ever be created. They come with several unique traits and designs. These collectibles will be forever stored on the Blockchain. Sapp Teddy will be traded on the open market immediately after the mint is completed.
          </p>
          <Buttons />
          <img
            src={dn}
            alt=""
            className="opacityAnim block mt-auto h-[40vh] relative top-8 2xl:top-12"
          />
        </div>
      </div>

      <div className="h-fit">
        <section
          className={`${sectionClass}`}
          style={{ backgroundImage: `url(${darkBg})` }}
        >
          <h1 className="absolute top-12 left-0 w-full text-center text-light capitalize font-normalF Medium font-semibold text-[18px] sm:text-[48px]">
            SAPP TEDDY NFTs UTILITY
          </h1>
          <div className="sm:flex-1">
            <img
              src={dn1}
              alt=""
              className={`block w-full relative mt-[100px] sm:mt-[0px] sm:top-[15vh] leftImg`}
            />
          </div>
          <div className="sm:flex-1">
            <h1 className={`text-light righttext ${headingClass}`}>
              Stake and Earn
            </h1>

            <p className={`text-light righttext2 ${textClass}`}>
            We are setting aside a reward pool of 2.5% of the total supply of Sappchat APP tokens. Sapp Teddy holders can stake their NFTs to earn from the pool over the period of 3 months, 6 months, or up to a year.

            </p>
          </div>
        </section>

        <section className={`${sectionClass} bg-[#DBEFFF]`}>
          <div className="sm:flex-1 sm:pl-[65px]">
            <h1 className={`text-dark lefttext ${headingClass}`}>
              Royalty Rewards
            </h1>

            <p className={`text-dark lefttext2 ${textClass}`}>
            As a Sapp Teddy holder, you will receive 10% royalty fees on all secondary sales, creating an additional stream of value.


            </p>
          </div>
          <div className="sm:flex-1">
            <img src={dn2} alt="" className={`block w-full rightImg`} />
          </div>
        </section>

        <section className={`${sectionClass} bg-[#ffffff]`}>
          <div className="sm:flex-1">
            <img
              src={dn3}
              alt=""
              className={`block w-full leftImg`}
            />
          </div>
          <div className="sm:flex-1">
            <h1 className={`text-dark righttext ${headingClass}`}>
              Exclusive Access
            </h1>

            <p className={`text-dark righttext2 ${textClass}`}>
            Sapp Teddy holders gain exclusive access to pre-sales on the Sappchat Launchpad, offering early access to exciting ecosystem opportunities.

            </p>
          </div>
        </section>

        <section className={`${sectionClass} bg-[#DBEFFF]`}>
          <div className="sm:flex-1 sm:pl-[65px]">
            <h1 className={`text-dark lefttext ${headingClass}`}>
              Voting Rights and Rewards
            </h1>

            <p className={`text-dark lefttext2 ${textClass}`} >
            The Sappchat governance system allows users to vote on the ecosystem development using Sapp Teddy and Sappchat APP tokens. Active participants earn APP tokens as and when they sponsor a successful proposal, fostering community engagement and shaping the governance system.

            </p>
          </div>
          <div className="sm:flex-1">
            <img src={dn4} alt="" className={`block w-full rightImg`} />
          </div>
        </section>

        <section className="panel h-fit w-full text-center items-center flex flex-col relative bg-[#F8F4E8] py-24 px-6">
          <img
            src={dnc}
            alt=""
            className="block mt-auto w-[14vw] absolute top-0 -translate-y-1/2 left-0 leftImg"
          />
          <h1 className="text-dark capitalize font-libre Medium font-semibold text-[28px] sm:text-[36px] 2xl:text-[48px] pb-4  leading-none">
            How to Mint
          </h1>
          <p className="font-normalF text-[16px] sm:text-[18px] 2xl:text-[20px] w-[90%] mx-auto pb-8 xl:pb-16 text-[#7A7A7A]">
          The whitelist starts on the 15th of March 2024 at 4 PM UTC. Each NFT is priced at $200. 
          You have the option to pay the full amount in BNB or split the payment with $50 in APP 
          tokens and $150 in BNB. <br />
          To secure your whitelist status, commit the initial $50 of your payment in APP tokens or in 
          BNB worth to the sale funds wallet address on the whitelist form.
            <br />
            The announcement regarding the mint date and participation process will be made on our Telegram account and Official Twitter page.
          </p>
          {/* <Buttons /> */}
        </section>

        <section className="panel">
          <Footer />
        </section>
      </div>
    </>
  );
}