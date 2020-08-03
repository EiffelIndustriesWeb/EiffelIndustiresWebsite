import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import PersonCard from "./personCard"
import "../styles/page.css"
export default function TeamUx() {
    const { allFile } = useStaticQuery(graphql`
        query {
            allFile(sort: {fields: name, order: DESC}, filter: {relativeDirectory: {eq: "team"}}) {
            edges {
            node {
                id
                name
                # placeholderImage: File(relativePath: {eq: "team/samBiswasProfile.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 3000, quality: 100) {
                    ...GatsbyImageSharpFluid
                    # }
                }
                }
            }
            }
        }
        }
      `)
    console.log('data.edges.node.childImageSharp.fluid');
    const node = allFile.edges
    console.log({ node }.node[0].node.childImageSharp.fluid);
    return (
        <div className="person-card--wrapper">
            <PersonCard
                profileImage={({ node }.node[0].node.childImageSharp.fluid)}
                name="Sam Biswas"
                title="Founder, President, and CEO"
                bio="Sam is a licensed Professional Engineer in State of Arizona and California with more than 25 years of experience. Sam has a demonstrated record within architectural, engineering, and construction (AEC) industry with his extensive work on variety of projects across diverse construction verticals including commercial, residential, retail, high seismic retrofitting and hurricane structures. Sam and his team of engineers & construction managers provide instant, smart and innovative building concepts and engineering solutions with state-of-the-art technology automation to ensure your “design-build” project exceeds the building code requirements and gets completed on time and within budget. Additionally, Sam is also involved in global ventures that he owns and operates ranging from IT Consulting Services, Import–Export, and promotion of state-of-the-art technologies worldwide."
            />
            <PersonCard
                profileImage={({ node }.node[1].node.childImageSharp.fluid)}
                name="Sam Biswas"
                title="Founder, President, and CEO"
                bio="Sam is a licensed Professional Engineer in State of Arizona and California with more than 25 years of experience. Sam has a demonstrated record within architectural, engineering, and construction (AEC) industry with his extensive work on variety of projects across diverse construction verticals including commercial, residential, retail, high seismic retrofitting and hurricane structures. Sam and his team of engineers & construction managers provide instant, smart and innovative building concepts and engineering solutions with state-of-the-art technology automation to ensure your “design-build” project exceeds the building code requirements and gets completed on time and within budget. Additionally, Sam is also involved in global ventures that he owns and operates ranging from IT Consulting Services, Import–Export, and promotion of state-of-the-art technologies worldwide."
            />
            <PersonCard
                profileImage={({ node }.node[2].node.childImageSharp.fluid)}
                name="Sam Biswas"
                title="Founder, President, and CEO"
                bio="Sam is a licensed Professional Engineer in State of Arizona and California with more than 25 years of experience. Sam has a demonstrated record within architectural, engineering, and construction (AEC) industry with his extensive work on variety of projects across diverse construction verticals including commercial, residential, retail, high seismic retrofitting and hurricane structures. Sam and his team of engineers & construction managers provide instant, smart and innovative building concepts and engineering solutions with state-of-the-art technology automation to ensure your “design-build” project exceeds the building code requirements and gets completed on time and within budget. Additionally, Sam is also involved in global ventures that he owns and operates ranging from IT Consulting Services, Import–Export, and promotion of state-of-the-art technologies worldwide."
            />
            <PersonCard
                profileImage={({ node }.node[3].node.childImageSharp.fluid)}
                name="Sam Biswas"
                title="Founder, President, and CEO"
                bio="Sam is a licensed Professional Engineer in State of Arizona and California with more than 25 years of experience. Sam has a demonstrated record within architectural, engineering, and construction (AEC) industry with his extensive work on variety of projects across diverse construction verticals including commercial, residential, retail, high seismic retrofitting and hurricane structures. Sam and his team of engineers & construction managers provide instant, smart and innovative building concepts and engineering solutions with state-of-the-art technology automation to ensure your “design-build” project exceeds the building code requirements and gets completed on time and within budget. Additionally, Sam is also involved in global ventures that he owns and operates ranging from IT Consulting Services, Import–Export, and promotion of state-of-the-art technologies worldwide."
            />


        </div>
    )
}
