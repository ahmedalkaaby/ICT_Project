const withCSS = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withImages = require('next-images');

const e = withCSS({
  //cssModules: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.js$/,
      use: ['astroturf/loader'],
    });

    return config;
  },
});

const purge = withCSS(
  withPurgeCss({
    //cssModules: true,
    webpack: config => {
      config.module.rules.push({
        test: /\.js$/,
        use: ['astroturf/loader'],
      });

      return config;
    },
    purgeCssPaths: ['pages/**/*', 'components/**/*', 'styles/**/*'],
  })
);
module.exports = withImages();
module.exports = process.env.NODE_ENV === 'production' ? purge : e;
