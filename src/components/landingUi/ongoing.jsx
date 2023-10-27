import React, { useState, } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


import axios from "../../Utils/useAxios";

const Ongoing = () => {
  const [data, setdata] = useState([]);

 

  useEffect(() => {
    if (!data) return;
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        //setactive(index)
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, [data]);

  useEffect(() => {
    if (!data) return;
    const visiblecards = document.querySelectorAll(".show");
    console.log(visiblecards?.length);
  }, [data]);

  useEffect(() => {
    async function loadevents() {
      await axios
        .get(`/events/ongoing-event`)
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
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 
  return (
    <div className="bg-main px-4 sm:px-20 py-6 space-y-6 sm:space-y-14 ">
      <h1 className="text-center text-white text-lg sm:text-2xl font-semibold">
        Ongoing Events
      </h1>

      <div className="w-full h-fit flex  justify-center items-center sm:justify-end sm:items-end">
        <div className="w-[95%] sm:w-[450px] h-[200px] relative sm:h-[400px] rounded-lg">
          <img
            src={data?.coverImage?.url}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />{" "}
          <Link
            to="/event"
            className="px-4 absolute bottom-3 right-3 py-2 sm:py-3 bg-white sm:px-6 rounded-3xl text-center"
          >
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
