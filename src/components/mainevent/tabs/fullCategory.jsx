import React,{useState,useEffect} from "react";
import user from "../../../assets/png/customerpic.png";
import { MdNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { eventParticipants } from "../../../Utils/api";
const FullCategory = ({ setactive ,filtercat, id}) => {
  const navigate = useNavigate();
  const [data, setdata] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setloading] = useState(false)
  const {token} = useSelector((state) => state.user)
  useEffect(() => {
    async function allParticipant() {
      setloading(true)
      await eventParticipants(token, id, page)
      .then((res) => {
        console.log(res.data.data)
        const {data, paging} = res.data
        setloading(false)
        const totalPage = Math.ceil(paging?.totalItems / 10);
        console.log(totalPage);
        const filter = data?.filter((val) => val.category === filtercat)
        setdata(filter)
        
        if(page < totalPage) {
          setPage(page+1)
        }
      })
      .catch((err) => {
        console.log(err)
        setloading(false)
      })
    }

    allParticipant()
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
          <span className="mr-2 uppercase">{`${filtercat}`}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-[906px]:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
      
      
      {loading && (
          <div className="col-span-full w-full h-[300px] flex items-center justify-center">
            <div className="w-[50px] h-[50px] border-l-2 rounded-full border-b-2 animate-spin"></div>
          </div>
        )}
        {!loading && data?.map(({category, participant}, j) => {
          return (
            <div
              key={j}
              className="w-full h-[280px] bg-[#FD6EBB] overflow-hidden sm:h-[280px] md:h-[300px] xl:h-[350px] rounded-sm"
            >
              <div className="w-full h-[160px] sm:h-[160px] md:h-[180px] xl:h-[220px] rounded-t-sm">
                <img
                  src={participant?.image?.url || user}
                  alt="aa"
                  className="w-full h-full bg-cover rounded-t-sm"
                />
              </div>
              <div className="w-full space-y-2 px-4 py-4 text-center">
              <p className="text-[#0C071E] font-semibold">{`${participant?.firstName} ${participant?.lastName}`}</p>
                    <p className="text-[#0C071E] ">{`as ${category}`}</p>
                <button
                  onClick={() => {
                    navigate(`/voting/${participant?._id}`);
                  }}
                  className="text-white py-2 rounded-sm bg-[#0C071E] w-full text-center "
                >
                  Vote
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
