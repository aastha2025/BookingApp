import React, { useState } from "react";
import "./Otp.css"; 

function Otp() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleChange = (element, index) => {
        let newOtp = [...otp];
        newOtp[index] = element.value;

        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }

        setOtp(newOtp);
    };

    const handleVerify = () => {
        const enteredOtp = otp.join("");
        if (enteredOtp.length === 6) {
            console.log("OTP submitted:", enteredOtp);
        } else {
            alert("Please enter all 6 digits.");
        }
    };

    return (
        <div className="otp-container">
            <h2>Verify your email address</h2>
            <p>We sent a verification code to your email. Enter this code to continue.</p>
            {/* <p className="info-text">If you already have an account with a registered cell phone number, we also texted you your verification code.</p> */}

            <div className="otp-boxes">
                {otp.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="otp-input"
                        value={value}
                        onChange={(e) => handleChange(e.target, index)}
                    />
                ))}
            </div>

            <button
                className="verify-btn"
                onClick={handleVerify}
                disabled={otp.join("").length !== 6}
            >
                Verify email
            </button>

            <p className="link-text"><a href="#">Request new code</a></p>
            <p className="link-text"><a href="/auth">Back to sign-in</a></p>

            <hr />
            <p className="terms">By signing in or creating an account, you agree with our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Statement</a></p>

            <footer className="footer">
                All rights reserved. <br />
                Copyright (2006–2025) – Booking.com™
            </footer>
        </div>
    );
}

export default Otp;
