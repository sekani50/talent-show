import React from "react";
import { useState } from "react";
const Profile = ({data}) => {
  const [active, setactive] = useState(0);
  return (
    <div className="w-full space-y-4 sm:space-y-6 h-fit">
      {
        <div className="flex items-center space-x-3">
          <div
            onClick={() => {
              setactive(0);
            }}
            className={`font-medium py-2 cursor-pointer ${
              active === 0
                ? "text-[#017297] border-b-2 border-[#017297]"
                : "text-white"
            }`}
          >
            Profile
          </div>
          <div
            onClick={() => {
              setactive(1);
            }}
            className={`font-medium py-2 cursor-pointer ${
              active === 1
                ? "text-[#017297] border-b-2 border-[#017297]"
                : "text-white"
            }`}
          >
            Portfolio
          </div>
        </div>
      }

      {active === 0 && (
        <div className="flex space-y-2 flex-col text-white justify-start">
          <p>Stage Name: <span>{data?.participant?.stageName}</span></p>
          <p>Email: <span>{data?.participant?.email}</span></p>
          <p>City: <span>{data?.participant?.city}</span></p>
          <p>Country: <span>{data?.participant?.country}</span></p>
        </div>
      )}
      
       {active === 1 && (
        <div className="flex space-y-2 flex-col text-white  justify-start">
       <p>Portfolio link: <span>{data?.participant?.portfolio}</span></p>
        </div>
      )}
    </div>
  );
};

export default Profile;
