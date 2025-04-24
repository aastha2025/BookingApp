import React from "react";
import style from "./Taxi.module.css";
import gb from "../Flight/global.module.css";
import CarTransp from "./CarTransp";
import  {CarTransportation} from'./data2';
function Taxi () {
    return(
        <div className={style.taxi}>
            <div className={gb.container}>
            <h2 className={style.heading}>Book your private airport taxi</h2>
            <p className={style.para}>Easy transportation between the airport and your accommodations</p>
            </div>

        {/* Card */}
            <div className={gb.container}>
                            <h2 className={style.travel}>Your account, your travel</h2>
                            <div className={style.cardsec}>
                                <div className={style.travelleft}>
                                    <h5 className={style.savemoney}>All your trip details in one place</h5>
                                    <p className={style.save}>Sign in to book faster and manage your trip with ease</p>
                                    <div className={style.travelbtn}>
                                        <button className={style.signin}> Sign in</button>
                                        <button className={style.register}>Register</button>
                                    </div>
                                </div>
                                <div className={style.travelright}>
                                    <img src="/images/Genius.png" alt="I'm here" width={"90px"} height={"110px"} />
                                </div>
                            </div>
                        </div>


        {/* transportation */}
 <h2 className={style.head}>Airport transportation made easy</h2>
        <CarTransp  item={CarTransportation}/>
       

        </div>
    );
}

export default Taxi;