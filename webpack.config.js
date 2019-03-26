const path = require('path')

module.exports = [
  // Javascript
  {
    entry: path.resolve(__dirname, './app/js/index.js'),
    output: {
      path: path.resolve(__dirname, './app/dist'),
      filename: 'bundle.js',
    },
  }
]