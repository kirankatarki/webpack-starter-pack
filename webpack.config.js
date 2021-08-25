const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // entry: './src/index.js',
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: true,
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/about.html',
      minify: true,
      chunks: ['index']
    }),
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    // {
    //     test: /\.scss$/,
    //     use: [
    //       {
    //         loader: 'css-loader'  // <-- assets are identified here
    //       }, {
    //         loader: 'resolve-url-loader'  // <-- receives CSS and source-map from SASS compile
    //       }, {
    //         loader: 'sass-loader',
    //         options: {
    //           sourceMap: true,  // <-- IMPORTANT!
    //         }
    //       }
    //     ],
    //   },
      {
        test: /\.(scss)$/,
        use: [{
          // inject CSS to page
          loader: 'style-loader'
        }, {
          // translates CSS into CommonJS modules
          loader: 'css-loader'
        }, {
          // Run postcss actions
          loader: 'postcss-loader',
          options: {
            // `postcssOptions` is needed for postcss 8.x;
            // if you use postcss 7.x skip the key
            postcssOptions: {
              // postcss plugins, can be exported to postcss.config.js
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        }, {
          // compiles Sass to CSS
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
        },
      },
      {
        test: /\.js$/,
        include: /node_modules/,
        parser: {
            amd: false
        }
      }
    ],
  },
};