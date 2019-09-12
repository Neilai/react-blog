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

var _query = _interopRequireDefault(require("../utils/query"));

/**
 * @author {benyuwan@gmail.com}
 * @file introductions的model
 */
var Introductions =
/*#__PURE__*/
function () {
  function Introductions() {
    (0, _classCallCheck2.default)(this, Introductions);
  }

  (0, _createClass2.default)(Introductions, [{
    key: "getIntroductions",
    value: function () {
      var _getIntroductions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _query.default)("SELECT id,title,tags,publishTime FROM ARTICLE where isPublished=1 ORDER BY publishTime DESC");

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getIntroductions() {
        return _getIntroductions.apply(this, arguments);
      }

      return getIntroductions;
    }()
  }]);
  return Introductions;
}();

var _default = new Introductions();

exports.default = _default;