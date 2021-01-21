import React from "react"
import { Link } from "gatsby"
import "../styles/page.css"
import "../styles/global.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ImageConstruction from "../components/imageConstruction.js"
import SlideshowConstruction from "../components/slideshowConstruction.js"

const ConstructionPage = () => (
    <Layout>
        <SEO title="Construction" />
        <div className="header-image--container">
            <ImageConstruction />
            <div className="hero-text--container">
                <h1 className="hero-text--items page-light">Construction</h1>
            </div>
        </div>
        <div className="page--wrapper">
            <h2 className="page-body--text-header">EIFFEL CONSTRUCTION</h2>
            <p className="page--text"> EIFFEL Construction is a professional Turn-key and Design build firm where highly experienced construction professionals collaborate to create and develop innovative, and quality building solutions for our clients with focus on cost savings, green footprint and timely completion with budget.
            </p>
            <p className="page--text">Our vision is to provide tailored Construction solutions to global clients across multiple market verticals through highly efficient collaborative environment solving actual construction challenges ahead with the best in class leadership and leading-edge technology, and with the least footprint on our environment.</p>
            <p className="page--text">For our residential California clients, please see our affiliate site </p>
            <Link to="http://wildfiredesignbuild.com/" className='page-text--link'>Wild Fire Design Build</Link>
            <SlideshowConstruction />
            <h3>Construction Services:</h3>
            <h4>Commercial Retail</h4>
            <p className="page--text">Highway frontages, single tenant retail buildings, small neighborhood shopping centers, larger centers with grocery store anchor tenants, anchor stores such as Wal-Mart, Target, Costco, regional and outlet malls.</p>
            <h4>Commercial Warehouses</h4>
            <p className="page--text">Smaller properties, often called “Flex” or “R&D” properties, to larger office service or office warehouse properties to the very large “big box” industrial properties. An important, defining characteristic of industrial space is Clear Height. Clear height is the actual height, to the bottom of the steel girders in the interior of the building. This might be 14–16 feet for smaller properties, and 40+ feet for larger properties. We also consider the type and number of docks that the property has. These can be Grade Level, where the parking lot and the warehouse floor are on the same level, to semi-dock height at 24 inches, which is the height of a pickup truck or delivery truck, or a full-dock at 48 inches which is semi-truck height. Some buildings may even have a rail spur for train cars to load and unload.</p>
            <h4>Commercial Shell Buildings</h4>
            <p className="page--text">A tenant rents a property with an unfinished interior to which he or she will finish construction and make improvements.</p>
            <h4>Commercial Tenant Improvements</h4>
            <p className="page--text">Customized alterations a building owner makes to rental space as part of a lease agreement, to configure the space for the needs of that tenant.</p>
            <h4>Commercial Office Buildings</h4>
            <p className="page--text">Commercial office building with office on levels 2-10, retail on floor 1</p>
            <h4>Pre-Engineered Steel Buildings for commercial greenhouses</h4>
            <p className="page--text">Pre-Engineered Steel buildings are easy to install and provides quick ROI to developers who are able to install a commercial or industrial scale facility for manufacturing, harvesting crops in greenhouse type applications and many other industrial and commercial use. We specialize in the complete turnkey projects that allow us to design, delivery, install and provide a fully operational facility to the client.</p>
            <h4>Medical Offices and Small to Medium Size Medical Clinics</h4>
            <p className="page--text">Generally, three items separate MOBs from typical office buildings: location, tenant mix, and internal characteristics. Most MOBs are located close to hospitals, medical centers, or nursing homes.</p>
            <h4>Hospice Facilities</h4>
            <p className="page--text">For Patient Care – Such facilities should fit unobtrusively and harmoniously into the neighborhood but without any loss in individuality. “It should have a character of its own, but not so much that a patient will feel conspicuous as he goes in or out. It should be sturdy and substantial, without seeming restrictive.</p>
            <h4>Educational </h4>
            <p className="page--text">We develop the total area (square footage) by identifying all spaces needed: teaching stations, large-and small-group learning spaces, support facilities, staff offices, media center, flexible team learning areas, technology center, auditorium, food service, custodial, mechanical and electrical, administrative, circulation and student commons. Active and passive security design of facilities and systems. The spatial relationship of teaching stations, departments, offices, circulation, and support spaces that supports and promotes the educational philosophy and adheres to the building and fire/life-safety codes. Schools need to be built to last. The materials, systems and furnishings must stand up to heavy use and abuse, be economical to operate and maintain, and provide security. Unique characteristics and amenities will influence the design, location and orientation of the building, as well as vehicle and pedestrian access, egress and circulation patterns, parking, the layout of athletic and physical education fields, and nature areas.</p>
            <h4>Industrial Buildings</h4>
            <p className="page--text">Factories and other premises for manufacturing, altering, repairing, cleaning, washing, breaking-up, adapting or processing Real Estate Upgrades for Commercial Development Residential Custom Homes Owner’s Representative for Developers.</p>
            <h4>Industrial</h4>
            <p className="page--text">Waste Water treatment plant, Water treatment plant</p>
        </div>
        {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </Layout>
)

export default ConstructionPage