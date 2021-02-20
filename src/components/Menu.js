/** @jsx jsx */
import { jsx, Styled, Flex, Container, Box, Link, Button } from "theme-ui"

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

export default Menu
