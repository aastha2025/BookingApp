import React from 'react';
import '../Footer.css';

const Countries = () => {
    return (
        <div className="footer-grid">
            <div className="footer-section">
                <ul>
                    <li>India</li>
                    <li>United States</li>
                    <li>Canada</li>
                    <li>Australia</li>
                    <li>United Kingdom</li>
                </ul>
            </div>

            <div className="footer-section">
                <ul>
                    <li>France</li>
                    <li>Germany</li>
                    <li>Italy</li>
                    <li>Netherlands</li>
                    <li>Switzerland</li>
                </ul>
            </div>

            <div className="footer-section">
                <ul>
                    <li>Japan</li>
                    <li>South Korea</li>
                    <li>China</li>
                    <li>Thailand</li>
                    <li>Vietnam</li>
                </ul>
            </div>

            <div className="footer-section">
                <ul>
                    <li>United Arab Emirates</li>
                    <li>Saudi Arabia</li>
                    <li>Singapore</li>
                    <li>Malaysia</li>
                    <li>Indonesia</li>
                </ul>
            </div>

            <div className="footer-section">
                <ul>
                    <li>Brazil</li>
                    <li>Mexico</li>
                    <li>Argentina</li>
                    <li>South Africa</li>
                    <li>Egypt</li>
                </ul>
            </div>
        </div>
    );
}

export default Countries;
