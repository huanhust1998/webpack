const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        home: './src/home.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack with Dylan",
            filename: 'index.html'
        }),
        // new CleanWebpackPlugin()
    ],
    //devtool:'inline-source-map'
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}