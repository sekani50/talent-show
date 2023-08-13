import React, { useState } from 'react'
import next from '../../assets/png/next.png'
import {BiLogOut} from 'react-icons/bi'
import {MdEventNote} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'
import UpdateAccount from './accountUpdate'
import MyEvents from './myEvents'
import austin from '../../assets/png/austin.png'
import vote from '../../assets/png/vote.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUsers } from '../../Utils/api'
import { GetUsersSuccess } from '../../Redux/Actions/ActionCreators'
const ManageAccount = () => {
  const {token, currentUser} = useSelector((state) => state.user)
    const [active, setactive] = useState(0)
    const [portfolio, setPortfolio] = useState(currentUser?.portfolio)
    const navigate = useNavigate()
    const dispatch = useDispatch()
   

    useEffect(() => {
      async function getDetails() {
        await getUsers(token)
        .then((res) => {
         // console.log(res.data.data)
          const {data} = res.data
          dispatch(GetUsersSuccess(data))
          
        })
        .catch((err) => {
          console.log(err)
        })

      }
      getDetails()
    },[])
    return (
        <div className='w-full overflow-x-hidden '>
            <div className='bg-[#313133] flex justify-between items-center px-4 sm:px-10 py-2'>
            <div
            onClick={() => {
              navigate("/")
            }}
             className="cursor-pointer w-[35px] sm:w-[50px] ">
            <img src={next} alt="dd" className="w-full h-full" />
          </div>
          <div className='space-x-2 items-center grid grid-cols-3 '>
            <div className='w-[35px] h-[35px] rounded-full sm:h-[50px] sm:w-[50px] '>
                <img src={austin} alt="w" className='w-full h-full object-cover rounded-full' />
            </div>

            <p className='w-full col-span-2 text-ellipsis whitespace-nowrap overflow-hidden text-white'>{currentUser?.firstName || '___'}</p>
          </div>
            </div>
            <div className="w-full relative h-[250px] sm:h-[350px]">
          <img src={vote} alt="aust" className="w-full h-full" />
       </div>
       <div  className='px-4 sm:px-10 w-full  md:flex  md:gap-x-7 '>
        <div className='w-[90%] sm:w-[350px] md:w-[280px] mx-auto md:mx-0 h-fit items-center flex flex-col'>
            <div className='w-full px-4 pb-4 text-center border mx-auto space-y-3 border-black rounded-sm'>
                <div className='w-[200px] h-[200px] rounded-full mx-auto mt-[-60px] relative z-[20]'>
                    <img src={austin} alt="" className='w-full object-cover h-full rounded-full'/>

                </div>
                <div className='space-y-1'>
                    <p className='font-medium'>{`${currentUser?.firstName || '_'} ${currentUser?.lastName || '_'}`}</p>
                    <p className='text-sm sm:text-[13px]'>{currentUser?.talent || ''}</p>

                </div>

                <div className='py-2 border-b w-fit  space-x-3 flex items-center mx-auto border-black'><span>Event applied</span> <div className='text-center w-6 h-6 bg-green-300 text-green-600 p-1 text-xs rounded-md'>0</div></div>
                <div className='py-2 border-b w-fit mx-auto space-x-3 flex items-center border-black'><span>Event Won</span> <div className='text-center w-6 h-6 bg-red-300 text-red-600 p-1 text-xs rounded-md'>0</div></div>
                <div className='py-2 border-b w-fit mx-auto space-x-3 flex items-center border-black'><span>Current Event</span> <div className='text-center w-6 h-6 bg-red-300 text-red-600 p-1 text-xs rounded-md'>0</div></div>

                <div className="form-group space-y-2 w-full mb-3">
                <label className="block  " htmlFor="text">
                  Portfolio website
                </label>
                <input
                  className="block form__input border bg-gray-200 border-gray-300 focus:border-gray-500 hover:border-gray-500 rounded-sm focus:outline-none w-full h-11 px-4"
                  type="text"
                  placeholder="https://example.com"
                  name="text"
                
                  value={portfolio}
                  onChange={(e) => {
                    setPortfolio(e.target.value);
                  }}
                />
              </div>
              <button className='w-full bg-black text-white py-2 text-center'>View Public Profile</button>
                </div> 

                <div className='w-full  items-center justify-center my-3 flex'>
                    <button className='bg-red-500 text-white px-6 py-2 rounded-sm flex space-x-2 items-center justify-center'>
                       
                       <BiLogOut className="text-[25px]"/>
                        <span>Log Out</span></button>
                </div>

        </div>
        <div className='mx-auto md:mx-0 w-[95%] sm:w-[70%] h-fit py-6'>
        
     <div className="flex items-center border-b space-x-4">
        <div
          onClick={() => {
            setactive(0);
          }}
          className={`flex space-x-2 sm:space-x-3 py-2 cursor-pointer ${
            active === 0
            ? " font-medium border-b-2 border-[#017297]"
            : "text-gray-400"
          }`}
        >
            <AiOutlineUser className="text-[25px]"/>
          <span>User Info</span>
        </div>
        <div
          onClick={() => {
            setactive(1);
          }}
          className={`flex space-x-2 sm:space-x-3 py-2 cursor-pointer ${
            active === 1
              ? " font-medium border-b-2 border-[#017297]"
              : "text-gray-400"
          }`}
        >
            <MdEventNote className='text-[25px]'/>
        <span>  My events</span>
        </div>
        <button className='px-4 py-2 rounded-sm bg-[#017297] text-white'>Register for Event</button>
      </div>

      {active === 0 && <UpdateAccount/>}
      {active === 1 && <MyEvents/>}

        </div>
       </div>

        </div>
    )
}

export default ManageAccount