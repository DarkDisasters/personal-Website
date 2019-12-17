### personal website

#### IDE

- database: MongoDB
- framework: Tornado
- interface: JS(Vue.js), HTML, CSS
- server: python
- packing tools: Webpack

#### Webpack

- Official Document: https://www.webpackjs.com/guides/
- step:
``` 
    1. cd XXX(own project's path)
    2. npm init -y  // 初始化npm
    3. npm install webpack webpack-cli --save-dev   //本地安装webpack和webpack-cli(用于在命令行运行webpack)，此操作是在项目中安装，不是全局
    4. create webpack.config.js     //直接运行的话是使用 命令:  npx webpack --config webpack.config.js，不过建议使用html-webpack-plugin来实时更新
    5. manage resource  // user loader
    6. manage ouput     //install html-webpack-plugin, 并在webpack.config.js里配置
    7. source map & webpack-dev-server
    8. hot module replacement
    9. babel
    10. visualize situation of bundle   //cnpm i --save-dev webpack-bundle-analyzer
```