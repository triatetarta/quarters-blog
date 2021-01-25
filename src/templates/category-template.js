import React from "react"
import { graphql } from "gatsby"
import { Hero, Posts } from "../components"
import SEO from "../components/seo"

const categoryTemplate = props => {
  const {
    pageContext: { category },
  } = props
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props
  return (
    <>
      <SEO title={`${category}`} />
      <Hero />
      <Posts posts={posts} title={`Category / ${category}`} />
    </>
  )
}

export const query = graphql`
  query GetCategories($category: String) {
    categories: allContentfulBlog(
      sort: { order: DESC, fields: date }
      filter: { category: { eq: $category } }
    ) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        id
        slug
        category
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

export default categoryTemplate
