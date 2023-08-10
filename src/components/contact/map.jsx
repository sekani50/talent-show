import React from "react";
import map from '../../assets/png/map.png'
const Maps = () => {
    return (
        <div className="w-full  bg-gray-100 py-6 sm:py-8 space-y-5 sm:space-y-8 px-4 sm:px-20">
        <h1 className="text-center text-xl sm:text-3xl font-semibold">
         Find us on the map
        </h1>
        <div className="w-full h-[180px] sm:h-[300px]">
            <img src={map} alt="" className="w-full h-full object-cover" />
        </div>
        </div>
    )
}

export default Maps