import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { contactUs } from "../../Utils/api";
import { LoaderIcon } from "lucide-react";

const ContactInfo = () => {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setloading] = useState(false)

  async function handleSubmit() {
    const payload = {
      firstName:first_name,
      lastName:last_name,
      emailAddress,
      message
    }
    for(let i in payload) {
      if(payload[i] === "" ) {
        toast.error(`${i} is required`)
        return
      }
    }
    setloading(true)
    await contactUs(payload)
    .then((res) => {
      console.log(res)
      setloading(false)
      window.location.reload()
      toast.success('Message has been successfully submitted')
    })
    .catch((err) => {
      console.log(err)
      setloading(false)
      toast.error('Message not sent successfully')
    })
    
  }

  return (
    <div className="w-full py-6 sm:py-8 space-y-5 sm:space-y-8">
      <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-5 px-4 sm:px-20">
        <div className="space-y-4 sm:col-span-1 md:col-span-2">
          <div className="bg-gray-200 font-semibold rounded-sm space-y-3 p-3">
            <p className="text-[#017297]">Phone</p>
            <p>+234 908 8867 843</p>
          </div>
          <div className="bg-gray-200 font-semibold rounded-sm space-y-3 p-3">
            <p className="text-[#017297]">Email</p>
            <p>help@thenextgenshow.com</p>
          </div>
          <div className="bg-gray-200 font-semibold rounded-sm space-y-3 p-3">
            <p className="text-[#017297]">Office</p>
            <p>78, Westhill Estate, Abuja</p>
          </div>
        </div>

        <div className="w-full space-y-4 bg-gray-200 md:col-span-3 p-3 rounded-sm">
          <p className="text-[#017297] font-semibold text-lg sm:text-xl">
            Send us a message
          </p>
          <div className="flex space-x-2 items-center">
            <input
              type="text"
              className="w-[50%] bg-gray-200 px-4 outline-none border border-[#017297] placeholder:text-[#017297] rounded-sm h-11 sm:h-12"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
            <input
              type="text"
              className="w-[50%] bg-gray-200 px-4 outline-none border border-[#017297] placeholder:text-[#017297] rounded-sm h-11 sm:h-12"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>
          <input
            type="email"
            className="w-full bg-gray-200 border outline-none border-[#017297] placeholder:text-[#017297] px-4 rounded-sm h-11 sm:h-12"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(e) => {
              setEmailAddress(e.target.value)
            }}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            className="w-full resize-none p-4 outline-none bg-gray-200 border border-[#017297] px-4 placeholder:text-[#017297] h-[180px] sm:h-[250px]"
          ></textarea>
          <button
          onClick={handleSubmit}
          className=" h-[44px] flex items-center justify-center rounded-sm bg-[#017297] w-[150px] text-white ">
         {loading ? <LoaderIcon className="text-[23px] animate-spin"/>:  <span>  Send Message</span>}
         
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
