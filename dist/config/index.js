"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secret = exports.baseApi = exports.port = exports.dbName = exports.db = void 0;

/**
 * @author {benyuwan@gmail.com}
 * @file server端配置文件
 */
var db = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '19971008',
  multipleStatements: true
};
exports.db = db;
var dbName = {
  database: 'ashen_db'
};
exports.dbName = dbName;
var port = 3000;
exports.port = port;
var baseApi = 'api/v1';
exports.baseApi = baseApi;
var secret = 'Neil_blog';
exports.secret = secret;