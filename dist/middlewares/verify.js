"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _thenifyAll = _interopRequireDefault(require("thenify-all"));

var _config = require("../config");

/**
 * @author {benyuwan@gmail.com}
 * @file 处理验证的中间件
 */
(0, _thenifyAll.default)(_jsonwebtoken.default, {}, ['verify']);

function _default(_x, _x2) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(ctx, next) {
    var auth, token;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            auth = ctx.get('Authorization');
            token = auth.split(' ')[1];
            _context.prev = 2;
            _context.next = 5;
            return _jsonwebtoken.default.verify(token, _config.secret);

          case 5:
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](2);
            ctx.throw(401, _context.t0);

          case 10:
            _context.next = 12;
            return next();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 7]]);
  }));
  return _ref.apply(this, arguments);
}