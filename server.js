/**
 * Created by Administrator on 2017/1/3.
 */
var webpack=require('webpack');
var morgan = require('morgan')
var favicon = require('serve-favicon');
var webpackDevMiddleware=require('webpack-dev-middleware');
var webpackHotMiddleware=require('webpack-hot-middleware');
var config=require('./webpack.config');
var app=new (require('express'));
var port=3001;
var compiler=webpack((config));
app.use(webpackDevMiddleware(compiler,{noInfo:true,publicPath:config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
app.use(morgan('combined'));
app.use(favicon(__dirname + '/static/dist/link.ico'));


var qs = require('qs');
import {fetchCounter} from './common/api/counter'
import { match, RouterContext } from 'react-router';
import {Provider} from 'react-redux'
import React from 'react';
import {renderToString} from 'react-dom/server';
import configureStore from './src/store/configureSote'
import getRoutes from './src/Routes';
const routes = getRoutes();
function handlerender(req, res) {
    fetchCounter(apiResule=> {
        const params = qs.parse(req.query);
        const counter = parseInt(params.counter, 10) || apiResule || 0;
        var initailStrate = {};

        const store = configureStore(initailStrate);
        match({ routes, location: req.url }, (err, redirect, renderProps) => {
            if (redirect) {
                res.redirect(redirect.pathname + redirect.search);
            } else if (err) {
                console.error('ROUTER ERROR:', err.stack);
                res.status(500);
            } else if (renderProps) {
                res.status(200);
                const html = renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps} />
                    </Provider>
                );
                const finalState = store.getState();
                res.send(renderFullPage(html, finalState));
            } else {
                res.status(404).send('Not found');
            }
        });
    })
}
function renderFullPage(html, initialState) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>app</title>
        </head>
        <body>
        <div id="app">${html}</div>
        <script>
            window.__INITIAL_STATE__=${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
        </body>
        </html>
    `
}
app.use(handlerender);

app.listen(port,function (error) {
    if (error){
        console.error(error);
    }else{
        console.info("==>Listen on %s.Open up  Http://localhost:%s/ in your browser",port,port)
    }
});
