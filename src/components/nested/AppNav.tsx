import { NavLink } from "react-router-dom";

export default function AppNav() {
  return (
    <div className="flex justify-center items-center pt-5">
        <ul className="flex" >
            <li className="bg-gray-600 py-2 px-3 rounded-lg">
                <NavLink to="cities" className="text-white">Cities</NavLink>
            </li>
            <li className="bg-gray-600 py-2 px-3 rounded-lg mx-2">
                <NavLink to="countries" className="text-white">Countries</NavLink>
            </li>
        </ul>
    </div>
  )
}
