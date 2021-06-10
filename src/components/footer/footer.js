import React from 'react'
import { Link } from 'gatsby';
import './footer.css';
import SDVOSB from './SDVOSB.jpeg'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer--wrapper">
                <div className="footer-container">
                    <span>
                        <Link to="/" className="footer-text">Eiffel Industries</Link>
                        {' | '}
                        <Link to="/structuralEngineers" className="footer-text">Eiffel Structural Engineers</Link>
                        {' | '}

                        <Link to="/construction" className="footer-text">Effiel Construction</Link></span>
                </div>
                <div className="footer-container">
                    <Link to="" className="footer-text"> 2501 North Hayden Road | Suite 101 | Scottsdale, AZ 85257</Link>
                    {/* <div className="footer-container">
                    <Link To="" className="footer-text">Privacy Policy</Link>
                </div > */}
                    <div className="footer-container">
                        © 2021 EIFFEL INDUSTRIES - All Rights Reserved
                </div >
                    <div className="footer-container--socials">
                        <Link className="footer-socials--icon ln" to="https://www.linkedin.com/company/eiffel-industries-llc/" >L</Link>
                        <Link className="footer-socials--icon fb" to="https://www.facebook.com/EiffelIndustries/" >F</Link>
                        <Link className="footer-socials--icon ig" to="https://www.instagram.com/eiffelindustriesllc/" >I</Link>
                    </div >
                </div >
            </div >
            <div className="footer--SDVOSB-container">
                <img className="footer--SDVOSB-image" src={SDVOSB} alt="SDVOSB logo" />
            </div >
        </div >

    )
}


