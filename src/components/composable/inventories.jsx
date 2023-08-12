
import React from "react";

function Inventories({ title, subtitle }) {
  return (
    <div className="rounded-sm  inventory p-[20px] h-[150px] font-medium text-black  bg-gray-200">
      <div className="space-y-4 col-span-4">
        <h1 className="  text-[#017297] font-semibold capitalize"> {title} </h1>
        <p className=" text-start "> {subtitle} </p>
      </div>
    </div>
  );
}

export default Inventories;
