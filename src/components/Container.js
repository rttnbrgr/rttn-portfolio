/** @jsx jsx */
import { jsx } from "theme-ui"
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

export default Container
