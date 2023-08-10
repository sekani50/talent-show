import React from 'react';

const Subscribe = () => {
    return (
        <div className="w-full  bg-gray-100 py-6 sm:py-8 space-y-5 sm:space-y-8">
        <h1 className="text-center text-xl sm:text-3xl font-semibold">
          Subscribe to our NewsLetter
        </h1>
        <p className="text-center">Join our mailing list to get the latest news</p>

        <div className='mx-auto px-4 sm:px-0 w-full sm:w-[620px] flex space-x-3 items-center h-12 sm:h-16'>
        <input type="email" placeholder='email' className='w-[70%] px-4 h-full rounded-sm outline-none border border-[#017297] bg-white'/>
        <button className='w-[30%] h-full bg-[#017297] rounded-sm text-white'>Subscribe</button>
        </div>

        </div>
    )
}

export default Subscribe