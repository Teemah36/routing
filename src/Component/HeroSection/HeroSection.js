import "./HeroSection.css";
import tallbuilding from "./tall building.jpeg"

function HeroSection () {
    return(
        <div>
            <img src={tallbuilding}/>
            <div>
                <h2>Real Estate Investment Oppurtunities Design For You</h2>
                <p>A National Mortage AND Sales Brokage Since 1995</p>
                <button>current oppurtunties</button>
                <button>learn more about investing</button>
            </div>
        </div>
    )
}

export default HeroSection;