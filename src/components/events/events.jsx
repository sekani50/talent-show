import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import next from "../../assets/png/next.png";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import MobileCard from "../landing/mobileCard";
import { getEvents } from "../../Utils/api";
import { formatDate } from "../../Utils/stringtoDate";
import { useSelector } from "react-redux";
import user from "../../assets/png/customerpic.png"
const Events = () => {
  const { pathname } = useLocation();
  const [menu, showmenu] = useState(false);
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [page, setPage] = useState(1);
  const {currentUser} = useSelector((state) => state.user)
  const [totalItems, setTotalItems] = useState(0);
  // const [currentPage, setcurrentPage] = useState(0);
  useEffect(() => {
    async function loadevents() {
      setloading(true);
      await getEvents(page)
        .then((res) => {
          console.log(res);
          setloading(false);
          const { data, paging } = res.data;
          setdata(data?.data);
          const totalPage = Math.ceil(paging?.totalItems / 10);
          console.log(totalPage);
          // setcurrentPage(paging?.currentPage);
          const pageNumbers = [...Array(totalPage).keys()].map(
            (page) => page + 1
          );

          setTotalItems(pageNumbers);
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
        });
    }
    loadevents();
  }, [page]);
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
        <p className="text-center">Lists of upcoming events</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 justify-center gap-6 lg:grid-cols-3 xl:grid-cols-4 items-center">
        {loading && (
          <div className="col-span-full w-full h-[300px] flex items-center justify-center">
            <div className="w-[50px] h-[50px] border-l-2 rounded-full border-b-2 animate-spin"></div>
          </div>
        )}
        {loading && data?.length === 0 && (
          <div className=" w-full col-span-full h-[300px] flex items-center justify-center">
            <div className="text-gray-500">-No event-</div>
          </div>
        )}

        {!loading &&
          data?.length > 0 &&
          data.map(({ coverImage, eventName, _id }, j) => {
            return (
              <div
                onClick={() => {
                  navigate(`/event/${_id}`);
                }}
                key={j}
                className="w-full h-[160px] cursor-pointer relative sm:h-[280px] rounded-sm"
              >
                <img
                  src={coverImage?.url}
                  alt="aus"
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="absolute bottom-2 left-3 text-yellow-500">
                  {eventName}
                </div>
              </div>
            );
          })}
      </div>

      <div className="my-20 space-y-4 sm:space-y-8 w-full">
        <h1 className="text-start text-white text-lg sm:text-2xl font-semibold">
          Other Upcoming Events
        </h1>

        {loading && (
          <div className=" w-full h-[300px] flex items-center justify-center">
            <div className="w-[50px] h-[50px] border-l-2 rounded-full border-b-2 animate-spin"></div>
          </div>
        )}
        {!loading &&
          data?.map(({ eventName, contestStart, _id }, j) => {
            return (
              <div
                key={j}
                className="w-full border flex space-x-2 sm:space-x-4 items-center border-white rounded-sm"
              >
                <div className="h-full sm:w-[90px] p-1 border-r border-white">
                  <div className="p-2 w-full h-full text-center bg-[#FFCC15]">
                    <div>{formatDate(contestStart)?.dayOfWeek || ""}</div>
                    <div className="font-semibold text-lg">
                      {formatDate(contestStart)?.month || ""}
                    </div>
                    <div>{formatDate(contestStart)?.year || ""}</div>
                  </div>
                </div>
                <div className="w-full px-2 flex justify-between items-center sm:px-3 py-2 sm:py-3">
                  <div className="text-white font-semibold">{eventName}</div>
                  <button
                    onClick={() => {
                      navigate(`/event/${_id}`);
                    }}
                    className="text-[#017297] bg-white rounded-sm px-4 sm:px-8 py-2"
                  >
                    View Event
                  </button>
                </div>
              </div>
            );
          })}

        {totalItems && totalItems.length > 10 && (
          <div className="mt-8 w-full">
            <div className="flex justify-center space-x-1 items-center">
              {totalItems?.map((pagenumber, idx) => {
                return (
                  <button
                    onClick={() => {
                      setPage(pagenumber);
                    }}
                    key={idx}
                    className={`hover:bg-foreground text-white hover:text-background w-fit rounded-sm h-[30px] px-3 ${
                      page === pagenumber
                        ? "bg-[#017297] text-white "
                        : "border border-[#017297] text-[#017297]"
                    }`}
                  >
                    {pagenumber}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
