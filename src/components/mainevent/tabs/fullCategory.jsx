import React,{useState,useEffect} from "react";
import next from "../../../assets/png/next.png";
import { MdNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { eventCategories } from "../../../Utils/api";
const FullCategory = ({ setactive, id, setCatId}) => {
  const navigate = useNavigate();
  const [data, setdata] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setloading] = useState(false)
  const {token} = useSelector((state) => state.user)
  useEffect(() => {
    async function eventCats() {
      setloading(true)
      await eventCategories(id, page)
      .then((res) => {
        console.log(res.data.data)
        const {data} = res.data
        setloading(false)
        const totalPage = Math.ceil(data?.paging?.totalItems / 10);
        console.log(totalPage);
       
        setdata(data?.data)
        
        if(page < totalPage) {
          setPage(page+1)
        }
      })
      .catch((err) => {
        console.log(err)
        setloading(false)
      })
    }

    eventCats()
  },[])
  return (
    <div className="let swipeIn space-y-6 sm:space-y-8">
      <div className="space-x-2 items-center flex">
        <div
          onClick={() => {
            setactive(1);
          }}
          className="cursor-pointer h-fit w-fit"
        >
          <MdNavigateBefore className="text-white text-[25px]" />
        </div>
        <div className="text-white border-b py-2 border-[#017297]">
          {`Category:`}{" "}
         
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-[906px]:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
      
      
      {loading && (
          <div className="col-span-full w-full h-[300px] flex items-center justify-center">
            <div className="w-[50px] h-[50px] border-l-2 rounded-full border-b-2 animate-spin"></div>
          </div>
        )}
        {!loading && data?.map(({talent, country, _id}, j) => {
          return (
            <div
              key={j}
              className="w-full h-[280px] bg-[#FD6EBB] overflow-hidden sm:h-[280px] md:h-[300px] xl:h-[350px] rounded-sm"
            >
              <div className="w-full h-[160px] items-center flex justify-center sm:h-[160px] md:h-[180px] xl:h-[220px] rounded-t-sm">
                <img
                  src={next}
                  alt="aa"
                  className="object-contain  rounded-t-sm"
                />
              </div>
              <div className="w-full space-y-2 px-4 py-4 text-center">
              <p className="text-[#0C071E] font-semibold">{`${talent?.name}`}</p>
                    <p className="text-[#0C071E] ">{`in ${country?.name}`}</p>
                <button
                 onClick={() => {
                  setCatId(_id)
                  setactive(3)
                  }}
                  className="text-white py-2 rounded-sm bg-[#0C071E] w-full text-center "
                >
                  View Detail
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FullCategory;
