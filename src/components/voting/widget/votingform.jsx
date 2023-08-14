import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { voting } from "../../../Utils/api";
import { toast } from "react-hot-toast";
import { LoaderIcon } from "lucide-react";
const VotingForm = () => {
  const { token, currentUser } = useSelector((state) => state.user);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [numberOfVotes, setNum] = useState("");
  const [loading, setloading] = useState(false);
  const eventId = 1;

  async function voteParticipant() {
    const payload = {
      fullName,
      email,
      phoneNumber,
      numberOfVotes,
    };

    for (let i in payload) {
      if (payload[i] === "") {
        toast.error(`${i} is required`);
        return;
      }
    }
    setloading(true);
    await voting(token, eventId, currentUser?._id, payload)
      .then((res) => {
        console.log(res);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }
  return (
    <div className="w-full h-fit border text-white  border-white rounded-sm p-4 lg:p-6 ">
      <div className="flex flex-wrap  mb-3 items-center">
        Ensure the contestant is who you actually want to vote. There would be
        no refund or reversal of vote if you choose a wrong contestant.
      </div>

      <div className="form-group space-y-4 w-full mb-3">
        <label className="block font-semibold " htmlFor="name">
          Full Name
        </label>
        <input
          className="block form__input border bg-black border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
          type="name"
          placeholder="Effiong"
          name="name"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
      </div>
      <div className="form-group space-y-4 w-full mb-3">
        <label className="block font-semibold " htmlFor="number">
          Number of Votes
        </label>
        <input
          className="block form__input border bg-black border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
          type="number"
          placeholder="2"
          name="number"
          value={numberOfVotes}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
      </div>
      <div className="form-group space-y-4 w-full mb-3">
        <label className="block font-semibold " htmlFor="email">
          Email Address
        </label>
        <input
          className="block form__input border bg-black border-gray-200 focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
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
        <label className="block font-semibold " htmlFor="password">
          Phone Number
        </label>
        <input
          className="block form__input bg-black border-gray-200 border focus:border-gray-500 hover:border-gray-500 rounded-md focus:outline-none w-full h-11 px-4"
          type="number"
          placeholder="234 433 232"
          name="password"
          value={phoneNumber}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>

      <div className="text-center text-[#FFCC15] mb-3">
        Each Vote cost NGN 100
      </div>

      <button
        onClick={voteParticipant}
        className="text-white h-[45px] w-full rounded-sm bg-[#017297]"
      >
        {loading ? (
          <LoaderIcon className="text-[22px] animate-spin" />
        ) : (
          " Vote"
        )}
      </button>
    </div>
  );
};

export default VotingForm;
