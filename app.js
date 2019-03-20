console.log(process.env.NODE_ENV);

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const indexRouter = require('./routes/index');
const myProfileRouter = require('./routes/myProfile');

const app = express();
const webpackCfg = process.env.NODE_ENV === 'production' ? require('./webpack.prod.js') : require('./webpack.dev.js');
const webpackCfgCompiler = webpack(webpackCfg);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(webpackCfgCompiler, {
  publicPath: webpackCfg.output.publicPath
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public-dist')));

app.use('/', indexRouter);
app.use('/my/profile/', myProfileRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;