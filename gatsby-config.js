/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Middle Infinity Fossil`,
    siteUrl: `https://mid8f0ssl.me`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `middle-infinity-fossil`,
        short_name: `mid8f0ssl`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/logo.svg`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'author',
        path: `${__dirname}/src/data/author/`,
        ignore: ['**/.*'],
        fastHash: true,
      },
      __key: 'author',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'meta',
        path: `${__dirname}/src/data/meta/`,
        ignore: ['**/.*'],
        fastHash: true,
      },
      __key: 'meta',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'techbio',
        path: `${__dirname}/src/data/techbio/`,
        ignore: ['**/.*'],
        fastHash: true,
      },
      __key: 'techbio',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/src/data/projects/`,
        ignore: ['**/.*'],
        fastHash: true,
      },
      __key: 'projects',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
      __key: 'blog',
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['G-GR1CFSRDD1'],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `public sans`
        ],
        display: 'swap'
      }
    }
  ],
}
