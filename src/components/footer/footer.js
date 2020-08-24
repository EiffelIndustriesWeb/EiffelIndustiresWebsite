import React from 'react'
import { Link } from 'gatsby';
import './footer.css';

export default function Footer() {
    return (
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
                    © 2020 EIFFEL INDUSTRIES - All Rights Reserved
                </div >
                <div className="footer-container--socials">
                    <span><Link to="https://www.linkedin.com/company/eiffel-industries-llc/" className="footer-socials--icon">L</Link></span>
                    <span><Link to="https://www.facebook.com/EiffelIndustries/" className="footer-socials--icon">F</Link></span>
                    <span><Link to="https://www.instagram.com/eiffelindustriesllc/" className="footer-socials--icon">I</Link></span>
                </div >
            </div >
        </div >

    )
}


