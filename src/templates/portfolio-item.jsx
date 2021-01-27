/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default function PortfolioItem({ data }) {
  const post = data.markdownRemark
  const { client, datePrint, title, thumb } = post.frontmatter
  console.log("post", post)
  return (
    <Layout>
      {thumb ? (
        <Img
          fluid={thumb.childImageSharp.fluid}
          sx={{ mb: 16 }}
          alt="Meaniful Text"
        />
      ) : (
        <img
          src="https://picsum.photos/800/600"
          sx={{ mb: 16 }}
          alt="Meaniful Text"
        />
      )}
      <Flex sx={{ overflow: "scroll", mb: 24 }}>
        {[0, 1, 2, 3, 4].map(x => (
          <img
            src="https://picsum.photos/80/60"
            alt="Meaniful Text"
            key={x}
            sx={{
              ml: x === 0 ? 0 : 8,
            }}
          />
        ))}
      </Flex>
      <Styled.h2 sx={{ lineHeight: 1 }}>{title}</Styled.h2>
      {/* HR */}
      <div
        sx={{
          height: "3px",
          width: "24px",
          bg: "text",
          mb: 24,
          mt: 16,
        }}
      />
      <Flex sx={{ mb: 16 }}>
        <div sx={{ flex: "0 0 50%" }}>
          <Styled.h3 sx={{ lineHeight: 1, mb: 8 }}>Client</Styled.h3>
          <Styled.p sx={{ lineHeight: 1 }}>{client}</Styled.p>
        </div>
        <div sx={{ flex: "0 0 50%" }}>
          <Styled.h3 sx={{ lineHeight: 1, mb: 8 }}>Date</Styled.h3>
          <Styled.p sx={{ lineHeight: 1 }}>{datePrint}</Styled.p>
        </div>
      </Flex>

      <Styled.h3 sx={{ lineHeight: 1, mb: 8 }}>Description</Styled.h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        client
        path
        title
        datePrint
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            gatsbyImageData
          }
          name
        }
      }
    }
  }
`
