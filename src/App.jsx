import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import PropertiesPage from "./pages/Properties.jsx"
import Slider from "./components/Slider.jsx";
import Featured from "./components/Featured.jsx";
import Video from "./components/Video.jsx";
import Ideal from "./components/Ideal.jsx";
import Properties from "./components/Properties.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import PropertiesHeading from "./components/TopHeading.jsx";
import AllProperties from "./components/AllProperties.jsx";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import SingleProperty from "./components/SingleProperty.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";


function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/home"  element={<Home />}/>
                <Route path="/properties"  element={<PropertiesPage />}/>
                <Route path="/details/:id"  element={<PropertyDetails/>}/>
                <Route path="/contact"  element={<ContactUsPage/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
