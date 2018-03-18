const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Marc-Antoine Ruel',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Catamaran:600,800', 'Roboto Mono:400,400i'],
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'fr',
        useLangKeyLayout: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/projets`,
        name: 'projets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify',
  ],
};
