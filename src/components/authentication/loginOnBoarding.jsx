import React, { useState, useEffect } from "react";
import rect from "../../assets/png/rect.png";
import next from "../../assets/png/next.png";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DropDowns from "../composable/dropDowns";
import { toast } from "react-hot-toast";
import { LoaderIcon } from "lucide-react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { getCountries, getTalents, imageUpload } from "../../Utils/api";
import { onboarding } from "../../Utils/api";
import UploadingDocImage from "../composable/uploadDocImage";
const LoginOnBoarding = () => {
  const [email, setEmail] = useState("");
  const [firstName, setName] = useState("");
  const [uploadId, setUploadedImage] = useState("");
  const [iDnumber, setID] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const [stageName, setstageName] = useState("");
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  const [selectCategory, setSelectCategory] = useState(null);

  const [portfolio, setPortfolio] = useState("");
  const [reason, setReason] = useState("");
  const [activeCountry, setActiveCountry] = useState("Countries");
  const [activeCountryId, setActiveCountryId] = useState("");
  const [city, setCity] = useState("");
  const [availableDropDowns, getAvailableDropDowns] = useState({
    countries: [],
    talents: [],
  });
  const [activeTalent, setActiveTalent] = useState("Select a talent");
  const [activeTalentId, setActiveTalentId] = useState("");

  const { authtoken } = useSelector((state) => state.user);
  const categories = [
    "To build career",
    "Get recognition",
    "Get endorsement",
    "Others",
  ];

  useEffect(() => {
    async function getAllDropDowns() {
      try {
        const [allTalent, allCountries] = await Promise.all([
          getTalents(authtoken),
          getCountries(authtoken),
        ]);
        console.log(allTalent, allCountries);
        getAvailableDropDowns({
          countries: allCountries?.data?.data?.data,
          talents: allTalent?.data?.data?.data,
        });
      } catch (error) {
        console.log(error);
      }
    }
    getAllDropDowns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = async () => {
    let docUrl;
    const formdatas = new FormData();
    formdatas.append("image", uploadId);
    setLoading(true);
    await imageUpload(authtoken, formdatas)
      .then((res) => {
        console.log(res);
        docUrl = res.data.data;
        toast.success("Image successfully uploaded");
      })
      .catch((err) => {
        console.log(err);
      });

    const payload = {
      firstName,
      lastName,
      reason,
      talentId: activeTalentId,
      countryId: activeCountryId,
      city: city,
      validIdUrl: docUrl.url,
      idNumber: iDnumber,
      stageName,
      portfolio,
    };

    for (let i in payload) {
      if (payload[i] === "") {
        toast(`${i} is required`);
        return;
      }
    }
    setLoading(true);
  if ( docUrl )  {
     
        await onboarding(authtoken, payload)
          .then((res) => {
            console.log(res);
            setLoading(false);
            toast.success("User successfully onboarded");
            navigate("/profile");
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            toast.error("Onboarding not successful");
          })
    }
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
          <div className="mb-3  w-full flex justify-between items-center">
            <div className="text-lg sm:text-xl font-semibold">
              Set up an Account
            </div>
            <div className="text-lg sm:text-xl font-semibold">{`${
              active + 1
            }/5`}</div>
          </div>
          <div className="w-full items-center justify-center flex space-x-4">
            <div
              onClick={() => {
                setActive(0);
              }}
              className={`w-[22%] h-[6px] rounded-xl cursor-pointer ${
                active >= 0 ? "bg-[#017297]" : "bg-gray-200 "
              }`}
            ></div>
            <div
              onClick={() => {
                setActive(1);
              }}
              className={`w-[22%] h-[6px] rounded-xl  cursor-pointer  ${
                active >= 1 ? "bg-[#017297]" : "bg-gray-200  "
              }`}
            ></div>
            <div
              onClick={() => {
                setActive(2);
              }}
              className={`w-[22%] h-[6px] rounded-xl  cursor-pointer ${
                active >= 2 ? "bg-[#017297]" : "bg-gray-200  "
              }`}
            ></div>
            <div
              onClick={() => {
                setActive(3);
              }}
              className={`w-[22%] h-[6px] rounded-xl cursor-pointer ${
                active >= 3 ? "bg-[#017297]" : "bg-gray-200  "
              }`}
            ></div>
            <div
              onClick={() => {
                setActive(4);
              }}
              className={`w-[22%] h-[6px] rounded-xl cursor-pointer ${
                active === 4 ? "bg-[#017297]" : "bg-gray-200  "
              }`}
            ></div>
          </div>
          {active !== 0 && (
            <div className="flex my-3 w-full justify-start items-start">
              <div
                onClick={() => {
                  setActive(active - 1);
                }}
              >
                <AiOutlineArrowLeft className="text-[26px]" />
              </div>
            </div>
          )}

          {active === 0 && (
            <div className="w-full let swipeIn items-center mt-3 flex flex-col">
              <div className="mb-3 space-y-3 text-center">
                <div className="text-lg sm:text-2xl font-semibold">
                  Tell us more about yourself
                </div>
                <div className="">
                  That will help us better account setup for you
                </div>
              </div>
              <div className="w-full space-x-2 flex items-center">
                <div className="form-group space-y-4 w-[50%] mb-3">
                  <label className="block font-semibold " htmlFor="name">
                    First Name
                  </label>
                  <input
                    className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
                    type="name"
                    placeholder="Jiaha"
                    name="name"
                    value={firstName}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group space-y-4 w-[50%] mb-3">
                  <label className="block font-semibold " htmlFor="name">
                    Last Name
                  </label>
                  <input
                    className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
                    type="name"
                    placeholder="ababio"
                    name="name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group space-y-4 w-full mb-3">
                <label className="block font-semibold " htmlFor="name">
                  Stage Name/Nickname
                </label>
                <input
                  className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
                  type="name"
                  placeholder="Effiong"
                  name="name"
                  value={stageName}
                  onChange={(e) => {
                    setstageName(e.target.value);
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

              <div className="w-full justify-start items-start flex">
                <button
                  onClick={() => {
                    setActive(1);
                  }}
                  className="w-fit px-6 py-3 bg-[#017297] mb-3 hover:bg-[#1670d2] rounded-sm text-white flex justify-center items-center space-x-2 font-semibold"
                >
                  {loading ? (
                    <LoaderIcon className="text-base animate-spin" />
                  ) : (
                    "Next"
                  )}
                </button>
              </div>
            </div>
          )}
          {active === 1 && (
            <div className="w-full let swipeIn mt-3">
              <div className="mb-3 space-y-3 text-center">
                <div className="text-lg sm:text-2xl font-semibold">
                  We will like to know more about you
                </div>
                <div className="">Enter your talent, location</div>
              </div>
              <DropDowns
                header={"Talents"}
                data={availableDropDowns?.talents}
                setActive={setActiveTalent}
                setActiveId={setActiveTalentId}
                active={activeTalent}
              />
              <DropDowns
                header={"Country"}
                data={availableDropDowns?.countries}
                setActive={setActiveCountry}
                setActiveId={setActiveCountryId}
                active={activeCountry}
              />

              <div className="form-group space-y-4 w-full mb-3">
                <label className="block font-semibold " htmlFor="text">
                  State or City
                </label>
                <input
                  className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
                  type="text"
                  placeholder="Ikeja"
                  name="text"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  setActive(2);
                }}
                className="w-fit px-6 py-3 bg-[#017297] mb-3 hover:bg-[#1670d2] rounded-sm text-white flex justify-center items-center space-x-2 font-semibold"
              >
                {loading ? (
                  <LoaderIcon className="text-base animate-spin" />
                ) : (
                  "Next"
                )}
              </button>
            </div>
          )}

          {active === 2 && (
            <div className="w-full let swipeIn mt-3">
              <div className="mb-3 space-y-3 text-center"></div>

              <UploadingDocImage setUploadedImage={setUploadedImage} />

              <div className="form-group space-y-4 w-full mb-3">
                <label className="block font-semibold " htmlFor="number">
                  ID Number
                </label>
                <input
                  className="block form__input border border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
                  type="number"
                  placeholder=""
                  name="number"
                  value={iDnumber}
                  onChange={(e) => {
                    setID(e.target.value);
                  }}
                />
              </div>

              <button
                onClick={() => {
                  setActive(3);
                }}
                className="w-fit px-6 py-3 bg-[#017297] my-3 hover:bg-[#1670d2] rounded-sm text-white flex justify-center items-center space-x-2 font-semibold"
              >
                {loading ? (
                  <LoaderIcon className="text-base animate-spin" />
                ) : (
                  "Next"
                )}
              </button>
            </div>
          )}

          {active === 3 && (
            <div className="w-full let swipeIn mt-3">
              <div className="mb-3 space-y-3 text-center">
                <div className="text-lg sm:text-2xl font-semibold">
                  Why are you joining The NextGen Show
                </div>
                <div className=" ">
                  We’ll get you started with personalized recommendations based
                  on your focus
                </div>
              </div>

              <div className="flex flex-col space-y-3 text-[#017297]  justify-start items-start">
                {categories.map((type, index) => {
                  return (
                    <div
                      key={index}
                      className="border w-full hover:bg-[#017297] hover:bg-opacity-30 border-[#017297] rounded-sm p-2 sm:p-3"
                    >
                      <label
                        onClick={() => {
                          setSelectCategory(index);
                          setReason(type);
                        }}
                        key={index}
                        className="container "
                      >
                        {type}
                        <input
                          onChange={(e) => e.target.value}
                          type="checkbox"
                          checked={index === selectCategory}
                        />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => {
                  setActive(4);
                }}
                className="w-fit px-6 py-3 bg-[#017297] my-3 hover:bg-[#1670d2] rounded-sm text-white flex justify-center items-center space-x-2 font-semibold"
              >
                {loading ? (
                  <LoaderIcon className="text-base animate-spin" />
                ) : (
                  "Next"
                )}
              </button>
            </div>
          )}

          {active === 4 && (
            <div className="w-full let swipeIn mt-3">
              <div className="mb-3 space-y-3 text-center">
                <div className="text-lg sm:text-2xl font-semibold">
                  Put a link to your portfolio
                </div>
                <div className=" font-semibold">
                  Please share the website address of your works.
                </div>
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
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="w-[150px] h-[44px] bg-[#017297] mb-3 hover:bg-[#1670d2] rounded-sm text-white flex justify-center items-center space-x-2 font-semibold"
              >
                {loading ? (
                  <LoaderIcon className="text-base animate-spin" />
                ) : (
                  "Proceed to Profile"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginOnBoarding;
