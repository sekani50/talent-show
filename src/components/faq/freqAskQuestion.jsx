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
        <div 
          onClick={()=> {
            navigate("/")
          }}
          className="cursor-pointer w-[60px] sm:w-[70px] ">
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
      <div className=" w-full gap-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-4 sm:px-20 py-6 sm:py-8 ">
        <Inventories
          title={"Getting started"}
          subtitle={
            `Getting started is easy! Click "Sign Up," provide your basic details, and you're in.`
          }
        />
        <Inventories
          title={"Events"}
          subtitle={
            `Browse events in the "Events" section. Pick what interests you.`
          }
        />
        <Inventories
          title={"Talents"}
          subtitle={
            `From music to art, we celebrate a range of talents.`
          }
        />
        <Inventories
          title={"Categories"}
          subtitle={
            `Categories group similar talents for fair evaluation.`
          }
        />
        <Inventories
          title={"Enrolment Payment"}
          subtitle={
            `Pay securely online with various options.`
          }
        />
        <Inventories
          title={"Voting"}
          subtitle={
            `Supporters can vote for you directly on your profile.`
          }
        />
        <Inventories
          title={"Shortlisting"}
          subtitle={
            `Shortlisting is a step toward potential participation.`
          }
        />
        <Inventories
          title={"Price winning"}
          subtitle={
            `Winners are chosen based on various factors.`
          }
        />
      </div>
      <div className="px-4 sm:px-20 py-6 sm:py-8 space-y-5 sm:space-y-8 w-full">
        <Questions
        title={'How do I create an account?'}
        subtitle={`To create an account, simply navigate to the "Sign Up" page on our website. You'll need to provide your basic information, such as your name, email address, and a password. Once you've filled in the details, click "Create Account," and you'll be all set to start your journey with us!`}
        />
          <Questions
        title={'What types of talents are eligible for the show?'}
        subtitle={`Our talent show welcomes a diverse range of talents, from music and dance to art, comedy, and more. Whether you're a skilled musician, a captivating storyteller, or possess a unique talent, we encourage you to join and showcase what makes you exceptional.`}
        />
          <Questions
        title={'Can I participate in multiple events simultaneously?'}
        subtitle={`Absolutely! You can participate in multiple events concurrently if you believe your talents fit the criteria for each event. However, make sure you manage your time effectively to ensure you can give your best performance for each event.`}
        />
          <Questions
        title={'Is there an age limit for participants?'}
        subtitle={`While the age limit may vary for different events, we strive to create opportunities for talents of all ages. Please check the specific event details to see if there's an age requirement and whether it aligns with your eligibility.`}
        />
          <Questions
        title={'How do I submit my requirements for a specific event?'}
        subtitle={`After creating an account and selecting the event you're interested in, you'll find a "Submit Requirements" section on the event page. This section will guide you through the submission process, where you can upload necessary documents, videos, and images to showcase your talent effectively. Make sure to provide all requested information to increase your chances of being shortlisted.`}
        />
      </div>
      <ContactUs/>
      <Subscribe/>
      <Footer />
    </div>
  );
};

export default FreqAskQuestion;
