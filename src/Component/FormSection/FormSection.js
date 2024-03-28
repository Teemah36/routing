import book from"./Book_Cover_Mockup 1.png";
import "./FormSection.css";

function FormSection(){
    return(
        <div>
            <h2>join our email list now and get a free industry ebook</h2>
            <button>FIRST NAME</button>
            <button>LAST NAME</button>
            <button>email</button>
            <h2>are ypu an accredited investor?</h2>
            <button>yes</button>
            <button>no</button>
            <h2>how did you hear about us?</h2>
            <div></div>
            <button>join mailing list</button>
            <img src={book}/>
            <div>
                <li>benefit of investing in real estate during uncertain times</li>
                <li>tax advantages of investing</li>
                <li>active vs passive investing</li>
                <li>how limited partnership work</li>
                <li>how to find deals that are recession resistant</li>
            </div>
            <div>
                <li>market that are reccesive resillent</li>
                <li>how to analyze deals in a raising interest rate environment</li>
                <li>the common mistake real estate investors make when searching for deals to invest in.</li>
            </div>

            <button>
                ready to invest?
                <button>current oppurtunities</button>
            </button>
        </div>
    )
}

export default FormSection;