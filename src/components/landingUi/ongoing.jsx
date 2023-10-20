import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {motion} from "framer-motion";
import MainEvent from "../mainevent/mainEvent";
import { toast } from "react-hot-toast";
import axios from "../../Utils/useAxios";
import { formatDate } from "../../Utils/stringtoDate";
const Ongoing = () => {
  const [data, setdata] = useState([]);
  const { token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [active, setactive] = useState('')



  useEffect(() => {
    if (!data) return
    const cards = document.querySelectorAll('.card')
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        //setactive(index)
        entry.target.classList.toggle("show", entry.isIntersecting)
      })
    })
  
    cards.forEach((card => {
      observer.observe(card)
    }))
  
  },[data])

  useEffect(() => {
    if(!data) return
    const visiblecards = document.querySelectorAll('.show')
    console.log(visiblecards?.length)

  },[data])

 

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
  }, []);

  //console.log(data)
  function joinEvent(id, eventName, categories) {
    if (!token) {
      toast.error("Log in or register to join the event");
      return;
    }
    navigate("/join", {
      state: {
        data: {
          id,
          eventName,
          categories,
        },
      },
    });
  }
  return (
    <div className="bg-image px-4 sm:px-20 py-6 space-y-6 sm:space-y-14 text-white">
      <h1 className="text-center text-lg sm:text-2xl font-semibold">
        Ongoing Events
      </h1>

      <div className="text-white  mx-auto space-y-4 flex flex-col items-center w-fit h-fit ">
          <p className="font-bold text-lg sm:text-3xl">{data?.eventName || ''}</p>
          <p className="text-center">A show brought to you by NextGen</p>
          <button
            onClick={() => {
              joinEvent(data?._id, data?.eventName, data?.categories)
            }}
            className="text-[#017297] bg-white rounded-sm px-4 sm:px-8 py-2"
          >
            Join as a Contestant
          </button>
          <p className="text-center text-[#FFCC15]">
          {`  Registration Ends by ${formatDate(data?.contestEnd).month || ''} ${formatDate(data?.contestEnd).year || ''}`}
          </p>
        </div>
          <MainEvent event={data} id={data?._id}/>
    </div>
  );
};

export default Ongoing;
