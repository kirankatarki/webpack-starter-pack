const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
    //   {
    //     test: /\.css$/i,
    //     use: ['style-loader', 'css-loader', 'sass-loader'],
    //   },
    {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader'  // <-- assets are identified here
          }, {
            loader: 'resolve-url-loader'  // <-- receives CSS and source-map from SASS compile
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,  // <-- IMPORTANT!
            }
          }
        ],
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
        
    ],
  },
};