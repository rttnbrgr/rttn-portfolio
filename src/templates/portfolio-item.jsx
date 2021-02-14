/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link as GatsbyLink } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

// capture this
// getting thumbs via frontmatter (temp)
// adding magicDir frontmatter to look up directory for images
// setting thumbs to a fixed size to maintiain size and aspect ratio
// commit working aaronreq project
// update other folders
// add active image func via hook
// capture; limitation of this flow with video support

export default function PortfolioItem({ data }) {
  console.log("data", data)

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
  console.log("projectImages", data.projectImages.nodes)

  const getFirstImageId = data.projectImages.nodes[0].id
  const getFirstImageNode = data.projectImages.nodes[0]

  const updateActiveImage = imageId => {
    const activeNode = data.projectImages.nodes.find((image, i) => {
      console.log("checking image - ", i)
      return image.id === imageId
    })
    console.log("activeImageNode", activeNode)
    setActiveImageNode(activeNode)
  }

  console.log("getFirstImageId", getFirstImageId)
  const [activeImageId, setActiveImageId] = useState(getFirstImageId)
  const [activeImageNode, setActiveImageNode] = useState(getFirstImageNode)

  const hasImages =
    data.projectImages.nodes && data.projectImages.nodes.length > 1
  console.log("hasImages?", hasImages)
  console.log("data.projectImages.nodes?", !!data.projectImages.nodes)

  return (
    <Layout>
      {/* Main Image */}
      <div sx={{ position: "relative" }}>
        <Img
          fluid={activeImageNode.childImageSharp.fluid}
          sx={{
            mb: 16,
            maxHeight: "400px",
            "& img": {
              objectFit: "contain!important",
              objectPosition: "left center!important",
            },
          }}
          alt="Meaniful Text"
        />
        <div
          sx={{
            bg: "rgba(0,0,0,0.5)",
            padding: "8px",
            color: "white",
            position: "absolute",
            top: "0",
            right: "0",
          }}
        >
          {activeImageNode.name}
        </div>
      </div>
      {/* Image Row */}
      {hasImages && (
        <Flex
          sx={{
            overflowX: "auto",
            mb: 24,
            height: "120px",
          }}
        >
          {data.projectImages.nodes.map((x, i) => {
            return (
              <div
                sx={{
                  height: "120px",
                  flex: "0 0 180px",
                  ml: x === 0 ? 0 : 8,
                  "&:hover": {
                    cursor: "pointer",
                  },
                  position: "relative",
                }}
                onClick={e => {
                  console.log("hi. you clicked me")
                  // setActiveImageId(x.id)
                  updateActiveImage(x.id)
                  console.log("after click", activeImageNode)
                }}
              >
                <Img
                  key={i}
                  fluid={x.childImageSharp.fluid}
                  alt={x.name}
                  sx={{
                    height: "120px",
                    // flex: "0 0 180px",
                    // ml: x === 0 ? 0 : 8,
                    // "&:hover": {
                    //   cursor: "pointer",
                    // },
                  }}
                />
                <div
                  sx={{
                    bg: "rgba(0,0,0,0.5)",
                    padding: "8px",
                    color: "white",
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                  }}
                >
                  {x.name}
                </div>
              </div>
            )
          })}
        </Flex>
      )}

      {/* Metadata section */}
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
  query($slug: String!, $magicPath: String!) {
    # get images
    projectImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
        # this is brittle magic
        relativeDirectory: { eq: $magicPath }
        # this removes the thumb
        name: { ne: "thumb" }
      }
      sort: { fields: name }
    ) {
      nodes {
        name
        id
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }

    # project info
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
    # get whole list to figure out whats next/prev
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
