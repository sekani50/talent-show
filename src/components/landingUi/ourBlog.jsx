import React from "react";
import vector from '../../assets/png/Vector 1.png'
import stage from '../../assets/png/stage.png'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
const OurBlog = () => {
  return (
    <div className="w-full  bg-gray-100 py-6 sm:py-8 space-y-5 sm:space-y-8">
      <h1 className="text-center text-lg sm:text-2xl font-semibold">
        Our Blogs
      </h1>
      <div className="px-4 mx-auto justify-center flex items-center text-center leading-7 sm:leading-8 w-full sm:px-20">
        Explore Insights and Inspiration: Dive into Our Blogs for Engaging Content!
      </div>
      <div >
        <img src={vector} alt='' className="mx-auto" />
      </div>
      <div className="grid grid-cols-1 w-full items-center px-4 md:flex sm:px-20 gap-6 lg:gap-10 ">
       {[1,2,3].map((i,j) => {
        return (
            <div
            key={j}
            className="w-full rounded-xl max-[640px]:h-[350px] h-[350px] max-[890px]:h-[300px]">
            <div className="w-full max-[640px]:h-[250px] h-[250px] max-[890px]:h-[200px] rounded-t-xl overflow-hidden">
                <img src={stage} alt="" className="w-full h-full rounded-t-xl" />
            </div>
            <div className="bg-gray-200 rounded-b-xl p-3">
                <div className="flex self-end justify-end items-end w-full">
                    <BsFillArrowRightCircleFill className="text-[25px] text-black"/>
                </div>
                <div>
                    <p className="text-[10px] sm:text-xs text-[#017297]">26th june</p>
                    <p className="font-semibold text-lg sm:text-xl">Lorem Ipsum</p>
                </div>

            </div>

        </div>
        )
       })}
      </div>
    </div>
  );
};

export default OurBlog;
