import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/page.css"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */
function SlideShowConstruction() {
  const [index, setIndex] = useState(0)
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "constructionSlides" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 3000, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  const length = allFile.edges.length - 2
  const { node } = allFile.edges[index]

  // SlideShow timer
  useEffect(() => {
    setTimeout(() => {
      if (isActive) {
        if (seconds < 100) {
          setSeconds(seconds + 1)
        }
        else {
          setSeconds(0)
          index === length ? setIndex(0) : setIndex(index + 1)
        }
      }
    }, [seconds]);
  })

  // SlideShow Buttons
  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1)
    setIsActive(false)
  }

  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1)
    setIsActive(false)
  }

  // SlideShow Dots
  const slideDots = [];
  for (let i = 0; i < (length + 1); i++) {
    slideDots.push(<svg className="slideshow--nav-image" key={i} viewBox="0 0 10 10">
      {index === i ? <circle style={{ "fill": "#2e388b" }} cx="5" cy="5" r="5" />
        :
        <circle style={{ "fill": "lightGrey" }} cx="5" cy="5" r="5" />
      }
    </svg>);
  }

  return (
    <div className="slideshow--wrapper">
      <div className="slideshow--image">
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, " ").substring(2)}
        />
      </div>
      <div className="slideshow--nav-container">
        <button className="slideshow--button" onClick={() => handlePrevious()}>Previous</button>
        {slideDots}
        <button className="slideshow--button" onClick={() => handleNext()}>Next</button>
      </div>
    </div >
  )
}

export default SlideShowConstruction