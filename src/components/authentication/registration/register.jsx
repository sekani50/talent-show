import React, { useState } from "react";
import rect from "../../../assets/png/rect.png";
import next from "../../../assets/png/next.png";
//import Loader from "../UI/Loader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { registration } from "../../../Redux/Actions/ActionCreators";
import { LoaderIcon } from "lucide-react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);

  const handleSubmit = () => {
    const payload = {
     
      phoneNumber: phone,
      email,
      password,
    };

    for (let i in payload) {
      if (payload[i] === "") {
        toast(`${i} is required`);
        return;
      }
    }

    dispatch(registration(payload, navigate, setLoading));
  };
  return (
    <div className="w-full h-full flex gap-x-7 inset-0 fixed  bg-white">
      <div className="hidden md:block relative overflow-hidden  h-full w-[350px] ">
        <div className="  w-full h-full">
          <img src={rect} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-4 left-10">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="cursor-pointer w-[60px] sm:w-[70px] "
          >
            <img src={next} alt="dd" className="w-full h-full" />
          </div>
        </div>
        <div className="absolute px-[40px] font-semibold text-white m-auto md:text-2xl leading-[3rem] flex flex-wrap inset-0 w-fit h-fit">
          Start your remarkable journey with us!
        </div>
      </div>
      <div className="w-full md:w-[70%]  relative h-full">
        <div className="absolute m-auto inset-0 w-[95%] sm:w-[400px] flex flex-col items-center justify-center">
        

    
            <div className="w-full let swipeIn items-center mt-3 flex flex-col">
              <div className="mb-3 space-y-3 text-center">
                <div className="text-lg sm:text-2xl font-semibold">
                  Tell us more about yourself
                </div>
                <div className="">
                  That will help us better account setup for you
                </div>
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
              <div className="form-group space-y-4 w-full mb-3">
                <label className="block font-semibold " htmlFor="tel">
                  Phone Number
                </label>
                <input
                  className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
                  type="tel"
                  placeholder="(234) 81 345 678 54"
                  name="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="form-group space-y-4 w-full mb-3">
                <label className="block font-semibold " htmlFor="password">
                  Password
                </label>
                <div className="relative w-full h-11">
                  <input
                    className="block form__input border-gray-200 border focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-full px-4"
                    type={show ? "text" : "password"}
                    placeholder="********"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <div
                    onClick={() => {
                      setshow(!show);
                    }}
                    className="absolute right-3 top-3"
                  >
                    {show ? (
                      <AiOutlineEyeInvisible className="text-[25px]" />
                    ) : (
                      <AiOutlineEye className="text-[25px]" />
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full justify-center items-center flex">
                <button
                  onClick={() => {
                    handleSubmit();
                  }}
                  className="w-full px-6 h-[45px] bg-[#017297] mb-3 hover:bg-[#1670d2] rounded-sm text-white flex justify-center items-center space-x-2 font-semibold"
                >
                  {loading ? (
                    <LoaderIcon className="text-base animate-spin" />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </div>
      

          <div className=" pb-[2rem]">
            Already have an account?{" "}
            <span
              onClick={() => {
                navigate("/login");
              }}
              className="text-[#017297] cursor-pointer font-semibold"
            >
              Log in here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
