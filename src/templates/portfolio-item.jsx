/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function PortfolioItem({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
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
      <Styled.h2>{post.frontmatter.title}</Styled.h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
