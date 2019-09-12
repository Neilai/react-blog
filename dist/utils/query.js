"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = query;

var _mysql = _interopRequireDefault(require("mysql"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _config = require("../config/");

/**
 * @author {benyuwan@gmail.com}
 * @file 初始化数据库并用Promise封装数据库操作
 */
var pool;

var sqlSource = _fs.default.readFileSync(_path.default.resolve(__dirname, '..', './sql/blogDb.sql'), 'utf-8');

var init = _mysql.default.createConnection(_config.db);

init.connect();
init.query('CREATE DATABASE BlogDb', function (err) {
  Object.assign(_config.db, _config.dbName);
  pool = _mysql.default.createPool(_config.db);

  if (err) {
    console.log('✅  BlogDb Database created already.');
  } else {
    console.log('✅  Create Blog Database');
    query(sqlSource).then(function (res) {
      return console.log('✅  Import sql file');
    });
  }
});
init.end();

function query(sql, values) {
  return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, function (err, rows) {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }

          connection.release();
        });
      }
    });
  });
}