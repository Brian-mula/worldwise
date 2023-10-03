import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
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
 
  return (
   
    <CitiesProvider>

    <BrowserRouter>
    
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="products" element={<Products/>} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="app" element={<AppLayout/>} >
      <Route index element={<Navigate to="cities" />} />
      <Route path="cities" element={<Cities />} />
      <Route path="cities/:id" element={<CityDetails />} />
      <Route path="countries" element={<Countires />} />
      <Route path="form" element={<Form/>} />
       </Route>
    <Route path="*" element={<NotFoundPage/>} />

   </Routes>
   </BrowserRouter>
    </CitiesProvider>
  
  );
}

export default App;
