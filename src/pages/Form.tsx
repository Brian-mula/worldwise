import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [cityName, setCityName] = useState('');
    const [date, setDate] = useState(Date.now());
    const [notes, setNotes] = useState('');
    const navigate = useNavigate();
  return (
    <div className="w-full max-w-xs bg-slate-500 p-4 rounded-md mt-5 mx-3 ">
      <form>
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
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={date}
            onChange={(e)=>setDate(Number(e.target.value))}
            type="text"
            placeholder="Date"
          />
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
            <button type="button" className="btn btn-success">
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
