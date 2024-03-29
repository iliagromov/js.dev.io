/* global require __dirname module */
let path = require('path');

let conf = {
    entry: './scripts.js',
    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'main.js',
        publicPath: 'js/'
    },
    devServer: {
        overlay: true,
        // proxy: {
        //     '/test_main/**': {
        //         //target: 'http://js.dev.io/',
        //         // target: "http://faceprog.ru/",
        //         target: "http://makefriendsback.promo-miner.art/",
        //         secure: false,
        //         changeOrigin: true
        //     }
        // }
        proxy: {
            '/js-frontend-api/**': {
                //target: 'http://js.dev.io/',
                // target: "http://faceprog.ru/",
                target: "http://faceprog.ru",
                secure: false,
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: '/node_modules/'
            }
        ]
    }
};

module.exports = (env, options) => {
    conf.devtool = options.mode === "production" ? 
                    false :
                    "cheap-module-eval-source-map";

    return conf;
};