// 如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。基本使用方法是 npx webpack --config webpack.config.js
// 我们在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。这对于需要拆分成多个文件的复杂配置是非常有用。
// 因为在package.json中加入了npm脚本, 可以使用npm run build来代替npx命令
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 通常，在每次构建前清理 /dist 文件夹，是比较推荐的做法，因此只会生成用到的文件。让我们完成这个需求。
// npm install clean-webpack-plugin --save-dev
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack')


module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
            // cnpm install --save-dev css-loader style-loader   以.css结尾的文件，$代表以这个结尾，\.的\是为了转义的作用, /配置.css文件的第三方loader规则
            { test: /\.css$/, use:[ 'style-loader', 'css-loader'] },         
            // cnpm install --save-dev less less-loader     需要先在npm中安装less服务
            { test: /\.less$/, use:[ 'style-loader', 'css-loader', 'less-loader']},
            //因为sass-loader依赖于node-sass，所以需要先安装node-sass
            // cnpm install --save-dev less less-loader
            { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader']}, 
            { test: /\.(png|svg|jpg|gif|jpeg)$/, use: [
                {
                    loader: 'url-loader',
                    options:{
                        name: "[name]-[hash:5].min.[ext]",  //修改文件名 
                        limit: 15360,   //size <= 15KB
                    }
                }
            ]},
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['url-loader']},
            { test: /\.(csv|tsv)$/, use:['csv-loader']},
            { test: /\.xml$/, use:['xml-loader']},  //json支持实际上是内置的，所以不用在此定义规则
            { test: /\.m?js$/, use:'babel-loader' ,exclude: /(node_module|bower_components)/}
        ]
    },
    devtool: 'eval-source-map',
    devServer: {
        open: true,
        port: 3001,
        contentBase: './dist',
        hot: true
    },
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),   //指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ]
}