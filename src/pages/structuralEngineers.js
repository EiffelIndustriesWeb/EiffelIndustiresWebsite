import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import "../styles/page.css"

import Layout from "../components/layout"
import ImageStructuralEngineers from "../components/imageStructuralEngineers.js"
import SlideshowStructuralEngineering from "../components/slideshowStructuralEngineering.js"
import SEO from "../components/seo"

const StructuralEngineersPage = () => (
    <Layout>
        <SEO title="Structural Engineers" />
        <div className="header-image--container">
            <ImageStructuralEngineers />
            <div className="hero-text--container">
                <h1 className="hero-text--items page">Structural Engineers</h1>
            </div>

        </div>
        <div className="page--wrapper">
            <h2 className="page-body--text-header">EIFFEL STRUCTURAL ENGINEERS</h2>
            <p className="page--text">EIFFEL structural engineering services offers concept to design to execution of projects including offices, retail, schools, student housing, hospitals, heavy industrial structures, single-family custom homes, multifamily homes and more. We’re a dependable structural engineer with over 30+ years of experience,  varying from Nuclear power & mining to commercial and retail.
            <p className="page--text">Beyond the traditional structural engineering domain, our team always considers the quality of construction and the economics of value engineering for each project and offers sustainable design concepts for our clients.</p>
            </p>
            <p className="page--text">We have the expertise and knowledge to recommend many practical and cost-effective structural systems based on green technology, local conditions and materials. Our pioneering experience in composite materials like ICF form blocks, SIPs, Adobe, Perform walls, Shipping containers, LEED certified re-cycled products, special military grade metal composite panels and various non-conventional products make us stand out in the market.</p>
            <p className="page--text">We have extensive experience in Building Information Modeling (BIM) with cutting edge 3D technology to integrate structural design with architectural, mechanical, electrical, plumbing, and process piping. We work in Revit® Structure, Bluebeam, Timberline (SAGE 300), AutoCAD 2D and 3D, STAAD, ETABS, RAM Structural, Enercalc, TEKLA and other industry-specific software.</p>

            <SlideshowStructuralEngineering />

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
            <h3>Marque Projects</h3>
            <p>AZ (Natural Groceries, Fry’s Food Locations, USDA Forest Service Building, Talking Stick Resort Arena Jumbo Tron)</p>
            <p>AZ AquaTots Head Quarters</p>
            <p>AZ Desert Diamond West Valley Casino</p>
            <p>AZ Enterprise Network Solutions Building</p>
            <p>AZ Nogales Port of Entry</p>
            <p>NV Office/Warehouse/Manufacturing Building for Granite Shop</p>
            <p>CA Adelanto Medical Marijuana Building</p>
            <p>OH West Chester Public Safety Building</p>
            <p>WA WA Hopps Klin Building in Yakima</p>
            <p>TX TAMU CVM Education Building</p>
        </div>
        {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout>
)

export default StructuralEngineersPage