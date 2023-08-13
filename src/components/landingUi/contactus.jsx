import React from "react";
import frame from "../../assets/png/frame.png"
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full  py-6 sm:py-8 space-y-5 sm:space-y-8">
             <h1 className="text-center text-[#017297] text-lg sm:text-2xl font-semibold">
             Didn’t find what you are looking for?
      </h1>
      <p className="text-center">Our Team is active to attend to your email</p>
      <div className="flex items-center justify-center w-full">
        <img src={frame} alt="f"/>
        </div>
       <div className="flex items-center justify-center w-full">
       <button
       onClick={() => {
        navigate("/contact")
       }}
       className="rounded-sm py-2 px-6 w-fit bg-[#017297] text-center">Contact Us</button>
       </div>
        </div>
    )
}

export default ContactUs