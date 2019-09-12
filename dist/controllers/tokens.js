"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _users = _interopRequireDefault(require("../models/users"));

var _config = require("../config");

/**
 * @author {benyuwan@gmail.com}
 * @file 关于token的controller
 */
var TokenControllers =
/*#__PURE__*/
function () {
  function TokenControllers() {
    (0, _classCallCheck2.default)(this, TokenControllers);
  }

  (0, _createClass2.default)(TokenControllers, [{
    key: "createToken",
    value: function () {
      var _createToken = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ctx) {
        var _ctx$request$body, username, password, res, token;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;
                _context.next = 3;
                return _users.default.findUser(username);

              case 3:
                res = _context.sent[0];

                if (res) {
                  if (password === res.password) {
                    token = _jsonwebtoken.default.sign({
                      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60 // 一天

                    }, _config.secret);
                    ctx.body = token;
                  } else {
                    ctx.throw(401, '密码错误');
                  }
                } else {
                  ctx.throw(401, '用户名错误');
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createToken(_x) {
        return _createToken.apply(this, arguments);
      }

      return createToken;
    }()
  }, {
    key: "checkToken",
    value: function checkToken(ctx) {
      ctx.body = '验证通过';
    }
  }]);
  return TokenControllers;
}();

var _default = new TokenControllers();

exports.default = _default;