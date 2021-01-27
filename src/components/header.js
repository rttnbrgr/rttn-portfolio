/** @jsx jsx */
import React, { useState } from "react"
import { jsx, Styled, Flex, Container, Box, Text } from "theme-ui"
import { Link } from "gatsby"
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
    }}
  >
    <Container sx={{ position: "relative" }}>
      <Flex
        // width=['100vw']
        bg="background"
        // bg="rgba(255,255,255, 0.5)"
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
          // top: 0,
          top: 0,
          right: 0,
          color: "text",
          textAlign: "right",
          transition: "transform .3s ease",
          transform: isMenuOpen ? `translateX(0%)` : `translateX(100%)`,
        }}
      >
        <Styled.h1 onClick={handleToggle}>Close</Styled.h1>
        <div>
          {primaryNavigation.map((x, i) => (
            <Styled.h1 sx={{ lineHeight: 1.5 }} key={i}>
              {x.title}
            </Styled.h1>
          ))}
          {/* 
      <hr
        sx={{
          backgroundColor: "text",
          height: "4px",
          marginBottom: "8px",
          marginTop: "8px",
          // margin: 0,
          width: "2rem",
          display: "inline-flex",
        }}
      />
       */}
          {socialNavigation.map((x, i) => (
            <Text variant="bigLinks" key={i}>
              {x.title}
            </Text>
          ))}
        </div>
      </Flex>
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
            <Link
              to="/"
              style={{
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
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
