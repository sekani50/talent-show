import React from "react";
import next from '../../assets/png/next.png'
import about from "../../assets/png/about.png"
import Subscribe from "../landingUi/subscribe";
import Footer from "../footer/footer";
import { AiOutlineClose } from "react-icons/ai";
import MobileCard from "../landing/mobileCard";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import ContactInfo from "./contactInfo";
import Maps from "./map";
import user from "../../assets/png/customerpic.png"
import { useSelector } from "react-redux";
const Contact = () => {
  const {currentUser} = useSelector((state) => state.user)
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [menu, showmenu] = useState(false);
  function scroll() {
    window.scrollTo({
      top:400,
      left:0, 
      behavior:'smooth'
      })
    }
  return (
    <div className="w-full h-full  font-light overflow-x-hidden">
      <div className="w-full relative h-[300px] sm:h-[400px]">
        <img src={about} alt="aust" className="w-full h-full" />
        <div className="text-white text-center items-center space-y-3 sm:space-y-4 text-lg sm:text-3xl absolute inset-0 m-auto w-fit h-fit ">
          <div className="font-bold">You have got any vital information for us?</div>
          <div className="text-sm sm:text-base">Do well to reach us</div>
          <button onClick={scroll} className="text-[#017297] text-sm sm:text-base bg-white rounded-sm px-6 py-2 sm:px-8 sm:py-3">Contact</button>
        </div>

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
                <img src={user} alt="" className="w-full h-full rounded-full" />
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
              showmenu(!menu);
            }}
            className="sm:hidden cursor-pointer transform transition-all duration-400"
          >
            {menu ? (
              <AiOutlineClose className="text-[25px] text-gray-300" />
            ) : (
              <FiMenu className="text-[25px] text-gray-300" />
            )}
          </div>
        </div>
        {menu && <MobileCard />}
      </div>
      <ContactInfo/>
      <Maps/>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Contact;
