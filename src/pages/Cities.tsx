import CitiItem from "../components/city/CitiItem";
import { useCities } from "../contexts/CitiesContext";

export default function Cities() {
  const {cities, isLoading} = useCities();

  if(isLoading){
    return <div className="text-white flex justify-center py-3">
        <div>
            <h1>Loading...</h1>
        </div>
    </div>
  }
  return (
    <div className="text-white flex justify-center py-3 px-4">
        <div>
            <ul>
                {cities.map((city) => (
                    <CitiItem key={city.id} city={city} />
                ))}
            </ul>
        </div>
    </div>
  )
}
