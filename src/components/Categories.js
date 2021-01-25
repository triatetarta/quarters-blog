import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

const query = graphql`
  {
    allContentfulBlog {
      distinct(field: category)
    }
  }
`

const Categories = ({ closeSidebar }) => {
  const {
    allContentfulBlog: { distinct },
  } = useStaticQuery(query)
  return (
    <ul className="categories">
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <Link
              to={`/${category}`}
              className="category"
              onClick={closeSidebar}
            >
              {category}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
