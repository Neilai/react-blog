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

var _briefs = _interopRequireDefault(require("../models/briefs"));

/**
 * @author {benyuwan@gmail.com}
 * @file 关于个人简介的controller
 */
var BriefControllers =
/*#__PURE__*/
function () {
  function BriefControllers() {
    (0, _classCallCheck2.default)(this, BriefControllers);
  }

  (0, _createClass2.default)(BriefControllers, [{
    key: "getBrief",
    value: function () {
      var _getBrief = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ctx) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _briefs.default.getBrief();

              case 2:
                ctx.body = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getBrief(_x) {
        return _getBrief.apply(this, arguments);
      }

      return getBrief;
    }()
  }, {
    key: "updateBrief",
    value: function () {
      var _updateBrief = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(ctx) {
        var id, content;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = ctx.params.id;
                content = ctx.request.body.content;
                _context2.next = 4;
                return _briefs.default.updateBrief(id, content);

              case 4:
                ctx.body = _context2.sent;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updateBrief(_x2) {
        return _updateBrief.apply(this, arguments);
      }

      return updateBrief;
    }()
  }]);
  return BriefControllers;
}();

var _default = new BriefControllers();

exports.default = _default;