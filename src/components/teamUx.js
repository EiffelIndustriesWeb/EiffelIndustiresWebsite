import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import PersonCard from "./personCard"
import "../styles/page.css"

//? Images found in /src/images/team 
//? Hacky sorted on acending order
//? Be sure to include number for indexing

export default function TeamUx() {
    const { allFile } = useStaticQuery(graphql`
        query {
            allFile(sort: {fields: name, order: ASC}, filter: {relativeDirectory: {eq: "team"}}) {
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
                name="Sam Biswas, P.E."
                title="Founder, President, and CEO"
                bio="Sam is a licensed Professional Engineer in State of Arizona and California with more than 25 years of experience. Sam has a demonstrated record within architectural, engineering, and construction (AEC) industry with his extensive work on variety of projects across diverse construction verticals including commercial, residential, retail, high seismic retrofitting and hurricane structures. Sam and his team of engineers & construction managers provide instant, smart and innovative building concepts and engineering solutions with state-of-the-art technology automation to ensure your “design-build” project exceeds the building code requirements and gets completed on time and within budget. Additionally, Sam is also involved in global ventures that he owns and operates ranging from IT Consulting Services, Import–Export, and promotion of state-of-the-art technologies worldwide."
            />
            <PersonCard
                profileImage={({ node }.node[1].node.childImageSharp.fluid)}
                name="Gerald Kirtland"
                title="Chief Estimator"
                bio="As the Chief Estimator for Eiffel Construction, Inc, Jerry has 42 years of experience in the estimating and management of major heavy industrial construction projects. Jerry has managed projects from 1 million to 30 million in Arizona and California being responsible for the start and completion of projects in conformance with building codes and engineering designs. As a chief estimator, Jerry has successfully bid over $800 Million from 1988 – Present. Jerry is a veteran 101st airborne."
            />
            <PersonCard
                profileImage={({ node }.node[2].node.childImageSharp.fluid)}
                name="Phil Reed"
                title="Senior Business Development"
                bio="Phil is a seasoned construction professional with over 40 years of management experience at the executive and project level. His experience includes a wide range of project types, such as refinery, water, wastewater, material handling, power facility, and commercial construction. He is a Veteran of the United States Army, a Journeyman Iron worker, has a B.A. Business Administration, and a M.A. Management & Business Administration."
            />
            <PersonCard
                profileImage={({ node }.node[3].node.childImageSharp.fluid)}
                name="Ellen Gould"
                title="Executive Assistant to the CEO"
                bio="As the current executive assistant for Eiffel Industries, LLC, Ellen oversees the management and day to day operations of both Eiffel Construction, Inc and Eiffel Structural Engineers, LLC. Ellen graduated from Portland State University with a Bachelor’s of Science in Psychology with an emphasis in Developmental Psychology and Research. She comes to Eiffel from New York City where she managed both medical and construction offices. She brings not only her ability to manage in a high pressure, fast paced environment, but also her extensive experience in customer service and client relationship management."
            />
            <PersonCard
                profileImage={({ node }.node[4].node.childImageSharp.fluid)}
                name="Morgan Fekete"
                title="Account Executive and Operations Coordinator"
                bio="As the Account Executive and Operations Coordinator for Eiffel Industries, LLC, Morgan joins us with experience in both the legal and construction field. Morgan graduated from California State University Fullerton with a Bachelor’s degree in Communications, and a Minor in Psychology. She grew and streamlined each of her roles at a medical device legal office in California, and a home developer here in Arizona."
            />
        </div>
    )
}
