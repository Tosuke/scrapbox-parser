module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: require('path').resolve(__dirname, 'umd'),
    filename: 'scrapbox-parser.js',
    library: 'ScrapboxParser',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: require('./babel.config.esm.json')
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  }
}
