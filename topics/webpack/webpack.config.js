const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};
