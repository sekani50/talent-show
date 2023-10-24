import React, { useEffect, useState } from "react";
import { MdFilter, MdSearch } from "react-icons/md";
import user from "../../../assets/png/customerpic.png";
import { useNavigate } from "react-router-dom";
import { eventParticipants } from "../../../Utils/api";
import { useSelector } from "react-redux";
const Participants = ({ setactive, setfiltercat, id }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { token } = useSelector((state) => state.user);
  const [allcat, setallCat] = useState([]);
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    async function allParticipant() {
      setloading(true);
      await eventParticipants(id)
        .then((res) => {
          console.log(res.data.data);
          const { data } = res.data;
          setloading(false);
          const totalPage = Math.ceil(data?.paging?.totalItems / 10);
          console.log(totalPage);
          const allcat = data.data
            ?.map((val) => val.category)
            .filter((val) => val !== undefined);
          setallCat(allcat);
          setdata(data.data);

          if (page < totalPage) {
            setPage(page + 1);
          }
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
        });
    }

    allParticipant();
  }, []);

  return (
    <div className="w-full space-y-6 let swipeIn sm:space-y-8">
      <div className="w-full hidden space-x-3 ">
        <div className="w-[95%] relative h-10 sm:h-12 pl-10 pr-4">
          <div className="w-fit h-fit absolute left-3 top-3">
            {" "}
            <MdSearch className="text-[22px] text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="search"
            className="w-full h-full rounded-sm placeholder:text-gray-400  border border-[#017297]"
          />
        </div>
        <button className="border border-[#017297] px-2 w-[15%] flex justify-center  h-10 sm:h-12 items-center space-x-2 text-white">
          <MdFilter className="text-[25px]" />
          <p>Filter</p>
        </button>
      </div>

      {loading && (
        <div className=" w-full h-[300px] flex items-center justify-center">
          <div className="w-[50px] h-[50px] border-l-2 rounded-full border-b-2 animate-spin"></div>
        </div>
      )}

      {!loading && allcat?.length === 0 && (
        <div className=" w-full h-[300px] flex items-center justify-center">
          <span className="text-gray-500"> -no participant-</span>
        </div>
      )}
      {!loading &&
        allcat?.length > 0 &&
        allcat?.map((value, idx) => {
          return (
            <div key={idx} className="space-y-4 sm:space-y-6 w-full">
              <div className="w-full text-white py-2 flex justify-between items-center border-b border-[#017297]">
                <div>
                  {`Category:`}{" "}
                  <span className="mr-2 uppercase">{`${value}`}</span>
                </div>
                <button
                  onClick={() => {
                    setactive(2);
                    setfiltercat(value);
                  }}
                  className="text-xs sm:text-sm text-white underline"
                >
                  View All
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 max-[906px]:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
                {data
                  ?.filter((val) => val.category === value)
                  ?.map(({ category, participant }, j) => {
                    return (
                      <div
                        key={j}
                        className="w-full h-[280px] bg-[#FD6EBB] overflow-hidden sm:h-[280px] md:h-[300px] xl:h-[350px] rounded-sm"
                      >
                        <div className="w-full h-[160px] sm:h-[160px] md:h-[180px] xl:h-[220px] rounded-t-sm">
                          <img
                            src={participant?.profileImage?.url || user}
                            alt="aa"
                            className="w-full h-full bg-cover rounded-t-sm"
                          />
                        </div>
                        <div className="w-full space-y-2 px-4 py-4 text-center">
                          <p className="text-[#0C071E] font-semibold">{`${participant?.firstName} ${participant?.lastName}`}</p>
                          <p className="text-[#0C071E] ">{`as ${category}`}</p>
                          <button
                            onClick={() => {
                              navigate(`/voting/${participant?._id}`, {
                                state: {
                                  eventId: id,
                                },
                              });
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
        })}
    </div>
  );
};

export default Participants;
