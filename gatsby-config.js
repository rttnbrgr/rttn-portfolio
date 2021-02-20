module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `A collection of the work by me, RTTN BRGR`,
    author: `@rttnbrgr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/portfolio`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        // this is in the tutorial for adding mdx;
        // wasn't previously using nay of these with remakr
        gatsbyRemarkPlugins: [
          //    {
          //      resolve: `gatsby-remark-images`,
          //      options: {
          //        maxWidth: 590,
          //      },
          //    },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          //    `gatsby-remark-prismjs`,
          //    `gatsby-remark-copy-linked-files`,
          //    `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-theme-ui",
  ],
}
