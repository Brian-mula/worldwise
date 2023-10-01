import { useSearchParams } from "react-router-dom";

export default function MapDisplay() {
    const[search] = useSearchParams()
    const lat = search.get('lat');
    const lng = search.get('lng');
  return (
    <div className=" ">
        <h1>MapDisplay: {lat} {lng}</h1>
    </div>
  )
}
