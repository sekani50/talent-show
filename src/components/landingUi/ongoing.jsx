import React, { useState } from "react";
import { getEvents } from "../../Utils/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
const Ongoing = () => {
  const [data, setdata] = useState([]);
  const { token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    async function loadevents() {
      await getEvents(1)
        .then((res) => {
          console.log(res);
          const { data } = res.data;
          setdata(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    loadevents();
  }, []);

  function joinEvent(id, eventName,categories ) {
    if (!token) {
      toast.error("Log in or register to join the event");
      return;
    }
    navigate("/join", {
      state: {
        data: {
          id,
          eventName,
          categories 
        },
      },
    });
  }
  return (
    <div className="bg-image px-4 sm:px-20 py-6 space-y-6 sm:space-y-14 text-white">
      <h1 className="text-center text-lg sm:text-2xl font-semibold">
        Ongoing Events
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 items-start md:gap-20 gap-5">
        <div className="hidden md:block space-y-3">
          <p className="text-lg font-semibold">Stage Time</p>
          {data?.map(({ eventName }, idx) => {
            if (idx <= 4) {
              return <p key={idx}>{eventName}</p>;
            }
            return null
          })}
        </div>

        <div className="col-span-2 space-y-4">
          {data?.map(({ eventName, _id, coverImage, categories }, j) => {
            if (j <= 4) {
              return (
                <div
                  key={j}
                  className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] rounded-sm lg:h-[500px]"
                >
                  <img
                    src={coverImage?.url}
                    alt="dd"
                    className="w-full h-full rounded-sm"
                  />
                  <div className="bottom-0 flex justify-between items-center p-2 absolute inset-x-0">
                    <p>{eventName}</p>
                    <button
                      onClick={() => {
                        joinEvent(_id, eventName,categories);
                      }}
                      className="bg-white rounded-2xl px-4 sm:px-6 py-2 text-zinc-700 "
                    >
                      Join
                    </button>
                  </div>
                </div>
              );
            }
            return null
          })}
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
