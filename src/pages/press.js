import React from "react"
import { Link } from "gatsby"
import "../styles/page.css"
import "../styles/global.css"

import Layout from "../components/layout"
import ImageAbout from "../components/imageAbout.js"

import SEO from "../components/seo"

import ReviewUi from "../components/reviewUi"

const PressPage = () => (
    <Layout>
        <SEO title="Press" />
        <div className="header-image--container">
            <ImageAbout />
            <div className="hero-text--container">
                <h1 className="hero-text--items page">Press</h1>
            </div>

        </div>
        <div className="page--wrapper">
            <h2 className="page-body--text-header">Eiffel Construction</h2>

            <h3>Hopi Tutuveni</h3>
            <p>OFFICIAL NEWSPAPER OF THE HOPI TRIBE</p>
            <p className="page--text">Kykotsmovi February 3, 2021  — Location, Location, Location - the Corner of Any Successful Business Storefront</p>
            <p className="page--text"> <Link to="https://www.hopi-nsn.gov/wp-content/uploads/2021/02/FINAL-FEB-3-issue-2.pdf">Link</Link></p>
            <br />

            <h2 className="page-body--text-header">Eiffel Structural Engineers</h2>

            <h3>Scottsdale Award Program Honors the Achievement</h3>
            <p className="page--text">Scottsdale September 24, 2019 — Eiffel Structural Engineers, LLC has been selected for the 2019 Best of Scottsdale Award in the Structural Engineer category by the Scottsdale Award Program.
            <p className="page--text">Our engineering team can design and engineer retail spaces, corporate offices, schools, hospitals, heavy industrial buildings, mixed-use development, multifamily homes, and new custom home builds.</p>
                <p className="page--text">Each year, the Scottsdale Award Program identifies companies that we believe have achieved exceptional marketing success in their local community and business category. These are local companies that enhance the positive image of small business through service to their customers and our community. These exceptional companies help make the Scottsdale area a great place to live, work and play.</p>
                <p className="page--text">Various sources of information were gathered and analyzed to choose the winners in each category. The 2019 Scottsdale Award Program focuses on quality, not quantity. Winners are determined based on the information gathered both internally by the Scottsdale Award Program and data provided by third parties.</p>
            </p>
            <br />

            <h3>About Scottsdale Award Program</h3>
            <p className="page--text">The Scottsdale Award Program is an annual awards program honoring the achievements and accomplishments of local businesses throughout the Scottsdale area. Recognition is given to those companies that have shown the ability to use their best practices and implemented programs to generate competitive advantages and long-term value.</p>
            <p className="page--text">The Scottsdale Award Program was established to recognize the best of local businesses in our community. Our organization works exclusively with local business owners, trade groups, professional associations and other business advertising and marketing groups. Our mission is to recognize the small business community’s contributions to the U.S. economy.</p>
            <p className="page--text">SOURCE: Scottsdale Award Program</p>
            <p className="page--text">CONTACT:</p>
            <p className="page--text">Scottsdale Award Program</p>
            <p className="page--text">Email: PublicRelations@localrecognitions.org</p>
            <p className="page--text"> <Link to="http://www.localrecognitions.org">Link</Link></p>
        </div>
        <ReviewUi />
        {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout>
)

export default PressPage