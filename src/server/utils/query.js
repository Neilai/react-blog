/**
 * @author {benyuwan@gmail.com}
 * @file 初始化数据库并用Promise封装数据库操作
 */

import mysql from 'mysql'
import fs from 'fs'
import path from 'path'
import {db, dbName} from '../config/'

let pool
const sqlSource = fs.readFileSync(path.resolve(__dirname, '..', './sql/blogDb.sql'), 'utf-8')
const init = mysql.createConnection(db)

init.connect()
init.query('CREATE DATABASE BlogDb', err => {
    Object.assign(db, dbName)
    pool = mysql.createPool(db)
    if (err) {
        console.log('✅  BlogDb Database created already.')
    }
    else {
        console.log('✅  Create Blog Database')
        query(sqlSource).then(res => console.log('✅  Import sql file'))
    }
})
init.end()

export default function query(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            }
            else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    }
                    else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}
