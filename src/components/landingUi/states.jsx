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
        Unveil your talent in three simple steps.
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
            <p className="flex flex-wrap justify-start items-start leading-7 sm:leading-8">
              Start your journey by creating a personalized account. 
              Join our community of talented individuals and showcase your skills to the world.
            </p>
          </div>
        )}
        {active === 1 && (
          <div className="w-[50%] sm:[60%] sm:pl-4 space-y-6 sm:space-y-8">
            <BsCalendarEvent className="text-[30px] sm:text-[50px]" />
            <div className="text-sm sm:text-xl font-semibold">
              Join an Event
            </div>
            <p className="flex flex-wrap justify-start items-start leading-7 sm:leading-8">
              Browse through our exciting events and choose the one that suits your talent.
              Joining is easy – simply select an event that resonates with you and become a part of the action.
            </p>
          </div>
        )}
        {active === 2 && (
          <div className="w-[50%] sm:[60%] sm:pl-4 space-y-6 sm:space-y-8">
            <MdOutlineNoteAlt className="text-[30px] sm:text-[50px]" />
            <div className="text-sm sm:text-xl font-semibold">
              Submit Requirement
            </div>
            <p className="flex flex-wrap justify-start items-start leading-7 sm:leading-8">
              Once you've selected an event, submit your requirements to make your participation official.
              Share your details, showcase samples of your work, and let us know why you're the perfect fit.
            </p>
          </div>
        )}
        {active === 3 && (
          <div className="w-[50%] sm:[60%] sm:pl-4 space-y-6 sm:space-y-8">
            <LuClipboardList className="text-[30px] sm:text-[50px]" />
            <div className="text-sm sm:text-xl font-semibold">
              Get Shortlisted
            </div>
            <p className="flex flex-wrap justify-start items-start leading-7 sm:leading-8">
              Our expert panel will review your submission and shortlist the most promising talents.
              If you're selected, you'll receive a notification and be one step closer to showcasing your talent.
            </p>
          </div>
        )}
        {active === 4 && (
          <div className="w-[50%] sm:[60%] sm:pl-4 space-y-6 sm:space-y-8">
            <MdOutlineHowToVote className="text-[30px] sm:text-[50px]" />
            <div className="text-sm sm:text-xl font-semibold">
              Get Higher Votes
            </div>
            <p className="flex flex-wrap justify-start items-start leading-7 sm:leading-8">
              Engage with the audience and gather votes to stand out! Encourage your friends, family, and supporters to vote for your talent. 
              The more votes you get, the higher your chances of shining on the big stage
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StateFlow;
