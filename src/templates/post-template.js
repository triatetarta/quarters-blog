import React from "react"
import { graphql, Link } from "gatsby"
import { Hero } from "../components"
import styled from "styled-components"
import Image from "gatsby-image"
import SEO from "../components/seo"

const postTemplate = ({
  data: {
    post: {
      title,
      category,
      date,
      text: { text },
      image: { fluid },
    },
  },
}) => {
  return (
    <>
      <SEO title={`${title}`} />
      <Hero />
      <Wrapper>
        <article>
          <Image fluid={fluid} />
          <div className="post-info">
            <span>{category}</span>
            <h2>{title}</h2>
            <p>{date}</p>
            <div className="underline"></div>
          </div>
          <p>{text}</p>
        </article>
        <ButtonDiv>
          <button>
            <Link to="/posts" className="btn">
              All Posts
            </Link>
          </button>
        </ButtonDiv>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    post: contentfulBlog(slug: { eq: $slug }) {
      title
      category
      date(formatString: "MMMM Do, YYYY")
      text {
        text
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;

  article {
    padding-bottom: 3rem;
  }

  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
      line-height: 1.8;
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 4rem;
    }
  }
`

const ButtonDiv = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  button {
    text-transform: uppercase;
    border: none;
    outline: none;
    border-radius: var(--radius);
    background: var(--clr-primary-5);
    padding: 0.9rem 0.75rem;

    a {
      color: white;
      text-decoration: none;
      font-size: 0.875rem;
      padding: 0.9rem 0.75rem;
    }
  }
  button:hover {
    background: var(--clr-primary-6);
  }
`

export default postTemplate
