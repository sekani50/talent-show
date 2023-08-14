import React, { useState } from "react";
import AboutEvent from "./tabs/aboutEvent";
import Participants from "./tabs/participant";
import FullCategory from "./tabs/fullCategory";

const MainEvent = ({event}) => {
  const [active, setactive] = useState(0);
  return (
    <div className="w-full py-6 bg-main px-4 sm:px-20 space-y-6 sm:space-y-8 sm:py-8">
      {active !== 2 && <div className="flex items-center space-x-4">
        <div
          onClick={() => {
            setactive(0);
          }}
          className={`font-medium py-2 cursor-pointer ${
            active === 0
              ? "text-[#017297] border-b-2 border-[#017297]"
              : "text-white"
          }`}
        >
          About Events
        </div>
        <div
          onClick={() => {
            setactive(1);
          }}
          className={`font-medium py-2 cursor-pointer ${
            active === 1
              ? "text-[#017297] border-b-2 border-[#017297]"
              : "text-white"
          }`}
        >
          Participants
        </div>
      </div>}

    {active === 0 && <AboutEvent event={event}/>}
    {active === 1 && <Participants event={event} setactive={setactive} />}
    {active === 2 && <FullCategory event={event} setactive={setactive}/>}
    </div>
  );
};

export default MainEvent;
