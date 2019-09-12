"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _config = require("../config");

var _tokens = _interopRequireDefault(require("../controllers/tokens"));

var _verify = _interopRequireDefault(require("../middlewares/verify"));

/**
 * @author {benyuwan@gmail.com}
 * @file 操作token的api
 */
var api = 'tokens';
var router = new _koaRouter.default();
router.prefix("/".concat(_config.baseApi, "/").concat(api));
router.post('/', _tokens.default.createToken);
router.get('/check', _verify.default, _tokens.default.checkToken);
module.exports = router;