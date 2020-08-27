import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import MapContact from '../components/map/map'

import "../styles/page.css"

export default function Contact() {

    return (
        <Layout>
            <SEO title="Construction" />
            <div className={'contact-page--wrapper'}>
                <div className={'contact-page--container'}>
                    <div className={'contact-page--container-contact'}>
                        <h2>Contact Us</h2>
                        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="field full first">
                                <label htmlFor="name" hidden>Name</label>
                                <input placeholder="Name" type="text" name="name" id="name" />
                            </div>
                            <div className="field full">
                                <label htmlFor="email" hidden>Email</label>
                                <input placeholder="Email" type="text" name="email" id="email" />
                            </div>
                            <div className="field">
                                <label htmlFor="message" hidden>Message</label>
                                <textarea placeholder="Message" name="message" id="message" rows="6" />
                            </div>
                            <ul className="actions">
                                <li>
                                    <input type="reset" value="Clear" className="clear" />
                                </li>
                                <li>
                                    <input type="submit" value="Send Message" className="special" />
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className={'contact-page--container-hours'}>
                        <h2>Hours</h2>
                        <p>Mon – Fri 8:30 am – 5:00 pm</p>
                        <p>Sat – Sun Closed</p>

                        <h2>Location</h2>
                        <p>2501 N. Hayden Rd Suite #101</p>
                        <p>Scottsdale, AZ 85257</p>

                        <h2>Direct</h2>
                        <p>Office: (480) 462-1733</p>
                    </div>
                </div>
                <div className={'contact-page--container-map'}>
                    <MapContact />
                </div>
            </div>
        </Layout>
    )
}
