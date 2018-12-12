const withSASS = require("@zeit/next-sass");
module.exports = withSASS({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
});
