const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = [
  // Javascript
  {
    entry: path.resolve(__dirname, './app/js/index.js'),
    output: {
      path: path.resolve(__dirname, './app/dist'),
      filename: 'bundle.js',
    },  
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ],
    devtool: 'source-map',
  }
]