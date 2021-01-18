/** @jsx jsx */
import { jsx, Styled, Flex, Container } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      bg: "background",
      color: "text",
      py: 24,
    }}
  >
    <Container>
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
        <Styled.h1>Socials</Styled.h1>
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
