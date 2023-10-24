import React, { useState } from "react";
import AboutEvent from "./tabs/aboutEvent";
import Participants from "./tabs/participant";
import FullCategory from "./tabs/fullCategory";
import CategroyDetail from "./tabs/categoryDetail";

const MainEvent = ({ event, id }) => {
  const [active, setactive] = useState(0);
  const [catId, setcatId] = useState('')
  const [filtercat, setfiltercat] = useState("");
  return (
    <div className="w-full py-6 px-4 sm:px-20 space-y-6 sm:space-y-8 sm:py-8">
      {active < 3 && (
        <div className="flex items-center space-x-4">
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

          <div
            onClick={() => {
              setactive(2);
            }}
            className={`font-medium py-2 cursor-pointer ${
              active === 2
                ? "text-[#017297] border-b-2 border-[#017297]"
                : "text-white"
            }`}
          >
            Categories
          </div>
        </div>
      )}

      {active === 0 && <AboutEvent event={event} />}
      {active === 1 && (
        <Participants
          event={event}
          id={id}
          setfiltercat={setfiltercat}
          setactive={setactive}
        />
      )}
      {active === 2 && (
        <FullCategory
          event={event}
          id={id}
          filtercat={filtercat}
          setactive={setactive}
          setCatId={setcatId}
        />
      )}
      {active === 3 && <CategroyDetail
      setactive={setactive}
      id={catId}
      />}
    </div>
  );
};

export default MainEvent;
