
import React from "react";
import avatar from "../../assets/svg/avatar.svg";

function Review({ content, reviewer, talent }) {
  return (
    <div className="bg-white shadow-md space-y-4  rounded-sm w-full py-8 px-4 xl:px-6">
      <div className="flex flex-wrap">
        “{content}”
      </div>
      <div className="grid rounded-sm bg-gray-200 p-2 grid-cols-4 gap-">
        <div className="w-[40px] h-[40px] rounded-full">
          <img src={avatar} alt="" className="w-full h-full rounded-full" />
        </div>
        <div className="col-span-3">
          <p className="font-medium">{reviewer}</p>
          <p className="font-light">{talent}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
