"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _glob = _interopRequireDefault(require("glob"));

/**
 * @author {benyuwan@gmail.com}
 * @file 遍历加载路由文件
 */
function _default(dirname) {
  return new Promise(function (resolve, reject) {
    var routers = [];
    (0, _glob.default)("".concat(dirname, "/*"), {
      ignore: '**/index.js'
    }, function (err, files) {
      if (err) {
        reject(err);
      }

      files.forEach(function (file) {
        var router = require(file);

        routers.push(router);
      });
      resolve(routers);
    });
  });
}