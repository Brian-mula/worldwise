import { createContext, useContext, useEffect, useState } from "react";
import { CitiType } from "../types/cittType";

const BASE_URL = "http://localhost:3001"

interface CitiesContextProps{
    cities:CitiType[];
    isLoading:boolean;
    city:CitiType | null;
    getCity:(id:number)=>void;
}

const CitiesContext = createContext<CitiesContextProps>({} as CitiesContextProps);

function CitiesProvider({children}:{children:React.ReactNode}){
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState<CitiType | null>(null);
  
    useEffect(() => {
      async function fetchCities() {
        try {
          setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const json = await response.json();
        setCities(json);
        
        } catch (error) {
          alert("Error fetching cities");
        }finally{
          setIsLoading(false);
        }
      }
      fetchCities();
    }, []);

    async function getCity(id:number){
        try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities/${id}`);
        const json = await response.json();
        setCity(json);
        } catch (error) {
            alert("Error fetching city");
        }finally{
            setIsLoading(false);
        }
    }

    return(
        <CitiesContext.Provider value={{
            cities,
            isLoading,
            city,
            getCity
        
        }}>
            {children}
        </CitiesContext.Provider>
    )

}

function useCities(){
    const context = useContext(CitiesContext);
    if(!context){
        throw new Error("useCities must be used within a CitiesProvider");
    }
    return context;
}
export { CitiesProvider, useCities };
