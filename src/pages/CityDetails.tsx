import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date:string)=>{
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(date))
}

export default function CityDetails() {
  const navigate = useNavigate();
    const {id} = useParams();
    const {city,getCity,isLoading} = useCities();

    useEffect(() => {
        getCity(Number(id));
    },[id]);
  return (
    <>
    {isLoading && <div className="text-white flex justify-center py-3"> Still Loading</div>}
    {city && (
        <div className=" text-white pt-4 bg-gray-400 rounded-md w-96 px-5 mx-5 my-4">
      
        <div className="mb-4">
        <h3 className="uppercase font-semibold text-sm text-gray-700">City name</h3>
         <h2><span>{city.emoji}</span> {city.name}</h2>
        </div>
        <div className="mb-4">
        <h3 className="uppercase font-semibold text-sm text-gray-700">You went to {city.name} on</h3>
        <p>{formatDate(city.date)}</p>
        </div>
         <div className="mb-4">
         <h3 className="uppercase font-semibold text-sm text-gray-700">Your notes</h3>
         {
          city.notes.length > 0 ? (
            <p className="text-sm max-w-[20rem]">{city.notes}</p>
          ):(<p>No notes yet</p>)
         }
         </div>
         <div className="flex justify-start items-center pb-3">
         <button onClick={()=>navigate(-1)} type="button" className="bg-gray-500 py-2 px-3 rounded-md w-20">Back</button>
         </div>
     </div>
        )
    }
    
    </>
  )
}

