module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.jsx",
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
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            {
              test: /(\.scss|\.sass)$/,
              use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                  'sass-loader',
              ]
            },
        ]
    }
}