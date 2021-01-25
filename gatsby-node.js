const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetPosts {
      posts: allContentfulBlog {
        nodes {
          slug
        }
      }
      categories: allContentfulBlog {
        distinct(field: category)
      }
    }
  `)

  result.data.posts.nodes.forEach(post => {
    createPage({
      path: `/posts/${post.slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug: post.slug,
      },
    })
  })

  result.data.categories.distinct.forEach(category => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    })
  })
}
