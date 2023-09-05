import Navbar from "../Components/Navbar.jsx";
import Featured from "../Components/Featured.jsx";
import Video from "../Components/Video.jsx";
import Slider from "../Components/Slider.jsx";
import Ideal from "../Components/Ideal.jsx";
import Properties from "../Components/Properties.jsx";


const Home = ()=>{
    return(
        <>
        <Navbar/>
            <Slider/>
            <Featured/>
            <Video/>
            <Ideal/>
            <Properties/>

            
        </>
    )

};

export default Home

