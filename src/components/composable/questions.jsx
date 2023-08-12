import React from "react";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";

const Questions = ({title, subtitle}) => {
  const [isshow, setshow] = useState(false);
  return (
    <div className="w-full h-fit">
      <div
        onClick={() => {
          setshow(!isshow);
        }}
        className="w-full bg-gray-200 flex items-center justify-between text-[#017297] p-3 rounded-sm"
      >
        <p className="sm:text-lg font-semibold">{title}</p>
        <div className="rounded-full border-[#017297] h-fit w-fit border p-[2px]">
          <MdNavigateNext
            className={`text-[25px] ${
              isshow ? "-rotate-90" : "rotate-90"
            } transform`}
          />
        </div>
      </div>
    {isshow &&  <div className="flex flex-wrap justify-start leading-7 sm:leading-8">
        {subtitle}
      </div>}
    </div>
  );
};

export default Questions