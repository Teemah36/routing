import "./AboutSection.css";
import Rectangle8 from "./Rectangle 8.png";

function AboutSection (){
    return(
        <div>
            <div>
                <h2>--About</h2>

                <h3>Atlas Limited Partnership</h3>
                <p>when you invest with atlas, you are more than a number;you are a partner.as a partnerwith us,you can access oppurtunities usually reserved only for the largest institutional investors. you can access a team driven only by excellence and results. you can access real estate investment oppurtunities design with ypu in mind.</p>
            </div>

            <div>
                <img src={Rectangle8}/>
            </div>
        </div>
    )
}

export default AboutSection;