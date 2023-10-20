import React from "react";

const AboutEvent = ({ event }) => {
  return (
    <div className="space-y-6 sm:space-y-8 let swipeIn w-full">
      <div className="w-full h-[165px] rounded-sm sm:h-[250px] lg:h-[350px] xl:h-[400px]">
        <img
          src={event?.coverImage?.url}
          alt=""
          className="w-full h-full rounded-sm object-cover "
        />
      </div>
      <p className="font-bold text-white text-lg sm:text-3xl">
        {event?.eventName}
      </p>
      <div className="flex text-white flex-wrap justify-start leading-7 sm:leading-8">
        {event?.description}
      </div>

      <div className="w-full relative z-[100] sm:w-[600px] h-[165px] sm:h-[400px] rounded-sm">
        <video
          controls
          src={event?.video?.url}
          className="w-full h-full  absolute  object-cover"
        />
      </div>
    </div>
  );
};

export default AboutEvent;
