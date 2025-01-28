const autoprefixer = require("autoprefixer");
const cssnanoPlugin = require("cssnano");
const pxtorem = require("postcss-pxtorem")({ propList: ["*"] });

module.exports = {
  plugins: [autoprefixer, cssnanoPlugin, pxtorem],
};
