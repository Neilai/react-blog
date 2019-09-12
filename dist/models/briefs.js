"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _query = _interopRequireDefault(require("../utils/query"));

var _escape = _interopRequireDefault(require("../utils/escape"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["UPDATE ABOUT SET content=", " WHERE id=", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Briefs =
/*#__PURE__*/
function () {
  function Briefs() {
    (0, _classCallCheck2.default)(this, Briefs);
  }

  (0, _createClass2.default)(Briefs, [{
    key: "getBrief",
    value: function () {
      var _getBrief = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _query.default)("SELECT * FROM ABOUT");

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getBrief() {
        return _getBrief.apply(this, arguments);
      }

      return getBrief;
    }()
  }, {
    key: "updateBrief",
    value: function () {
      var _updateBrief = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(id, content) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _query.default)((0, _escape.default)(_templateObject(), content, id));

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updateBrief(_x, _x2) {
        return _updateBrief.apply(this, arguments);
      }

      return updateBrief;
    }()
  }]);
  return Briefs;
}();

var _default = new Briefs();

exports.default = _default;