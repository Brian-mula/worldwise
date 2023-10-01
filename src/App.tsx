import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Cities from "./pages/Cities";
import CityDetails from "./pages/CityDetails";
import Countires from "./pages/Countires";
import Form from "./pages/Form";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
      const response = await fetch("http://localhost:3001/cities");
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
  return (
   <div>
    
    <BrowserRouter>
    
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="products" element={<Products/>} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="app" element={<AppLayout/>} >
      <Route index element={<Navigate to="cities" />} />
      <Route path="cities" element={<Cities cities={cities} isLoading={isLoading}/>} />
      <Route path="cities/:id" element={<CityDetails />} />
      <Route path="countries" element={<Countires cities={cities} />} />
      <Route path="form" element={<Form/>} />
       </Route>
    <Route path="*" element={<NotFoundPage/>} />

   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
