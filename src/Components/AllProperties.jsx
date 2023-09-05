import {useState} from "react";

const AllProperties = () => {
    const [showall, setShowAll]=useState(true)
    const [apartment, setApartment]=useState(false)
    const [villaHouse, setVillaHouse]=useState(false)
    const [penthouse, setPenthouse]=useState(false)

    return(
        <>
        <div className='my-12 flex justify-center gap-12'>
            <button onClick={()=>{setShowAll(true),setApartment(false),setVillaHouse(false),setPenthouse(false)}} className={`${(showall)?'bg-orange-600':'bg-black hover:text-orange-600 bg-opacity-[85%]'} text-white font-semibold px-6 py-3 rounded`}>Show All</button>
            <button onClick={()=>{setShowAll(false),setApartment(true),setVillaHouse(false),setPenthouse(false)}} className={`${(apartment)?'bg-orange-600':'bg-black hover:text-orange-600 bg-opacity-[85%]'} text-white font-semibold px-6 py-3 rounded`}>Apartment</button>
            <button onClick={()=>{setShowAll(false),setApartment(false),setVillaHouse(true),setPenthouse(false)}} className={`${(villaHouse)?'bg-orange-600':'bg-black hover:text-orange-600 bg-opacity-[85%]'} text-white font-semibold px-6 py-3 rounded`}>Villa House</button>
            <button onClick={()=>{setShowAll(false),setApartment(false),setVillaHouse(false),setPenthouse(true)}} className={`${(penthouse)?'bg-orange-600':'bg-black hover:text-orange-600 bg-opacity-[85%]'} text-white font-semibold px-6 py-3 rounded`}>Penthouse</button>

        </div>
        </>
    )

}

export default AllProperties;