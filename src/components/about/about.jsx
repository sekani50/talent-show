import React, { useState } from "react";
import about from "../../assets/png/about.png";
import { AiOutlineClose } from "react-icons/ai";
import MobileCard from "../landing/mobileCard";
import { FiMenu } from "react-icons/fi";
import next from "../../assets/png/next.png"
import Subscribe from "../landingUi/subscribe";
import Partners from "../landingUi/partners";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
const About = () => {
  const [menu, showmenu] = useState(false);
  return (
    <div className="w-full h-full  font-light overflow-x-hidden">
      <div className="w-full relative h-[300px] sm:h-[400px]">
        <img src={about} alt="aust" className="w-full h-full" />
        <div className="text-white font-bold text-lg sm:text-3xl absolute inset-0 m-auto w-fit h-fit ">
          About Us
        </div>

        <div className="w-full text-gray-300 absolute flex justify-between items-center inset-x-0 top-0 py-4 px-4 sm:px-20">
          <div className="w-[60px] sm:w-[70px] ">
            <img src={next} alt="dd" className="w-full h-full" />
          </div>
          <div className="hidden space-x-4 sm:space-x-8 sm:flex items-center">
            <Link to="/about">About us</Link>
            <Link to="/event">Event</Link>
            <Link to="/">Talent</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <button className="hidden sm:block px-6 py-2 rounded-sm border border-gray-300">
            Join us
          </button>
          <div
          onClick={() => {
            showmenu(!menu)
          }}
          className="sm:hidden cursor-pointer transform transition-all duration-400">
            {menu ? <AiOutlineClose className="text-[25px] text-gray-300"/> :  <FiMenu className="text-[25px] text-gray-300"/>}
           
          </div>
        </div>
        {menu && <MobileCard />}
      </div>
      <Partners/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default About;
