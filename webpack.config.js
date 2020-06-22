const path=require('path');
const HmlWebpackPlugin=require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
entry:['babel-polyfill','./src/js/index.js'],
output:
{
    path:path.resolve(__dirname,'dist/js'),
    filename:'js/bundle.js'
},
devServer:
{
    contentBase:'./dist'
},
plugins:[
    new HtmlWebpackPlugin(
        {
            filename:'index.html',
            template:'./src/index.html'
        }
    )
],
module:
{
    rules:[
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader'
            }
        }
    ]
}
};
