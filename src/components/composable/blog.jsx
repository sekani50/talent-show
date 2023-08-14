import React from "react";
import stage from '../../assets/png/stage.png'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Blog({ title, date }) {
  return (
    <div className="w-full rounded-xl max-[640px]:h-[350px] h-[350px] max-[890px]:h-[300px]">
			<div className="w-full max-[640px]:h-[250px] h-[250px] max-[890px]:h-[200px] rounded-t-xl overflow-hidden">
					<img src={stage} alt="" className="w-full h-full rounded-t-xl" />
			</div>
			<div className="bg-gray-200 rounded-b-xl p-3">
				<div className="flex self-end justify-end items-end w-full">
					<BsFillArrowRightCircleFill className="text-[25px] text-black"/>
				</div>
				<div>
					<p className="text-[10px] sm:text-xs text-[#017297]">{date}</p>
					<p className="font-semibold text-lg sm:text-xl">{title}</p>
				</div>
			</div>
    </div>
  )
}
export default Blog;