import React, { useEffect } from "react";
import vote from "../../assets/png/vote.png";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import MobileCard from "../landing/mobileCard";
import Subscribe from "../landingUi/subscribe";
import Footer from "../footer/footer";
import { useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import austin from "../../assets/png/customerpic.png";
import next from "../../assets/png/next.png";
import Profile from "./widget/profile";
import VotingForm from "./widget/votingform";
import user from "../../assets/png/customerpic.png";
import { useSelector } from "react-redux";
import { singleParticipant } from "../../Utils/api";
import { formatDate } from "../../Utils/stringtoDate";
const Voting = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menu, showmenu] = useState(false);
  const { token } = useSelector((state) => state.user);
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function getParticipant() {
      await singleParticipant(token, state?.eventId, id)
        .then((res) => {
          console.log(res);
          const { data } = res.data;
          setdata(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getParticipant();
  }, []);
  return (
    <div className="w-full h-full   font-light overflow-x-hidden">
      <div className="w-full relative h-[300px] sm:h-[400px]">
        <img src={vote} alt="aust" className="w-full h-full" />

        <div className="w-full absolute left-4 sm:left-20 top-24 sm:top-32 flex space-x-4 ">
          <div className="sm:h-[250px] sm:w-[220px] h-[180px] w-[150px] rounded-sm">
            <img
              src={data?.participant?.profileImage?.url || austin}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-white space-y-3 self-end">
            <div>
              <p>{`${data?.participant?.firstName || ''} ${data?.participant?.lastName || ''}`}</p>
              <p className="text-[11px] sm:text-[13px]">{data?.category || ''}</p>
            </div>

            <div className="font-semobold">
              <p>Total number of votes </p>
              <p className="text-[#017297] text-base sm:text-lg">
                {data?.participant?.votes || '0'}
              </p>
              <p className="uppercase text-[#FFCC15]">{`voting ends by ${
                formatDate(data?.event?.contestEnd)?.dayOfWeek
              || ''}, ${formatDate(data?.event?.contestEnd)?.month || ''} at 12:58`}</p>
            </div>
          </div>
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
              className={`${
                pathname.includes("contact") ? "font-semibold" : ""
              }`}
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
                <img
                  src={currentUser?.profileImage?.url || user}
                  alt=""
                  className="w-full h-full rounded-full"
                />
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
      <div className="w-full px-4 gap-6 sm:px-20 bg-black py-4 grid grid-cols-1 sm:grid-cols-2">
        <Profile data={data} />
        <VotingForm eventId={state?.eventId} userId={id}/>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Voting;
