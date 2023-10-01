import { useParams } from "react-router-dom";

export default function CityDetails() {
    const {id} = useParams();
  return (
    <div className="flex items-center justify-center text-white pt-4">
        <div>
            <h1>CityDetails :{id}</h1>
        </div>
    </div>
  )
}
