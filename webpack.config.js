import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
    entry: './src/js/main.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
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
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'hammers.css',
            chunkFilename: '[id].css',
        })


    ]
}
