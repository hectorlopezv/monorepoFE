const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const prodConfig = {
  mode: "production",
  output: {
    filename: `[name].[contenthash].js`,
    publicPath: "/auth/latest/",
  },
  plugins: [
    new moduleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};
module.exports = merge(commonConfig, prodConfig);
