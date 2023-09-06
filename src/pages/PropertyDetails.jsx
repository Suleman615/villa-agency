import Navbar from "../Components/Navbar.jsx";
import TopHeading from "../Components/TopHeading.jsx";
import SingleProperty from "../Components/SingleProperty.jsx";
import Ideal from "../Components/Ideal.jsx";
import Footer from "../Components/Footer.jsx";

const PropertyDetails=()=>{
    return(
        <>
            <Navbar page='details'/>
            <TopHeading target='SINGLE PROPERTY'/>
            <SingleProperty/>
            <Ideal/>
            <Footer/>
        </>
    )
}

export default PropertyDetails;