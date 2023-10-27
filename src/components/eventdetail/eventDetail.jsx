import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import next from "../../assets/png/next.png";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import MobileCard from "../landing/mobileCard";
import Subscribe from "../landingUi/subscribe";
import Footer from "../footer/footer";
import about from "../../assets/png/about.png";
import MainEvent from "../mainevent/mainEvent";
import { singleEvent } from "../../Utils/api";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import user from "../../assets/png/customerpic.png"
import { formatDate } from "../../Utils/stringtoDate";
const EventDetail = () => {
  const {pathname} = useLocation()
  const { id } = useParams();
  const navigate = useNavigate();
  const [menu, showmenu] = useState(false);
const {token, currentUser} = useSelector((state) => state.user)
const [event, setevent]  = useState(null)
  useEffect(() => {
    async function getEvent() {
      await singleEvent(id)
        .then((res) => {
          console.log(res);
          setevent(res.data.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function joinEvent(id, eventName,categories ) {
    if(!event) return
    if (!token) {
      toast.error("Log in or register to join the event");
      return;
    }
    navigate("/join", {
      state: {
        data: {
          id,
          eventName,
          categories 
        },
      },
    });
  }
  return (
    <div className="w-full h-full   font-light overflow-x-hidden">
      <div className="w-full relative h-[300px] sm:h-[400px]">
        <img src={about} alt="aust" className="w-full h-full" />
        <div className="text-white  absolute inset-0 m-auto space-y-4 flex flex-col items-center w-fit h-fit ">
          <p className="font-bold text-lg sm:text-3xl">{event?.eventName || ''}</p>
          <p className="text-center">A show brought to you by NextGen</p>
          <button
            onClick={() => {
              joinEvent(id, event?.eventName, event?.categories)
            }}
            className="text-[#017297] bg-white rounded-sm px-4 sm:px-8 py-2"
          >
            Join as a Contestant
          </button>
          <p className="text-center text-[#FFCC15]">
          {`  Registration Ends by ${formatDate(event?.contestEnd).month || ''} ${formatDate(event?.contestEnd).year || ''}`}
          </p>
        </div>

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
      </div>
      <MainEvent event={event} id={id}/>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default EventDetail;
