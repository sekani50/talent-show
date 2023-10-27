import React from "react";
import { useEffect } from "react";
import { categoryParticipants, singleCategory } from "../../../Utils/api";
import { MdNavigateBefore } from "react-icons/md";
import { useState } from "react";
import user from "../../../assets/png/customerpic.png";
import {useNavigate } from "react-router-dom";
export default function CategroyDetail({ eventId, setactive, id }) {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setcurrentPage] = useState(0);
  const navigate = useNavigate()
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    async function single() {
      try {
        setloading(true);
        const [singleCat, catParticipant] = await Promise.all([
          singleCategory(id),
          categoryParticipants(id, page),
        ]);
        setloading(false);
        setdata(singleCat?.data?.data);

        const { data, paging } = catParticipant?.data?.data;
        setParticipants(data);
        const totalPage = Math.ceil(paging?.totalItems / 10);
        console.log(totalPage);
        setcurrentPage(paging?.currentPage);
        //  const pageNumbers = [...Array(totalPage).keys()].map(
        //    (page) => page + 1
        //  );

        setTotalItems(totalPage);
      } catch (error) {
        console.log(error);
      }
    }
    single();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  console.log(participants);
  return (
    <div className="let swipeIn space-y-6 sm:space-y-8">
      <div className="space-x-2 items-center flex">
        <div
          onClick={() => {
            setactive(2);
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
          <div className="w-full text-white h-fit flex flex-col justify-start gap-6  p-2 sm:p-4  overflow-hidden  rounded-sm">
            <h2 className="mb-3 font-semibold text-base sm:text-xl">
              {data?.name}
            </h2>
            <div className="flex gap-1 items-center w-full">
              <p className="font-semibold mr-2">Talent:</p>
              <p className="text-white font-semibold">{`${data?.talent?.name}`}</p>
              <p className="text-white ">{`in ${data?.country?.name}`}</p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center">
              <p className="col-span-full w-full underline text-white  font-semibold mb-3 sm:mb-6">
                Participants
              </p>

              {participants?.map(({participant}, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full h-[280px] flex flex-col gap-3 bg-[#FD6EBB] overflow-hidden sm:h-[280px] md:h-[300px] xl:h-[350px] rounded-sm"
                  >
                    <div className="w-full h-[160px] items-center pt-3 flex justify-center sm:h-[160px] md:h-[180px] xl:h-[220px] rounded-t-sm">
                      <img
                        src={participant?.profileImage?.url || user}
                        alt="aa"
                        className="object-contain w-full h-full  rounded-t-sm"
                      />
                    </div>
                    <div className="w-full flex flex-col space-y-2 px-4 py-4 text-center">
                      <p className="text-[#0C071E] font-semibold">{`${participant?.firstName}  ${participant?.lastName}`}</p>

                      <button
                       onClick={() => {
                        navigate(`/voting/${participant?._id}`, {
                          state: {
                            eventId
                          }
                        })
                       }}
                        className="text-white py-2 rounded-sm bg-[#0C071E] w-full text-center "
                      >
                        Vote
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="flex col-span-full py-2 sm:py-4 w-full my-3 justify-between items-center">
                {currentPage > 1 ? (
                  <button
                    onClick={() => {
                      setPage(page - 1);
                    }}
                    className="bg-white text-black rounded-sm px-4 py-2"
                  >
                    Previous
                  </button>
                ) : (
                  <div className="w-1 h-1"></div>
                )}
                <p className="text-white">{`page ${currentPage} of ${totalItems}`}</p>
                {currentPage === totalItems ? (
                  <div className="w-1 h-1"></div>
                ) : (
                  <button
                    onClick={() => {
                      setPage(page + 1);
                    }}
                    className="bg-[#FD6EBB] text-white rounded-sm px-4 py-2"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-3">
              <p className="font-semibold underline">Description</p>
              <div className="flex flex-wrap items-start text-justify justify-start leading-6 sm:leading-7">
                {data?.description}{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
