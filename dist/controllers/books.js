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

var _books = _interopRequireDefault(require("../models/books"));

/**
 * @author {benyuwan@gmail.com}
 * @file 关于阅读列表的controller
 */
var BookControllers =
/*#__PURE__*/
function () {
  function BookControllers() {
    (0, _classCallCheck2.default)(this, BookControllers);
  }

  (0, _createClass2.default)(BookControllers, [{
    key: "getBookList",
    value: function () {
      var _getBookList = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ctx) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _books.default.getAllBooks();

              case 2:
                ctx.body = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getBookList(_x) {
        return _getBookList.apply(this, arguments);
      }

      return getBookList;
    }()
  }, {
    key: "addBook",
    value: function () {
      var _addBook = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(ctx) {
        var book;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                book = ctx.request.body;
                _context2.next = 3;
                return _books.default.addBook(book);

              case 3:
                ctx.body = _context2.sent;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function addBook(_x2) {
        return _addBook.apply(this, arguments);
      }

      return addBook;
    }()
  }, {
    key: "editBook",
    value: function () {
      var _editBook = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(ctx) {
        var id, book;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = ctx.params.id;
                book = ctx.request.body;
                _context3.next = 4;
                return _books.default.updateBook(id, book);

              case 4:
                ctx.body = _context3.sent;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function editBook(_x3) {
        return _editBook.apply(this, arguments);
      }

      return editBook;
    }()
  }, {
    key: "deleteBook",
    value: function () {
      var _deleteBook = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(ctx) {
        var id;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = ctx.params.id;
                _context4.next = 3;
                return _books.default.deleteBook(id);

              case 3:
                ctx.body = _context4.sent;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteBook(_x4) {
        return _deleteBook.apply(this, arguments);
      }

      return deleteBook;
    }()
  }]);
  return BookControllers;
}();

var _default = new BookControllers();

exports.default = _default;