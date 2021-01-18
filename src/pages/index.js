import React from "react"
import { Link } from "gatsby"
import { Grid, Styled } from "theme-ui"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import portfoliData from "../data/portfolio"
import Item from "../components/Item"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    whats wrong?
    {/* 
    <Grid gap={32} columns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
      {portfoliData.map(x => (
        <Item title={x.name} key={x.id} />
      ))}
    </Grid>
     */}
  </Layout>
)

export default IndexPage
