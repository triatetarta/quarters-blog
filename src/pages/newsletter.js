import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"

const query = graphql`
  {
    newsletter: file(relativePath: { eq: "newsletter.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Newsletter = () => {
  const { newsletter } = useStaticQuery(query)
  return (
    <NewsletterStyled className="newsletter-page">
      <SEO title="Newsletter" />
      <div className="page-center">
        <Image fluid={newsletter.childImageSharp.fluid} />
        <h2>Get all the latest stories to your inbox</h2>
        <h4>I write to my friends every few weeks</h4>
        <form
          className="contact-form"
          name="contact"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/sucesss"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="form-control"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="form-control"
          />
          <button type="submit" className="btn form-control submit-btn">
            subscribe
          </button>
        </form>
      </div>
    </NewsletterStyled>
  )
}

const NewsletterStyled = styled.section`
  display: grid;
  place-items: center;
  height: calc(100vh - 12rem);

  h2 {
    text-transform: initial;
    margin-bottom: 1rem;
    text-align: center;
    padding: 0 1rem;
  }
  h4 {
    text-transform: initial;
    margin-bottom: 1.25rem;
    color: var(--clr-grey-5);
    text-align: center;
    font-weight: normal;
  }
  .contact-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .form-control {
    padding: 0.5rem;
    border: 1px solid var(--clr-primary-5);
    font-size: 1rem;
    margin: 0.25rem 0;
    display: block;
    width: 20rem;
  }
  .submit-btn {
    font-weight: 400;
    text-transform: capitalize;
    border-color: var(--clr-primary-5);
    background-color: var(--clr-primary-5);
    color: white;
  }
  .submit-btn:hover {
    background-color: var(--clr-primary-6);
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    .contact-form {
      flex-direction: row;
    }
    .form-control {
      width: 15rem;
      border-radius: 0;
    }
  }
`

export default Newsletter
