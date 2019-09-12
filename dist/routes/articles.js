"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _config = require("../config");

var _articles = _interopRequireDefault(require("../controllers/articles"));

var _verify = _interopRequireDefault(require("../middlewares/verify"));

var _check = _interopRequireDefault(require("../middlewares/check"));

/**
 * @author {benyuwan@gmail.com}
 * @file 操作文章的api
 */
var api = 'articles';
var router = new _koaRouter.default();
router.prefix("/".concat(_config.baseApi, "/").concat(api));
router.post('/', _verify.default, _articles.default.addArticle);
router.put('/update/:id', _verify.default, _check.default, _articles.default.updateArticle);
router.put('/publish/:id', _verify.default, _check.default, _articles.default.publishArticle);
router.get('/', _articles.default.getArticleList);
router.get('/:id', _articles.default.getOneArticle);
router.delete('/:id', _verify.default, _articles.default.deleteArticle);
module.exports = router;