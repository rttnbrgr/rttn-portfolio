/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

const Footer = () => {
  return (
    <footer
      sx={{
        mt: "24px",
        mb: "48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        fontFamily: "Helvetica",
        fontWeight: "bold",
        color: "text",
        a: {
          color: "inherit",
        },
      }}
    >
      <h2
        sx={{
          m: "0",
          lineHeight: "1",
          fontSize: "24px",
        }}
      >
        RTTNBRGR
      </h2>
      <div
        sx={{
          fontSize: "16px",
        }}
      >
        ©{new Date().getFullYear()} {` · `} Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` and `}
        <a href="https://theme-ui.com/">Theme UI</a>
      </div>
    </footer>
  )
}

export default Footer
