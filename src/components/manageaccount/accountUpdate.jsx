import React, { useState } from "react";
import Input from "./input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "../../Utils/useAxios"
import { getUsers, updateProfile, imageUpload } from "../../Utils/api";
import { GetUsersSuccess } from "../../Redux/Actions/ActionCreators";
import { LoaderIcon } from "lucide-react";
import {toast} from 'react-hot-toast'
const UpdateAccount = ({upload}) => {
  const {token, currentUser} = useSelector((state) => state.user)
  const [phone, setPhone] = useState(currentUser?.phoneNumber);
  const [firstName, setName] = useState(currentUser?.firstName);
  const [loading, setloading] = useState(false)
  const [lastName, setlastName] = useState(currentUser?.lastName);
  const navigate = useNavigate();
  const [city, setCity] = useState(currentUser?.city);
  const [country, setCountry] = useState(currentUser?.country);
  const dispatch = useDispatch()

  useEffect(() => {
    async function getDetails() {
      await getUsers(token)
      .then((res) => {
        //console.log(res)
        const {data} = res.data
        dispatch(GetUsersSuccess(data?.user))
      })
      .catch((err) => {
        console.log(err)
      })
    }
    getDetails()
  },[])


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
      city,
      country,phoneNumber:phone,
      profileImage
    }

    setloading(true)
   {profileImage && await axios.put(`/user/update-profile`,payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      console.log(res)
      setloading(false)
      window.location.reload()
    })
    .catch((err) => {
      console.log(err)
      setloading(false)
    })}
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

      <Input
        label={"Country"}
        type={"text"}
        value={country}
        setValue={setCountry}
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
        className="flex items-center justify-center w-[120px] h-[45px] text-white rounded-sm bg-[#017297]">
          {loading ? <LoaderIcon className="text-[22px] animate-spin"/> : 'Update Profile'}
        </button>
      </div>
    </div>
  );
};

export default UpdateAccount;
