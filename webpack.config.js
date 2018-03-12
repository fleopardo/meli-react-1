const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './app/build');
const APP_DIR = path.resolve(__dirname, './app');

module.exports = {
    // JavaScript entry point
    entry: `${APP_DIR}/app.js`,
    // JavaScrip bundle file
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
    },
    // Setup server
    devServer: {
      inline: true,
      port: 3000
    },
    module: {
      // JS, JSX and SASS loaders
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          include: APP_DIR,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        }
      ]
    }
  };