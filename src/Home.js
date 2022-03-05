import SliderHero from "./comp_home/SliderHero";
import Services from "./comp_home/Services";
import Games from "./comp_home/Games";

function Home(){
    return (
        <div>
            <SliderHero />
            <Services/>
            <Games />
        </div> 
    )
}

export default Home;