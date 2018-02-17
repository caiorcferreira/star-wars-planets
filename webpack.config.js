const path = require("path");
const webpack = require("webpack");
const publicDir = path.join(__dirname, "public");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = env => {
  const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin("styles.css");

  return {
    entry: ["babel-polyfill", "./src/app.jsx"],
    output: {
      path: path.join(publicDir, "dist"),
      filename: "bundle.js"
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: "css-loader",
                options: { sourceMap: true, minimize: true }
              },
              {
                loader: "sass-loader",
                options: { sourceMap: true }
              }
            ]
          })
        },
        {
          test: /\.(png|jpg)$/,
          loader: "url-loader"
        }
      ]
    },
    plugins: [CSSExtract],
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: publicDir,
      publicPath: "/dist/",
      historyApiFallback: true
    }
  };
};
