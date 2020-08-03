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
            <p className="page--text">Offer extensive range of structural engineering services from concept to design to execution of projects including offices, retail, schools, student housing, hospitals, heavy industrial structures, single-family custom homes, multifamily homes and more. We’re a dependable structural engineers with over 30+ years of experience, based in Scottsdale Arizona.
            <p className="page--text">Beyond the traditional structural engineering domain, our team always considers the quality of construction and the economics of value of our design concept for each project and offers sustainable design concepts for our clients.</p>
            </p>
            <p className="page--text">We have the expertise and knowledge to investigate many practical and cost-effective structural systems based on green technology, local conditions and materials. Our pioneering experience in composite materials like ICF form blocks, SIPs, Adobe, Perform walls, Shipping containers, LEED certified re-cycled products, special military grade metal composite panels and various non-conventional products make us stand out in the market.</p>
            <p className="page--text">We have extensive experience in Building Information Modeling (BIM) with cutting edge 3D technology to integrate structural design with architectural, mechanical, electrical, plumbing, and process piping. We work in Revit® Structure, Bluebeam, AutoCAD 2D and 3D, STAAD, ETABS, RAM Structural, Enercalc, TEKLA and other industry-specific software.</p>
            <h3>Engineering Services:</h3>
            <div className={'page-list--wrapper'}>
                <ul className="page-list--container">
                    <li>Commercial Retail</li>
                    <li>Commercial Warehouses</li>
                    <li>Commercial Shell Buildings</li>
                    <li>Commercial Tenant Improvements</li>
                    <li>Commercial Office Buildings</li>
                    <li>Commercial Hospitality</li>
                    <li>Commercial Mixed-use Buildings</li>
                    <li>Educational Schools</li>
                    <li>Hospice facilities and Assisted Living</li>
                    <li>Industrial Buildings</li>
                    <li>Industrial Barges</li>
                </ul>
                <ul className="page-list--container">
                    <li>Industrial Rigs</li>
                    <li>Medical Offices</li>
                    <li>Post Tensioned Slab on grade foundation</li>
                    <li>Piles and helical piers</li>
                    <li>Residential Custom Homes</li>
                    <li>Residential Misc structures – Ramadas, canopies, retaining walls, basement walls</li>
                    <li>Residential Multi-family Apartments and Condominium</li>
                    <li>Residential Remodel and Additions</li>
                </ul>
                <ul className="page-list--container">
                    <li>Retaining Walls and Support of Excavation</li>
                    <li>Structural Inspections</li>
                    <li>Structural repair and retrofits</li>
                    <li>Structural Forensic Expert</li>
                    <li>Structural Seismic Retrofits</li>
                    <li>Structural Value Engineering</li>
                    <li>Shoring and excavation calculations</li>
                    <li>Steel Tanks</li>
                    <li>Temporary Structures</li>
                    <li>Underpinning and Piles</li>
                </ul>
            </div>
            <h3>PORTFOLIO</h3>
            <p>AZ (Natural Groceries and Fry’s Food Locations, USDA Forest Service Building, US Airways Arena Jumbo Tron)</p>
            <p>AZ AquaTots Head Quarters</p>
            <p>AZ Desert Diamond West Valley Casino</p>
            <p>AZ Enterprise Network Solutions Building</p>
            <p>NV Office/Warehouse/Manufacturing Building for Granite Shop</p>
            <p>OH West Chester Public Safety Building</p>
            <p>WA (North Shore High School</p>
            <p>TX TAMU CVM Education Building</p>
        </div>
        {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout>
)

export default BetterBuildPage