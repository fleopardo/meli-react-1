module.exports = {
    // JavaScript entry point
    entry: './App.js',
    // JavaScrip bundle file
    output: {
      path: './bundle',
      filename: 'index.js'
    },
    // Setup server
    devServer: {
      inline: true,
      port: 3000
    },
    module: {
      // JS, JSX and SASS loaders
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
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