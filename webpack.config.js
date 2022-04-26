const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:{
        main:[
            './src/index.js',
            './src/test.js',
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    mode: 'development',
    devServer:{
        static: {
            directory: path.join(__dirname, 'public'),
          },
          compress: true,
          port: 9000,
          open:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack with Dylan",
            filename: 'index.html'
        }),
        // new CleanWebpackPlugin()
    ],
    //devtool:'inline-source-map'
}