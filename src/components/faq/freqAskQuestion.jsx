import React from "react";
import about from "../../assets/png/about.png";
import { AiOutlineClose } from "react-icons/ai";
import MobileCard from "../landing/mobileCard";
import { FiMenu } from "react-icons/fi";
import next from "../../assets/png/next.png";
import Footer from "../footer/footer";
import { Link, useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import Inventories from "../composable/inventories";
import Subscribe from "../landingUi/subscribe";
import ContactUs from "../landingUi/contactus";
import Questions from "../composable/questions";
import { useState } from "react";
const FreqAskQuestion = () => {
    const navigate = useNavigate()
    const [menu, showmenu] = useState(false)
  return (
    <div className="w-full h-full  font-light overflow-x-hidden">
      <div className="w-full relative h-[300px] sm:h-[400px]">
        <img src={about} alt="aust" className="w-full h-full" />
        <div className="text-white   absolute inset-0 m-auto space-y-4 w-fit h-fit ">
          <h1 className="text-lg sm:text-3xl text-center font-bold"> How can we help you?</h1>
          <div className="relative w-[95%] sm:w-[500px] h-12">
            <input
              type="search"
              placeholder="search for anwers"
              className="border pl-10 pr-4 w-full h-full  bg-white bg-opacity-10 border-white rounded-sm focus:outline-none placeholder:text-white"
            />
            <div className="absolute top-4 left-3">
              <MdSearch className="text-[22px]" />
            </div>
          </div>
        </div>

        <div className="w-full text-gray-300 absolute flex justify-between items-center inset-x-0 top-0 py-4 px-4 sm:px-20">
          <div className="w-[60px] sm:w-[70px] ">
            <img src={next} alt="dd" className="w-full h-full" />
          </div>
          <div className="hidden space-x-4 sm:space-x-8 sm:flex items-center">
            <Link to="/about">About us</Link>
            <Link to="/event">Event</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="hidden sm:block px-6 py-2 rounded-sm border border-gray-300"
          >
            Join us
          </button>
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
      <div className=" w-full gap-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-4 sm:px-20 py-6 sm:py-8 space-y-5 sm:space-y-8">
        <Inventories
          title={"Getting started"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet"
          }
        />
        <Inventories
          title={"Events"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet"
          }
        />
        <Inventories
          title={"Talents"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet"
          }
        />
        <Inventories
          title={"Categories"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet"
          }
        />
        <Inventories
          title={"Enrolment Payment"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet"
          }
        />
        <Inventories
          title={"Voting"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet"
          }
        />
        <Inventories
          title={"Shortlisting"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet"
          }
        />
        <Inventories
          title={"Price winning"}
          subtitle={
            "Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet"
          }
        />
      </div>
      <div className="px-4 sm:px-20 py-6 sm:py-8 space-y-5 sm:space-y-8 w-full">
        <Questions
        title={'Do you have customer support?'}
        subtitle={'Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellusamet'}
        />
          <Questions
        title={'Do you have customer support?'}
        subtitle={'Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellusamet'}
        />
          <Questions
        title={'Do you have customer support?'}
        subtitle={'Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellusamet'}
        />
          <Questions
        title={'Do you have customer support?'}
        subtitle={'Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellusamet'}
        />
          <Questions
        title={'Do you have customer support?'}
        subtitle={'Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellusamet'}
        />
      </div>
      <ContactUs/>
      <Subscribe/>
      <Footer />
    </div>
  );
};

export default FreqAskQuestion;
