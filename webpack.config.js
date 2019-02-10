var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: './react-nanobar.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'react-nanobar.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}