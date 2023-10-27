import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../Utils/stringtoDate";
const MyEvents = ({event}) => {
  const navigate = useNavigate();

  return (
    <div className="w-full mx-auto md:mx-0 space-y-2 sm:space-y-3 py-3">
   {
    event?.map(({category,event}, idx) => {
      return (
        <div 
        key={idx}
        className="w-full space-x-1 flex items-center">
        <div className="h-[85px] hidden sm:block overflow-hidden bg-black rounded-sm w-[50px] sm:w-[90px] p-1 border-r border-white">
          <img src={event?.coverImage?.url} alt="" className="w-full h-full object-cover " />
        </div>
        <div className="w-full  bg-black rounded-sm flex items-center p-2 justify-between">
          <div className="text-start">
            <div className="font-semibold text-white">{event?.eventName}</div>
            <div className="p-1 text-[11px] sm:text-[13px] text-center rounded-sm bg-[#FFCC15]">{category}</div>
           
          </div>

          <div className="text-white text-center">
            <div>{formatDate(event?.contestStart).dayOfWeek}</div>
            <div className="font-semibold text-lg">{formatDate(event?.contestStart).month}</div>
            <div>{formatDate(event?.contestStart).year}</div>
          </div>
          <button
            onClick={() => {
              navigate(`/event/${event?._id}`);
            }}
            className="text-white bg-[#017297] rounded-sm px-4 sm:px-8 py-2"
          >
            View Event
          </button>
        </div>
      </div>
      )
    })
 }
    </div>
  );
};

export default MyEvents;
