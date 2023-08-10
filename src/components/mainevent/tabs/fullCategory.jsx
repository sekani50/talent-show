import React from "react";
import austin from "../../../assets/png/austin.png";
import { MdNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const FullCategory = ({ setactive }) => {
  const navigate = useNavigate();
  return (
    <div className="let swipeIn space-y-6 sm:space-y-8">
      <div className="space-x-2 items-center flex">
        <div
          onClick={() => {
            setactive(1);
          }}
          className="cursor-pointer h-fit w-fit"
        >
          <MdNavigateBefore className="text-white text-[25px]" />
        </div>
        <div className="text-white border-b py-2 border-[#017297]">
          {`Category:`}{" "}
          <span className="mr-2 uppercase">{`Best Male artist`}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-[906px]:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
        {[1, 2, 3, 4, 6, 7, 8, 9].map((i, j) => {
          return (
            <div
              key={j}
              className="w-full h-[280px] bg-[#FD6EBB] overflow-hidden sm:h-[280px] md:h-[300px] xl:h-[350px] rounded-sm"
            >
              <div className="w-full h-[160px] sm:h-[160px] md:h-[180px] xl:h-[220px] rounded-t-sm">
                <img
                  src={austin}
                  alt="aa"
                  className="w-full h-full bg-cover rounded-t-sm"
                />
              </div>
              <div className="w-full space-y-2 px-4 py-4 text-center">
                <p className="text-[#0C071E] font-semibold">Casendra Billie</p>
                <p className="text-[#0C071E] ">as Best Male</p>
                <button
                  onClick={() => {
                    navigate("/voting");
                  }}
                  className="text-white py-2 rounded-sm bg-[#0C071E] w-full text-center "
                >
                  Vote
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FullCategory;
