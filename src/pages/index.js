import React from "react"
import { Grid } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import portfoliData from "../data/portfolio"
import Item from "../components/Item"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid gap={32} columns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
      {portfoliData.map(x => (
        <Item title={x.name} key={x.id} />
      ))}
    </Grid>
  </Layout>
)

export default IndexPage
