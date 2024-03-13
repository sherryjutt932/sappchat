import React from 'react'
import Hero from "../components/Hero/index.jsx";
import AboutUs from "../components/AboutUs/index.jsx";
import AI from "../components/AI/index.jsx";
import Work from "../components/Work/index.jsx";
import Footer from "../components/Footer/index.jsx";
import Skills from "../components/Skills/index.jsx";

import Marquee from "../components/Marquee";
import logo1 from "../assests/logos/logo1.png";
import logo2 from "../assests/logos/logo2.png";
import logo3 from "../assests/logos/logo3.png";
import Features from "../components/Features/index.jsx";

const logos = [logo1, logo2, logo3, logo1, logo2, logo3];


export default function Home() {
  return (
    <>
    <Hero />
      <Features />
      <Work />
      <Skills />
      <AboutUs />
      <AI />
      <Marquee ArrayData={logos} direction={"left"} speed={0.5} />
      <Footer />
      </>
  )
}
