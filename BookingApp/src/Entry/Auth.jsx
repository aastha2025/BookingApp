import React, {useEffect, useState} from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPhoto, setUsername, setEmail } from "../feature/user/userSlice";
function Auth(){
    const [email, setemail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.username);
    useEffect(() => {
        if (username) {
            console.log("Redirecting to home as username exists:", username); // Debugging log
            navigate("/");
        }
    }); 
    

    const isValidEmail = (email) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const generateUsername = (email) => {
        if (!email.includes("@")) return "InvalidUser"; // Default for invalid emails
        const username = email.split("@")[0].replace(/[^a-zA-Z0-9]/g, ""); // Remove special characters
        return username.slice(0, 10); // Limit to 10 characters
    };
    const handlefalsemail = () => {
        if(!email){
            setError("Email address cannot be empty");
        }
        else if (!isValidEmail(email)){
            setError("Please enter a valid email address.");
        }
        else{
            setError("");
            dispatch(setUsername(generateUsername(email)));
            dispatch(setPhoto('/images/d1.jpg'));
            console.log("Photo set in Redux:", '/images/d1.jpg');
            dispatch(setEmail(email));
            console.log("Email submitted successfully", email)

        }
    };
    return (
        <div>
            <div className="signin-container">
                <h4>Sign in or create an account</h4>
                <p>You can sign in using your Booking.com account to access our services.</p>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email address" value = {email}
            onChange={(e) => setemail(e.target.value)}
            className={error? "error" :""}/>

            {error && <span className="error-text">{error} </span>}
            <button  onClick= {handlefalsemail} className="btn-email">Continue with email</button>
            <p className="para">or use one of these options</p>
            <div className="btn">
                <button className="social-btn "><img src="/images/google.png" alt="google" /></button>
                <button className="social-btn "><img src="/images/facebook.png" alt="facebook" /></button>
            </div>
            <p className="term">
                By signing in or creating an account, you agree with our <a href="#">terms & Conditions</a> and <a href="#">Privacy Statement</a>
            </p>
            <footer className="footer">All rights reserved.<br/>Copyright (2006-2025) - Booking.com</footer>
            </div>
        </div>
    )
}
export default Auth;