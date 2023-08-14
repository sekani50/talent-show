import React from "react";
import { useSelector } from "react-redux";
import user from "../../assets/png/customerpic.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
const MobileCard = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className="w-full top-[60px] fixed z-[20] text-zinc-700 inset-x-0 h-fit">
      <div className="w-[95%] mx-auto flex flex-col h-fit bg-white rounded-sm let swipeIn py-2 ">
     
        <Link
            to="/about"
            className={`p-4 border-b hover:bg-gray-200 ${pathname.includes("about") ? "font-semibold" : ""}`}
          >
            About us
          </Link>
          <Link
            to="/event"
            className={`p-4 border-b hover:bg-gray-200 ${pathname.includes("event") ? "font-semibold" : ""}`}
          >
            Event
          </Link>
          <Link
            to="/faq"
            className={`p-4 border-b hover:bg-gray-200 ${pathname.includes("faq") ? "font-semibold" : ""}`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`p-4 border-b hover:bg-gray-200 ${pathname.includes("contact") ? "font-semibold" : ""}`}
          >
            Contact
          </Link>
        <div className="px-4 mt-4">
        {currentUser ? (
            <div
              onClick={() => {
                navigate("/profile");
              }}
              className="cursor-pointer flex space-x-3 items-center"
            >
              <div className="w-[40px] h-[40px] rounded-full">
                <img src={user} alt="" className="w-full h-full rounded-full" />
              </div>
              <div className="text-white">{currentUser?.firstName}</div>
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="hidden sm:block px-6 py-2 rounded-sm border border-gray-300"
            >
              Join us
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
