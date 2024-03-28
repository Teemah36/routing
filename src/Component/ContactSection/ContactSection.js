import operation from "./operation.png";
import "./ContactSection.css";

function ContactSection(){
    return(
        <div> first name
            <button>first name</button>

            <div> last name
                <button>first name</button>
            </div>

            <div> email
                <button>email</button>
            </div>

            <div>
                <h2>what can we help you with?</h2>
            </div>

            <div>
                <button>type in your message</button>
            </div>

            <button>join mailing list</button>

            <div>
                <button>we are always here to help you</button>
                <button>Hello There!</button>
                <img src={operation}/>
            </div>
        </div>

        
        
    )
}

export default ContactSection;