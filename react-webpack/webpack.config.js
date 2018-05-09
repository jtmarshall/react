var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/src');

// var config = {
//   entry: APP_DIR + '/index.js',
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   }
// };

var config = {
    entry: path.resolve(__dirname, 'src/src/index.js'),
    output: {
        path: path.resolve(__dirname, 'src/client/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    ["latest"],
                    'react',
                ],
                plugins: [
                    "babel-plugin-transform-class-properties",
                    "transform-object-rest-spread"
                  ]
                }
              }
            ],
          },
          { test: /\.css$/, loader: "style-loader" },
          { test: /\.css$/, loader: "css-loader" }
        ]
    },

};

module.exports = config;