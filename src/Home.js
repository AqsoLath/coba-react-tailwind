import SliderHero from "./comp_home/SliderHero";
import Services from "./comp_home/Services";
import Games from "./comp_home/Games";
import Download from "./comp_home/Download"

function Home(){
    return (
        <div>
            <SliderHero />
            <Services/>
            <Games />
            <Download />
        </div> 
    )
}

export default Home;