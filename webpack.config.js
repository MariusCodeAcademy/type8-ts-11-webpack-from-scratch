const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
// numatytisis konfiguracijos objektas
module.exports = {
  mode: 'development',
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        // weback skaito masyva nuo galo
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
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

  plugins: [new MiniCssExtractPlugin()],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};
