module.exports = {
    entry: "./src/index.jsx",
    mode: "development",
    output: {
        filename: "./main.js"
        },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        // directory: __dirname,
        compress: true,
        port: 9000,
        liveReload: true,
        historyApiFallback: true,
        // watchContentBase: true,
        // progress: true
        },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.m?(jsx|css)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
};