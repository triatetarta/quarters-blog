import React from "react"
import SocialLinks from "../../constants/socialLinks"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./Title"
import styled from "styled-components"

const query = graphql`
  {
    person: file(relativePath: { eq: "blog.jpeg" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(query)

  return (
    <Wrapper>
      <Title title="about me" />
      <Image fixed={data.person.childImageSharp.fixed} className="img" />
      <p>
        Hey there, I'm Dimitris, aka Three Quarters, a London based Web
        Developer.
      </p>
      <SocialLinks styleClass="banner-icons" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
  .banner-icons {
    display: flex;
    justify-content: center;
  }
  .banner-icons a {
    font-size: 1.5rem;
    margin: 0 0.25rem;
    color: var(--clr-primary-5);
  }

  .banner-icons a:hover {
    color: var(--clr-primary-6);
  }
`

export default About
