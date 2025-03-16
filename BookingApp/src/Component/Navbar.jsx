import React from 'react';
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="uppernavbar">
                    <div className="logo">
                        <a href="/">BookingApp</a>
                    </div>
                    <div className="nav-right">
                        <button className="nav-item">INR</button>
                        <button className="nav-item"><img src="" alt="india" /></button>
                        <button className="nav-item"><img src="/images/icons8-unverified-account-50.png" alt="ques" className='icons' /></button>
                        <button className="nav-item">List your property</button>
                        <button className="login">Register</button>
                        <button className="login">Sign In</button>
                    </div>
                </div>
                <div className="lowernavbar">
                    <button className="nav-a"><img src="/images/icons8-bed-50.png" alt="Stays" className='nav-img' />Stays</button>
                    <button className="nav-a"> <img src="/images/icons8-plane-50.png" alt="flights" className='nav-img' /> Flights</button>
                    <button className="nav-a"> <img src="/images/icons8-plane-50.png" alt="flights + hotels" className='nav-img' /> Flight + Hotel</button>
                    <button className="nav-a"> <img src="/images/icons8-car-30.png" alt="car rental" className='nav-img' /> Car rental</button>
                    <button className="nav-a"> <img src="/images/icons8-business-network-50.png" alt="attraction" className='nav-img' /> Attractions</button>
                    <button className="nav-a"> <img src="/images/icons8-airport-50.png" alt="airport taxi" className='nav-img' /> Airport taxis</button>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
