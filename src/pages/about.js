import React from "react"
import { Link } from "gatsby"
import "../styles/page.css"
import "../styles/global.css"

import Layout from "../components/layout"
import ImageAbout from "../components/imageAbout.js"

import SEO from "../components/seo"
import TeamUx from "../components/teamUx"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className="header-image--container">
            <ImageAbout />
            <div className="hero-text--container">
                <h1 className="hero-text--items page">About Us</h1>
            </div>

        </div>
        <div className="page--wrapper">
            <h2 className="page-body--text-header">The EIFFEL Industries Advantage</h2>
            <p className="page--text">We enter every construction site with the goal of working on the project with focused precision. Our design-build team prefers to get involved in the early design phases of a project in order to work closely with the owner, architect, engineers and other consultants to make sure the structure is cost-effective while guaranteeing that it meets the needs of everyone involved.
            <p className="page--text">Our engineering team can design and engineer retail spaces, corporate offices, schools, hospitals, heavy industrial buildings, mixed-use development, multifamily homes, and new custom home builds.</p>
                <p className="page--text">Our construction division has the experience and expertise to not only provide architectural and engineering services but to also undertake turnkey design build projects from inception to completion. Eiffel construction has the qualifications and experience to build heavy industrial, wastewater and water treatment plants, commercial, retail, offices, and mixed-use development.</p>
                <p className="page--text">What sets us apart is as a company is our ability to use in house IT solutions and tools to increase our efficiently in project management and project execution.</p>
            </p>
            <h3>Memberships and Affiliations</h3>
            <ul className="page--text">
                <li>American Concrete Institute (ACI, Professional Member)</li>
                <li>American Institute of Steel Construction (AISC)</li>
                <li>American Society of Civil Engineers (ASCE, Affiliate Member)</li>
            </ul>

            <h3>ROC Licenses</h3>
            <ul className="page--text">
                <li>KB-1 311191</li>
                <li>A 162106</li>
            </ul>
            <h3>Professional Engineer Registration</h3>
            <ul className="page--text">
                <li>Arizona PE License No. 44084</li>
                <li>California PE License No. C75921</li>
            </ul>
            <h3>Key Persons</h3>
            <TeamUx />
        </div>
        {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout>
)

export default AboutPage