import { CountryType } from "../../types/CountryType";

export default function CountryItem({ country}:{country: CountryType}) {
  return (
    <div className='w-40 p-4 rounded-md bg-gray-400 shadow-md my-2'>
        <span className='text-center text-3xl py-3'>{country.flag}</span>
        <p>Country Name</p>
    </div>
  )
}
