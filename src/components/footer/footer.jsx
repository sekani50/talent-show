import React from "react";
import next from '../../assets/png/next.png'
const Footer = () => {
  return (
    <div className="w-full text-white bg-[#061634] px-8 sm:px-20 py-6 sm:py-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-9 gap-8 items-start w-full">
        <div className="w-[70px] sm:col-span-9 lg:col-span-2">
          <img src={next} alt="next" className="w-full h-full" />
        </div>

        <div className="space-y-6 sm:col-span-2">
          <h2 className="font-semibold text-lg sm:text-xl uppercase">
            Company
          </h2>
          <p>How it works</p>
          <p>Talent</p>
          <p>Event</p>
        </div>
        <div className="space-y-6 sm:col-span-2">
          <h2 className="font-semibold text-lg sm:text-xl uppercase">
            Resources
          </h2>
          <p>Blog Post name</p>
          <p>Talent</p>
          <p>Event</p>
        </div>
        <div className="space-y-6 sm:col-span-2">
          <h2 className="font-semibold text-lg sm:text-xl uppercase">About</h2>
          <p>Terms and Condition</p>
          <p>Privacy & Policy</p>
        </div>
      </div>

      <div className="text-center mt-8 text-xs sm:text-sm">{`Copyright ${new Date().getFullYear()} The NextGen Show`}</div>
    </div>
  );
};

export default Footer;
