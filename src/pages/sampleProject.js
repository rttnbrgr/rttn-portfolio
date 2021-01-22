/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import React from "react"
import { Grid } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SampleProject = () => (
  <Layout>
    <SEO title="pageName" />
    <img
      src="https://picsum.photos/800/600"
      sx={{ mb: 12 }}
      alt="Meaniful Text"
    />
    <Flex>
      <img
        src="https://picsum.photos/80/60"
        sx={{ mb: 12 }}
        alt="Meaniful Text"
      />
      <img
        src="https://picsum.photos/80/60"
        sx={{ mb: 12, ml: 12 }}
        alt="Meaniful Text"
      />
      <img
        src="https://picsum.photos/80/60"
        sx={{ mb: 12, ml: 12 }}
        alt="Meaniful Text"
      />
      <img
        src="https://picsum.photos/80/60"
        sx={{ mb: 12, ml: 12 }}
        alt="Meaniful Text"
      />
      <img
        src="https://picsum.photos/80/60"
        sx={{ mb: 12, ml: 12 }}
        alt="Meaniful Text"
      />
    </Flex>
    <Styled.h2>title</Styled.h2>
  </Layout>
)

export default SampleProject
