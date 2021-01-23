import React from "react"
import { Grid, Box } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import portfoliData from "../data/portfolio"
import Item from "../components/Item"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <Grid gap={32} columns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
        {portfoliData.map(x => (
          <Item title={x.name} key={x.id} />
        ))}
      </Grid>
      <Box py="4" my="4" sx={{ bg: "#eee" }}>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3 style={{ marginBottom: "8px" }}>
              {node.frontmatter.title}{" "}
              <span style={{ color: "#bbb" }}>— {node.frontmatter.date}</span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </Box>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          rawMarkdownBody
          frontmatter {
            client
            path
            title
            year
          }
        }
      }
      totalCount
    }
  }
`
