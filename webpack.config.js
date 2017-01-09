/**
 * Created by Administrator on 2017/1/3.
 */
var path=require('path');
var webpack=require('webpack');

module.exports={
    devtool:'cheap-module-eval-source-map',
    entry:[
        'webpack-hot-middleware/client',
        './src/App.js'
    ],
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'http://localhost:3000/static/'
    },
    module:{
        loaders:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loaders:['babel'],
            include:__dirname
        }]
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __SERVER__: false
        })
    ]
};