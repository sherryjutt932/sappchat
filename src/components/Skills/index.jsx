import React, { useEffect, useRef } from "react";
import Label from "./Label";
import Box from "./Box";
import steric from "../../assests/icons/steric.svg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
const labelsRef = useRef()
const skillsRef = useRef()
const stericRef = useRef()
const labelsCon = useRef()

useEffect(() => {
  var labelsTl = gsap.timeline();
  var stericTl = gsap.timeline();
  
  if(labelsRef.current ){
    labelsTl.fromTo(
      [labelsRef.current.children[2], labelsRef.current.children[4]],
      //
      {
        yPercent:-40,
      },
      {
        yPercent:100,
      },"a"
    )
    .fromTo(
      [labelsRef.current.children[3]],
      //
      {
        yPercent:-35,
      },
      {
        yPercent:40,
      },"a"
    ).fromTo(
      [labelsRef.current.children[0],labelsRef.current.children[1]],
      //
      {
        yPercent:-25,
      },
      {
        yPercent:200,
      },"a"
    )
    
  }
  
  if(stericRef.current ){
    stericTl.to(
      stericRef.current,
      {
        rotate:720,
      }
    )
    
  }
 

  ScrollTrigger.create({
    trigger: labelsCon.current,
    start: "top 70%",
    end: "top 20%",
    scrub: 3,
    animation: labelsTl,
    // pin:true,
  });
  
  ScrollTrigger.create({
    trigger: stericRef.current,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    animation: stericTl,
    // pin:true,
  });
  
  return () => {
    labelsTl.kill();
    stericTl.kill();
  };
}, []);

  return (
    <div ref={skillsRef} className="bg-dark z-10 w-full flex flex-col text-white text-center mt-16 2xl:mt-0 px-5 sm:px-16 py-16 2xl:py-32 gap-16">
      {/* heading */}
      <div ref={labelsCon} className=" w-full">
        <div className="relative w-fit mx-auto font-libre text-[max(4vw,40px)] leading-tight">
           Exchange your Crypto Assets
          <br />
          Instantly
          <div ref={labelsRef} className="absolute left-0 top-0 h-full w-full text-2xl">
            <Label theme="light" className="left-[20%] -top-4">
              Bitcoin
            </Label>
            <Label theme="light" className="right-[10%] -top-4">
              APP
            </Label>
            <Label theme="light" className="left-4 sm:-left-[10%] top-28">
            Ethereum
            </Label>
            <Label theme="light" className="right-12 top-40">
              SOL
            </Label>
            <Label theme="light" className="left-[40%] sm:left-[30%] bottom-0">
            BNB
            </Label>
          </div>
        </div>
      </div>

    <div className="flex flex-col sm:flex-row justify-between sm:items-center pt-16 sm:pt-[150px] gap-6">
      <div className="">
      <img src={steric} ref={stericRef} alt="" className="w-32 sm:w-[16vw]" />
      </div>
      <div className="">
      <p className=" font-normalF text-base sm:text-2xl leading-loose sm:w-[50ch] text-left">
      Make instant swap of over 200 tokens and coins within Sappchat. You can easily and securely buy, sell, or exchange between tokens or coins at the best rates.
      </p>
      </div>
    </div>
    </div>
  );
}
