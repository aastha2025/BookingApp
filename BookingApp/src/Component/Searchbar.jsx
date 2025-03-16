import React from "react";
import "./SearchBar.css";

function Searchbar() {
    return (
        
        <div className="container">
            <div className="searchbar">
                <div className="upper-searchbar">
                    <button className="sec1"> <img src="/images/icons8-bed-32.png" alt="place"className="sec-img" />Where are you going?</button>
                    <button className="sec2"><img src="/images/icons8-sign-up-in-calendar-50.png" alt="calander" className="sec-img"/>Check-in date - Check-out date</button>
                    <button className="sec3"><img src="/images/icons8-person-50.png" alt="room"className="sec-img" />Adults,child,room</button>
                    <button className="sec-1">Search</button>
                </div>
                <div className="lower-searchbar">
                <input type="checkbox" id="flights" className="checkbox" />
                    <label htmlFor="flights" className="check-box-text">I'm looking for flights</label>
               
                </div>
            </div>

        </div>

    );
}
export default Searchbar;