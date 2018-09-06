module.exports = {
    mode : 'development',
    entry: './src/main/resources/static/js/index.js',

    output: {
        path: __dirname + '/src/main/resources/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/src/main/resources/public/'
    },

    module : {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
              loader: 'babel-loader',
              options: {
                    cacheDirectory: true
                  }
              }
          }
      ]
    }

};
