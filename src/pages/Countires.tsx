import CountryItem from "../components/city/CountryItem";
import { useCities } from "../contexts/CitiesContext";
import { CountryType } from "../types/CountryType";

export default function Countires() {
  const {cities}= useCities();
  const countries: CountryType[] = cities.reduce((acc:CountryType[], city)=>{
    if(!acc.map((city:CountryType)=>city.country).includes(city.country)){
      return [...acc, {country: city.country, flag: city.emoji}]
    }else{
      return acc;
    }
  },[]);
  return (
    <div className="text-white flex justify-center py-3">
        <div className="grid grid-cols-2 gap-3">
            {
                countries.map((country)=>(
                    <CountryItem key={country.country} country={country} />
                ))
            }
        </div>
    </div>
  )
}
