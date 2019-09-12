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

var _introductions = _interopRequireDefault(require("../models/introductions"));

/**
 * @author {benyuwan@gmail.com}
 * @file 关于文章介绍信息的controller
 */
var IntroControllers =
/*#__PURE__*/
function () {
  function IntroControllers() {
    (0, _classCallCheck2.default)(this, IntroControllers);
  }

  (0, _createClass2.default)(IntroControllers, [{
    key: "getIntroductions",
    value: function () {
      var _getIntroductions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ctx) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _introductions.default.getIntroductions();

              case 2:
                ctx.body = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getIntroductions(_x) {
        return _getIntroductions.apply(this, arguments);
      }

      return getIntroductions;
    }()
  }]);
  return IntroControllers;
}();

var _default = new IntroControllers();

exports.default = _default;