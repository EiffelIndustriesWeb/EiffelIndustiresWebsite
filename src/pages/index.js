import React from "react"
import { Link } from "gatsby"
import "../styles/index.css"
import "../styles/global.css"

import Layout from "../components/layout"
import Image from "../components/image"
import ImageAbout from "../components/imageAbout"
import SEO from "../components/seo"
import IndexCard from '../components/indexCard';
import Icon1 from '../components/assets/icons/Icon1.svg';
import Icon2 from '../components/assets/icons/Icon2.svg';
import Icon3 from '../components/assets/icons/Icon3.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero-text--container">
      <h2 className="hero-text--items">Providing Solutions to Construct<br /> A Better World</h2>
    </div>
    <div className="hero-image--container">
      <Image />
    </div>

    <div className="index-body--container">
      <IndexCard
        title="Our Team"
        copy="We consider the quality of construction and the economics of value of our design concept for each project."
        icon={Icon1}
      />
      <IndexCard
        title="Client Solutions"
        copy="We have over 30 years experience with focus on cost savings, green footprint and timely completion with budget."
        icon={Icon2}
      />
      <IndexCard
        title="Nationally Known, Locally Owned"
        copy="We are nationally recognized, but value the traditions of small business"
        icon={Icon3}
      />
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    <div className="hero-image--container">
      <ImageAbout />
    </div>

  </Layout>
)

export default IndexPage