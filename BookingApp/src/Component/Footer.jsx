import React, { useState } from "react";
import "./Footer.css";


function Footer() {
    const [active,setActive] = useState('dom');
    return (
        <div className="footer">
            <div className="container">
                <h2 className="footer-h">Popular with travelers from India</h2>
                <div className="footer-nav">
                    <button
                        className={`footer-nav-b ${active === 'dom' ? 'colorMe' : ''}`}
                        onClick={() => setActive('dom')}
                    >
                        Domestic cities
                    </button>
                    <button 
                        className={`footer-nav-b ${active === 'inter' ? 'colorMe' : ''}`} 
                        onClick={() => setActive('inter')}
                    >
                        International cities
                    </button>
                    <button 
                        className={`footer-nav-b ${active === 'reg' ? 'colorMe' : ''}`} 
                        onClick={() => setActive('reg')}
                    >
                        Regions
                    </button>
                    <button 
                        className={`footer-nav-b ${active === 'count' ? 'colorMe' : ''}`} 
                        onClick={() => setActive('count')}
                    >
                        Countries
                    </button>
                    <button 
                        className={`footer-nav-b ${active === 'stay' ? 'colorMe' : ''}`} 
                        onClick={() => setActive('stay')}
                    >
                        Places to stay
                    </button>
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