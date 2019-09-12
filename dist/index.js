"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("source-map-support/register");

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _koa = _interopRequireDefault(require("koa"));

var _koaLogger = _interopRequireDefault(require("koa-logger"));

var _koaHelmet = _interopRequireDefault(require("koa-helmet"));

var _koaCors = _interopRequireDefault(require("koa-cors"));

var _koaOnerror = _interopRequireDefault(require("koa-onerror"));

var _routes = _interopRequireDefault(require("./routes/"));

var _config = require("./config");

/**
 * @author {benyuwan@gmail.com}
 * @file server端的入口文件
 */
var app = new _koa.default();
(0, _koaOnerror.default)(app);
app.use((0, _koaCors.default)({
  maxAge: 7 * 24 * 60 * 60,
  credentials: true,
  methods: 'GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE',
  headers: 'Content-Type, Accept, Authorization'
})).use((0, _koaLogger.default)()).use((0, _koaBodyparser.default)()).use((0, _koaHelmet.default)());
(0, _routes.default)(app);
app.listen(_config.port, function () {
  return console.log("\u2705  The server is running at http://localhost:".concat(_config.port, "/"));
});