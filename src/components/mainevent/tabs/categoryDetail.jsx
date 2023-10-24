import React from "react";
import { useEffect } from "react";
import { singleCategory } from "../../../Utils/api";
import { MdNavigateBefore } from "react-icons/md";
import { useState } from "react";
export default function CategroyDetail({ setactive, id }) {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function single() {
      setloading(true);
      await singleCategory(id)
        .then((res) => {
          console.log(res.data.data);
          setloading(false);
          const { data } = res.data;
          setdata(data);
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
        });
    }
    single();
  }, []);
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
        <div className="text-white border-b py-2 border-[#017297]"></div>
      </div>
      <div className="w-full items-center">
        {loading && (
          <div className="col-span-full w-full h-[300px] flex items-center justify-center">
            <div className="w-[50px] h-[50px] border-l-2 rounded-full border-b-2 animate-spin"></div>
          </div>
        )}
        {!loading && data && (
          <div className="w-full h-fit flex flex-col justify-start gap-6  p-2 sm:p-4 border-b border-t border-gray-50 overflow-hidden  rounded-sm">
            <h2 className="mb-3 font-semibold text-base sm:text-xl">
              {data?.name}
            </h2>
            <div className="flex gap-1 items-center w-full">
              <p className="font-semibold mr-2">Talent:</p>
              <p className="text-white font-semibold">{`${data?.talent?.name}`}</p>
              <p className="text-white ">{`in ${data?.country?.name}`}</p>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-3">
              <p className="font-semibold underline">Description</p>
              <div className="flex flex-wrap items-start text-justify justify-start leading-6 sm:leading-7">
                {data?.description}{" "}
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
                <button className="px-6 sm:px-8 font-medium text-black text-center py-2 bg-[#FD6EBB]">View Participants</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
