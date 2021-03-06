const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'src/entries/home-app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(jpg|gif|png|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 1000000,
                        name: 'images/[name].[ext]'
                    }
                }
            }
        ]
    }
}