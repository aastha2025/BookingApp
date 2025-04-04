import React from "react";
import "./Footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <h2 className="footer-h">Popular with travelers from India</h2>
                <div className="footer-nav">
                    <button className="footer-nav-b">Domestic cities</button>
                    <button className="footer-nav-b">International cities</button>
                    <button className="footer-nav-b">Regions</button>
                    <button className="footer-nav-b">Countries</button>
                    <button className="footer-nav-b">Places to stay</button>
                </div>
              
              
                <div className="footer-grid">
                    <div className="footer-section">
                        <ul>
                            <li>Shrinagar hotels</li>
                            <li>Bangalore hotels</li>
                            <li>Ooty hotels</li>
                            <li>Mumbai hotels</li>
                            <li>Lonavala hotels</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <ul>
                            <li>Hyderabad hotels</li>
                            <li>Jaipur hotels</li>
                            <li>Chennai hotels</li>
                            <li>Puri hotels</li>
                            <li>Pondicherry hotels</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <ul>
                            <li>Rishikesh hotels</li>
                            <li>Munnar hotels</li>
                            <li>Varanasi hotels</li>
                            <li>Maysore hotels</li>
                            <li>Ayodhya hotels</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <ul>
                            <li>Pune hotels</li>
                            <li>Manali hotels</li>
                            <li>Varkala hotels</li>
                            <li>New Delhi hotels</li>
                            <li>Gurgaon hotels</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <ul>
                            <li>Shimla hotels</li>
                            <li>Cochin hotels</li>
                            <li>Mussoorie hotels</li>
                            <li>Kodaikanai hotels</li>
                            <li> Udaipur hotels</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;