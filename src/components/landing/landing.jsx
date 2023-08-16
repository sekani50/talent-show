import React from "react";
import austin from "../../assets/png/austin.png";
import next from "../../assets/png/next.png";
import {BsPlayFill} from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'
import { useState } from "react";
import MobileCard from "./mobileCard";
import {AiOutlineClose} from 'react-icons/ai'
import StateFlow from "../landingUi/states";
import Partners from "../landingUi/partners";
import Ongoing from "../landingUi/ongoing";
import FeedBack from "../landingUi/feedback";
import OurBlog from "../landingUi/ourBlog";
import Subscribe from "../landingUi/subscribe";
import Footer from "../footer/footer";
import user from "../../assets/png/customerpic.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Landing = () => {
  const navigate = useNavigate()
  const {currentUser} = useSelector((state) =>  state.user)
    const [menu, showmenu] = useState(false)
  const {pathname} = useLocation()
    function scroll() {
      window.scrollTo({
        top:600,
        left:0, 
        behavior:'smooth'
        })
    
    }
  return (
    <div className="w-full h-full  font-light overflow-x-hidden">
      <div className="w-full relative h-[350px] sm:h-[650px]">
        <img src={austin} alt="aust" className="w-full h-full" />
        <div className="gradient absolute w-full inset-x-0 top-0 h-3"></div>

        <div className="w-full text-gray-300 absolute flex justify-between items-center inset-x-0 top-0 py-4 px-4 sm:px-20">
        <div 
          onClick={()=> {
            navigate("/")
          }}
          className="cursor-pointer w-[60px] sm:w-[70px] ">
            <img src={next} alt="dd" className="w-full h-full" />
          </div>
          <div className="hidden space-x-4 sm:space-x-8 sm:flex items-center">
          <Link
            to="/about"
            className={`${pathname.includes("about") ? "font-semibold" : ""}`}
          >
            About us
          </Link>
          <Link
            to="/event"
            className={`${pathname.includes("event") ? "font-semibold" : ""}`}
          >
            Event
          </Link>
          <Link
            to="/faq"
            className={`${pathname.includes("faq") ? "font-semibold" : ""}`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`${pathname.includes("contact") ? "font-semibold" : ""}`}
          >
            Contact
          </Link>
          </div>
          {currentUser ? (
            <div
              onClick={() => {
                navigate("/profile");
              }}
              className="cursor-pointer flex space-x-3 items-center"
            >
              <div className="w-[40px] h-[40px] rounded-full">
                <img src={currentUser?.profileImage?.url || user} alt="" className="w-full h-full rounded-full" />
              </div>
              <div className="text-white">{currentUser?.firstName}</div>
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="hidden sm:block px-6 py-2 rounded-sm border border-gray-300"
            >
              Join us
            </button>
          )}

          <div
          onClick={() => {
            showmenu(!menu)
          }}
          className="sm:hidden cursor-pointer transform transition-all duration-400">
            {menu ? <AiOutlineClose className="text-[25px] text-gray-300"/> :  <FiMenu className="text-[25px] text-gray-300"/>}
           
          </div>
        </div>
        {menu && <MobileCard/>}
        <div className="w-full absolute inset-x-0 space-y-6 sm:space-y-8 top-20 sm:top-32 py-4 px-4 sm:px-20">
          <div className="w-[90%] sm:w-[400px] flex flex-wrap justify-start">
            <h1 className="text-xl sm:text-5xl text-white font-bold leading-8 sm:leading-[4rem]">
              Imрасting Livеѕ оf YоungPеорle in Afriса.
            </h1>
          </div>
          <div className="w-[90%] sm:w-[400px] flex flex-wrap text-white justify-start items-start leading-9">
            <h2 className="font-light text-lg sm:text-xl">
              Mаking youngsters lеvеrаgе thеir skills, аbilitiеѕ and talents
              ѕtаnd out as a gоаl gеttеr
            </h2>
          </div>
          <div className="flex justify-start items-start space-x-4 sm:space-x-8">
            <button 
            onClick={() => {
              if (currentUser) {
                navigate("/profile");
              }
              else {
                navigate("/register");
              }
            }}
            className="py-2 rounded-sm px-6 bg-gray-200">Join Us</button>
            <div
            onClick={scroll}
            className="flex cursor-pointer text-white space-x-3 items-center">
                <div className="bg-white rounded-full p-2">
                    <BsPlayFill className="text-[22px] text-zinc-700"/>
                </div>
                <p>How it works</p>
            </div>
          </div>
        </div>
      </div>

      <StateFlow/>
      <Partners/>
      <Ongoing/>
      <FeedBack/>
      <OurBlog/>
      <Subscribe/>
      <Footer/>

    </div>
  );
};

export default Landing;
