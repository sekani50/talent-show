import React from "react";         
import vote from '../../assets/png/vote.png'
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import MobileCard from "../landing/mobileCard";
import Subscribe from "../landingUi/subscribe";
import Footer from "../footer/footer";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import austin from '../../assets/png/austin.png'
import next from '../../assets/png/next.png'
import Profile from "./widget/profile";
import VotingForm from "./widget/votingform";
const Voting = () => {
    const navigate = useNavigate()
    const [menu, showmenu] = useState(false)
    return (
        <div className="w-full h-full   font-light overflow-x-hidden">
        <div className="w-full relative h-[300px] sm:h-[400px]">
          <img src={vote} alt="aust" className="w-full h-full" />
       
        <div className="w-full absolute left-4 sm:left-20 top-24 sm:top-32 flex space-x-4 ">
            <div className="sm:h-[250px] sm:w-[220px] h-[180px] w-[150px] rounded-sm">
                <img src={austin} alt="" className="w-full h-full object-cover"/>
            </div>

            <div
            className="text-white space-y-3 self-end"
            >
                <div>
                    <p>Casendra Billie</p>
                    <p className="text-[11px] sm:text-[13px]">Afrobeat Artist</p>
                </div>

                <div className="font-semobold">
                    <p>Total number of votes </p>
                    <p className="text-[#017297] text-base sm:text-lg">186</p>
                    <p className="uppercase text-[#FFCC15]">voting ends by the 22, July at 12:58</p>
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
              <Link to="/">Talent</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <button 
               onClick={() => {
                navigate("/register")
              }}
            className="hidden sm:block px-6 py-2 rounded-sm border border-gray-300">
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
            <div className="w-full px-4 gap-6 sm:px-20 bg-black py-4 grid grid-cols-1 sm:grid-cols-2">
                <Profile/>
                <VotingForm/>


            </div>
            <Subscribe/>
            <Footer/>
        </div>
    )
}

export default Voting