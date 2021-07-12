const path = require('path')

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
            },
            {
             test:/\.css$/,   
             use:['style-loader','css-loader']
            }
        ]
    }
}