import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useUlrPosition } from "../hooks/useUrlPosition";

export default function Form() {
  const navigate = useNavigate();
    const [mapLat, mapLng] = useUlrPosition();
    const {createCity} = useCities();

    const [cityName, setCityName] = useState('');
    const [countryName, setCountryName] = useState('');
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState('');
    const [isLoadingGeoLocation, setIsLoadingGeoLocation] = useState(false);
    const [loadingError, setLoadingError] = useState("");
    //const [emoji] = useState("");

    const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"

    useEffect(() => {
      async function fetchGeoLocation(){
        try {
          setLoadingError("");
          setIsLoadingGeoLocation(true);
          const response = await fetch(`${BASE_URL}?latitude=${mapLat}&longitude=${mapLng}`);
          const data = await response.json();
          if(!data.countryCode){
            throw new Error("City not found");
          }
          setCityName(data.city || data.locality || "");
          setCountryName(data.countryName || "");
          //setEmoji(convertToEmoji(data.countryCode || "254"));
          
          
        } catch (error) {
          setLoadingError(error.message);
        }finally{
          setIsLoadingGeoLocation(false);
        }
      }
      fetchGeoLocation();
    },[mapLat, mapLng]);
    console.log(countryName)
    
    if (isLoadingGeoLocation)  return <div className="text-white">Loading...</div>
    if (loadingError) return <div className="text-white">{loadingError}</div>

    async function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
      e.preventDefault();
      const newCity = {
        id: Date.now(),
        name: cityName,
        country: countryName,
        notes: notes,
        emoji: "🇰🇪",
        date: date.toISOString(),
        position: {
          lat: Number(mapLat),
          lng: Number(mapLng)
        }
      }
      await createCity(newCity);
      //navigate('cities');
    }
    
  return (
    <div className="w-full max-w-sm bg-slate-500 p-4 rounded-md mt-5 mx-3 ">
      <form >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City Name
          </label>
         
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={cityName}
            onChange={(e)=>setCityName(e.target.value)}
            type="text"
            placeholder="Username"
          />
          
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            When did you visit?
          </label>
         
          <div className="">
          <DatePicker selected={date} onChange={(date: Date)=>setDate(date)} />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Some Notes
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={notes}
            onChange={(e)=>setNotes(e.target.value)}
            type="text"
            placeholder="Notes"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
            <button onClick={handleSubmit} type="button" className="btn btn-success">
                Add
            </button>
            <button onClick={(e)=>{
                e.preventDefault();
                navigate(-1);

            }} type="button" className="btn btn-warning">
                Cancel
            </button>
        </div>
      </form>
    </div>
  );
}
