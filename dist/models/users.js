"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _query = _interopRequireDefault(require("../utils/query"));

var _escape = _interopRequireDefault(require("../utils/escape"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["SELECT user,password FROM USER WHERE user=", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Users =
/*#__PURE__*/
function () {
  function Users() {
    (0, _classCallCheck2.default)(this, Users);
  }

  (0, _createClass2.default)(Users, [{
    key: "findUser",
    value: function () {
      var _findUser = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(username) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _query.default)((0, _escape.default)(_templateObject(), username));

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function findUser(_x) {
        return _findUser.apply(this, arguments);
      }

      return findUser;
    }()
  }]);
  return Users;
}();

var _default = new Users();

exports.default = _default;