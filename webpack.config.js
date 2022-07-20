const path = require('path');
// numatytisis konfiguracijos objektas
module.exports = {
  mode: 'development',
  devtool: false,

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
};
