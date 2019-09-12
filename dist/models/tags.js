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
  var data = (0, _taggedTemplateLiteral2.default)(["UPDATE ARTICLE SET tags=", " WHERE id=", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Tags =
/*#__PURE__*/
function () {
  function Tags() {
    (0, _classCallCheck2.default)(this, Tags);
  }

  (0, _createClass2.default)(Tags, [{
    key: "updateTag",
    value: function () {
      var _updateTag = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(id, tags) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _query.default)((0, _escape.default)(_templateObject(), tags, id));

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function updateTag(_x, _x2) {
        return _updateTag.apply(this, arguments);
      }

      return updateTag;
    }()
  }]);
  return Tags;
}();

var _default = new Tags();

exports.default = _default;