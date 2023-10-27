import React, { useState } from "react";
import Input from "./input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "../../Utils/useAxios";
import { getUsers, updateProfile, imageUpload } from "../../Utils/api";
import { GetUsersSuccess } from "../../Redux/Actions/ActionCreators";
import { LoaderIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import DropDowns from "../composable/dropDowns";
const UpdateAccount = ({ upload }) => {
  const { token, currentUser } = useSelector((state) => state.user);
  const [phone, setPhone] = useState(currentUser?.phoneNumber);
  const [firstName, setName] = useState(currentUser?.firstName);
  const [loading, setloading] = useState(false);
  const [lastName, setlastName] = useState(currentUser?.lastName);
  const navigate = useNavigate();
  const [city, setCity] = useState(currentUser?.city);

  const [activeCountry, setActiveCountry] = useState(
    currentUser?.country?.name
  );
  const [activeCountryId, setActiveCountryId] = useState(currentUser?.country?._id);
  const [availableDropDowns, getAvailableDropDowns] = useState({
    countries: [],
    talents: [],
  });

  const [activeTalent, setActiveTalent] = useState(currentUser?.talent?.name);
  const [activeTalentId, setActiveTalentId] = useState(currentUser?.talent?._id);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getDetails() {
      await getUsers(token)
        .then((res) => {
          //console.log(res)
          const { data } = res.data;
          dispatch(GetUsersSuccess(data?.user));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getDetails();
  }, []);

  async function handleSubmit() {
    let profileImage;
    const formdatas = new FormData();
    formdatas.append("image", upload);

    await imageUpload(token, formdatas)
      .then((res) => {
        console.log(res);
        //setIsImage(true);

        profileImage = res.data.data;
        toast.success("Image successfully uploaded");
      })
      .catch((err) => {
        console.log(err);

        toast.error("Image not uploaded");
      });

    const payload = {
      firstName,
      lastName,
      talentId: activeTalentId,
      countryId:activeCountryId,
      city,
      phoneNumber: phone,
      profileImage,
    };

    setloading(true);
    {
      profileImage &&
        (await axios
          .put(`/user/update-profile`, payload, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            console.log(res);
            setloading(false);
            window.location.reload();
          })
          .catch((error) => {
            if (
              error.message === "Network Error" ||
              error.message === "timeout exceeded"
            ) {
              toast.error("Network Error");
            }
            const { error: err } = error.response.data;
            if (typeof err === "string") {
              toast.error(err.message);
            }
            const { message } = error.response.data.error;
            if (message) {
              toast.error(message);
            }
            const { message: mm } = error.response.data;
            if (mm) {
              toast.error(mm);
            }
            setloading(false);
          }));
    }
  }
  return (
    <div className="w-full mx-auto md:mx-0 grid lg:gap-6 grid-cols-1 lg:grid-cols-2 py-3">
      <Input
        label={"First Name"}
        type={"name"}
        value={firstName}
        setValue={setName}
      />
      <Input
        label={"Last Name"}
        type={"name"}
        value={lastName}
        setValue={setlastName}
      />
      <Input
        label={"Mobile Number"}
        type={"number"}
        value={phone}
        setValue={setPhone}
      />

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

      <Input
        label={"State/City"}
        type={"text"}
        value={city}
        setValue={setCity}
      />
      <div className="w-full items-end justify-end col-span-full">
        <button
          onClick={handleSubmit}
          className="flex items-center justify-center w-[120px] h-[45px] text-white rounded-sm bg-[#017297]"
        >
          {loading ? (
            <LoaderIcon className="text-[22px] animate-spin" />
          ) : (
            "Update Profile"
          )}
        </button>
      </div>
    </div>
  );
};

export default UpdateAccount;
