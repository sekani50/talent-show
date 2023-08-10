import React, { useState } from "react";
import Input from "./input";
import { useNavigate } from "react-router-dom";
const UpdateAccount = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  return (
    <div className="w-full mx-auto md:mx-0 grid lg:gap-6 grid-cols-1 lg:grid-cols-2 py-3">
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
