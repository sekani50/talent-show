import React from "react";
import avatar from "../../assets/svg/avatar.svg";
const FeedBack = () => {
  return (
    <div className="w-full  bg-gray-100 py-6 sm:py-8 space-y-5 sm:space-y-8">
      <h1 className="text-center text-lg sm:text-2xl font-semibold">
        What peole say about us
      </h1>

      <div className="grid grid-cols-1 w-full items-center px-4 sm:px-20 gap-6 md:gap-10 md:grid-cols-3">
      {[1,2,3].map((i,j) => {
        return (
            <div key={j} className="bg-white shadow-md space-y-4  rounded-sm w-full py-8 px-4 xl:px-6">
            <div className="flex flex-wrap">
              “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat.”
            </div>
            <div className="grid bg-gray-200 p-2 grid-cols-4 gap-">
              <div className="w-[40px] h-[40px] rounded-full">
                <img src={avatar} alt="" className="w-full h-full rounded-full" />
              </div>
              <div className="col-span-3">
                <p className="font-medium">Olaremi Oladejo</p>
                <p className="font-light">Photographer</p>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default FeedBack;
