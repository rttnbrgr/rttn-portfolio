/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

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

export { FlexRow }
