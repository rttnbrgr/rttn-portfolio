/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link as GatsbyLink } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function PortfolioItem({ data }) {
  const post = data.mdx
  const { slug } = data.mdx.fields
  const { client, datePrint, title, thumb } = post.frontmatter
  console.log("data", data)
  const thisProjectNode = data.allMdx.edges.find(
    edge => edge.node.fields.slug === slug
  )
  console.log("thisProjectNode", thisProjectNode)
  const { previous, next } = thisProjectNode
  const prevLink = previous && previous.fields.slug
  const prevTitle = previous && previous.frontmatter.title
  const nextLink = next && next.fields.slug
  const nextTitle = next && next.frontmatter.title

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
      <Flex sx={{ overflowX: "auto", mb: 24 }}>
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
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      <MDXRenderer>{post.body}</MDXRenderer>

      {/* Previous Next */}
      <Flex sx={{ my: 48 }}>
        <div sx={{ flex: "1 0 50%" }}>
          {prevLink && (
            <GatsbyLink to={prevLink} sx={{ textDecoration: "none" }}>
              <Styled.h2 sx={{ lineHeight: 1, mb: 8 }}>Prev</Styled.h2>
              <Styled.p sx={{ lineHeight: 1 }}>{prevTitle}</Styled.p>
            </GatsbyLink>
          )}
        </div>
        <div sx={{ flex: "1 0 50%", textAlign: "right" }}>
          {nextLink && (
            <GatsbyLink to={nextLink} sx={{ textDecoration: "none" }}>
              <Styled.h2 sx={{ lineHeight: 1, mb: 8 }}>Next</Styled.h2>
              <Styled.p sx={{ lineHeight: 1 }}>{nextTitle}</Styled.p>
            </GatsbyLink>
          )}
        </div>
      </Flex>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
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
    allMdx(sort: { order: DESC, fields: frontmatter___dateSort }) {
      edges {
        node {
          fields {
            slug
          }
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
      totalCount
    }
  }
`
