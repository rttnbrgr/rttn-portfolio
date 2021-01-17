// via https://css-tricks.com/snippets/css/system-font-stack/
// make Helvetica the top choice tho
const defaultFontStack = `Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

export default {
  // defaults
  colors: {
    text: "#111",
    background: "#fff",
    debug: "pink",
    primary: "blue",
    secondary: "green",
  },
  // font
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fonts: {
    body: defaultFontStack,
    heading: defaultFontStack,
    monospace: "monospace",
  },
  fontWeight: {
    body: "400",
    heading: "700",
    bold: "700",
  },
  fontSizes: {
    big: "32px",
    md: "24px",
    sm: "16px",
  },
  sizes: {
    container: 1200,
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      fontSize: 5,
      color: "secondary",
    },
    h2: {
      variant: "text.heading",
      fontSize: 5,
      color: "hotpink",
    },
  },
}
