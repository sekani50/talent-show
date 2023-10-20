import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {motion} from "framer-motion";
import { toast } from "react-hot-toast";
import axios from "../../Utils/useAxios";
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
          setdata(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    loadevents();
  }, []);

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

     
    </div>
  );
};

export default Ongoing;
