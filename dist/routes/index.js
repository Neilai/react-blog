"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _routesLoader = _interopRequireDefault(require("../utils/routesLoader"));

/**
 * @author {benyuwan@gmail.com}
 * @file 路由根文件，遍历并处理每个路由文件
 */
function _default(app) {
  (0, _routesLoader.default)("".concat(__dirname)).then(function (routers) {
    routers.forEach(function (router) {
      app.use(router.routes()).use(router.allowedMethods({
        throw: true
      }));
    });
  });
}