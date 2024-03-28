import airbnb from './airbnb.png';
import hubspot from './hubspot.png';
import google from './google.png';
import microsoft from './microsoft.png';
import walmart from './walmart.png';
import fedex from './fedex.png';
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