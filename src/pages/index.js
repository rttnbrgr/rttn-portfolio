import React from "react"
import { Grid, Box } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Item from "../components/Item"
import { Link } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <Grid gap={32} columns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Item
            title={node.frontmatter.title}
            key={node.id}
            to={node.fields.slug}
            thumb={node.frontmatter.thumb}
          />
        ))}
      </Grid>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___dateSort }) {
      edges {
        node {
          id
          frontmatter {
            title
            datePrint
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
              name
            }
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
