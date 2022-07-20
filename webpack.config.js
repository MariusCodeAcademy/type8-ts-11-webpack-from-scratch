const path = require('path');
// numatytisis konfiguracijos objektas
module.exports = {
  mode: 'development',
  devtool: 'source-map',

  module: {
    rules: [
      {
        // taikomes i failus su .js prievardziu
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};
