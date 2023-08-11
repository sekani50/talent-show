import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsCalendarEvent } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineNoteAlt, MdOutlineHowToVote } from "react-icons/md";
import { useState } from "react";
const StateFlow = () => {
  const [active, setactive] = useState(0);
  return (
    <div className="w-full bg-[#F3F3F5] py-6 sm:py-8 space-y-5 sm:space-y-8">
      <h1 className="text-center text-lg sm:text-2xl font-semibold">
        How it Works
      </h1>
      <div className="px-4 mx-auto justify-center flex items-center text-center leading-7 sm:leading-8 w-full sm:px-20">
        Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus
        amet. Ut placerat dolor massa metus quisque sodales semper. Hac donec
        vulputate pharetra augue eu congue.
      </div>

      <div className="w-full mx-auto  flex gap-3 items-center px-2 sm:px-20 ">
        <div className="h-full py-4  sm:py-4  w-[50%] sm:[40%]">
          <div
            className={`flex space-x-2 sm:space-x-6 cursor-pointer w-full justify-start items-center py-3 ${
              active === 0 ? "border-r-4 text-[#051534] border-[#051534]" : "text-gray-500 border-r-2 border-gray-500"
            } border-[#051534]`}
            onClick={() => {
              setactive(0);
            }}
          >
            <FaUserAlt className="text-[22px] sm:text-[30px]" />
            <div className="text-xs sm:text-[15px]">Create an account</div>
          </div>
          <div
            className={`flex space-x-2 sm:space-x-6 cursor-pointer w-full justify-start items-center py-3 ${
              active === 1 ? "border-r-4 text-[#051534] border-[#051534]" : "text-gray-500 border-r-2 border-gray-500"
            } border-[#051534]`}
            onClick={() => {
              setactive(1);
            }}
          >
            <BsCalendarEvent className="text-[22px] sm:text-[30px]" />
            <div className="text-xs sm:text-[15px]">Join an Event</div>
          </div>
          <div
            className={`flex space-x-2 sm:space-x-6 cursor-pointer w-full justify-start items-center py-3 ${
              active === 2 ? "border-r-4 text-[#051534] border-[#051534]" : "text-gray-500 border-r-2 border-gray-500"
            } border-[#051534]`}
            onClick={() => {
              setactive(2);
            }}
          >
            <MdOutlineNoteAlt className="text-[22px] sm:text-[30px]" />
            <div className="text-xs sm:text-[15px]">Submit Requirement</div>
          </div>
          <div
            className={`flex space-x-2 sm:space-x-6 cursor-pointer w-full justify-start items-center py-3 ${
              active === 3 ? "border-r-4 text-[#051534] border-[#051534]" : "text-gray-500 border-r-2 border-gray-500"
            } border-[#051534]`}
            onClick={() => {
              setactive(3);
            }}
          >
            <LuClipboardList className="text-[22px] sm:text-[30px]" />
            <div className="text-xs sm:text-[15px]">Get Shortlisted</div>
          </div>
          <div
            className={`flex space-x-2 sm:space-x-6 cursor-pointer w-full justify-start items-center py-3 ${
              active === 4 ? "border-r-4 text-[#051534] border-[#051534]" : "text-gray-500 border-r-2 border-gray-500"
            } `}
            onClick={() => {
              setactive(4);
            }}
          >
            <MdOutlineHowToVote className="text-[22px] sm:text-[30px]" />
            <div className="text-xs sm:text-[15px]">Get Higher Votes</div>
          </div>
        </div>
        {active === 0 && (
          <div className="w-[50%] sm:[60%] sm:pl-4 space-y-6 sm:space-y-8">
            <FaUserAlt className="text-[30px] sm:text-[50px]" />
            <div className="text-sm sm:text-xl font-semibold">
              Create an account
            </div>
          </div>
        )}
        {active === 1 && (
          <div className="w-[50%] sm:[60%] sm:pl-4 space-y-6 sm:space-y-8">
            <BsCalendarEvent className="text-[30px] sm:text-[50px]" />
            <div className="text-sm sm:text-xl font-semibold">
              Join an Event
            </div>
          </div>
        )}
        {active === 2 && (
          <div className="w-[50%] sm:[60%] sm:pl-4 space-y-6 sm:space-y-8">
            <MdOutlineNoteAlt className="text-[30px] sm:text-[50px]" />
            <div className="text-sm sm:text-xl font-semibold">
              Submit Requirement
            </div>
          </div>
        )}
        {active === 3 && (
          <div className="w-[50%] sm:[60%] sm:pl-4 space-y-6 sm:space-y-8">
            <LuClipboardList className="text-[30px] sm:text-[50px]" />
            <div className="text-sm sm:text-xl font-semibold">
              Get Shortlisted
            </div>
          </div>
        )}
        {active === 4 && (
          <div className="w-[50%] sm:[60%] sm:pl-4 space-y-6 sm:space-y-8">
            <MdOutlineHowToVote className="text-[30px] sm:text-[50px]" />
            <div className="text-sm sm:text-xl font-semibold">
              Get Higher Votes
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StateFlow;
