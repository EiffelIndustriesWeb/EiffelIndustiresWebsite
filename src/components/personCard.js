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
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `)

  return (
    <div className="person-card--container">
      <Img fluid={props.profileImage} />
      <h4>{props.name}</h4>
      <h5>{props.title}</h5>
      <p>{props.bio}</p>
    </div>
  )
}
