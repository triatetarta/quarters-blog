import React from "react"
import TitleB from "./TitleB"
import Image from "gatsby-image"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"

const query = graphql`
  {
    allInstaNode(limit: 6) {
      nodes {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Instagram = () => {
  const data = useStaticQuery(query)

  const {
    allInstaNode: { nodes },
  } = data

  return (
    <Wrapper>
      <TitleB title="instagram" />
      <div className="images">
        {nodes.map((item, index) => {
          const {
            localFile: {
              childImageSharp: { fluid },
            },
          } = item
          return (
            <Link
              to="https://www.instagram.com/threequartersdev/"
              target="_blank"
            >
              <Image fluid={fluid} key={index} />
            </Link>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding-bottom: 2rem;
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export default Instagram
