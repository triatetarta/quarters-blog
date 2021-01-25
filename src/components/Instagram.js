import React from "react"
import TitleB from "./TitleB"
import Image from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

const Instagram = ({ photos }) => {
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
          console.log(fluid)

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
