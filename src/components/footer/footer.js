import React from 'react'
import { Link } from 'gatsby';
import './footer.css';

export default function Footer() {
    return (
        <div className="footer--wrapper">
            <div className="footer-container">
                <span>
                    <Link To="" className="footer-text">Eiffel Industries</Link>
                    {' | '}
                    <Link To="" className="footer-text">Eiffel Structural Engineers</Link>
                    {' | '}

                    <Link To="" className="footer-text">Effiel Construction</Link></span>
            </div>
            <div className="footer-container">
                <Link To="" className="footer-text"> 2501 North Hayden Road | Suite 101 | Scottsdale, AZ 8527</Link>
                <div className="footer-container">
                    <Link To="" className="footer-text">Privacy Policy</Link>
                </div >
                <div className="footer-container">
                    © 2020 EIFFEL INDUSTRIES - All Rights Reserved
                </div >
            </div >
        </div >
    )
}
