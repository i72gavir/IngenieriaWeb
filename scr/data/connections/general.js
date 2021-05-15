const util = require('util');
const mysql = require('mysql');

/**
 * Logic comes from Michał Męciński in https://codeburst.io/node-js-mysql-and-async-await-6fb25b01b628
 * 
 */
exports.makeDb = function (  ) {
  config = {
    host: 'freedb.tech',
    port: '3306',
    user: 'freedbtech_iroloa',
    password: '1234',
    database: 'freedbtech_gymdiwb'
  };
  const connection = mysql.createConnection( config );
  return {
    query( sql, args ) {
      return util.promisify( connection.query )
        .call( connection, sql, args );
    },
    close() {
      return util.promisify( connection.end ).call( connection );
    }
  };
}

exports.doSimpleQuery = async function (query) {
  const db = exports.makeDb();
  let result;
  try {
    result = await db.query( query );
  } catch ( err ) {
    // handle the error
    console.log(`Error in ${err}`);
    result = "error";
  } finally {
    await db.close();
  }
  return result;
}