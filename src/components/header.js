/** @jsx jsx */
import React, { useState } from "react"
import { jsx, Styled, Flex, Container, Box, Text, Link, Button } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"

const primaryNavigation = [
  { title: "Home", href: "#" },
  { title: "Resume", href: "#" },
  { title: "Portfolio", href: "#" },
  { title: "Reviews", href: "#" },
  { title: "Projects", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Contact", href: "#" },
]

const socialNavigation = [
  { title: "Github", href: "https://github.com/rttnbrgr/" },
  { title: "Twitter", href: "https://twitter.com/rttnbrgr" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/rttnbrgr/" },
]

const Menu = ({ handleToggle, isMenuOpen }) => (
  // fixed overlay
  // solves the absolute + fixed problem
  <Box
    // bg="rgba(0,200,0,0.3)"
    sx={{
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
      pointerEvents: "none",
      zIndex: 1,
    }}
  >
    <Container sx={{ position: "relative" }}>
      <Flex
        bg="background"
        pr="screenFrameX"
        pl="5rem"
        py="screenFrameY"
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          height: ["100vh"],
          position: "absolute",
          pointerEvents: "all",
          top: 0,
          right: 0,
          color: "text",
          textAlign: "right",
          transition: "transform .3s ease",
          transform: isMenuOpen ? `translateX(0%)` : `translateX(100%)`,
        }}
      >
        <Button onClick={handleToggle}>Close</Button>

        <div>
          {primaryNavigation.map((x, i) => (
            <Link variant="menuLink" key={i}>
              {x.title}
            </Link>
          ))}

          <Styled.hr />

          {socialNavigation.map((x, i) => (
            <Link variant="menuLink" key={i}>
              {x.title}
            </Link>
          ))}
        </div>
      </Flex>
      {/* Overflow mat */}
      <Box
        // bg="debug"
        bg="background"
        sx={{
          position: "absolute",
          top: 0,
          left: "100%",
          width: "100vw",
          height: "100vh",
        }}
      />
    </Container>
  </Box>
)

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
          <Styled.h1 onClick={toggleMenu}>Menu</Styled.h1>
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
