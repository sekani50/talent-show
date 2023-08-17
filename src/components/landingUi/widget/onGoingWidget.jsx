import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const OnGoingWidget = ({ j, image, eventName, id, categories }) => {
  const { token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  function joinEvent(id, eventName, categories) {
    if (!token) {
      toast.error("Log in or register to join the event");
      return;
    }
    navigate("/join", {
      state: {
        data: {
          id,
          eventName,
          categories,
        },
      },
    });
  }
  return (
    <div
      key={j}
      className={` relative w-full transition-all transform duration-500  md:h-[400px] rounded-sm h-[400px]`}
    >
      <img src={image} alt="dd" className="w-full h-full rounded-sm" />
      <div className="bottom-0 flex justify-between items-center p-2 absolute inset-x-0">
        <p>{eventName}</p>
        <button
          onClick={() => {
            joinEvent(id, eventName, categories);
          }}
          className="bg-white rounded-2xl px-4 sm:px-6 py-2 text-zinc-700 "
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default OnGoingWidget;
