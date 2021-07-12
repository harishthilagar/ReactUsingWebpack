const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"./public"),
        filename:"main.js"
    },
    devtool:'source-map',
    devServer:{
        port:5200,
        open:true,
        contentBase:path.resolve(__dirname,'./public')
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:['babel-loader']
            }
        ]
    },
    // plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })]
}