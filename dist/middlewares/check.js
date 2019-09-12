"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/**
 * @file 检查文章格式的中间件
 * @author {benyuwan@gmail.com}
 */
function _default(_x, _x2) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(ctx, next) {
    var _ctx$request$body, title, tags, content, isPublished, pattern;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$request$body = ctx.request.body, title = _ctx$request$body.title, tags = _ctx$request$body.tags, content = _ctx$request$body.content, isPublished = _ctx$request$body.isPublished;
            console.log(content, isPublished);

            if (!isPublished) {
              _context.next = 8;
              break;
            }

            if (tags === '' || title === '') {
              ctx.throw(400, '标题或者标签未设置！');
            } else {
              pattern = /<!-- more -->/i;

              if (!pattern.test(content)) {
                ctx.throw(400, '文章没有设置摘要分界！');
              }
            }

            _context.next = 6;
            return next();

          case 6:
            _context.next = 10;
            break;

          case 8:
            _context.next = 10;
            return next();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}