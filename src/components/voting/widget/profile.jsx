import React from "react";
import { useState } from "react";
const Profile = () => {
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
        <div className="flex flex-wrap text-white justify-start">
          Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo
          tellus amet. Ut placerat dolor massa metus quisque sodales semper. Hac
          donec vulputate pharetra augue eu congue. Lorem ipsum dolor sit amet
          consectetur. Sit curabitur nulla justo tellus amet. Ut placerat dolor
          massa metus quisque sodales semper. Hac donec vulputate pharetra augue
          eu congue. Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla
          justo tellus amet. Ut placerat dolor massa metus quisque sodales
          semper. Hac donec vulputate pharetra augue eu congue. Lorem ipsum
          dolor sit amet consectetur. Sit curabitur nulla justo tellus amet. Ut
          placerat dolor massa metus quisque sodales semper. Hac donec vulputate
          pharetra augue eu congue.
        </div>
      )}
       {active === 1 && (
        <div className="flex flex-wrap text-white  justify-start">
          Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo
          tellus amet. Ut placerat dolor massa metus quisque sodales semper. Hac
          donec vulputate pharetra augue eu congue. Lorem ipsum dolor sit amet
          consectetur. Sit curabitur nulla justo tellus amet. Ut placerat dolor
          massa metus quisque sodales semper. Hac donec vulputate pharetra augue
          eu congue. Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla
          justo tellus amet. Ut placerat dolor massa metus quisque sodales
          semper. Hac donec vulputate pharetra augue eu congue. Lorem ipsum
          dolor sit amet consectetur. Sit curabitur nulla justo tellus amet. Ut
          placerat dolor massa metus quisque sodales semper. Hac donec vulputate
          pharetra augue eu congue.
        </div>
      )}
    </div>
  );
};

export default Profile;
