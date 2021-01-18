/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui"

const Footer = () => {
  return (
    <Flex
      as="footer"
      sx={{
        mt: "24px",
        mb: "48px",
        justifyContent: "space-between",
        alignItems: "flex-end",
        a: {
          color: "inherit",
        },
      }}
    >
      <Styled.h2>RTTNBRGR</Styled.h2>
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
