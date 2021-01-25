import React from "react"
import TitleB from "./TitleB"
import Image from "gatsby-image"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

const Instagram = () => {
  const data = useStaticQuery(query)

  const {
    allInstaNode: { nodes: photos },
  } = data
  return (
    <Wrapper>
      <TitleB title="instagram" />
      <div className="images">
        {photos.map((photo, index) => {
          const {
            localFile: {
              childImageSharp: { fluid },
            },
          } = photo

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

const Wrapper = styled.article`
  padding-bottom: 2rem;
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export default Instagram
