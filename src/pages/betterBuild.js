import React from "react"
import { Link } from "gatsby"
import "../styles/page.css"
import "../styles/global.css"

import Layout from "../components/layout"
import ImageBetterBuild from "../components/imageBetterBuild.js"
import ImageBetterBuildTeam from "../components/imageBetterBuildTeam.js"

import SEO from "../components/seo"

const BetterBuildPage = () => (
    <Layout>
        <SEO title="Better Build" />
        <div className="header-image--container-full">
            <ImageBetterBuild />
            <div className="hero-text--container">
                <h1 className="hero-text--items page">Better Build</h1>
            </div>

        </div>
        <div className="page--wrapper">
            <div className="link-title--container">
                <Link className="page-title--link" to="https://dunamispacific.com/products">Visit Better Build</Link>
            </div>
            <p className="page--text">Better Build is a premier software solution owned by Dunamis Pacific Corporation, an Eiffel Industries Enterprise.</p>
            <p className="page--text">Dunamis Pacific Corp is a professional IT strategy and enterprise solutions firm where highly experienced IT professionals collaborate together to create and deliver innovative, transparent and agile solutions geared towards increasing our clients’ efficiency, market share and bottom line.</p>
            <p className="page--text">Better Build intends to serve as an ecosystem for the general contractors and sub-contractors within the North America construction industry, integrating the complete supply chain from project bids to procurement and project delivery to payments.</p>
            <ImageBetterBuildTeam />
        </div>
        {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout >
)

export default BetterBuildPage