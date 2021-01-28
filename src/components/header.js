/** @jsx jsx */
import React, { useState } from "react"
import { jsx, Styled, Flex, Container, Box, Text, Link, Button } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"
import Menu from "./Menu"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  function toggleMenu() {
    console.log("toggle")
    setMenuOpen(!isMenuOpen)
  }

  return (
    <header
      sx={{
        bg: "background",
        color: "text",
        py: "screenFrameY",
      }}
    >
      <Container sx={{ position: "relative" }}>
        <Flex sx={{ justifyContent: "space-between" }}>
          {/* Left */}
          <Styled.h1>
            <GatsbyLink
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </GatsbyLink>
          </Styled.h1>

          {/* Right */}
          <Button onClick={toggleMenu}>Menu</Button>
        </Flex>
        <Menu handleToggle={toggleMenu} isMenuOpen={isMenuOpen} />
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
