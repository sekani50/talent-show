import React, { useState } from "react";
import Input from "./input";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../Utils/api";
import { GetUsersSuccess } from "../../Redux/Actions/ActionCreators";
const UpdateAccount = () => {
  const {token, currentUser} = useSelector((state) => state.user)
  const [email, setEmail] = useState(currentUser?.email);
  const [phone, setPhone] = useState(currentUser?.phoneNumber);
  const [name, setName] = useState(currentUser?.firstName);
  const [fullName, setFullName] = useState(currentUser?.fullName)
  const [lastname, setLastName] = useState(currentUser?.lastName);
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch()

  useEffect(() => {
    async function getDetails() {
      await getUsers(token)
      .then((res) => {
        //console.log(res)
        const {data} = res.data
        dispatch(GetUsersSuccess(data))
      })
      .catch((err) => {
        console.log(err)
      })
    }
    getDetails()
  },[])
  return (
    <div className="w-full mx-auto md:mx-0 grid lg:gap-6 grid-cols-1 lg:grid-cols-2 py-3">
       <Input
        label={"Full Name"}
        type={"name"}
        value={fullName}
        setValue={setFullName}
      />
      <Input
        label={"First Name"}
        type={"name"}
        value={name}
        setValue={setName}
      />
      <Input
        label={"Last Name"}
        type={"name"}
        value={lastname}
        setValue={setLastName}
      />
      <Input
        label={"Mobile Number"}
        type={"number"}
        value={phone}
        setValue={setPhone}
      />
      <Input
        label={"Email Address"}
        type={"email"}
        value={email}
        setValue={setEmail}
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
        <button className="w-fit px-6 h-[45px] text-white rounded-sm bg-[#017297]">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default UpdateAccount;
