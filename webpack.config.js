import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
    entry: {
        hammers: './src/js/main.js',
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',  // Outputs images to 'dist/images' folder
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Извлекаем CSS в отдельный файл
                    'css-loader', // Для обработки CSS
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/hammers.html',
            filename: 'hammers.html',
            inject: 'body', // Вставляем JS и CSS в тело
        }),
        // Генерируем HTML для tictactoe
        new HtmlWebpackPlugin({
            template: './src/html/tictactoe.html',
            filename: 'ticTacToe.html',
            inject: 'body',
        }),
        // Извлекаем CSS в отдельные файлы
        new MiniCssExtractPlugin({
            filename: '[name].css', // Названия CSS файлов будут совпадать с именами JS
        }),
    ],

    devServer: {
        static: {
            directory: path.resolve('dist'),
        },
        open: true,
        port: 8081, // Порт сервера
        hot: true,
    },
}
