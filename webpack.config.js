var path = require('path');
// const webpack = require('webpack');
// const prod = process.argv.indexOf('-p') !== -1;

module.exports = {
  entry: "./frontend/indie_fomo.jsx",
  output: {
      path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
      filename: "bundle.js"
  },
  module: {
   loaders: [
     {
       test: [/\.jsx?$/],
       exclude: /(node_modules)/,
       loader: 'babel-loader',
       query: {
         presets: ['es2015', 'react']
       }
     }
   ]
 },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: JSON.stringify('production')
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin()
  // ],
};
