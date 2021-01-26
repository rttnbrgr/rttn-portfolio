/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          minHeight: "100vh",
          padding: `0 1.0875rem 1.45rem`,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexGrow: "1",
            // background: "red",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              lineHeight: "1.5",
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "block" }}>🤮</span>
            Coming
            <br />
            Soon
            <span style={{ display: "block" }}>🍔</span>
          </h1>
        </div>
        <h6 style={{ flex: "0 0 auto", fontSize: "1.5rem", marginBottom: "0" }}>
          RTTNBRBR
        </h6>
        {/* 
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
