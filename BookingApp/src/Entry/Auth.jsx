import React from "react";
import "./Auth.css";
function Auth(){
    return (
        <div>
            <div className="signin-container">
                <h3>Sign in or create an account</h3>
                <p>You can sign in using your Booking.com account to access our services.</p>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email address"
            value={email} />


            <p className="or">pr use one of these options</p>
            <div className="btn">
                <button className="social-btn "></button>
                <button className="social-btn "></button>
                <button className="social-btn"></button>
            </div>
            <p className="term">
                By signing in or creating an account, you agree with our <a href="#">terms & Conditions</a> and <a href="#">Privacy Statement</a>
            </p>
            <footer>Copyright 2006-2025 - Booking.com</footer>
            </div>
        </div>
    )
}
export default Auth;