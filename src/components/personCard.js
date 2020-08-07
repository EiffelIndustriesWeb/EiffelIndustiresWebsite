import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import '../styles/page.css'

export default function PersonCard(props) {
  const data = useStaticQuery(graphql`
        query {
          placeholderImage: file(relativePath: { eq: "team/samBiswasProfile.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 3000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG              }
            }
          }
        }
      `)

  return (
    <div className="person-card--container">
      <div className="person-card--image--container">
        <Img className="person-card--image" fluid={props.profileImage} />
      </div>
      <h4 className="person-card--title">{props.name}</h4>
      <h5>{props.title}</h5>
      <p>{props.bio}</p>
    </div>
  )
}
