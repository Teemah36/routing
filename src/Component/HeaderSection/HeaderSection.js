import "./HeaderSection.css";
import { Link } from "react-router-dom";
import cvbcv1 from "./cvbcv1.png";



function HeaderSection() {
    return(
        <div className="nav-bar">
               <img src={cvbcv1} />
            <ul>
                    <Link to="">
                         <li>Home</li>
                    </Link>

                    <Link to="/contact us">
                         <li>Executive team</li>
                    </Link>

                    <Link to="/FQA">
                         <li>Strategy</li>
                    </Link>

                    <Link to="Term and condition">
                         <li>Free resources</li>
                    </Link>

                    <Link to="/">
                         <li>more</li>
                    </Link>

                    <Link to="">
                         <button>Register</button>
                    </Link>
            </ul>
        </div>
    )
}

export default HeaderSection;