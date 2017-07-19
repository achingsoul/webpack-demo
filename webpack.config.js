var path = require('path');

module.exports = {
  // 入口 main.js
  entry: './src/index.js',
  // 输出
  output: {
    filename: 'bundle.js', // 输出所在的文件名
    path: path.resolve(__dirname, 'dist') // 输出所在的目录
  },
  module: {
    loaders:[
      {
        test: /\.scss$/, // 正则：什么是CSS
        loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'sass-loader'
        ]
        // style-loader把JS字符串放到html的head里 
        // css-loader读取css文件，把css文件读到JS里
      },
      {
        test: /\.(jpg|png)$/,
        //loader: 'url-loader?limit=8192'
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader'
        ]
      }
    ]
  }
};