/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui"

const Footer = () => {
  return (
    <Flex
      as="footer"
      sx={{
        my: [48, 64, 96],
        // bg: ["red", "purple", "green", "pink"],
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: ["column", "row"],
        a: {
          color: "inherit",
        },
      }}
    >
      <Styled.h2 sx={{ mb: 8 }}>RTTNBRGR</Styled.h2>
      <Styled.p sx={{ fontWeight: "bold" }}>
        ©{new Date().getFullYear()} {` · `} Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` and `}
        <a href="https://theme-ui.com/">Theme UI</a>
      </Styled.p>
    </Flex>
  )
}

export default Footer
