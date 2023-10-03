import { Link, Outlet } from "react-router-dom";
import MapDisplay from "../components/map/MapDisplay";
import AppNav from "../components/nested/AppNav";

export default function AppLayout() {
  
  return (
    <div className="flex h-screen ">
        <div className="w-1/3 bg-gray-800 py-3">
        <Link to="/" className="text-3xl flex justify-center uppercase text-white">Worldwise</Link>

        <AppNav/>

        <Outlet/>
        </div>  

        <div className="w-2/3 px-2 h-screen bg-gray-300"  >
          <MapDisplay/>
        </div>
    </div>
  )
}
