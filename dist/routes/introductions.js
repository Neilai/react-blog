"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _config = require("../config");

var _introductions = _interopRequireDefault(require("../controllers/introductions"));

/**
 * @author {benyuwan@gmail.com}
 * @file 操作文章介绍信息的api
 */
var api = 'introductions';
var router = new _koaRouter.default();
router.prefix("/".concat(_config.baseApi, "/").concat(api));
router.get('/', _introductions.default.getIntroductions);
module.exports = router;