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
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack with Dylan",
            filename: 'index.html'
        }),
        // new CleanWebpackPlugin()
    ],
}