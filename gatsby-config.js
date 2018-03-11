const autoprefixer = require('autoprefixer');

module.export = {
  siteMetadata: {
    title: 'Marc-Antoine Ruel',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ]
}
