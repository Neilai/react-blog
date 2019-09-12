"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _mysql = _interopRequireDefault(require("mysql"));

/**
 * @author {benyuwan@gmail.com}
 * @file 转义输入的字符
 */
function escape(template) {
  var result = '';

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    result += template[i];
    result += _mysql.default.escape(i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]);
  }

  result += template[template.length - 1];
  return result;
}