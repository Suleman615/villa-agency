import Navbar from "../Components/Navbar.jsx";
import TopHeading from "../Components/TopHeading.jsx";
import ContactUs from "../Components/ContactUs.jsx";
import Footer from "../Components/Footer.jsx";

const ContactUsPage=({})=>{
    return(
        <>
            <Navbar page='contact'/>
            <TopHeading target='CONTACT US'/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default ContactUsPage