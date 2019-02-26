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
<<<<<<< HEAD
            }
=======
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
>>>>>>> 8ce53a47a7a674a3a5ddb5fcdf537565c41feebb
        ]
    }
}