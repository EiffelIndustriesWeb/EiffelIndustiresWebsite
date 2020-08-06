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

function SlideShowStructuralEngineering() {
    const [index, setIndex] = useState(0)
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);

    const { allFile } = useStaticQuery(
        graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "structuralEngineeringSlides" } }
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

    const length = allFile.edges.length - 1
    const { node } = allFile.edges[index]

    // SlideShow timer effect
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

    // SlideShow Button
    const handleNext = () => {
        index === length ? setIndex(0) : setIndex(index + 1)
        setIsActive(false)
    }

    const handlePrevious = () => {
        index === 0 ? setIndex(length) : setIndex(index - 1)
        setIsActive(false)
    }

    return (
        <div>
            <div className="slideshow--image"
            >
                {/* {seconds} */}
                <Img
                    fluid={node.childImageSharp.fluid}
                    key={node.id}
                    alt={node.name.replace(/-/g, " ").substring(2)}
                />
            </div>
            <div>
                <button onClick={() => handlePrevious()}>Previous</button>
                <button onClick={() => handleNext()}>Next</button>
            </div>
        </div>
    )
}
export default SlideShowStructuralEngineering