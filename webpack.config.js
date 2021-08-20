const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Check Management',
    }),
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  // module: {
  //   rules: [
  //   //   {
  //   //     test: /\.css$/i,
  //   //     use: ['style-loader', 'css-loader', 'sass-loader'],
  //   //   },
  //   {
  //       test: /\.scss$/,
  //       use: [
  //         {
  //           loader: 'css-loader'  // <-- assets are identified here
  //         }, {
  //           loader: 'resolve-url-loader'  // <-- receives CSS and source-map from SASS compile
  //         }, {
  //           loader: 'sass-loader',
  //           options: {
  //             sourceMap: true,  // <-- IMPORTANT!
  //           }
  //         }
  //       ],
  //     },
  //     {
  //       test: /\.(png|svg|jpg|jpeg|gif)$/i,
  //       type: 'asset/resource',
  //     },
  //     {
  //       test: /\.(csv|tsv)$/i,
  //       use: ['csv-loader'],
  //     },
  //     {
  //       test: /\.xml$/i,
  //       use: ['xml-loader'],
  //     },
        
  //   ],
  // },
};