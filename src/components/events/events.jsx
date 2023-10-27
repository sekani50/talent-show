import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import next from "../../assets/png/next.png";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import MobileCard from "../landing/mobileCard";
import axios from "../../Utils/useAxios"
import { formatDate } from "../../Utils/stringtoDate";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import user from "../../assets/png/customerpic.png"
import MainEvent from "../mainevent/mainEvent";
const Events = () => {
  const { pathname } = useLocation();
  const [menu, showmenu] = useState(false);
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

    
  const {authtoken,currentUser} = useSelector((state) => state.user)
  // const [currentPage, setcurrentPage] = useState(0);
  useEffect(() => {
    async function loadevents() {
      setloading(true);
      await axios
      .get(`/events/ongoing-event`)
      .then((res) => {
        console.log(res);
        setloading(false)
        const { data } = res.data;
        setdata(data);
      })
      .catch((err) => {
        console.log(err);
        setloading(false)
      });
    }
    loadevents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function joinEvent(id, eventName, categories) {
    if (!authtoken) {
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
    <div className="w-full relative px-4 sm:px-20 h-full bg-[#10061A]  font-light overflow-x-hidden">
      <div className="w-full text-gray-300 absolute flex justify-between items-center inset-x-0 top-0 py-4 px-4 sm:px-20">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer w-[60px] sm:w-[70px] "
        >
          <img src={next} alt="dd" className="w-full h-full" />
        </div>
        <div className="hidden space-x-4 sm:space-x-8 sm:flex items-center">
        <Link
            to="/about"
            className={`${pathname.includes("about") ? "font-semibold" : ""}`}
          >
            About us
          </Link>
          <Link
            to="/event"
            className={`${pathname.includes("event") ? "font-semibold" : ""}`}
          >
            Event
          </Link>
          <Link
            to="/faq"
            className={`${pathname.includes("faq") ? "font-semibold" : ""}`}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className={`${pathname.includes("contact") ? "font-semibold" : ""}`}
          >
            Contact
          </Link>
        </div>
        {currentUser ? (
            <div
              onClick={() => {
                navigate("/profile");
              }}
              className="cursor-pointer hidden sm:flex space-x-3 items-center"
            >
              <div className="w-[40px] h-[40px] rounded-full">
                <img src={currentUser?.profileImage?.url || user} alt="" className="w-full h-full rounded-full" />
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
        <div
          onClick={() => {
            showmenu(!menu);
          }}
          className="sm:hidden cursor-pointer transform transition-all duration-400"
        >
          {menu ? (
            <AiOutlineClose className="text-[25px] text-gray-300" />
          ) : (
            <FiMenu className="text-[25px] text-gray-300" />
          )}
        </div>
      </div>
      {menu && <MobileCard />}

      <div className="mt-20 sm:mt-48 space-y-4 text-white w-full justify-center items-center">
        <h1 className="text-center text-lg sm:text-2xl font-semibold">
          Upcoming Events
        </h1>
      
      </div>
      <div className="mt-10 w-full">
        {loading && (
          <div className="col-span-full w-full h-[300px] flex items-center justify-center">
            <div className="w-[50px] h-[50px] border-l-2 rounded-full border-b-2 animate-spin"></div>
          </div>
        )}

 
   {!loading && <div className="text-white  mx-auto space-y-4 flex flex-col items-center w-fit h-fit ">
          <p className="font-bold text-lg sm:text-3xl">{data?.eventName || ''}</p>
          <p className="text-center">A show brought to you by NextGen</p>
          <button
            onClick={() => {
              joinEvent(data?._id, data?.eventName, data?.categories)
            }}
            className="text-[#017297] bg-white rounded-sm px-4 sm:px-8 py-2"
          >
            Join as a Contestant
          </button>
          <p className="text-center text-[#FFCC15]">
          {`  Registration Ends by ${formatDate(data?.contestEnd).month || ''} ${formatDate(data?.contestEnd).year || ''}`}
          </p>
        </div> }
      {!loading &&  <MainEvent  event={data} id={data?._id}/>}
      </div>

     
    </div>
  );
};

export default Events;
