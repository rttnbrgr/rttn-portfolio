/** @jsx jsx */
import { jsx } from "theme-ui"

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { Global } from "@emotion/core"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider, Container } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import Header from "./header"
import Footer from "./Footer"
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
    <ThemeProvider theme={theme}>
      <Global
        styles={theme => ({
          a: { color: "inherit" },
        })}
      />
      <Header siteTitle={data.site.siteMetadata?.title || `Missing Title`} />
      <Container as="main">
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
