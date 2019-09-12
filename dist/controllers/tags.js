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

var _tags = _interopRequireDefault(require("../models/tags"));

/**
 * @author {benyuwan@gmail.com}
 * @file 关于标签的controller
 */
var TagsController =
/*#__PURE__*/
function () {
  function TagsController() {
    (0, _classCallCheck2.default)(this, TagsController);
  }

  (0, _createClass2.default)(TagsController, [{
    key: "updateTag",
    value: function () {
      var _updateTag = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ctx) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _tags.default.updateTag(ctx.params.id, ctx.request.body.tags);

              case 2:
                ctx.body = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function updateTag(_x) {
        return _updateTag.apply(this, arguments);
      }

      return updateTag;
    }()
  }]);
  return TagsController;
}();

var _default = new TagsController();

exports.default = _default;