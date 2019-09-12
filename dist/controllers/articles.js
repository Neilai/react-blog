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

var _articles = _interopRequireDefault(require("../models/articles"));

/**
 * @author {benyuwan@gmail.com}
 * @file 关于文章的controller
 */
var ArticleControllers =
/*#__PURE__*/
function () {
  function ArticleControllers() {
    (0, _classCallCheck2.default)(this, ArticleControllers);
  }

  (0, _createClass2.default)(ArticleControllers, [{
    key: "addArticle",
    value: function () {
      var _addArticle = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ctx) {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _articles.default.addArticle();

              case 2:
                res = _context.sent;
                ctx.body = res;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addArticle(_x) {
        return _addArticle.apply(this, arguments);
      }

      return addArticle;
    }()
  }, {
    key: "getArticleList",
    value: function () {
      var _getArticleList = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(ctx) {
        var _ctx$query, _ctx$query$isPublishe, isPublished, _ctx$query$offset, offset, _ctx$query$limit, limit, res, promises, results;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ctx$query = ctx.query, _ctx$query$isPublishe = _ctx$query.isPublished, isPublished = _ctx$query$isPublishe === void 0 ? 0 : _ctx$query$isPublishe, _ctx$query$offset = _ctx$query.offset, offset = _ctx$query$offset === void 0 ? 0 : _ctx$query$offset, _ctx$query$limit = _ctx$query.limit, limit = _ctx$query$limit === void 0 ? 0 : _ctx$query$limit;

                if (!isPublished) {
                  _context2.next = 15;
                  break;
                }

                res = {
                  maxPage: '',
                  articles: ''
                };
                promises = [];
                promises.push(_articles.default.getPagination());
                promises.push(_articles.default.getLimitArticles(offset, limit));
                _context2.next = 8;
                return Promise.all(promises);

              case 8:
                results = _context2.sent;
                console.log(results);
                res.maxPage = Math.ceil(results[0][0]['COUNT(*)'] / limit);
                res.articles = results[1];
                ctx.body = res;
                _context2.next = 18;
                break;

              case 15:
                _context2.next = 17;
                return _articles.default.getAllArticles();

              case 17:
                ctx.body = _context2.sent;

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getArticleList(_x2) {
        return _getArticleList.apply(this, arguments);
      }

      return getArticleList;
    }()
  }, {
    key: "getOneArticle",
    value: function () {
      var _getOneArticle = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(ctx) {
        var res;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _articles.default.getOneArticle(ctx.params.id);

              case 2:
                res = _context3.sent;

                if (res.length === 0) {
                  ctx.throw(404, '没有找到到该文章！');
                }

                ctx.body = res;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getOneArticle(_x3) {
        return _getOneArticle.apply(this, arguments);
      }

      return getOneArticle;
    }()
  }, {
    key: "updateArticle",
    value: function () {
      var _updateArticle = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(ctx) {
        var id, _ctx$request$body, title, tags, content;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = ctx.params.id;
                _ctx$request$body = ctx.request.body, title = _ctx$request$body.title, tags = _ctx$request$body.tags, content = _ctx$request$body.content;
                _context4.next = 4;
                return _articles.default.updateArticle(id, {
                  title: title,
                  tags: tags,
                  content: content
                });

              case 4:
                ctx.body = _context4.sent;

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updateArticle(_x4) {
        return _updateArticle.apply(this, arguments);
      }

      return updateArticle;
    }()
  }, {
    key: "publishArticle",
    value: function () {
      var _publishArticle = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(ctx) {
        var id, _ctx$request$body2, title, tags, content;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = ctx.params.id;
                _ctx$request$body2 = ctx.request.body, title = _ctx$request$body2.title, tags = _ctx$request$body2.tags, content = _ctx$request$body2.content;
                _context5.next = 4;
                return _articles.default.publishArticle(id, {
                  title: title,
                  tags: tags,
                  content: content
                });

              case 4:
                ctx.body = _context5.sent;

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function publishArticle(_x5) {
        return _publishArticle.apply(this, arguments);
      }

      return publishArticle;
    }()
  }, {
    key: "deleteArticle",
    value: function () {
      var _deleteArticle = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(ctx) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _articles.default.deleteArticle(ctx.params.id);

              case 2:
                ctx.body = _context6.sent;

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function deleteArticle(_x6) {
        return _deleteArticle.apply(this, arguments);
      }

      return deleteArticle;
    }()
  }]);
  return ArticleControllers;
}();

var _default = new ArticleControllers();

exports.default = _default;