const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  },

  module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
              test: /(\.scss|\.sass|\.css)$/,
              use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                  'sass-loader',
              ]
            },
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
}