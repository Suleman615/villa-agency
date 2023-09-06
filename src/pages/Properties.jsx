import Navbar from "../Components/Navbar.jsx";
import AllProperties from "../Components/AllProperties.jsx";
import Footer from "../Components/Footer.jsx";
import TopHeading from "../Components/TopHeading.jsx";

const PropertiesPage = () => {
    return(
        <>
            <Navbar page='properties'/>
            <TopHeading target='PROPERTIES'/>
            <AllProperties/>
            <Footer/>
        </>
    )

}
export default PropertiesPage