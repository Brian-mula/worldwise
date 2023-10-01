import { Link } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

export default function HomePage() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col justify-center items-center max-h-screen h-[calc(100vh-5rem)]">
        <h1 className="text-5xl py-2 font-bold">You Travel the world</h1>
        <h2 className="text-3xl py-2 max-w-md text-center font-bold">Worldwise keeps track of your adventures</h2>
        <p className="text-center max-w-md">A world map that tracks your foot steps into every city you can think of .Never forget your wonderful experiences and show your friends how you have wondered the world</p>

        <Link to="/app" className="btn btn-primary mt-4">Start Tracking Now</Link>
    </div>
    </>
  )
}
