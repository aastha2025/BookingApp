
import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUsername, setPhoto, setEmail, clearData } from '../feature/user/userSlice';
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const username = useSelector((state) => state.user.username);
    const photo = useSelector((state) => state.user.photo);
    console.log("Photo in Navbar:", photo);
    const dispatch = useDispatch();
    return (
        <nav className="navbar">
            <div className="container">
                <div className="uppernavbar">
                    <div className="logo">
                        <a href="/">StayScape</a>
                    </div>
                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <div className={`nav-right ${menuOpen ? "open" : ""}`}>
                        <button className="nav-item">INR</button>
                        <button className="nav-item"><img src="/images/india.png" alt="india" className='icons' /></button>
                        <button className="nav-item"><img src="/images/icons8-unverified-account-50.png" alt="ques" className='icons' /></button>
                        <button className="nav-item">List your property</button>
                        {username ? (
                            <div className="user-info">
                                <div className="user-photo-container">
                                    {/* alert({photo}); */}
                                    
                                    <img src={photo} alt="User" className="user-photo" />
                                    <span className="username">hello, {username}</span>
                                </div>
                                <button
                                    className="signout-btn"
                                    onClick={() => {
                                        dispatch(clearData());
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>


                        ) : (
                            <div className="auth-links">
                                <a href='/auth' className="login">Register</a>
                                <a href='/auth' className="login">Sign In</a>
                            </div>
                        )}
                    </div>
                </div>
                <div className={`lowernavbar ${menuOpen ? "open" : ""}`}>
                    <a href='/' className="nav-a"><img src="/images/icons8-bed-50.png" alt="Stays" className='nav-img' /> Stays</a>
                    <a href='/flight' className="nav-a"><img src="/images/icons8-plane-50.png" alt="flights" className='nav-img' /> Flights</a>
                    <a href="/hotel" className="nav-a"><img src="/images/icons8-plane-50.png" alt="flights + hotels" className='nav-img' /> Flight + Hotel</a>
                    <a className="nav-a"><img src="/images/icons8-car-30.png" alt="car rental" className='nav-img' /> Car rental</a>
                    <a className="nav-a"><img src="/images/icons8-business-network-50.png" alt="attraction" className='nav-img' /> Attractions</a>
                    <a className="nav-a"><img src="/images/icons8-airport-50.png" alt="airport taxi" className='nav-img' /> Airport taxis</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;