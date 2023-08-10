import React from "react";
import austin from '../../../assets/png/austin.png'
const AboutEvent = () => {
    return (
        <div className="space-y-6 sm:space-y-8 let swipeIn w-full">
              <div className="w-full h-[165px] rounded-sm sm:h-[250px] lg:h-[350px] xl:h-[400px]">
        <img
          src={austin}
          alt=""
          className="w-full h-full rounded-sm object-cover "
        />
      </div>
      <p className="font-bold text-white text-lg sm:text-3xl">The Stage Time</p>
      <div className="flex text-white flex-wrap justify-start leading-7 sm:leading-8">
        The Stage Time Show Lorem ipsum dolor sit amet consectetur. Sit
        curabitur nulla justo tellus amet. Ut placerat dolor massa metus quisque
        sodales semper. Hac donec vulputate pharetra augue eu congue. Lorem
        ipsum dolor sit amet consectetur. Sit curabitur nulla justo tellus amet.
        Ut placerat dolor massa metus quisque sodales semper. Hac donec
        vulputate pharetra augue eu congue. Lorem ipsum dolor sit amet
        consectetur. Sit curabitur nulla justo tellus amet. Ut placerat dolor
        massa metus quisque sodales semper. Hac donec vulputate pharetra augue
        eu congue. Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla
        justo tellus amet. Ut placerat dolor massa metus quisque sodales semper.
        Hac donec vulputate pharetra augue eu congue.
      </div>

        </div>
    )
}

export default AboutEvent