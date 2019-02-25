var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: './react-sliding-nanobar.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'react-sliding-nanobar.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
        ]
    }
}