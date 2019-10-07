const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')//导入 在内存中自动生成index页面的插件

//创建一个插件实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件
    filename: 'index.html'//生成的内存中首页的名曾称
})

//webpack默认只能打包处理.js后缀的文件，像.png .vue这中无法主动处理，所以需要配置第三方loader
//向外暴露一个打包的配置对象   webpack是基于node构建的，支持所有node api和语法
module.exports = {
    mode:'development',
    //webpack 4.x默认入口文件 src->index.js
    plugins: [
        htmlPlugin
    ],
    module: {//所有第三方的 模块配置规则
        rules: [//第三方匹配规则
          {//别忘记添加exclude排除项
            test: /\.m?js|jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
              }
            }
          },
          {//配置style-loader,css-loader
            test: /\.css$/i,
            use: [
              {
                loader:'style-loader',
                options: {
             
                }
              },
              {
                loader:'css-loader',
                options: {
                  
                }
              }
            ]
          },
          {//配置less-loader,开启模块化
            test: /\.less$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  }
                }
              },
              {
                loader: 'less-loader'
              },
            ],
          }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'], //表示这几个文件的后缀名可省略，与顺序有关
      alias : {
        '@' : path.join(__dirname, './src')
      }
    }
}