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
  layout: {
    container: {
      width: "vw",
      minHeight: 100,
      px: 24,
      bg: ["primary", "secondary", "debug"],
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      bg: ["red", "orange", "yellow"],
    },
    h1: {
      variant: "text.heading",
      // fontSize: 6,
      fontSize: [32, 48],
      color: "text",
      m: 0,
    },
    h2: {
      variant: "text.heading",
      fontSize: 24,
      color: "hotpink",
      m: 0,
    },
  },
}
