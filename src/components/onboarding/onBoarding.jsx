import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import MobileCard from "../landing/mobileCard";
import Footer from "../footer/footer";
import UploadingImage from "./uploadingImage";
import pay from "../../assets/png/pay.png";
import next from "../../assets/png/next.png";
import { contest, videoUpload } from "../../Utils/api";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { LoaderIcon } from "lucide-react";
import user from "../../assets/png/customerpic.png";
const OnBoarding = () => {
  const { state, pathname } = useLocation();
  const [loading, setloading] = useState(false);
  const [menu, showmenu] = useState(false);
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const [checkprofile, setcheckprofile] = useState(false);
  const { token, currentUser } = useSelector((state) => state.user);
  const [redirect,] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState("");

  console.log(state);
  useEffect(() => {
    if (redirect) {
      window.location.href = redirect;
    }
    // eslint-disable-next-line
  }, []);
  async function handleSubmit() {
    console.log(uploadedVideo);
    let videoUrl;
    setloading(true);
    const formdatas = new FormData();
    formdatas.append("video", uploadedVideo);
    await videoUpload(token, formdatas)
      .then((res) => {
        console.log(res);
        videoUrl = res.data.data;
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
        toast.error("Video not uploaded. Try again");
      });

    let payload;

    if (checkprofile) {
      payload = {
        useAsOnProfile: checkprofile,
        inActionVideo: videoUrl,
        talentId: currentUser?.talent?._id,
      };
    } else {
      payload = {
        useAsOnProfile: checkprofile,
        fullName: name,
        email: email,
        talentId: currentUser?.talent?._id,
        phoneNumber: phone,
        portfolio: portfolio,
        inActionVideo: videoUrl,
      };
    }

    
     if ( videoUrl) { 
        await contest(state?.data?.id, payload, token)
          .then((res) => {
            toast.success("Successfully onboard");
            console.log(res.data);
            setloading(false);
            //setredirect(res.data);
            window.location.href = res.data;
          })
          .catch((err) => {
            console.log(err);
            const { error } = err.response.data;
            if (error) {
              toast.error(error.message);
            }
            const { message } = err.response.data.error;
            if (message) {
              toast.error(message);
            }
            const { message: mm } = err.response.data;
            if (mm) {
              toast.error(mm);
            }
            setloading(false);
            // window.location.reload()
          })
    }
  }

  return (
    <div className="w-full overflow-x-hidden h-full bg-none ">
      <div className="w-full z-[20] text-gray-300 bg-[#0C0821] absolute flex justify-between items-center inset-x-0 top-0 py-4 px-4 sm:px-20">
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

      <div className="my-24 mx-auto w-[95%] sm:w-[500px]  h-fit">
        <div className="space-y-2 mb-3">
          <div className="text-lg sm:text-xl font-semibold">
            Join {state?.data?.eventName} as a contestant
          </div>
          <div className="text-sm sm:text-base text-center">
            Please fill the form below to receive a quote for your entry. Feel
            free to add as much detail as needed.
          </div>
        </div>

        <div className="mb-3 border-b py-2 justify-center flex items-center w-full">
          <div className={`flex space-x-3 items-center `}>
            <div
              className={`w-6 h-6 text-xs flex items-center justify-center rounded-full px-3 py-1 ${
                active >= 0 ? "text-white bg-[#017297]" : "bg-gray-200"
              }`}
            >
              1
            </div>
            <div
              className={`w-[28px] sm:w-[50px] h-2 rounded-l-lg ${
                active >= 0 ? "bg-[#017297]" : "bg-gray-300"
              }`}
            ></div>
          </div>
          <div className="flex space-x-3 items-center">
            <div
              className={`w-[28px] sm:w-[50px] h-2  rounded-r-lg ${
                active >= 1 ? "bg-[#017297]" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`w-6 h-6 text-xs flex items-center justify-center rounded-full px-3 py-1 ${
                active >= 1 ? "text-white bg-[#017297]" : "bg-gray-200"
              }`}
            >
              2
            </div>
            <div
              className={`w-[28px] sm:w-[50px] h-2  rounded-l-lg ${
                active >= 1 ? "bg-[#017297]" : "bg-gray-300"
              }`}
            ></div>
          </div>
          <div className="flex space-x-3 items-center">
            <div
              className={`w-[28px] sm:w-[50px] h-2  rounded-r-lg ${
                active >= 2 ? "bg-[#017297]" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`w-6 h-6 text-xs flex items-center justify-center rounded-full px-3 py-1 ${
                active >= 2 ? "text-white bg-[#017297]" : "bg-gray-200"
              }`}
            >
              3
            </div>
          </div>
        </div>
        {active === 0 && (
          <div>
            <div className="mb-3 text-lg sm:text-xl font-semibold">
              Contact Details
            </div>
            <label className="container ">
              Same as on profile
              <input
                type="checkbox"
                onChange={(e) => {
                  setcheckprofile(e.target.checked);
                }}
              />
              <span className="checkmark"></span>
            </label>

            <div className="w-full my-3 grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
              <div className="form-group space-y-4 w-full mb-3">
                <label className="block font-semibold " htmlFor="name">
                  Name
                </label>
                <input
                  className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
                  type="name"
                  placeholder="Jiaha"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group space-y-4 w-full mb-3">
                <label className="block font-semibold " htmlFor="email">
                  Email Address
                </label>
                <input
                  className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
                  type="email"
                  placeholder="name@company.com"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group space-y-4 w-full">
                <label className="block font-semibold " htmlFor="email">
                  Phone Number
                </label>
                <input
                  className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
                  type="number"
                  placeholder="(234) 90 344 534 33"
                  name="email"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="form-group space-y-4 w-full mb-3">
                <label className="block font-semibold " htmlFor="name">
                  Portfolio website*
                </label>
                <input
                  className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
                  type="name"
                  placeholder="https://example.com"
                  name="name"
                  value={portfolio}
                  onChange={(e) => {
                    setPortfolio(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="w-full  items-end flex justify-end">
              <button
                onClick={() => {
                  setActive(1);
                }}
                className="w-fit px-8 py-2 bg-[#017297] rounded-sm text-white"
              >
                Next Step
              </button>
            </div>
          </div>
        )}

        {active === 1 && (
          <div>
            <UploadingImage setUploadedImage={setUploadedVideo} />

            <div className="w-full my-3 items-center flex justify-between">
              <button
                onClick={() => {
                  setActive(0);
                }}
                className="w-fit px-8 py-2 border border-[#017297] rounded-sm text-[#017297]"
              >
                Previous Step
              </button>
              <button
                onClick={() => {
                  setActive(2);
                }}
                className="w-fit px-8 py-2 bg-[#017297] rounded-sm text-white"
              >
                Next Step
              </button>
            </div>
          </div>
        )}
        {active === 2 && (
          <div className="w-full space-y-3 items-center justify-center flex flex-col">
            <img src={pay} alt="" />
            <div className="font-semibold text-lg">Proceed to payment</div>
            <div className="flex flex-wrap text-center">
              Please review all the information you previously typed in the past
              steps, and if all is okay, then go ahead. NB: Enrollment Payment
              is non refundable
            </div>
            <div className="text-xs text-yellow-600 sm:text-sm">
              NB: Payment is non-refundable
            </div>
            <button
              onClick={handleSubmit}
              className=" w-[120px] py-2 flex items-center justify-center bg-[#017297] rounded-sm text-white"
            >
              {loading ? (
                <LoaderIcon className="text-[22px] animate-spin" />
              ) : (
                "Proceed"
              )}
            </button>
            <button
              onClick={() => {
                setActive(1);
              }}
              className="text-[#017297]"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OnBoarding;
