import React from "react"
import { Link } from "gatsby"
import "../styles/page.css"
import "../styles/global.css"

import Layout from "../components/layout"
import ImageBetterBuild from "../components/imageBetterBuild.js"
import SEO from "../components/seo"

const BetterBuildPage = () => (
    <Layout>
        <SEO title="Structural Engineers" />
        <div className="hero-text--container">
            <h1 className="hero-text--items">Better Build</h1>
        </div>
        <div className="hero-image--container">
            <ImageBetterBuild />

        </div>
        <div className="page--wrapper">
            <h2>BETTER BUILD</h2>
            <Link to="https://dunamispacific.com/">Visit Dunamis Pacific</Link>
            <p className="page--text">Dunamis Pacific Corp is a professional IT strategy and enterprise solutions firm where highly experienced IT professionals collaborate together to create and deliver innovative, transparent and agile solutions geared towards increasing our clients’ efficiency, market share and bottom line.</p>
            <h3>Vision</h3>
            <p className="page--text">Our vision is to provide tailored IT enterprise solutions to global clients across multiple verticals on-premise, hosted and cloud through highly efficient collaborative environment solving actual business challenges with the best in class thought leadership and leading edge technology; 80 per cent faster than industry at 80 percent of the cost. </p>

        </div>
        {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout >
)

export default BetterBuildPage