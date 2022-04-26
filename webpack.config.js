const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundlee.js',
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
}