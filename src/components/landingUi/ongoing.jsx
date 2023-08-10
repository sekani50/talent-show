import React from 'react';
import image from "../../assets/png/Image.png"
const Ongoing = () => {
    return (
        <div className='bg-image px-4 sm:px-20 py-6 space-y-6 sm:space-y-14 text-white'>
             <h1 className="text-center text-lg sm:text-2xl font-semibold">
        Ongoing Events
      </h1>

      <div className='w-full grid grid-cols-1 md:grid-cols-3 items-start md:gap-20 gap-5'>
        <div className='hidden md:block space-y-3'>
            <p className='text-lg font-semibold'>Stage Time</p>
            <p>Other Event</p>
            <p>Other Event</p>
            <p>Other Event</p>
            <p>Other Event</p>
        </div>

        <div className='col-span-2 space-y-4'>

           {[1,2,3,4].map((i,j) => {
            return (
                <div
                key={j} className='relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]'>
                <img src={image} alt="dd" className='w-full h-full'/>
                <div className='bottom-0 flex justify-between items-center p-2 absolute inset-x-0'>
                    <p>Other Event</p>
                    <button className='bg-white rounded-2xl px-4 sm:px-6 py-2 text-zinc-700 '>Join</button>
                </div>
            </div>
            )
           })}

        </div>

      </div>

        </div>
    )
}

export default Ongoing