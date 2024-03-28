import fedex from '../images/airbnb.png';
import fedex from '../images/hubspot.png';
import fedex from '../images/google.png';
import fedex from '../images/microsoft.png';
import fedex from '../images/walmart.png';
import fedex from '../images/fedex.png';
import "./IconSection.css";



function IconSection() {
    return(
        <div>
            <h2>featured In</h2>
            <img src={airbnb}/>
            <img src={hubspot}/>
            <img src={google}/>
            <img src={microsoft}/>
            <img src={walmart}/>
            <img src={fedex}/>
        </div>
    )
}

export default IconSection;