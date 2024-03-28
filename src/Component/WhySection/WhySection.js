import expert from "./expert.png";
import daigo from "./daigo.png";
import asset from "./asset.png";
import hassle from "./hassle.png";
import stable from "./stable.png";
import tax from "./tax.png";
import "./WhySection.css";


function WhySection(){
    return(
        <div>
            <div>
                <h3>-why-</h3>
                <h2>Atlas limited partnerships</h2>
                <p>we bring our members high quality commercial investment oppurtunities that are normally hidden away in country clubs or investment firms.investors throught equity street capital get access to a diverse range of retail, multi-family and office building investment oppurtunities.</p>
            </div>

           <div className="icons">
                <div className="expert">
                    <img src={expert}/>
                    <h2>investing alongside the experts</h2>
                    <p>we bring our members high quality commercial investment oppurtunities that are normally hidden away in country clubs or investment firms.investors throught equity street capital get access to a diverse range of retail.</p>
                </div>

                
                <div className="daigo">
                    <img src={daigo}/>
                    <h2>invest in san Diago</h2>
                    <p>we bring our members high quality commercial investment oppurtunities that are normally hidden away in country clubs or investment firms.investors throught equity street capital get access to a diverse range of retail,</p>
                </div>


                <div className="asset">
                    <img src={asset}/>
                    <h2>invest in stong Asset classes</h2>
                    <p>we bring our members high quality commercial investment oppurtunities that are normally hidden away in country clubs or investment firms.investors throught equity street capital get access to a diverse range of retail,</p>
                </div>


                <div className="hassle">
                    <img src={hassle}/>
                    <h2>Hassle free investing</h2>
                    <p>we bring our members high quality commercial investment oppurtunities that are normally hidden away in country clubs or investment firms.investors throught equity street capital get access to a diverse range of retail,</p>
                </div>


                <div className="stable">
                    <img src={stable}/>
                    <h2>stable cashflow</h2>
                    <p>we bring our members high quality commercial investment oppurtunities that are normally hidden away in country clubs or investment firms.investors throught equity street capital get access to a diverse range of retail,</p>
                </div>
                

                <div className="tax">
                <img src={tax}/>
                    <h2>tax benefits</h2>
                    <p>we bring our members high quality commercial investment oppurtunities that are normally hidden away in country clubs or investment firms.investors throught equity street capital get access to a diverse range of retail,</p>
                </div>

                <div>
                    <button>current oppurtunities</button>
                    <button>learn more about investing</button>
                </div>
           </div>
        </div>
    )
}

export default WhySection;