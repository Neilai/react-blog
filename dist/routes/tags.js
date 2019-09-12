"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _config = require("../config");

var _tags = _interopRequireDefault(require("../controllers/tags"));

var _verify = _interopRequireDefault(require("../middlewares/verify"));

/**
 * @author {benyuwan@gmail.com}
 * @file 操作标签的api
 */
var api = 'tags';
var router = new _koaRouter.default();
router.prefix("/".concat(_config.baseApi, "/").concat(api));
router.put('/:id', _verify.default, _tags.default.updateTag);
module.exports = router;