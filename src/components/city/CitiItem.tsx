import { Link } from "react-router-dom";
import { CitiType } from "../../types/cittType";
const formatDate = (date:string)=>{
   return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(date))
}

export default function CitiItem({ city}:{city: CitiType}) {
    const {name, emoji,date} = city;
  return (
    <Link to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`} className='py-2 bg-gray-500 px-4 rounded-md flex justify-between w-80 my-3'>
        <div className="flex">
        <span className='text-2xl px-2'>{emoji}</span>
        <p className='text-white'>{name}</p>
        </div>
        <div className="flex items-center">
            <time>{formatDate(date)}</time>
            <span className="p-2 cursor-pointer bg-gray-700 hover:bg-orange-400 rounded-full h-3 w-3 flex justify-center items-center mx-2">&times;</span>
        </div>
    </Link>
  )
}
