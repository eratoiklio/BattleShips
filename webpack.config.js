const path = require('path');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'out.js'
  },
  module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['es2015']
         }
       }
     },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    },
      {
         test: /\.(woff|woff2)$/,
         loader: 'file-loader?name=fonts/[name].[ext]'
     },
    {
     test: /\.scss$/,
     use: [ 'style-loader', 'css-loader', 'sass-loader' ]
   },
    {
       test: /\.(png|jpe?g|gif|svg|ico)$/,
       use: 'file-loader?name=images/[name].[ext]'
     },
   ]
 }
};
