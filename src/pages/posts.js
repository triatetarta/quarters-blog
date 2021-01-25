import React from "react"
import { Hero, Posts } from "../components"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const PostsPage = ({ data }) => {
  const {
    allContentfulBlog: { nodes: posts },
    allInstaNode: { nodes: photos },
  } = data

  return (
    <>
      <SEO title="Posts" />
      <Hero />
      <Posts posts={posts} photos={photos} title="All Posts" page />
    </>
  )
}

export const query = graphql`
  {
    allContentfulBlog(sort: { order: DESC, fields: date }) {
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

export default PostsPage
