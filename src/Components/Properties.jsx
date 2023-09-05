import PropertyCard from "./PropertyCard.jsx";

const Properties=()=>{
    return(
        <>
        <div className='py-24'>
<div className='flex flex-col items-center'>
    <span className=''>
    <hr className="border-0 w-4 h-[3px] bg-red-400 rotate-90   -ms-1  "/>
    <p className="font-bold text-red-400 ps-2   ms-1 -mt-[18px] text-[19px] border-red-600">BEST DEAL</p>
    </span>
    <h1 className='text-4xl mt-8 font-bold w-80 leading-snug text-center'>We Provide The Best Property You Like</h1>

</div>
            <div className='p-4 xl:px-28 h-auto flex pt-20 gap-4 flex-wrap  justify-around'>
<PropertyCard/>
                <PropertyCard/>
                <PropertyCard/>
                <PropertyCard/>
                <PropertyCard/>
                <PropertyCard/>

            </div>


        </div>
        </>
    )
}

export default Properties;