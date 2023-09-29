import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";

function App() {
  return (
   <div>
    <Navbar/>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="products" element={<Products/>} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="*" element={<div>Not Found</div>} />

   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
