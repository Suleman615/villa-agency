import image from '../assets/d.jpg'
const PropertyCard=()=>{
    return(
        <>
        <div  className='min-w-[250px]  lg:min-w-[200px] max-w-[350px]   bg-gray-100 p-6 rounded-xl mt-4'>
            <img className='rounded-xl' src={image} alt=""/>
            <span className='flex justify-between mt-6' >
                <p className='w-fit bg-orange-600 bg-opacity-30 px-3 py-1 rounded'>Luxury Villa</p>
                <p className='font-bold text-2xl sm:text-lg  md:text-2xl text-orange-600'>$ 4.536.00</p>
            </span>
            <h1 className='font-bold text-xl my-6'>18 New Street Miami, OR 97219</h1>
            <div className='pb-6 border-b-[1px] border-gray-200 mb-6'>
                <span className='flex gap-4'>
                <p>Bedrooms: <span className='font-bold'>8</span></p>
                <p>Bathrooms: <span className='font-bold'>8</span></p>
                </span>
                <span className='flex gap-4'>
                <p>Area: <span className='font-bold'>450m2</span></p>
                <p>Floor: <span className='font-bold'>3</span></p>
                </span>
                <p>Parking: <span className='font-bold'>8 spots</span></p>
            </div>
<div className='flex justify-center'>
            <a className='bg-black w-fit hover:bg-orange-600  px-8 py-2 cursor-pointer rounded-3xl text-white text-md font-semibold ' >Schedule a visit</a>
</div>
        </div>
        </>
    )
}

export default PropertyCard;