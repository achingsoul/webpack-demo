var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  // 入口 main.js
  entry: './src/index.js',
  // 输出
  output: {
    filename: 'bundle-[hash].js', // 输出所在的文件名
    path: path.resolve(__dirname, 'dist') // 输出所在的目录
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: 'index.html'
    }), // 这个插件是在发现没有html时自动生成一个
    new OpenBrowserPlugin({
      url: 'http://localhost:9000'
    })
  ], // 在运行完编译脚本后打开浏览器
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