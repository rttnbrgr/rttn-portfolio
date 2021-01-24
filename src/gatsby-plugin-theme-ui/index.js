// via https://css-tricks.com/snippets/css/system-font-stack/
// make Helvetica the top choice tho
const defaultFontStack = `Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

export default {
  breakpoints: ["48em", "64em"], // 640 // 896 // 1024
  // defaults
  colors: {
    text: "#111",
    background: "#fff",
    debug: "pink",
    primary: "blue",
    secondary: "green",
  },
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
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
    full: "100%",
    vh: "100vh",
    vw: "100vw",
  },
  space: {
    test: "100px",
    screenFrameX: 24,
    screenFrameY: 24,
  },
  text: {
    heading: {
      color: "text",
      fontFamily: "heading",
      fontWeight: "heading",
      m: 0,
    },
    body: {
      color: "text",
      fontFamily: "body",
      m: 0,
      bg: "debug",
    },
    // start as h1 | linehgith + underline
    bigLinks: {
      variant: "text.heading",
      lineHeight: 1.5,
      fontSize: [32, 48],
      color: "red",
      "&:hover": {
        textDecoration: "1px solid green",
        color: "pink",
      },
    },
  },
  layout: {
    container: {
      width: "vw",
      px: "screenFrameX",
      // bg: ["primary", "secondary", "debug"],
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "text.heading",
      // fontSize: 6,
      fontSize: [32, 48],
    },
    h2: {
      variant: "text.heading",
      fontSize: 24,
    },
    p: {
      variant: "text.body",
      fontSize: 16,
      m: 0,
    },
  },
}
