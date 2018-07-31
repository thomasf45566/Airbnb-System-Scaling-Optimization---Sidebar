/*
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./public/src/"),
  output: {
    path: path.resolve(__dirname, "./public/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ["react", "env"]
        }
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          {
            loader:'css-loader',
            options:{
              modules:true,
              localIdentName: "[name]_[local]_[hash:base64]"

        }]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
*/



const path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "./client/src/"),
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ["react", "env"]
        }
      },
      { 
        test: /\.css$/, 
        // exclude: /node_modules/,
        // loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[local]'
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
