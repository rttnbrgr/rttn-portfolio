/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Container = ({ children, sx }) => (
  <div
    sx={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    {children}
  </div>
)

const Header = ({ siteTitle }) => (
  <header
    sx={{
      bg: "background",
      color: "text",
    }}
  >
    <Container>
      <Flex justifyContent="space-between">
        <Styled.h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Styled.h1>

        <Styled.h1 sx={{ color: "pink" }}>Socials</Styled.h1>
      </Flex>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
