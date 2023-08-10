import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import next from "../../assets/png/next.png";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import austin from "../../assets/png/austin.png";
import MobileCard from "../landing/mobileCard";
const Events = () => {
  const [menu, showmenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full relative px-4 sm:px-20 h-full bg-[#10061A]  font-light overflow-x-hidden">
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

      <div className="mt-20 sm:mt-48 space-y-4 text-white w-full justify-center items-center">
        <h1 className="text-center text-lg sm:text-2xl font-semibold">
          Upcoming Events
        </h1>
        <p className="text-center">Lists of upcoming events</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-4 items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i, j) => {
          return (
            <div
              onClick={() => {
                navigate("/event/0");
              }}
              key={j}
              className="w-full h-[160px] sm:h-[280px] rounded-sm"
            >
              <img
                src={austin}
                alt="aus"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          );
        })}
      </div>

      <div className="my-20 space-y-4 sm:space-y-8 w-full">
        <h1 className="text-start text-white text-lg sm:text-2xl font-semibold">
          Other Upcoming Events
        </h1>

        {[1, 2, 3, 4, 5, 6, 7, 8].map((i, j) => {
          return (
            <div
              key={j}
              className="w-full border flex space-x-2 sm:space-x-4 items-center border-white rounded-sm"
            >
              <div className="h-full sm:w-[90px] p-1 border-r border-white">
                <div className="p-2 w-full h-full text-center bg-[#FFCC15]">
                  <div>Sun</div>
                  <div className="font-semibold text-lg">June</div>
                  <div>2023</div>
                </div>
              </div>
              <div className="w-full px-2 flex justify-between items-center sm:px-3 py-2 sm:py-3">
                <div className="text-white font-semibold">Roller Coaster</div>
                <button
                  onClick={() => {
                    navigate("/event/0");
                  }}
                  className="text-[#017297] bg-white rounded-sm px-4 sm:px-8 py-2"
                >
                  View Event
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
