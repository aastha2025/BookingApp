import React from "react";
import "./Destination.css";
import Des1 from './Des1';
import Des2 from './Des2';

function Destination(){
    return(
        <div className="destination">
            <div className="container">
                <h2>Trending destination</h2>
                <p className="p1">Most popular choices for travelers from India</p>
                <div className="upper-des">
                    < Des1 />
                </div>
                <div className="lower-des">
                    <Des2 />
                </div>
            </div>
        </div>
    );

}
export default Destination;