var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.join(__dirname, "src"),
    entry: {
        client: './index'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist"),
        library: 'reactcards',
        libraryTarget: 'umd'
    },

    externals: {
        "react": "commonjs react",
        "react-dom": "commonjs react-dom",
        "react-addons-test-utils": "commonjs react-addons-test-utils"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel?{presets:["es2015", "react", "stage-2"], plugins:["react-hot-loader/babel"]}']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {   test: /\.(gif|jpg|jpeg|png)(\?]?.*)?$/,
                loader: 'url-loader?limit=1024'
            },
            {   test: /\.json$/,
                loader: 'json-loader', exclude: /node_modules/
            }
        ]
    },
};
