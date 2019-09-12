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

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["DELETE FROM ARTICLE WHERE id=", ""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["UPDATE ARTICLE SET title=", ", tags=", ", content=", ", publishTime=NOW(), isPublished=1 WHERE id=", ""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["UPDATE ARTICLE SET title=", ", tags=", ", content=", " WHERE id=", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["SELECT * FROM ARTICLE WHERE isPublished=1 ORDER BY publishTime DESC LIMIT ", ",", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Articles =
/*#__PURE__*/
function () {
  function Articles() {
    (0, _classCallCheck2.default)(this, Articles);
  }

  (0, _createClass2.default)(Articles, [{
    key: "addArticle",
    value: function () {
      var _addArticle = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _query.default)("INSERT INTO ARTICLE SET title='\u65B0\u6587\u7AE0',tags='',createTime=NOW(),publishTime=NOW(),content=''");

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addArticle() {
        return _addArticle.apply(this, arguments);
      }

      return addArticle;
    }()
  }, {
    key: "getAllArticles",
    value: function () {
      var _getAllArticles = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _query.default)("SELECT * FROM ARTICLE ORDER BY createTime DESC");

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAllArticles() {
        return _getAllArticles.apply(this, arguments);
      }

      return getAllArticles;
    }()
  }, {
    key: "getLimitArticles",
    value: function () {
      var _getLimitArticles = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(offset, limit) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _query.default)((0, _escape.default)(_templateObject(), parseInt(offset, 10), parseInt(limit, 10)));

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getLimitArticles(_x, _x2) {
        return _getLimitArticles.apply(this, arguments);
      }

      return getLimitArticles;
    }()
  }, {
    key: "getPagination",
    value: function () {
      var _getPagination = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4() {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _query.default)("SELECT COUNT(*) FROM ARTICLE WHERE isPublished=1");

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getPagination() {
        return _getPagination.apply(this, arguments);
      }

      return getPagination;
    }()
  }, {
    key: "getOneArticle",
    value: function () {
      var _getOneArticle = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(id) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return (0, _query.default)("SELECT * FROM ARTICLE WHERE id=".concat(id));

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
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
      _regenerator.default.mark(function _callee6(id, _ref) {
        var title, tags, content, isPublished;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                title = _ref.title, tags = _ref.tags, content = _ref.content, isPublished = _ref.isPublished;
                _context6.next = 3;
                return (0, _query.default)((0, _escape.default)(_templateObject2(), title, tags, content, id));

              case 3:
                return _context6.abrupt("return", _context6.sent);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function updateArticle(_x4, _x5) {
        return _updateArticle.apply(this, arguments);
      }

      return updateArticle;
    }()
  }, {
    key: "publishArticle",
    value: function () {
      var _publishArticle = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(id, _ref2) {
        var title, tags, content;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                title = _ref2.title, tags = _ref2.tags, content = _ref2.content;
                _context7.next = 3;
                return (0, _query.default)((0, _escape.default)(_templateObject3(), title, tags, content, id));

              case 3:
                return _context7.abrupt("return", _context7.sent);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function publishArticle(_x6, _x7) {
        return _publishArticle.apply(this, arguments);
      }

      return publishArticle;
    }()
  }, {
    key: "deleteArticle",
    value: function () {
      var _deleteArticle = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(id) {
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _query.default)((0, _escape.default)(_templateObject4(), id));

              case 2:
                return _context8.abrupt("return", _context8.sent);

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function deleteArticle(_x8) {
        return _deleteArticle.apply(this, arguments);
      }

      return deleteArticle;
    }()
  }]);
  return Articles;
}();

var _default = new Articles();

exports.default = _default;