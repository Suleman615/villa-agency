import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from "./Components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import PropertiesPage from "./pages/Properties.jsx"
import Slider from "./Components/Slider.jsx";
import Featured from "./Components/Featured.jsx";
import Video from "./Components/Video.jsx";
import Ideal from "./Components/Ideal.jsx";
import Properties from "./Components/Properties.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import PropertiesHeading from "./Components/TopHeading.jsx";
import AllProperties from "./Components/AllProperties.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import SingleProperty from "./Components/SingleProperty.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";


function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/home"  element={<Home />}/>
                <Route path="/properties"  element={<PropertiesPage />}/>
                <Route path="/details"  element={<PropertyDetails />}/>
                <Route path="/contact"  element={<ContactUsPage/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
