"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _config = require("../config");

var _briefs = _interopRequireDefault(require("../controllers/briefs"));

var _verify = _interopRequireDefault(require("../middlewares/verify"));

/**
 * @author {benyuwan@gmail.com}
 * @file 操作个人简介的api
 */
var api = 'briefs';
var router = new _koaRouter.default();
router.prefix("/".concat(_config.baseApi, "/").concat(api));
router.get('/', _briefs.default.getBrief);
router.put('/:id', _verify.default, _briefs.default.updateBrief);
module.exports = router;