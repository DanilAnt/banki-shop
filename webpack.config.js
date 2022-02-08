const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },   
            {

                test: /\.(scss|css)$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader'],
            },
            // {

            //     test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            //     type: 'asset/inline',

            // }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

// var path = require('path')
// const VueLoaderPlugin = require('vue-loader/lib/plugin'); // плагин для загрузки кода Vue
 
// module.exports = {
//  entry: './src/main.js',
//  output: {
//    path: path.resolve(__dirname, './dist'),
//    publicPath: '/dist/',
//    filename: 'build.js'
//  },
//  module: {
//    rules: [
//      {
//        test: /\.vue$/,
//        loader: 'vue-loader'
//      }, {
//       test: /\.css$/,
//       use: [
//         'vue-style-loader',
//         'css-loader'
//       ]
//     }
//    ]
//  },
//  plugins: [
//     new VueLoaderPlugin()
//    ]
// }