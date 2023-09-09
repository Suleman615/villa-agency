import Navbar from "../components/Navbar.jsx";
import TopHeading from "../components/TopHeading.jsx";
import SingleProperty from "../components/SingleProperty.jsx";
import Ideal from "../components/Ideal.jsx";
import Footer from "../components/Footer.jsx";

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