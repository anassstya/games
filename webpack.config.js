import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
    entry: {
        hammers:'./src/js/main.js',
        tictactoe: './src/js/tictactoe.js'
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash][ext][query]',
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/html/hammers.html",
            filename: 'hammers.html'
        }),
        new HtmlWebpackPlugin({
            template: "./src/html/tictactoe.html",
            filename: 'ticTacToe.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'hammers.css',
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        new MiniCssExtractPlugin({
            filename: 'ticTacToe.css',
        })


    ]
}

