import React from "react";
import a from "../../assets/png/a.png"
import b from "../../assets/png/b.png"
import c from "../../assets/png/c.png"
import d from "../../assets/png/d.png"
import e from "../../assets/png/e.png"
import f from "../../assets/png/f.png"
const Partners = () => {
    return (
        <div className="w-full  py-6 sm:py-8 space-y-5 sm:space-y-8">
             <h1 className="text-center text-lg sm:text-2xl font-semibold">
        Our Partners
      </h1>
      <p className="text-center">People who have trust in us</p>

        <div className="w-full px-4 sm:px-20 flex flex-wrap items-center gap-8 justify-center">
            {[a,b,c,d,e,f].map((w,f) => {
                return (
                    <div
                    key={f}
                    className="w-[100px] h-[30px] sm:w-[150px] sm:h-[50px]"
                    >
                        <img
                  
                  src={w} alt="" className="w-full h-full" />
                    </div>
                  
                )
            })}
        </div>
        </div>
    )
}

export default Partners