import React from "react";
import { Link } from "react-router-dom";
const MobileCard = () => {
  return (
    <div className="w-full top-[60px] fixed z-[20] text-zinc-700 inset-x-0 h-fit">
      <div className="w-[95%] mx-auto h-fit bg-white rounded-sm let swipeIn py-2 ">
        <Link to="/about" className="p-4 border-b hover:bg-gray-200">About us</Link>
        <Link to="/event" className="p-4 border-b hover:bg-gray-200">Event</Link>
        <Link to="/" className="p-4 border-b hover:bg-gray-200">Talent</Link>
        <Link to="/contact" className="p-4 border-b hover:bg-gray-200">Contact</Link>
        <div className="px-4 mt-4">
          <button className=" px-6 py-2 text-gray-200 rounded-sm border bg-[#172554] border-gray-300 ">
            Join us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
