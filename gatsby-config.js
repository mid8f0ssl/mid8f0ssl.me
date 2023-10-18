/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Middle Infinity Fossil`,
    siteUrl: `https://mid8f0ssl.me`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
   {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/logo.svg"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: "author",
      path: "./src/data/author/",
      ignore: ["**/\.*"],
      fastHash: true,
    },
    __key: "author"
  },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "meta",
        path: "./src/data/meta/",
        ignore: ["**/\.*"],
        fastHash: true,
      },
      __key: "meta"
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "cv",
        path: "./src/data/cv/",
        ignore: ["**/\.*"],
        fastHash: true,
      },
      __key: "cv"
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "projects",
        path: "./src/data/projects/",
        ignore: ["**/\.*"],
        fastHash: true,
      },
      __key: "projects"
    }, {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `blog`,
      path: `${__dirname}/src/blog/`,
    },
    __key: 'blog'
  }, {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-GR1CFSRDD1"]
    }
  }]
};