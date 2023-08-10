import React from "react";
import austin from "../../assets/png/austin.png";
import { useNavigate } from "react-router-dom";
const MyEvents = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full mx-auto md:mx-0 space-y-2 sm:space-y-3 py-3">
      <div className="w-full space-x-1 flex items-center">
        <div className="h-[85px] hidden sm:block overflow-hidden bg-black rounded-sm w-[50px] sm:w-[90px] p-1 border-r border-white">
          <img src={austin} alt="" className="w-full h-full object-cover " />
        </div>
        <div className="w-full  bg-black rounded-sm flex items-center p-2 justify-between">
          <div className="text-start">
            <div className="font-semibold text-white">Stage Time</div>
            <div className="p-1 text-[11px] sm:text-[13px] rounded-sm bg-[#FFCC15]">female category</div>
            <div className="text-[11px] text-white sm:text-[13px]">
              as Best Female Artist
            </div>
          </div>

          <div className="text-white text-center">
            <div>Sun</div>
            <div className="font-semibold text-lg">June</div>
            <div>2023</div>
          </div>
          <button
            onClick={() => {
              navigate("/event/0");
            }}
            className="text-white bg-[#017297] rounded-sm px-4 sm:px-8 py-2"
          >
            View Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
