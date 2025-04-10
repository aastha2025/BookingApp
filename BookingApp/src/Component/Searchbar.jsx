import React, { useEffect, useState } from "react";
import "./Searchbar.css";

function Searchbar() {
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [adult, setAdult] = useState(2);
    const [children, setChildren] = useState(0);
    const [room, setRoom] = useState(1);
    const [showCard, setShowCard] = useState(false); // State to toggle card visibility

    useEffect(() => {
        if (startDate && endDate && startDate > endDate) {
            alert(`Check-in date must be before check-out date`);
        }
    }, [startDate, endDate]);

    const toggleCard = () => {
        setShowCard((prev) => !prev); // Toggle card visibility
    };

    function decreaseAdult() {
        if(adult > 1)
        setAdult(adult-1);
        return ;
    }
    function increaseAdult() {
        setAdult(adult+1);
        return ;
    }
    function decreaseChild() {
        if(children > 0)
        setChildren(children-1);
        return ;
    }
    function increaseChild() {
        setChildren(children+1);
        return ;
    }
    function decreaseRoom() {
        if(room > 1)
        setRoom(room-1);
        return ;
    }
    function increaseRoom() {
        setRoom(room+1);
        return ;
    }
    // useEffect(()=>{
    //     if()
    // },[]);
    return (
        <div className="container">
            <div className="searchbar">
                <div className="upper-searchbar">
                    <div className="sec1">
                        <img src="/images/icons8-bed-32.png" alt="" />
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="sec2">
                        <img src="/images/icons8-sign-up-in-calendar-50.png" alt="" />
                        <div className="daty">
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <span>--</span>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="sec3" onClick={toggleCard}>
                        <img src="/images/icons8-bed-32.png" alt="" />
                        <div className="stay">
                            <div className="adult">{adult} adult</div>
                            <div className="adult">{children} children</div>
                            <div className="adult">{room} room</div>
                        </div>
                    </div>
                    <button className="sec-1">Search</button>
                </div>
                <div className="lower-searchbar">
                    <div className="lowerLeft">
                        <input type="checkbox" id="flights" className="checkbox" />
                        <label htmlFor="flights" className="check-box-text">I'm looking for flights</label>
                    </div>
                    {showCard && (
                        <div className="cardy">
                            <div className="data">
                                <div className="adult1">
                                    <p>Adult</p>
                                    <div className="myBtn">
                                        <p onClick={decreaseAdult}>-</p>
                                        <p>{adult}</p>
                                        <p onClick={increaseAdult}>+</p>
                                    </div>
                                </div>
                                <div className="adult1">
                                    <p>Children</p>
                                    <div className="myBtn">
                                        <p onClick={decreaseChild}>-</p>
                                        <p>{children}</p>
                                        <p onClick={increaseChild}>+</p>
                                    </div>
                                </div>
                                <div className="adult1">
                                    <p>Room</p>
                                    <div className="myBtn">
                                        <p onClick={decreaseRoom}>-</p>
                                        <p>{room}</p>
                                        <p onClick={increaseRoom}>+</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="myLine" />
                            <div className="parag">
                                <div className="pet">
                                    <p>Travelling with pets?</p>
                                    <input type="checkbox" id="pet" className="checkbox" />
                                </div>
                                <div className="cont">
                                    <p>Assistance animals aren’t considered pets.</p>
                                    <a href="">Read more about travelling with assistance animals</a>
                                </div>
                            </div>
                            <button className="DoneBtn" onClick={toggleCard}>Done</button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Searchbar;
