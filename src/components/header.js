/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
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

const FlexRow = ({ children }) => (
  <div
    sx={{
      display: "flex",
      justifyContent: "space-between",
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
      <FlexRow>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>

        <h1 sx={{ fontSize: 5 }}>Socials</h1>
        <Styled.h1>Socials</Styled.h1>
        <Styled.h2>Socials</Styled.h2>
      </FlexRow>
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
