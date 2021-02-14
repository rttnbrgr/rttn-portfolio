const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    // console.log(`Markdown: Node created of type "${node.internal.type}"`)
    // const path = node.frontmatter.path
    // console.log(`Page path: "${path}"`)
    const slug = createFilePath({ node, getNode })
    console.log("/********** start")
    console.log("slug", slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    console.log("frontmatter", node.frontmatter)
    console.log("magic path?", node.frontmatter.magicPath)

    const magicPath = node.frontmatter.magicPath
      ? node.frontmatter.magicPath
      : "images"
    console.log("🧙‍♂️ magicPath?", magicPath)

    if (magicPath) {
      createNodeField({
        node,
        name: `magicPath`,
        value: magicPath,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
              magicPath
            }
          }
        }
      }
    }
  `)
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/portfolio-item.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        magicPath: node.fields.magicPath,
      },
    })
  })
  console.log("----- end ----------")
  console.log(JSON.stringify(result, null, 4))
}
