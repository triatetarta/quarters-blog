import React from "react"
import SEO from "../components/seo"
import { Hero, Posts } from "../components"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    allContentfulBlog: { nodes: posts },
  } = data
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <Posts posts={posts} />
    </>
  )
}

export const query = graphql`
  {
    allContentfulBlog(sort: { order: DESC, fields: date }, limit: 3) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        id
        slug
        tag
        title
        description
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
  }
`

export default IndexPage
